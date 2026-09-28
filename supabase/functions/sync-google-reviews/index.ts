// Refreshes the cached Google reviews (rating, count, latest reviews).
// Called on a schedule; skips the Google call if the cache is fresh, so cost stays bounded.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const PLACE_ID = "ChIJ0R2t_ywfqwcRGM-UOsuOAFw";
const MIN_AGE_MS = 50 * 60 * 1000; // never call Google more than ~once per hour
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_maps";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: cache } = await supabase
      .from("google_reviews_cache")
      .select("fetched_at, reviews")
      .eq("id", 1)
      .maybeSingle();

    if (cache && Array.isArray(cache.reviews) && cache.reviews.length > 0 &&
        Date.now() - new Date(cache.fetched_at).getTime() < MIN_AGE_MS) {
      return json({ ok: true, skipped: true });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_MAPS_API_KEY = Deno.env.get("GOOGLE_MAPS_API_KEY");
    if (!LOVABLE_API_KEY || !GOOGLE_MAPS_API_KEY) {
      console.error("Missing Google Maps connector credentials");
      return json({ error: "Serviço indisponível." }, 500);
    }

    const res = await fetch(`${GATEWAY_URL}/places/v1/places/${PLACE_ID}?languageCode=pt-BR`, {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    });
    if (!res.ok) {
      console.error(`Places request failed [${res.status}]: ${await res.text()}`);
      return json({ error: "Falha ao consultar avaliações." }, 502);
    }
    const place = await res.json();

    type GReview = {
      rating?: number;
      relativePublishTimeDescription?: string;
      publishTime?: string;
      text?: { text?: string };
      originalText?: { text?: string };
      authorAttribution?: { displayName?: string };
    };
    const reviews = ((place.reviews ?? []) as GReview[])
      .filter((r) => (r.rating ?? 0) >= 4 && (r.originalText?.text || r.text?.text))
      .map((r) => ({
        name: (r.authorAttribution?.displayName ?? "Cliente").slice(0, 80),
        rating: r.rating ?? 5,
        timeAgo: (r.relativePublishTimeDescription ?? "").slice(0, 40),
        publishTime: r.publishTime ?? null,
        text: (r.originalText?.text || r.text?.text || "").slice(0, 800),
      }));

    const row: Record<string, unknown> = { id: 1, fetched_at: new Date().toISOString() };
    if (typeof place.rating === "number") row.rating = place.rating;
    if (typeof place.userRatingCount === "number") row.review_count = place.userRatingCount;
    if (reviews.length > 0) row.reviews = reviews;

    const { error } = await supabase.from("google_reviews_cache").upsert(row);
    if (error) {
      console.error("cache upsert failed:", error.message);
      return json({ error: "Falha ao salvar." }, 500);
    }
    return json({ ok: true, count: row.review_count, reviews: reviews.length });
  } catch (e) {
    console.error("sync-google-reviews error:", e instanceof Error ? e.message : e);
    return json({ error: "Erro inesperado." }, 500);
  }
});
