import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { prerenderBlogArticlesPlugin } from "./prerender-blog-articles.mjs";

test("prerender contains real article text, service text and correct page schema", () => {
  const root = process.cwd();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cantarelli-prerender-"));
  try {
    fs.mkdirSync(path.join(dir, "src/data"), { recursive: true });
    for (const file of ["blogArticles.ts", "servicePages.json"]) fs.copyFileSync(path.join(root, "src/data", file), path.join(dir, "src/data", file));
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
    assert.match(article, /"@type":"Article"/);
    const service = fs.readFileSync("output/bpc-loas-recife/index.html", "utf8");
    assert.match(service, /"@type":"WebPage"/);
    assert.doesNotMatch(service, /"@type":"Article"/);
    assert.match(service, /<h2>/);
    assert.match(service, /assets\/office-building-12345678.webp/);
    const articles = fs.readdirSync("output/blog").filter(name => name !== "index.html");
    assert.equal(articles.length, 119);
    for (const slug of articles) {
      const html = fs.readFileSync(`output/blog/${slug}/index.html`, "utf8");
      assert.match(html, /<h2>/, slug);
    }
  } finally {
    process.chdir(root);
    fs.rmSync(dir, { recursive: true, force: true });
  }
});