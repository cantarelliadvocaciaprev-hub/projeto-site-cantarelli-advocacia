import { blogArticles } from "@/data/blogArticles";

export interface ContentItem {
  slug: string;
  lastUpdated: string | null;
}

export interface ContentManifest {
  articleCount: number;
  items: ContentItem[];
  /** Where the live manifest came from: precise marker or sitemap fallback. */
  source?: "version" | "sitemap";
  generatedAt?: string | null;
}

export interface Divergence {
  type: "missing" | "extra" | "changed";
  slug: string;
  detail?: string;
}

/** Fingerprint of the content currently in this codebase (preview/source). */
export function getCurrentManifest(): ContentManifest {
  const items = blogArticles
    .map((a) => ({ slug: a.slug, lastUpdated: a.lastUpdated ?? null }))
    .sort((a, b) => a.slug.localeCompare(b.slug));
  return { articleCount: items.length, items };
}

/**
 * Compares the current source against the published manifest.
 * - missing: present in source but not yet published (publish pending)
 * - extra: published but no longer in source (removed locally)
 * - changed: same article, different "última atualização"
 *
 * When the live data comes from the sitemap fallback we only have slugs,
 * so "changed" detection is skipped.
 */
export function diffManifests(
  current: ContentManifest,
  live: ContentManifest,
): Divergence[] {
  const divergences: Divergence[] = [];
  const liveMap = new Map(live.items.map((i) => [i.slug, i]));
  const currentMap = new Map(current.items.map((i) => [i.slug, i]));

  for (const item of current.items) {
    const liveItem = liveMap.get(item.slug);
    if (!liveItem) {
      divergences.push({
        type: "missing",
        slug: item.slug,
        detail: "Existe no código, mas ainda não está publicado.",
      });
    } else if (
      live.source !== "sitemap" &&
      (liveItem.lastUpdated ?? null) !== (item.lastUpdated ?? null)
    ) {
      divergences.push({
        type: "changed",
        slug: item.slug,
        detail: `Atualização diferente — publicado: "${
          liveItem.lastUpdated ?? "—"
        }", código: "${item.lastUpdated ?? "—"}".`,
      });
    }
  }

  for (const item of live.items) {
    if (!currentMap.has(item.slug)) {
      divergences.push({
        type: "extra",
        slug: item.slug,
        detail: "Está publicado, mas não existe mais no código.",
      });
    }
  }

  return divergences.sort((a, b) => a.slug.localeCompare(b.slug));
}
