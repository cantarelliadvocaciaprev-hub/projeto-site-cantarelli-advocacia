import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const DEFAULT_URL = "https://www.cantarelliadvocacia.com.br";

interface ManifestItem {
  slug: string;
  lastUpdated: string | null;
}

function normalizeBaseUrl(input: unknown): string | null {
  if (typeof input !== "string" || input.trim() === "") return DEFAULT_URL;
  try {
    const u = new URL(input.trim());
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    return `${u.protocol}//${u.host}`;
  } catch {
    return null;
  }
}

async function fetchVersionManifest(baseUrl: string) {
  const res = await fetch(`${baseUrl}/version.json?t=${Date.now()}`, {
    headers: { "Cache-Control": "no-cache" },
  });
  if (!res.ok) return null;
  const text = await res.text();
  try {
    const json = JSON.parse(text);
    if (!Array.isArray(json.items)) return null;
    const items: ManifestItem[] = json.items
      .filter((i: unknown) => i && typeof (i as ManifestItem).slug === "string")
      .map((i: ManifestItem) => ({
        slug: i.slug,
        lastUpdated: i.lastUpdated ?? null,
      }));
    return {
      source: "version" as const,
      generatedAt: typeof json.generatedAt === "string" ? json.generatedAt : null,
      articleCount: items.length,
      items,
    };
  } catch {
    return null;
  }
}

async function fetchSitemapManifest(baseUrl: string) {
  const res = await fetch(`${baseUrl}/sitemap.xml?t=${Date.now()}`, {
    headers: { "Cache-Control": "no-cache" },
  });
  if (!res.ok) return null;
  const xml = await res.text();
  const slugs = new Set<string>();
  const re = /\/blog\/([a-z0-9-]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    slugs.add(m[1]);
  }
  const items: ManifestItem[] = [...slugs]
    .sort((a, b) => a.localeCompare(b))
    .map((slug) => ({ slug, lastUpdated: null }));
  return {
    source: "sitemap" as const,
    generatedAt: null,
    articleCount: items.length,
    items,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    let body: unknown = {};
    if (req.method === "POST") {
      body = await req.json().catch(() => ({}));
    }
    const baseUrl = normalizeBaseUrl((body as { url?: unknown }).url);
    if (!baseUrl) {
      return new Response(
        JSON.stringify({ error: "URL inválida." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Prefer the precise version marker; fall back to the sitemap.
    let manifest = await fetchVersionManifest(baseUrl);
    let note: string | null = null;
    if (!manifest) {
      manifest = await fetchSitemapManifest(baseUrl);
      note =
        "O site publicado ainda não expõe o marcador de versão (version.json). " +
        "Comparação feita pelo sitemap (apenas presença de artigos). " +
        "Publique novamente para habilitar a comparação detalhada.";
    }

    if (!manifest) {
      return new Response(
        JSON.stringify({
          error: "Não foi possível ler o conteúdo publicado (version.json e sitemap.xml indisponíveis).",
          baseUrl,
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ baseUrl, checkedAt: new Date().toISOString(), note, manifest }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: `Erro ao verificar: ${String(err)}` }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
