import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getSessionTrafficSource, trackPageView } from "@/lib/pageTracking";

/** Registra cada visita de página (com origem do tráfego) ao mudar de rota. */
const PageViewTracker = () => {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;
    if (location.pathname.startsWith("/admin")) return;
    // Capture entry before the delayed visit write or a fast internal navigation.
    getSessionTrafficSource();
    const timer = window.setTimeout(() => trackPageView(location.pathname), 400);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default PageViewTracker;
