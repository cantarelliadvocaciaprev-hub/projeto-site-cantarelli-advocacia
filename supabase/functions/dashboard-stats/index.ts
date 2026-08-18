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

    const [views, shares, reviews] = await Promise.all([
      supabase
        .from("article_view_events")
        .select("article_slug, article_title, device_type, referrer, created_at"),
      supabase
        .from("share_click_events")
        .select("article_slug, article_title, network, device_type, created_at"),
      supabase.from("review_click_events").select("event_type, device_type, created_at"),
    ]);

    if (views.error) throw views.error;
    if (shares.error) throw shares.error;
    if (reviews.error) throw reviews.error;

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
      totals: { ...totals, shares7d, reviewsTotal, reviews7d },
      pages: allPages.slice(0, 50),
      sharesByNetwork,
      devices,
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
