// Shared admin password check with constant-time comparison and brute-force lockout.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const MAX_FAILURES = 5;
const WINDOW_MINUTES = 15;

const enc = new TextEncoder();

async function sha256(value: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(value)));
}

async function safeEqual(a: string, b: string): Promise<boolean> {
  const [ha, hb] = await Promise.all([sha256(a), sha256(b)]);
  let diff = 0;
  for (let i = 0; i < ha.length; i++) diff |= ha[i] ^ hb[i];
  return diff === 0;
}

function clientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}

export type AdminCheck = { ok: true } | { ok: false; status: number; error: string };

export async function checkAdminPassword(req: Request, password: unknown): Promise<AdminCheck> {
  const expected = Deno.env.get("REVIEW_STATS_PASSWORD");
  if (!expected) return { ok: false, status: 500, error: "Painel não configurado." };

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const ipHash = Array.from(await sha256("admin:" + clientIp(req)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const since = new Date(Date.now() - WINDOW_MINUTES * 60_000).toISOString();

  const { count } = await supabase
    .from("admin_login_attempts")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .eq("success", false)
    .gte("created_at", since);

  if ((count ?? 0) >= MAX_FAILURES) {
    return {
      ok: false,
      status: 429,
      error: "Muitas tentativas. Aguarde 15 minutos e tente novamente.",
    };
  }

  const pwd = typeof password === "string" ? password.slice(0, 256) : "";
  const valid = pwd.length > 0 && (await safeEqual(pwd, expected));

  await supabase.from("admin_login_attempts").insert({ ip_hash: ipHash, success: valid });

  if (!valid) return { ok: false, status: 401, error: "Senha incorreta." };
  return { ok: true };
}
