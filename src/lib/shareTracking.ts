import { supabase } from "@/integrations/supabase/client";
import { getDeviceType } from "@/lib/reviewTracking";

export type ShareNetwork =
  | "whatsapp"
  | "facebook"
  | "x"
  | "linkedin"
  | "email"
  | "copy";

export function trackShareClick(
  network: ShareNetwork,
  articleSlug: string,
  articleTitle?: string,
) {
  try {
    void supabase.from("share_click_events").insert({
      network,
      article_slug: articleSlug,
      article_title: articleTitle ?? null,
      device_type: getDeviceType(),
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    // Silencioso: rastreamento nunca deve quebrar a experiência do usuário
  }
}
