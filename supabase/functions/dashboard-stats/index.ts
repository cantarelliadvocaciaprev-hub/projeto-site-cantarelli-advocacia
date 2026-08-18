import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const expected = Deno.env.get("REVIEW_STATS_PASSWORD");
    if (!expected) return json({ error: "Configuração ausente no servidor." }, 500);

    let password = "";
    try {
      const body = await req.json();
      password = typeof body?.password === "string" ? body.password : "";
    } catch {
      password = "";
    }
    if (password !== expected) return json({ error: "Senha incorreta." }, 401);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const [views, shares, reviews, pageViews] = await Promise.all([
      supabase
        .from("article_view_events")
        .select("article_slug, article_title, device_type, referrer, created_at"),
      supabase
        .from("share_click_events")
        .select("article_slug, article_title, network, device_type, created_at"),
      supabase.from("review_click_events").select("event_type, device_type, created_at"),
      supabase
        .from("page_view_events")
        .select("path, page_title, source, medium, campaign, device_type, created_at"),
    ]);

    if (views.error) throw views.error;
    if (shares.error) throw shares.error;
    if (reviews.error) throw reviews.error;
    if (pageViews.error) throw pageViews.error;

    const now = Date.now();
    const day = 24 * 60 * 60 * 1000;
    const within = (iso: string, days: number) => now - new Date(iso).getTime() <= days * day;

    type Page = {
      slug: string;
      title: string | null;
      views: number;
      views7d: number;
      views30d: number;
      shares: number;
    };

    const pages = new Map<string, Page>();
    const ensure = (slug: string, title: string | null) => {
      let row = pages.get(slug);
      if (!row) {
        row = { slug, title, views: 0, views7d: 0, views30d: 0, shares: 0 };
        pages.set(slug, row);
      }
      if (!row.title && title) row.title = title;
      return row;
    };

    const devices: Record<string, number> = { mobile: 0, tablet: 0, desktop: 0 };
    const referrers: Record<string, number> = {};
    const daily = new Map<string, { date: string; views: number; shares: number }>();
    const ensureDay = (iso: string) => {
      const date = new Date(iso).toISOString().slice(0, 10);
      let d = daily.get(date);
      if (!d) {
        d = { date, views: 0, shares: 0 };
        daily.set(date, d);
      }
      return d;
    };

    for (const v of views.data ?? []) {
      const row = ensure(v.article_slug, v.article_title ?? null);
      row.views += 1;
      if (within(v.created_at, 7)) row.views7d += 1;
      if (within(v.created_at, 30)) row.views30d += 1;
      if (v.device_type && v.device_type in devices) devices[v.device_type] += 1;

      let source = "Direto";
      if (v.referrer) {
        try {
          source = new URL(v.referrer).hostname.replace(/^www\./, "");
        } catch {
          source = "Outros";
        }
      }
      referrers[source] = (referrers[source] ?? 0) + 1;
      if (within(v.created_at, 30)) ensureDay(v.created_at).views += 1;
    }

    const sharesByNetwork: Record<string, number> = {};
    for (const s of shares.data ?? []) {
      const row = ensure(s.article_slug, s.article_title ?? null);
      row.shares += 1;
      sharesByNetwork[s.network] = (sharesByNetwork[s.network] ?? 0) + 1;
      if (within(s.created_at, 30)) ensureDay(s.created_at).shares += 1;
    }

    const reviewsTotal = (reviews.data ?? []).length;
    const reviews7d = (reviews.data ?? []).filter((r) => within(r.created_at, 7)).length;

    // Visitas de todas as páginas do site, com origem do tráfego
    const sources = new Map<string, { source: string; total: number; last7d: number }>();
    const campaigns: Record<string, number> = {};
    const paths = new Map<
      string,
      { path: string; title: string | null; visits: number; visits7d: number }
    >();
    let siteVisits = 0;
    let siteVisits7d = 0;

    for (const pv of pageViews.data ?? []) {
      siteVisits += 1;
      const recent = within(pv.created_at, 7);
      if (recent) siteVisits7d += 1;

      const key = pv.source || "Direto";
      const s = sources.get(key) ?? { source: key, total: 0, last7d: 0 };
      s.total += 1;
      if (recent) s.last7d += 1;
      sources.set(key, s);

      if (pv.campaign) campaigns[pv.campaign] = (campaigns[pv.campaign] ?? 0) + 1;

      const p = paths.get(pv.path) ?? {
        path: pv.path,
        title: pv.page_title ?? null,
        visits: 0,
        visits7d: 0,
      };
      if (!p.title && pv.page_title) p.title = pv.page_title;
      p.visits += 1;
      if (recent) p.visits7d += 1;
      paths.set(pv.path, p);

      if (pv.device_type && pv.device_type in devices) devices[pv.device_type] += 1;
    }

    const allPages = [...pages.values()].sort((a, b) => b.views - a.views);
    const totals = allPages.reduce(
      (acc, p) => ({
        views: acc.views + p.views,
        views7d: acc.views7d + p.views7d,
        views30d: acc.views30d + p.views30d,
        shares: acc.shares + p.shares,
      }),
      { views: 0, views7d: 0, views30d: 0, shares: 0 },
    );

    const shares7d = (shares.data ?? []).filter((s) => within(s.created_at, 7)).length;

    return json({
      totals: {
        ...totals,
        shares7d,
        reviewsTotal,
        reviews7d,
        siteVisits,
        siteVisits7d,
      },
      pages: allPages.slice(0, 50),
      sharesByNetwork,
      devices,
      sources: [...sources.values()].sort((a, b) => b.total - a.total),
      campaigns: Object.entries(campaigns)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([campaign, count]) => ({ campaign, count })),
      topPaths: [...paths.values()].sort((a, b) => b.visits - a.visits).slice(0, 30),
      referrers: Object.entries(referrers)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([source, count]) => ({ source, count })),
      daily: [...daily.values()].sort((a, b) => a.date.localeCompare(b.date)),
    });
  } catch (e) {
    console.error("dashboard-stats internal error:", e);
    return json({ error: "Erro interno no servidor." }, 500);
  }
});
