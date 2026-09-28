import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "cookie-consent";

declare global {
  interface Window {
    __loadMetaPixel?: () => void;
    fbq?: (...args: unknown[]) => void;
    __loadGA?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const readConsent = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
};

const CookieConsent = () => {
  const [consent, setConsent] = useState<string | null>(() => readConsent());
  const location = useLocation();
  const first = useRef(true);

  // Registra cada troca de página no Meta Pixel (somente com consentimento)
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (consent !== "accepted") return;
    window.fbq?.("track", "PageView");
    window.gtag?.("event", "page_view", { page_path: location.pathname, page_location: window.location.href });
  }, [location.pathname, consent]);

  const choose = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
    if (value === "accepted") {
      window.__loadMetaPixel?.();
      window.__loadGA?.();
    }
  };

  if (consent) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-xl border border-border bg-card p-4 shadow-lg md:inset-x-6 md:p-5"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-start gap-3">
          <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="font-body text-sm text-muted-foreground">
            Usamos cookies para melhorar sua experiência, medir o acesso ao site e mostrar
            conteúdos relevantes nas redes sociais, conforme a LGPD. Você pode aceitar ou recusar.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("rejected")}>
            Recusar
          </Button>
          <Button size="sm" onClick={() => choose("accepted")}>
            Aceitar cookies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
