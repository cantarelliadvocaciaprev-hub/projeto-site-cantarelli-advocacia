import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// Builds a content manifest (version.json) from the blog data source.
// This marker is emitted into the build output so the live site exposes a
// machine-readable fingerprint of its published content. The verification
// page compares it against the current source to detect divergences.
function generateContentManifest(): string {
  const articlesPath = path.resolve(__dirname, "src/data/blogArticles.ts");
  let items: { slug: string; lastUpdated: string | null }[] = [];
  let contentHash = "";
  try {
    const src = fs.readFileSync(articlesPath, "utf-8");
    const slugRe = /slug:\s*"([^"]+)"/g;
    const matches = [...src.matchAll(slugRe)];
    items = matches
      .map((m, i) => {
        const start = m.index ?? 0;
        const end = i + 1 < matches.length ? matches[i + 1].index ?? src.length : src.length;
        const segment = src.slice(start, end);
        const lu = segment.match(/lastUpdated:\s*"([^"]+)"/);
        return { slug: m[1], lastUpdated: lu ? lu[1] : null };
      })
      .sort((a, b) => a.slug.localeCompare(b.slug));
    contentHash = crypto.createHash("sha256").update(src).digest("hex").slice(0, 16);
  } catch {
    // If the data file can't be read, emit an empty manifest.
  }

  return JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      articleCount: items.length,
      contentHash,
      items,
    },
    null,
    2,
  );
}

function contentVersionPlugin() {
  return {
    name: "content-version-manifest",
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use("/version.json", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "no-store");
        res.end(generateContentManifest());
      });
    },
    generateBundle() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this as any).emitFile({
        type: "asset",
        fileName: "version.json",
        source: generateContentManifest(),
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools(),
    contentVersionPlugin(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
