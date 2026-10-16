import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";
import { checkAdminPassword } from "../_shared/adminAuth.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    let password = "";
    try {
      const body = await req.json();
      password = typeof body?.password === "string" ? body.password : "";
    } catch { /* ignore */ }
    const auth = await checkAdminPassword(req, password);
    if (!auth.ok) return json({ error: auth.error }, auth.status);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase
      .from("assistant_questions")
      .select("id, question, summary, matched_slugs, matched_count, device_type, created_at")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("assistant-questions list failed:", error.message);
      return json({ error: "Não foi possível carregar as dúvidas." }, 500);
    }

    return json({ questions: data ?? [] });
  } catch (e) {
    console.error("assistant-questions error:", e);
    return json({ error: "Erro inesperado." }, 500);
  }
});
