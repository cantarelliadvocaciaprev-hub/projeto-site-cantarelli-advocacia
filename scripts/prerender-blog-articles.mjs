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

const MAX_PRERENDER_PAGES = 1000;
const SITE_URL = "https://cantarelliadvocacia.com.br";
const publicUrls = JSON.parse(fs.readFileSync(new URL("../src/data/publicUrls.json", import.meta.url), "utf8"));

const FIELDS = ["slug", "title", "excerpt", "seoTitle", "metaDescription", "imageAlt", "date", "lastUpdated", "category"];

// Balanced array extraction avoids executing the typed article source during builds.
function extractArray(block, field) {
  const start = block.search(new RegExp(`${field}\\s*:\\s*\\[`));
  if (start < 0) return [];
  const begin = block.indexOf("[", start);
  let depth = 0, quoted = false, escaped = false;
  for (let i = begin; i < block.length; i++) {
    const c = block[i];
    if (quoted) { if (escaped) escaped = false; else if (c === "\\") escaped = true; else if (c === '"') quoted = false; continue; }
    if (c === '"') { quoted = true; continue; }
    if (c === "[") depth++;
    if (c === "]" && --depth === 0) {
      try { return JSON.parse(block.slice(begin, i + 1).replace(/([{,]\s*)(\w+)\s*:/g, '$1"$2":').replace(/,\s*([}\]])/g, "$1")); } catch { return []; }
    }
  }
  return [];
}

function dateValue(value) {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const m = value.toLowerCase().match(/^(\d{1,2}) de ([a-zç]+),? (\d{4})$/);
  const month = m ? months.indexOf(m[2]) + 1 : 0;
  return m && month ? `${m[3]}-${String(month).padStart(2, "0")}-${m[1].padStart(2, "0")}` : undefined;
}

function extractField(block, field) {
  const re = new RegExp(`${field}\\s*:\\s*(?:\\r?\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`);
  const m = block.match(re);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, " ") : null;
}

export function parseArticles(src) {
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

    article.content = extractArray(block, "content");
    article.faq = extractArray(block, "faq");
    article.keyTakeaways = extractArray(block, "keyTakeaways");
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

function truncate(text, max = 155) {
  if (!text) return "";
  const clean = text.trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max - 1);
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
    .replace(/<link\s+[^>]*?rel\s*=\s*"canonical"[^>]*>\s*/gi, "")
    .replace(/<link\s+[^>]*?rel\s*=\s*"alternate"[^>]*?hreflang[^>]*>\s*/gi, "");
}

function buildHeadBlock(article, ogImageUrl, canonical, kind = "BlogPosting") {
  const title = truncate(article.seoTitle || `${article.title} | Cantarelli Advocacia`, 60);
  const description = truncate(article.metaDescription || article.excerpt);
  const ogTitle = article.title;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": kind,
    headline: article.title,
    description,
    ...(ogImageUrl ? { image: ogImageUrl } : {}),
    datePublished: dateValue(article.date),
    dateModified: dateValue(article.lastUpdated) ?? dateValue(article.date),
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Cantarelli Advocacia" },
    publisher: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
    },
  };
  const isPost = kind === "BlogPosting";
  const breadcrumb = [{ "@type": "ListItem", position: 1, name: "Início", item: SITE_URL }];
  if (canonical !== SITE_URL) {
    if (isPost) breadcrumb.push({ "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` });
    breadcrumb.push({ "@type": "ListItem", position: breadcrumb.length + 1, name: article.title, item: canonical });
  }
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": ["Organization", "LegalService"], "@id": `${SITE_URL}/#organization`, name: "Cantarelli Advocacia", url: SITE_URL, telephone: "+558130493799", address: { "@type": "PostalAddress", streetAddress: "Estrada dos Remédios, 2115", addressLocality: "Recife", addressRegion: "PE", postalCode: "50720-715", addressCountry: "BR" } },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Cantarelli Advocacia", url: SITE_URL },
      { "@type": "BreadcrumbList", itemListElement: breadcrumb },
      jsonLd,
    ],
  };

  return `
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="${escapeAttr(canonical)}" />
    <link rel="alternate" hreflang="pt-br" href="${escapeAttr(canonical)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeAttr(canonical)}" />
    <meta property="og:type" content="${isPost ? "article" : "website"}" />
    <meta property="og:title" content="${escapeAttr(ogTitle)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${escapeAttr(canonical)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(ogTitle)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />
    <script id="schema-public-page" type="application/ld+json">${JSON.stringify(graph).replace(/</g, "\\u003c")}</script>
  `;
}

// Build map: source basename ("foo.jpg") -> emitted fileName ("assets/foo-<hash>.jpg")
function buildAssetMap(bundle) {
  const map = new Map();
  const assetRe = /^(?:.*\/)?(.+)-[A-Za-z0-9_-]{8}\.(jpg|jpeg|png|webp|avif)$/i;
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
  let outDir = "dist";
  let bundleAssetMap = new Map();
  let lcpFile;

  return {
    name: "prerender-blog-articles",
    apply: "build",
    configResolved(config) {
      outDir = config.build?.outDir || "dist";
    },
    // Capture hashed asset filenames while the bundle exists in memory.
    generateBundle(_options, bundle) {
      bundleAssetMap = buildAssetMap(bundle);
      for (const [filename, asset] of Object.entries(bundle)) {
        if (asset.type !== "asset") continue;
        for (const original of [...(asset.originalFileNames ?? []), ...(asset.names ?? []), asset.name ?? ""]) {
          const basename = path.basename(original).split("?")[0];
          if (/\.(jpg|png|webp|avif)$/i.test(basename)) bundleAssetMap.set(basename, filename);
          if (basename === "hero-background-960.jpg") lcpFile = filename;
        }
      }
    },
    // Files are on disk here — clone dist/index.html into per-article HTMLs.
    writeBundle() {
      let src;
      try {
        src = fs.readFileSync(articlesPath, "utf-8");
      } catch {
        return;
      }
      const articles = parseArticles(src).slice(0, MAX_PRERENDER_PAGES - 32);
      if (articles.length === 0) return;

      const absOutDir = path.resolve(process.cwd(), outDir);
      const indexPath = path.join(absOutDir, "index.html");
      let baseHtml;
      try {
        baseHtml = fs.readFileSync(indexPath, "utf-8");
      } catch {
        console.warn("[prerender-blog] dist/index.html missing; skipping");
        return;
      }

      if (lcpFile) {
        baseHtml = baseHtml.replace("</head>", `<link rel="preload" as="image" href="/${lcpFile}" fetchpriority="high"></head>`);
        fs.writeFileSync(indexPath, baseHtml);
      }
      const noHeroPreload = baseHtml.replace(/<link[^>]+rel="preload"[^>]+as="image"[^>]*>/g, "");
      const wrap = (body) => `<main id="prerender-content" style="max-width:72rem;margin:auto;padding:2rem"><nav><a href="/">Cantarelli Advocacia</a> · <a href="/blog">Blog</a> · <a href="/contato">Contato</a></nav>${body}</main>`;
      const injectBody = (html, body) => html.replace('<div id="root"></div>', `<div id="root">${wrap(body)}</div>`);
      const sectionHtml = (sections) => sections.map(section => section.type === "list" ? `<ul>${(section.items ?? []).map(item => `<li>${escapeAttr(item)}</li>`).join("")}</ul>` : section.type === "heading" ? `<h2>${escapeAttr(section.text)}</h2>` : section.type === "subheading" ? `<h3>${escapeAttr(section.text)}</h3>` : `<p>${escapeAttr(section.text)}</p>`).join("");
      const pages = JSON.parse(fs.readFileSync(path.resolve("src/data/servicePages.json"), "utf8"));
      let written = 0;
      for (const article of articles) {
        const canonical = `${SITE_URL}/blog/${article.slug}`;
        let ogImageUrl;
        if (article.imageBasename) {
          const built = bundleAssetMap.get(article.imageBasename);
          if (built) ogImageUrl = `${SITE_URL}/${built}`;
        }

        let html = stripConflictingHeadTags(noHeroPreload).replace(
          /<\/head>/i,
          `${buildHeadBlock(article, ogImageUrl, canonical)}</head>`,
        );

        const service = pages.find(page => page.categories.includes(article.category)) ?? pages[0];
        const related = articles.filter(other => other.slug !== article.slug).map(other => ({ article: other, score: (other.category === article.category ? 2 : 0) + other.tags.filter(tag => article.tags.includes(tag)).length * 3 })).sort((a, b) => b.score - a.score).slice(0, 3).map(item => item.article);
        html = injectBody(html, `<h1>${escapeAttr(article.title)}</h1><p>${escapeAttr(article.excerpt)}</p><h2>Pontos Principais</h2><ul>${article.keyTakeaways.map(item => `<li>${escapeAttr(item)}</li>`).join("")}</ul>${sectionHtml(article.content)}<h2>Perguntas frequentes</h2>${article.faq.map(faq => `<details><summary>${escapeAttr(faq.question)}</summary><p>${escapeAttr(faq.answer)}</p></details>`).join("")}<a href="/${service.slug}">Conheça a orientação sobre ${escapeAttr(service.title)}</a><h2>Leia também</h2><ul>${related.map(other => `<li><a href="/blog/${other.slug}">${escapeAttr(other.title)}</a></li>`).join("")}</ul>`);
        const dest = path.join(absOutDir, "blog", article.slug, "index.html");
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, html);
        written += 1;
      }
      for (const page of pages) {
        const canonical = `${SITE_URL}/${page.slug}`;
        const seoTitle = page.slug === "advogado-previdenciario-recife" ? "Orientação Previdenciária em Recife | Cantarelli Advocacia" : `${page.title} | Cantarelli Advocacia`;
        const html = injectBody(stripConflictingHeadTags(noHeroPreload).replace("</head>", `${buildHeadBlock({ title: page.title, seoTitle, excerpt: page.description }, undefined, canonical, "WebPage")}</head>`), `<h1>${escapeAttr(page.title)}</h1><p>${escapeAttr(page.description)}</p>${page.sections.map(section => `<h2>${escapeAttr(section.heading)}</h2><p>${escapeAttr(section.text)}</p>`).join("")}<h2>Perguntas frequentes</h2>${page.faq.map(faq => `<details><summary>${escapeAttr(faq.question)}</summary><p>${escapeAttr(faq.answer)}</p></details>`).join("")}<a href="https://wa.me/5581983421727">Fale com especialista</a>`).replace('content="article"', 'content="website"');
        const dest = path.join(absOutDir, page.slug, "index.html");
        fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, html);
      }
      // Institutional HTML remains meaningful even before the application loads.
      const staticPages = [
        { slug: "contato", title: "Contato em Recife | Cantarelli Advocacia", description: "Endereço, canais oficiais e horário de atendimento da Cantarelli Advocacia na Madalena, Recife.", body: "<h1>Contato, endereço e horário em Recife – PE</h1><p>Estrada dos Remédios, 2115, Madalena, Recife – PE, CEP 50720-715.</p><p>Telefone: (81) 3049-3799. WhatsApp: (81) 98342-1727.</p><p>Segunda a quinta: 08:30–17:00. Sexta: 08:30–12:00.</p><a href=\"https://wa.me/5581983421727\">Fale com especialista</a>" },
        { slug: "blog", title: "Blog Previdenciário | Cantarelli Advocacia", description: "Artigos, notícias e atualizações sobre Direito Previdenciário, INSS, aposentadorias, BPC/LOAS e mais. Conteúdo atualizado por especialistas.", body: `<h1>Blog</h1><p>Novidades do INSS, regras de aposentadoria e dicas para garantir seus direitos.</p><ul>${[...articles].sort((a,b) => { const rank = slug => { const i = publicUrls.featuredSlugs.indexOf(slug); return i < 0 ? publicUrls.featuredSlugs.length : i; }; return rank(a.slug) - rank(b.slug); }).map(article => `<li><a href="/blog/${article.slug}">${escapeAttr(article.title)}</a><p>${escapeAttr(article.excerpt)}</p></li>`).join("")}</ul>` },
        { slug: "seguranca", title: "Segurança | Cantarelli Advocacia", description: "Confira os canais oficiais e proteja-se contra golpes do falso advogado.", body: "<h1>Sua Segurança é Nossa Prioridade</h1><p>Confirme contatos pelos canais oficiais. Desconfie de pedidos de pagamento para liberar valores.</p><a href=\"/contato\">Contatos oficiais</a>" },
        { slug: "trabalhe-conosco", title: "Trabalhe Conosco | Cantarelli Advocacia", description: "Conheça os setores do escritório e envie sua candidatura pelo formulário.", body: "<h1>Trabalhe Conosco</h1><p>Conheça os setores da Cantarelli Advocacia e envie sua candidatura pelo formulário do site.</p>" },
        { slug: "politica-de-privacidade", title: "Política de Privacidade | Cantarelli Advocacia", description: "Informações sobre tratamento de dados, dúvidas do blog e escolhas de cookies.", body: "<h1>Política de Privacidade</h1><p>Thiago Cantarelli Sociedade Individual de Advocacia, CNPJ 26.191.013/0001-89, é responsável pelo tratamento no site.</p><p>Formulários abrem o WhatsApp; dúvidas do assistente são armazenadas para análise interna. Não informe dados sensíveis. Google Analytics e Meta Pixel dependem de aceite de cookies.</p><p>Solicite informações e exerça direitos pelo e-mail contato@cantarelliadvocacia.com.br.</p>" }
      ];
      for (const page of staticPages) {
        const html = injectBody(stripConflictingHeadTags(noHeroPreload).replace("</head>", `${buildHeadBlock({ title: page.title, seoTitle: page.title, excerpt: page.description }, undefined, `${SITE_URL}/${page.slug}`, "WebPage")}</head>`), page.body).replace('content="article"', 'content="website"');
        const dest = path.join(absOutDir, page.slug, "index.html"); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, html);
      }
      const heroPath = path.resolve("src/components/Hero.tsx");
      const heroSource = fs.existsSync(heroPath) ? fs.readFileSync(heroPath, "utf8") : "";
      const heroText = value => value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
      const h1 = heroText(heroSource.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "Seu futuro planejado. Sua previdência segura.");
      const paragraphs = [...heroSource.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].filter(match => !match[1].includes("{")).map(match => `<p>${escapeAttr(heroText(match[1]))}</p>`).join("");
      const featured = publicUrls.featuredSlugs.flatMap(slug => articles.filter(article => article.slug === slug));
      const homeBody = `<h1>${escapeAttr(h1)}</h1>${paragraphs}<h2>Áreas de Atuação</h2><ul>${pages.map(page => `<li><a href="/${page.slug}">${escapeAttr(page.title)}</a></li>`).join("")}</ul><h2>Blog</h2><ul>${featured.map(article => `<li><a href="/blog/${article.slug}">${escapeAttr(article.title)}</a></li>`).join("")}</ul><a href="https://wa.me/5581983421727">Agende seu atendimento</a>`;
      fs.writeFileSync(indexPath, injectBody(stripConflictingHeadTags(baseHtml).replace("</head>", `${buildHeadBlock({ title: "Advogado Previdenciário em Recife | Cantarelli Advocacia", seoTitle: "Advogado Previdenciário em Recife | Cantarelli Advocacia", excerpt: "Escritório especialista em Direito Previdenciário em Recife/PE: aposentadorias, BPC LOAS, revisões e defesa contra o INSS. 17+ anos de experiência." }, undefined, SITE_URL, "WebPage")}</head>`), homeBody));
      // Recovery pages are real HTML with the destination canonical, NOT HTTP redirects.
      for (const [alias, target] of Object.entries(publicUrls.aliases)) {
        const source = path.join(absOutDir, target, "index.html");
        if (!fs.existsSync(source)) continue;
        const dest = path.join(absOutDir, alias, "index.html");
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(source, dest);
      }
      const sitemapPath = path.resolve("public/sitemap.xml");
      const existing = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
      const sitemap = buildSitemap(articles, pages, staticPages, existing);
      fs.writeFileSync(path.join(absOutDir, "sitemap.xml"), sitemap);
      console.log(`[prerender-blog] wrote ${written} articles, home, ${pages.length + staticPages.length} public pages and sitemap`);
    },
  };
}

export function buildSitemap(articles, services, staticPages, existing = "") {
  // Unknown existing dates are preserved; never use build time or today's date.
  const oldDates = new Map([...existing.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => {
    const loc = match[1].match(/<loc>(.*?)<\/loc>/)?.[1]?.replace(/\/$/, "");
    return [loc, match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1]];
  }));
  const entries = [
    { url: SITE_URL },
    ...staticPages.map(page => ({ url: `${SITE_URL}/${page.slug}` })),
    ...services.map(page => ({ url: `${SITE_URL}/${page.slug}` })),
    ...articles.map(article => ({ url: `${SITE_URL}/blog/${article.slug}`, modified: dateValue(article.lastUpdated) })),
  ];
  const urls = [...new Map(entries.map(entry => [entry.url, entry])).values()];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(entry => {
    const modified = entry.modified ?? oldDates.get(entry.url);
    return `  <url><loc>${escapeAttr(entry.url)}</loc>${modified ? `<lastmod>${escapeAttr(modified)}</lastmod>` : ""}</url>`;
  }).join("\n")}\n</urlset>\n`;
}

