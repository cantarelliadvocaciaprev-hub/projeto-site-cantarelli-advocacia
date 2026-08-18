import { supabase } from "@/integrations/supabase/client";
import { getDeviceType } from "@/lib/reviewTracking";

/**
 * Registra a leitura de um artigo do blog.
 * Nunca lança erro: rastreamento não pode quebrar a página.
 */
export function trackArticleView(articleSlug: string, articleTitle?: string) {
  try {
    void supabase
      .from("article_view_events")
      .insert({
        article_slug: articleSlug,
        article_title: articleTitle ?? null,
        device_type: getDeviceType(),
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      })
      .then(
        () => {},
        () => {},
      );
  } catch {
    // silencioso
  }
}
