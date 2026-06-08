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

    const { data, error } = await supabase
      .from("review_click_events")
      .select("event_type, device_type, created_at");

    if (error) throw error;

    const devices = ["mobile", "tablet", "desktop"] as const;
    const empty = () => ({ mobile: 0, tablet: 0, desktop: 0, total: 0 });
    const clicks = empty();
    const returns = empty();

    for (const row of data ?? []) {
      const target = row.event_type === "return" ? returns : clicks;
      if (devices.includes(row.device_type)) {
        target[row.device_type as typeof devices[number]] += 1;
        target.total += 1;
      }
    }

    const rate = (a: number, b: number) => (b > 0 ? Math.round((a / b) * 1000) / 10 : 0);
    const conversion = {
      mobile: rate(returns.mobile, clicks.mobile),
      tablet: rate(returns.tablet, clicks.tablet),
      desktop: rate(returns.desktop, clicks.desktop),
      total: rate(returns.total, clicks.total),
    };

    return new Response(
      JSON.stringify({ clicks, returns, conversion, totalEvents: (data ?? []).length }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("review-stats internal error:", e);
    return new Response(
      JSON.stringify({ error: "Erro interno no servidor." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
