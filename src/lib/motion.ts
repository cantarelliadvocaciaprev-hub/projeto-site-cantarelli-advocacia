/**
 * Utilitários de acessibilidade para respeitar prefers-reduced-motion
 * em animações controladas por JavaScript (scroll suave, contadores, autoplay, etc.).
 * As animações/transições puramente CSS já são tratadas globalmente em index.css.
 */

/** Retorna true se o usuário prefere menos movimento. SSR-safe. */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/** Comportamento de scroll adequado à preferência do usuário. */
export const scrollBehavior = (): ScrollBehavior =>
  prefersReducedMotion() ? "auto" : "smooth";

/** scrollIntoView respeitando a preferência de movimento. */
export const reducedMotionScrollIntoView = (
  element: Element | null | undefined,
  options: ScrollIntoViewOptions = {}
) => {
  element?.scrollIntoView({ ...options, behavior: scrollBehavior() });
};
