import { describe, expect, it } from "vitest";
import pages from "./servicePages.json";
describe("local service information", () => {
  it("uses the requested ten distinct public service addresses", () => {
    expect(pages.map((p) => p.slug)).toEqual(["advogado-previdenciario-recife", "bpc-loas-recife", "aposentadoria-recife", "auxilio-doenca-negado-recife", "pensao-por-morte-recife", "revisao-de-beneficios-recife", "planejamento-previdenciario-recife", "advogado-previdenciario-olinda", "jaboatao", "paulista"]);
  });
  for (const page of pages) {
    it(`keeps at least 600 words and four to six FAQs for ${page.slug}`, () => {
      const text = [page.title, page.description, ...page.sections.map(section => `${section.heading} ${section.text}`), ...page.faq.map(faq => `${faq.question} ${faq.answer}`)].join(" ");
      expect(text.split(/\s+/).length).toBeGreaterThanOrEqual(600);
      expect(page.faq.length).toBeGreaterThanOrEqual(4);
      expect(page.faq.length).toBeLessThanOrEqual(6);
    });
  }
});