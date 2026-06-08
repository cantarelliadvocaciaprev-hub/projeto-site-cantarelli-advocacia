import { supabase } from "@/integrations/supabase/client";

export type DeviceType = "mobile" | "tablet" | "desktop";

export function getDeviceType(): DeviceType {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) {
    return "tablet";
  }
  if (/Mobi|iPhone|iPod|Android.*Mobile|Windows Phone/i.test(ua)) {
    return "mobile";
  }
  return "desktop";
}

async function logEvent(eventType: "click" | "return") {
  try {
    await supabase.from("review_click_events").insert({
      event_type: eventType,
      device_type: getDeviceType(),
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    });
  } catch {
    // Silencioso: rastreamento nunca deve quebrar a experiência do usuário
  }
}

/**
 * Registra o clique no botão "Avaliar no Google" e arma um detector de retorno.
 * Quando a pessoa volta para a aba do site (após avaliar no Google), registramos
 * um evento "return" como proxy de conclusão.
 */
export function trackReviewClick() {
  void logEvent("click");

  const onVisible = () => {
    if (document.visibilityState === "visible") {
      void logEvent("return");
      cleanup();
    }
  };

  const cleanup = () => {
    document.removeEventListener("visibilitychange", onVisible);
    window.clearTimeout(timeout);
  };

  // Só conta como "retorno" se a pessoa voltar dentro de 30 minutos
  const timeout = window.setTimeout(cleanup, 30 * 60 * 1000);
  document.addEventListener("visibilitychange", onVisible);
}

// URL web padrão (deep link universal do Google) — abre o app no iOS quando instalado
export const GOOGLE_REVIEW_WEB_URL = "https://g.page/r/CRjPlDrLjgBcEAE/review";
const GOOGLE_PLACE_ID = "ChIJ0R2t_ywfqwcRGM-UOsuOAFw";

/**
 * Abre a tela de avaliação priorizando o app do Google Maps no mobile,
 * com fallback automático para o navegador caso o app não esteja instalado.
 * Também registra o clique para rastreamento.
 */
export function openGoogleReview(e: React.MouseEvent<HTMLAnchorElement>) {
  trackReviewClick();

  const device = getDeviceType();
  if (device === "desktop") return; // mantém o comportamento padrão (nova aba)

  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

  // Android: usa intent:// para abrir direto no app, com fallback embutido para o navegador
  if (/Android/i.test(ua)) {
    e.preventDefault();
    const fallback = encodeURIComponent(GOOGLE_REVIEW_WEB_URL);
    window.location.href =
      `intent://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}` +
      `#Intent;scheme=https;package=com.google.android.apps.maps;` +
      `S.browser_fallback_url=${fallback};end`;
    return;
  }

  // iOS e demais: o link universal g.page abre o app quando instalado,
  // ou o navegador como fallback — comportamento padrão do <a>.
}
