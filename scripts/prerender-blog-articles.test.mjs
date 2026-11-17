import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { prerenderBlogArticlesPlugin, buildSitemap } from "./prerender-blog-articles.mjs";

test("prerender contains real article text, service text and correct page schema", () => {
  const root = process.cwd();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cantarelli-prerender-"));
  try {
    fs.mkdirSync(path.join(dir, "src/data"), { recursive: true });
    for (const file of ["blogArticles.ts", "servicePages.json"]) fs.copyFileSync(path.join(root, "src/data", file), path.join(dir, "src/data", file));
    fs.mkdirSync(path.join(dir, "src/components"), { recursive: true });
    fs.copyFileSync(path.join(root, "src/components/Hero.tsx"), path.join(dir, "src/components/Hero.tsx"));
    fs.mkdirSync(path.join(dir, "output"));
    fs.writeFileSync(path.join(dir, "output/index.html"), '<html><head><title>Fallback</title></head><body><div id="root"></div></body></html>');
    process.chdir(dir);
    const plugin = prerenderBlogArticlesPlugin();
    plugin.configResolved({ build: { outDir: "output" } });
    plugin.generateBundle({}, { "assets/office-building-12345678.webp": { type: "asset", names: ["office-building.jpg"] } });
    plugin.writeBundle();
    const article = fs.readFileSync("output/blog/aposentadoria-por-pontos-2026-regras/index.html", "utf8");
    assert.match(article, /61 \+ 42 = 103/);
    assert.match(article, /"dateModified":"2026-11-09"/);
    assert.match(article, /"@type":"BlogPosting"/);
    const service = fs.readFileSync("output/bpc-loas-recife/index.html", "utf8");
    assert.match(service, /"@type":"WebPage"/);
    assert.doesNotMatch(service, /"@type":"Article"/);
    assert.match(service, /<h2>/);
    const aliases = JSON.parse(fs.readFileSync(path.join(root, "src/data/publicUrls.json"), "utf8")).aliases;
    const articles = fs.readdirSync("output/blog").filter(name => name !== "index.html" && !Object.hasOwn(aliases, `/blog/${name}`));
    assert.equal(articles.length, 119);
    for (const slug of articles) {
      const html = fs.readFileSync(`output/blog/${slug}/index.html`, "utf8");
      assert.match(html, /<h2>/, slug);
      assert.equal([...html.matchAll(/<h1[ >]/g)].length, 1, slug);
      assert.equal([...html.matchAll(/href="\/blog\//g)].length, 3, `three related articles: ${slug}`);
    }
    const home = fs.readFileSync("output/index.html", "utf8");
    assert.match(home, /Seu futuro planejado\. Sua previdência segura\./);
    assert.match(home, /A Cantarelli Advocacia é especialista em Direito Previdenciário/);
    for (const [alias, target] of Object.entries(aliases)) {
      const html = fs.readFileSync(path.join("output", alias, "index.html"), "utf8");
      assert.ok(html.includes(`href="https://cantarelliadvocacia.com.br${target}"`));
    }
    const sitemap = fs.readFileSync("output/sitemap.xml", "utf8");
    assert.equal([...sitemap.matchAll(/<loc>/g)].length, 135);
    assert.doesNotMatch(sitemap, /\/admin|verificacao-deploy|<loc>https:\/\/www\./);
  } finally {
    process.chdir(root);
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test("search and permitted training agents all exclude private pages", () => {
  const robots = fs.readFileSync("public/robots.txt", "utf8");
  for (const agent of ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot", "GPTBot", "ClaudeBot", "Google-Extended"]) {
    const group = robots.split(/\n\s*\n/).find(block => block.includes(`User-agent: ${agent}\n`));
    assert.ok(group, agent);
    assert.match(group, /Allow: \/\n/);
    assert.match(group, /Disallow: \/admin\//);
    assert.match(group, /Disallow: \/verificacao-deploy/);
  }
  assert.match(robots, /Sitemap: https:\/\/cantarelliadvocacia.com.br\/sitemap.xml/);
});

test("sitemap preserves unknown dates and adds only page-specific update dates", () => {
  const result = buildSitemap([{ slug: "changed", lastUpdated: "2026-11-09" }, { slug: "undated" }], [], [], '<url><loc>https://cantarelliadvocacia.com.br</loc><lastmod>2026-03-24</lastmod></url>');
  assert.match(result, /<loc>https:\/\/cantarelliadvocacia.com.br<\/loc><lastmod>2026-03-24/);
  assert.match(result, /\/changed<\/loc><lastmod>2026-11-09/);
  assert.match(result, /\/undated<\/loc><\/url>/);
});