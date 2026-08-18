import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/pageTracking";

/** Registra cada visita de página (com origem do tráfego) ao mudar de rota. */
const PageViewTracker = () => {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;
    if (location.pathname.startsWith("/admin")) return;
    const timer = window.setTimeout(() => trackPageView(location.pathname), 400);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default PageViewTracker;
