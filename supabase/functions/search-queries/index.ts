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

const SITE_ORIGIN = "https://cantarelliadvocacia.com.br";
const GSC_GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";
const AI_GATEWAY = "https://ai.gateway.lovable.dev/v1/responses";

function gscHeaders() {
  const lovableKey = Deno.env.get("LOVABLE_API_KEY");
  const gscKey = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
  if (!lovableKey || !gscKey) throw new Error("Google Search Console não está conectado.");
  return {
    Authorization: `Bearer ${lovableKey}`,
    "X-Connection-Api-Key": gscKey,
  };
}

function coversTarget(siteUrl: string, target: URL) {
  if (siteUrl.startsWith("sc-domain:")) {
    const domain = siteUrl.slice("sc-domain:".length).toLowerCase();
    const host = target.hostname.toLowerCase();
    return host === domain || host.endsWith(`.${domain}`);
  }
  try {
    const prefix = new URL(siteUrl);
    return target.href.startsWith(prefix.href);
  } catch {
    return false;
  }
}

async function resolveSite(): Promise<string> {
  const res = await fetch(`${GSC_GATEWAY}/webmasters/v3/sites`, { headers: gscHeaders() });
  if (!res.ok) throw new Error(`Falha ao listar propriedades (${res.status}): ${await res.text()}`);
  const { siteEntry = [] } = (await res.json()) as {
    siteEntry?: { siteUrl: string; permissionLevel?: string }[];
  };
  const target = new URL(SITE_ORIGIN + "/");
  const matches = siteEntry.filter(
    (e) => e.permissionLevel !== "siteUnverifiedUser" && coversTarget(e.siteUrl, target),
  );
  if (matches.length === 0) throw new Error("Nenhuma propriedade verificada cobre o site.");
  // Prefer exact URL-prefix root over sc-domain
  const prefix = matches.find((m) => m.siteUrl === SITE_ORIGIN + "/");
  return (prefix ?? matches[0]).siteUrl;
}

async function fetchTopPages(siteUrl: string) {
  const end = new Date();
  const start = new Date(end.getTime() - 28 * 24 * 60 * 60 * 1000);
  const toDate = (d: Date) => d.toISOString().slice(0, 10);
  const res = await fetch(
    `${GSC_GATEWAY}/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { ...gscHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        startDate: toDate(start),
        endDate: toDate(end),
        dimensions: ["page", "query"],
        rowLimit: 2500,
        dataState: "final",
      }),
    },
  );
  if (!res.ok) throw new Error(`Falha ao ler buscas (${res.status}): ${await res.text()}`);
  const { rows = [] } = (await res.json()) as {
    rows?: { keys: string[]; clicks: number; impressions: number; ctr: number; position: number }[];
  };

  const byPage = new Map<
    string,
    {
      page: string;
      clicks: number;
      impressions: number;
      avgPosition: number;
      queries: {
        query: string;
        clicks: number;
        impressions: number;
        ctr: number;
        position: number;
      }[];
    }
  >();
  let posWeight = new Map<string, number>();

  for (const r of rows) {
    const [page, query] = r.keys;
    // only articles
    if (!page.includes("/blog/")) continue;
    const entry = byPage.get(page) ?? {
      page,
      clicks: 0,
      impressions: 0,
      avgPosition: 0,
      queries: [],
    };
    entry.clicks += r.clicks;
    entry.impressions += r.impressions;
    entry.queries.push({
      query,
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: r.ctr,
      position: r.position,
    });
    posWeight.set(
      page,
      (posWeight.get(page) ?? 0) + r.position * r.impressions,
    );
    byPage.set(page, entry);
  }

  const pages = Array.from(byPage.values()).map((p) => {
    const weight = posWeight.get(p.page) ?? 0;
    p.avgPosition = p.impressions > 0 ? weight / p.impressions : 0;
    p.queries.sort((a, b) => b.impressions - a.impressions);
    p.queries = p.queries.slice(0, 15);
    return p;
  });
  pages.sort((a, b) => b.impressions - a.impressions);
  return pages.slice(0, 30);
}

async function suggestForPage(page: string, queries: { query: string; impressions: number; clicks: number; position: number }[]) {
  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) throw new Error("LOVABLE_API_KEY ausente.");
  const list = queries
    .slice(0, 12)
    .map((q) => `- "${q.query}" (${q.impressions} impressões, ${q.clicks} cliques, posição média ${q.position.toFixed(1)})`)
    .join("\n");

  const prompt = `Você é especialista em SEO para um escritório de advocacia previdenciária brasileiro.
A URL abaixo é um artigo publicado. Baseado nas buscas reais que a trazem no Google (dados do Search Console), sugira:
1) Um novo TÍTULO SEO (máx. 60 caracteres), começando pela pergunta/termo mais buscado, podendo incluir "2026".
2) Uma nova META DESCRIPTION (máx. 155 caracteres), direta, com o termo principal e um gancho que incentive o clique.

Regras obrigatórias da OAB: não prometa resultados, não use "grátis"/"gratuitamente", não dê passo a passo para o visitante pedir o benefício sozinho. Português do Brasil, tom profissional e humano.

URL: ${page}

Principais buscas que trazem esta página:
${list}

Explique em 1 frase POR QUE a sugestão deve melhorar o CTR.`;

  const res = await fetch(AI_GATEWAY, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "fetch",
    },
    body: JSON.stringify({
      model: "openai/gpt-6-astra",
      store: false,
      stream: false,
      reasoning: { effort: "low" },
      input: [{ role: "user", content: prompt }],
      text: {
        format: {
          type: "json_schema",
          name: "seo_suggestion",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["title", "description", "rationale"],
            properties: {
              title: { type: "string" },
              description: { type: "string" },
              rationale: { type: "string" },
            },
          },
        },
      },
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("AI suggest failed:", res.status, body);
    throw new Error(`IA indisponível (${res.status}).`);
  }
  const data = await res.json();
  // Extract text output
  let text = "";
  if (Array.isArray(data.output)) {
    for (const item of data.output) {
      if (item.type === "message" && Array.isArray(item.content)) {
        for (const c of item.content) {
          if (typeof c.text === "string") text += c.text;
        }
      }
    }
  }
  if (!text && typeof data.output_text === "string") text = data.output_text;
  const parsed = JSON.parse(text);
  return parsed as { title: string; description: string; rationale: string };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    let body: Record<string, unknown> = {};
    try { body = await req.json(); } catch { /* ignore */ }
    const password = typeof body.password === "string" ? body.password : "";
    const auth = await checkAdminPassword(req, password);
    if (!auth.ok) return json({ error: auth.error }, auth.status);

    const action = typeof body.action === "string" ? body.action : "list";

    if (action === "list") {
      const siteUrl = await resolveSite();
      const pages = await fetchTopPages(siteUrl);
      return json({ pages, siteUrl });
    }

    if (action === "suggest") {
      const page = typeof body.page === "string" ? body.page : "";
      const queries = Array.isArray(body.queries) ? body.queries as any[] : [];
      if (!page || queries.length === 0) return json({ error: "Dados insuficientes." }, 400);
      const suggestion = await suggestForPage(page, queries);
      return json({ suggestion });
    }

    return json({ error: "Ação desconhecida." }, 400);
  } catch (e) {
    console.error("search-queries error:", e);
    const msg = e instanceof Error ? e.message : "Erro inesperado.";
    return json({ error: msg }, 500);
  }
});
