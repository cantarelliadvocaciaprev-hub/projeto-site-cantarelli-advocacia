import config from "@/data/publicUrls.json";

export const SITE_URL = config.siteUrl;
export const legacyUrls: Record<string, string> = config.aliases;
export const featuredSlugs = config.featuredSlugs;

/** Accept legacy same-site URLs but never turn external domains into internal paths. */
export function normalizeInternalPath(input: string): string {
  let value = input.trim();
  try { value = decodeURI(value); } catch { /* Keep malformed encoding unchanged. */ }
  value = value.replace(/^(?:https?:\/\/)?(?:www\.)?cantarelliadvocacia\.com\.br\/?/i, "/");
  value = value.replace(/^(?:\/cantarelliadvocacia\.com\.br)+\//i, "/");
  if (/^(?:https?:)?\/\//i.test(value)) return value;
  value = `/${value.replace(/^\/+/, "")}`;
  const [pathname] = value.split(/[?#]/);
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const suffix = value.slice(pathname.length);
  return `${legacyUrls[cleanPath] ?? cleanPath}${suffix}`;
}

export function canonicalUrl(input: string): string {
  const path = normalizeInternalPath(input).split(/[?#]/)[0];
  return `${SITE_URL}${path === "/" ? "" : path}`;
}