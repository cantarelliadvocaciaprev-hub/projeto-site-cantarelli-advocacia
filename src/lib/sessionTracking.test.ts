import { beforeEach, describe, expect, it, vi } from "vitest";

const { insert, from } = vi.hoisted(() => {
  const insert = vi.fn(() => Promise.resolve({ error: null }));
  return { insert, from: vi.fn(() => ({ insert })) };
});
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from } }));
import { getSessionTrafficSource, trackPageView } from "./pageTracking";
import { trackWhatsAppClick } from "./whatsappTracking";

describe("session attribution across visit and WhatsApp events", () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
    vi.clearAllMocks();
    window.gtag = vi.fn();
    window.fbq = vi.fn();
  });

  it("retains initial source, medium and campaign after internal navigation and reload", () => {
    window.history.replaceState({}, "", "/?utm_source=instagram&utm_medium=social&utm_campaign=bio");
    getSessionTrafficSource();
    window.history.replaceState({}, "", "/blog");
    trackPageView("/blog");
    window.history.replaceState({}, "", "/contato?utm_source=facebook&utm_campaign=outro");
    trackWhatsAppClick("pagina-contato");
    expect(from.mock.calls.map(([name]) => name)).toEqual(["page_view_events", "whatsapp_click_events"]);
    for (const [payload] of insert.mock.calls as unknown as [Record<string, unknown>][]) {
      expect(payload).toMatchObject({ source: "Instagram", medium: "social", campaign: "bio" });
    }
    expect(getSessionTrafficSource()).toMatchObject({ source: "Instagram", medium: "social", campaign: "bio" });
    expect(window.gtag).not.toHaveBeenCalled();
    expect(window.fbq).not.toHaveBeenCalled();
  });

  it("keeps advertising events blocked after explicit cookie refusal", () => {
    localStorage.setItem("cookie-consent", "rejected");
    trackWhatsAppClick("botao-flutuante");
    expect(window.gtag).not.toHaveBeenCalled();
    expect(window.fbq).not.toHaveBeenCalled();
  });
});