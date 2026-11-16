import { describe, expect, it } from "vitest";
import { canonicalUrl, legacyUrls, normalizeInternalPath } from "./publicUrls";
import { blogArticles } from "@/data/blogArticles";

describe("Canonical URLs", () => {
  it("uses HTTPS, no www and no final slash", () => {
    expect(canonicalUrl("https://www.cantarelliadvocacia.com.br/")).toBe("https://cantarelliadvocacia.com.br");
    expect(canonicalUrl("/blog/?q=INSS")).toBe("https://cantarelliadvocacia.com.br/blog");
  });
  it("repairs repeated domain segments in internal links", () => {
    expect(normalizeInternalPath("/cantarelliadvocacia.com.br/cantarelliadvocacia.com.br/doenca-cardiaca-aposentadoria-invalidez")).toBe("/blog/doenca-cardiaca-aposentadoria-invalidez");
    expect(normalizeInternalPath("cantarelliadvocacia.com.br/blog/transformar-bpc-em-aposentadoria")).toBe("/blog/transformar-bpc-em-aposentadoria");
  });
  for (const [alias, target] of Object.entries(legacyUrls)) {
    it(`resolves ${alias} to a real article`, () => {
      expect(normalizeInternalPath(alias)).toBe(target);
      expect(blogArticles.some(article => `/blog/${article.slug}` === target)).toBe(true);
    });
  }
});