import { supabase } from "@/integrations/supabase/client";
import { getDeviceType } from "@/lib/reviewTracking";
import { getSessionTrafficSource } from "@/lib/pageTracking";

export const WHATSAPP_NUMBER = "5581983421727";

/** Locais possíveis de CTA, para saber de onde vem cada lead. */
export type WhatsAppLocation =
  | "botao-flutuante"
  | "header"
  | "header-mobile"
  | "hero"
  | "footer"
  | "contato-secao"
  | "contato-formulario"
  | "pagina-contato"
  | "planejamento"
  | "bancario"
  | "artigo"
  | "artigo-pergunta"
  | "seguranca"
  | "validador-contato";

const DEFAULT_MESSAGE =
  "Olá, estava no site da Cantarelli e gostaria de um atendimento.";
const pageMessage = () => typeof window === "undefined" ? DEFAULT_MESSAGE : `Olá, estava na página ${window.location.pathname} do site da Cantarelli e gostaria de um atendimento.`;

/** Monta a URL do WhatsApp com a mensagem já preenchida. */
export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Registra o clique. Nunca lança erro: rastreamento não pode quebrar a página. */
export function trackWhatsAppClick(
  ctaLocation: WhatsAppLocation,
  contextLabel?: string,
) {
  try {
    // Conversões para anúncios (só existem se o visitante aceitou os cookies)
    const w = window as unknown as {
      gtag?: (...a: unknown[]) => void;
      fbq?: (...a: unknown[]) => void;
    };
    if (localStorage.getItem("cookie-consent") === "accepted") {
    w.gtag?.("event", "click_whatsapp", { page_path: window.location.pathname, cta_location: ctaLocation });
    w.gtag?.("event", "generate_lead", { method: "whatsapp", cta_location: ctaLocation });
    w.fbq?.("track", "Contact", { content_name: ctaLocation });
    }

    const { source, medium, campaign, referrer } = getSessionTrafficSource();
    void supabase
      .from("whatsapp_click_events")
      .insert({
        path: typeof window !== "undefined" ? window.location.pathname : "/",
        cta_location: ctaLocation,
        context_label: contextLabel?.slice(0, 160) ?? null,
        source,
        medium,
        campaign,
        referrer,
        device_type: getDeviceType(),
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

/**
 * Abre o WhatsApp registrando de qual botão e de qual página o lead saiu.
 */
export function openWhatsApp(
  ctaLocation: WhatsAppLocation,
  message: string = pageMessage(),
  contextLabel?: string,
) {
  trackWhatsAppClick(ctaLocation, contextLabel);
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
