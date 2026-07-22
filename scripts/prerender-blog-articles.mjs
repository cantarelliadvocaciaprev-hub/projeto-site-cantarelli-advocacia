/**
 * Vite plugin: prerender per-article blog HTML with real head metadata.
 *
 * Social crawlers (WhatsApp/Facebook/LinkedIn/Twitter) don't run JS, so
 * react-helmet-async can't help them. This plugin emits
 *   dist/blog/<slug>/index.html
 * for each blog post — a copy of the built index.html with the head
 * rewritten to carry the article's title, description, canonical, og:*,
 * twitter:* and Article JSON-LD. Static hosting serves these files for
 * /blog/<slug>, giving each shared link a consistent, article-specific
 * preview. The SPA still hydrates from the same JS bundle.
 */
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://cantarelliadvocacia.com.br";

const FIELDS = ["slug", "title", "excerpt", "seoTitle", "metaDescription", "imageAlt"];

function extractField(block, field) {
  const re = new RegExp(`${field}\\s*:\\s*(?:\\r?\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`);
  const m = block.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, " ") : null;
}

function parseArticles(src) {
  // Import identifier -> source basename
  const importMap = new Map();
  const importRe = /import\s+(\w+)\s+from\s+"@\/assets\/blog\/([^"?]+)(?:\?[^"]*)?"/g;
  for (const m of src.matchAll(importRe)) {
    importMap.set(m[1], m[2]);
  }

  const slugRe = /slug:\s*"([^"]+)"/g;
  const positions = [...src.matchAll(slugRe)];
  const articles = [];
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].index ?? 0;
    const end = i + 1 < positions.length ? positions[i + 1].index ?? src.length : src.length;
    const block = src.slice(start, end);

    const article = {};
    for (const f of FIELDS) article[f] = extractField(block, f);

    const imageMatch = block.match(/image\s*:\s*(\w+)/);
    article.imageBasename = imageMatch ? importMap.get(imageMatch[1]) ?? null : null;

    const tagsMatch = block.match(/tags\s*:\s*\[([\s\S]*?)\]/);
    article.tags = tagsMatch
      ? [...tagsMatch[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1])
      : [];

    if (article.slug && article.title) articles.push(article);
  }
  return articles;
}

function truncate(text, max = 158) {
  if (!text) return "";
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max);
  const cut = slice.lastIndexOf(" ");
  return `${slice.slice(0, cut > 0 ? cut : max)}…`;
}

function escapeAttr(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Strip existing head tags that we override, so nothing conflicts.
function stripConflictingHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(
      /<meta\s+[^>]*?(name|property)\s*=\s*"(?:description|og:title|og:description|og:url|og:type|og:image|twitter:card|twitter:title|twitter:description|twitter:image)"[^>]*>\s*/gi,
      "",
    )
    .replace(/<link\s+[^>]*?rel\s*=\s*"canonical"[^>]*>\s*/gi, "");
}

function buildHeadBlock(article, ogImageUrl, canonical) {
  const title = article.seoTitle || `${article.title} | Cantarelli Advocacia`;
  const description = truncate(article.metaDescription || article.excerpt);
  const ogTitle = article.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description,
    image: ogImageUrl,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Cantarelli Advocacia" },
    publisher: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
    },
  };

  return `
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeAttr(ogTitle)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    <meta property="og:image" content="${escapeAttr(ogImageUrl)}" />
    <meta property="og:image:alt" content="${escapeAttr(article.imageAlt || ogTitle)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(ogTitle)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;
}

// Build map: source basename ("foo.jpg") -> emitted fileName ("assets/foo-<hash>.jpg")
function buildAssetMap(bundle) {
  const map = new Map();
  const assetRe = /^(?:.*\/)?(.+?)-[A-Za-z0-9_-]{6,}\.(jpg|jpeg|png|webp|avif)$/i;
  for (const fileName of Object.keys(bundle)) {
    const info = bundle[fileName];
    if (info.type !== "asset") continue;
    const m = fileName.match(assetRe);
    if (!m) continue;
    const ext = m[2].toLowerCase();
    // Try common candidate basenames; imagetools may drop original ext.
    const candidates = [`${m[1]}.${ext}`, `${m[1]}.jpg`, `${m[1]}.jpeg`, `${m[1]}.png`];
    for (const c of candidates) if (!map.has(c)) map.set(c, fileName);
  }
  return map;
}

export function prerenderBlogArticlesPlugin() {
  const articlesPath = path.resolve(process.cwd(), "src/data/blogArticles.ts");
  return {
    name: "prerender-blog-articles",
    apply: "build",
    generateBundle(_options, bundle) {
      let src;
      try {
        src = fs.readFileSync(articlesPath, "utf-8");
      } catch {
        return;
      }
      const articles = parseArticles(src);
      console.log(`[prerender-blog] parsed ${articles.length} articles`);
      if (articles.length === 0) return;

      const indexEntry = bundle["index.html"];
      if (!indexEntry || indexEntry.type !== "asset") {
        console.warn("[prerender-blog] index.html not found in bundle; keys:", Object.keys(bundle).filter((k) => k.endsWith(".html")));
        return;
      }
      const baseHtml = String(indexEntry.source);

      const assetMap = buildAssetMap(bundle);
      console.log(`[prerender-blog] asset map size: ${assetMap.size}`);

      for (const article of articles) {
        const canonical = `${SITE_URL}/blog/${article.slug}`;
        let ogImageUrl = `${SITE_URL}/og-default.jpg`;
        if (article.imageBasename) {
          const built = assetMap.get(article.imageBasename);
          if (built) ogImageUrl = `${SITE_URL}/${built}`;
        }

        const html = stripConflictingHeadTags(baseHtml).replace(
          /<\/head>/i,
          `${buildHeadBlock(article, ogImageUrl, canonical)}</head>`,
        );

        this.emitFile({
          type: "asset",
          fileName: `blog/${article.slug}/index.html`,
          source: html,
        });
      }
    },
  };
}
