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
