import { supabase } from "@/integrations/supabase/client";
import { getDeviceType } from "@/lib/reviewTracking";

export type TrafficSource = {
  source: string;
  medium: string | null;
  campaign: string | null;
  referrer: string | null;
};

const HOST_MAP: { match: RegExp; label: string }[] = [
  { match: /(^|\.)google\./, label: "Google" },
  { match: /(^|\.)(facebook|fb)\.(com|me)$/, label: "Facebook" },
  { match: /(^|\.)instagram\.com$/, label: "Instagram" },
  { match: /(^|\.)(whatsapp\.com|wa\.me)$/, label: "WhatsApp" },
  { match: /(^|\.)l\.wl\.co$/, label: "WhatsApp" },
  { match: /(^|\.)linkedin\.com$/, label: "LinkedIn" },
  { match: /(^|\.)(x\.com|twitter\.com|t\.co)$/, label: "X (Twitter)" },
  { match: /(^|\.)youtube\.com$/, label: "YouTube" },
  { match: /(^|\.)youtu\.be$/, label: "YouTube" },
  { match: /(^|\.)bing\.com$/, label: "Bing" },
  { match: /(^|\.)(duckduckgo|search\.yahoo)\.com$/, label: "Outros buscadores" },
  { match: /(^|\.)(t\.me|telegram\.org)$/, label: "Telegram" },
  { match: /(^|\.)tiktok\.com$/, label: "TikTok" },
];

const normalizeUtm = (value: string) => {
  const v = value.toLowerCase();
  if (v.includes("google")) return "Google";
  if (v.includes("whatsapp") || v === "wa") return "WhatsApp";
  if (v.includes("facebook") || v === "fb" || v === "meta") return "Facebook";
  if (v.includes("instagram") || v === "ig") return "Instagram";
  if (v.includes("linkedin")) return "LinkedIn";
  if (v.includes("twitter") || v === "x") return "X (Twitter)";
  if (v.includes("tiktok")) return "TikTok";
  if (v.includes("youtube")) return "YouTube";
  return value.slice(0, 60);
};

/** Classifica a origem do visitante a partir de UTM ou do referenciador. */
export function detectTrafficSource(
  search = typeof window !== "undefined" ? window.location.search : "",
  referrer = typeof document !== "undefined" ? document.referrer : "",
): TrafficSource {
  const params = new URLSearchParams(search);
  const utmSource = params.get("utm_source");
  const medium = params.get("utm_medium");
  const campaign = params.get("utm_campaign");

  if (utmSource) {
    return {
      source: normalizeUtm(utmSource),
      medium: medium?.slice(0, 60) ?? null,
      campaign: campaign?.slice(0, 80) ?? null,
      referrer: referrer || null,
    };
  }

  if (params.get("gclid")) {
    return { source: "Google", medium: "cpc", campaign, referrer: referrer || null };
  }
  if (params.get("fbclid")) {
    return { source: "Facebook", medium: "social", campaign, referrer: referrer || null };
  }

  if (!referrer) {
    return { source: "Direto", medium: null, campaign, referrer: null };
  }

  let host = "";
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return { source: "Outros", medium: null, campaign, referrer };
  }

  if (typeof window !== "undefined" && host === window.location.hostname.replace(/^www\./, "")) {
    return { source: "Navegação interna", medium: "internal", campaign, referrer };
  }

  const match = HOST_MAP.find((h) => h.match.test(host));
  return {
    source: match ? match.label : host,
    medium: match ? "referral" : "referral",
    campaign,
    referrer,
  };
}

/**
 * Registra uma visita de página com a origem do tráfego.
 * Nunca lança erro: rastreamento não pode quebrar a página.
 */
export function trackPageView(path: string, pageTitle?: string) {
  try {
    const { source, medium, campaign, referrer } = detectTrafficSource();
    void supabase.from("page_view_events").insert({
      path,
      page_title: pageTitle ?? (typeof document !== "undefined" ? document.title : null),
      source,
      medium,
      campaign,
      referrer,
      device_type: getDeviceType(),
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    // silencioso
  }
}
