/** GA4 events, sent only after cookie consent. Never throws. */
type Params = Record<string, string | number | undefined>;
const CONSENT_KEY = "cookie-consent";
let lastWhatsApp = 0;

export const hasConsent = () => {
  try { return localStorage.getItem(CONSENT_KEY) === "accepted"; } catch { return false; }
};

const serviceFromPath = () => {
  const el = document.querySelector<HTMLElement>("[data-service-slug]");
  return el?.dataset.serviceSlug || undefined;
};

export function trackEvent(name: string, params: Params = {}) {
  try {
    if (typeof window === "undefined" || !hasConsent()) return;
    if (name === "whatsapp_click") lastWhatsApp = Date.now();
    window.gtag?.("event", name, {
      page_path: window.location.pathname,
      page_title: document.title,
      service: serviceFromPath(),
      ...params,
    });
  } catch { /* measurement must never break the page */ }
}

/** Classifies a clicked link into the Fase 4 event names. */
export function classifyLink(href: string, origin: string): string | null {
  if (/^tel:/i.test(href)) return "phone_click";
  if (/^mailto:/i.test(href)) return "email_click";
  let url: URL;
  try { url = new URL(href, origin); } catch { return null; }
  if (/(^|\.)wa\.me$|api\.whatsapp\.com$/i.test(url.hostname)) return "whatsapp_click";
  if (/google\.[a-z.]+$/i.test(url.hostname) && /\/maps|maps\./i.test(url.href) || /^maps\.app\.goo\.gl$/i.test(url.hostname)) return "directions_click";
  if (/^https?:$/.test(url.protocol) && url.origin !== origin) return "outbound_click";
  return null;
}

let installed = false;
export function installClickTracking() {
  if (installed || typeof document === "undefined") return;
  installed = true;
  document.addEventListener("click", (e) => {
    const target = e.target as Element | null;
    const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    const cta = target?.closest?.("[data-cta-service]") as HTMLElement | null;
    if (cta && (a || target?.closest("button"))) trackEvent("cta_service_click", { service: cta.dataset.ctaService || undefined });
    if (!a) return;
    const name = classifyLink(a.getAttribute("href") || "", window.location.origin);
    if (!name) return;
    // WhatsApp buttons already report through trackWhatsAppClick; avoid duplicates.
    if (name === "whatsapp_click" && Date.now() - lastWhatsApp < 1500) return;
    trackEvent(name, name === "outbound_click" ? { link_url: a.href.split("?")[0] } : {});
  }, { capture: true });
}

let vitals = false;
export function startWebVitals() {
  if (vitals || typeof window === "undefined") return;
  vitals = true;
  void import("web-vitals").then(({ onLCP, onINP, onCLS }) => {
    const send = (m: { name: string; value: number; rating: string; id: string }) =>
      trackEvent(m.name, { value: Math.round(m.name === "CLS" ? m.value * 1000 : m.value), metric_value: m.value, metric_rating: m.rating, metric_id: m.id });
    onLCP(send); onINP(send); onCLS(send);
  }).catch(() => {});
}
