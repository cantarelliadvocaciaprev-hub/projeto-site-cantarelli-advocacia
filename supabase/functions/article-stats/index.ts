import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const expected = Deno.env.get("REVIEW_STATS_PASSWORD");
    if (!expected) {
      return new Response(
        JSON.stringify({ error: "Configuração ausente no servidor." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    let password = "";
    try {
      const body = await req.json();
      password = typeof body?.password === "string" ? body.password : "";
    } catch {
      password = "";
    }

    if (password !== expected) {
      return new Response(
        JSON.stringify({ error: "Senha incorreta." }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const [views, shares] = await Promise.all([
      supabase
        .from("article_view_events")
        .select("article_slug, article_title, device_type, created_at"),
      supabase
        .from("share_click_events")
        .select("article_slug, article_title, network, created_at"),
    ]);

    if (views.error) throw views.error;
    if (shares.error) throw shares.error;

    const now = Date.now();
    const within = (iso: string, days: number) =>
      now - new Date(iso).getTime() <= days * 24 * 60 * 60 * 1000;

    type Row = {
      slug: string;
      title: string | null;
      views: number;
      views7d: number;
      views30d: number;
      mobile: number;
      tablet: number;
      desktop: number;
      shares: number;
    };

    const map = new Map<string, Row>();
    const ensure = (slug: string, title: string | null): Row => {
      let row = map.get(slug);
      if (!row) {
        row = {
          slug,
          title,
          views: 0,
          views7d: 0,
          views30d: 0,
          mobile: 0,
          tablet: 0,
          desktop: 0,
          shares: 0,
        };
        map.set(slug, row);
      }
      if (!row.title && title) row.title = title;
      return row;
    };

    for (const v of views.data ?? []) {
      const row = ensure(v.article_slug, v.article_title ?? null);
      row.views += 1;
      if (within(v.created_at, 7)) row.views7d += 1;
      if (within(v.created_at, 30)) row.views30d += 1;
      if (v.device_type === "mobile") row.mobile += 1;
      else if (v.device_type === "tablet") row.tablet += 1;
      else if (v.device_type === "desktop") row.desktop += 1;
    }

    const sharesByNetwork: Record<string, number> = {};
    for (const s of shares.data ?? []) {
      const row = ensure(s.article_slug, s.article_title ?? null);
      row.shares += 1;
      sharesByNetwork[s.network] = (sharesByNetwork[s.network] ?? 0) + 1;
    }

    const articles = [...map.values()].sort((a, b) => b.views - a.views);
    const totals = articles.reduce(
      (acc, a) => ({
        views: acc.views + a.views,
        views7d: acc.views7d + a.views7d,
        views30d: acc.views30d + a.views30d,
        shares: acc.shares + a.shares,
      }),
      { views: 0, views7d: 0, views30d: 0, shares: 0 },
    );

    return new Response(JSON.stringify({ totals, articles, sharesByNetwork }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("article-stats internal error:", e);
    return new Response(
      JSON.stringify({ error: "Erro interno no servidor." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
