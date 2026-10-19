import { describe, expect, it } from "vitest";
import { blogArticles } from "./blogArticles";

describe("Ampliação das categorias com menos de quatro artigos", () => {
  const expectedCounts = [
    ["Auxílio-Doença", 7],
    ["Aposentadoria por Invalidez", 7],
    ["Aposentadoria PcD", 6],
    ["Reforma da Previdência", 6],
    ["Pensões", 8],
    ["Revisão", 7],
    ["Contribuição", 8],
    ["Acidente de Trabalho", 7],
  ] as const;

  for (const [category, count] of expectedCounts) {
    it(`acrescenta cinco artigos em ${category}`, () => {
      expect(blogArticles.filter((article) => article.category === category)).toHaveLength(count);
    });
  }

  it("mantém endereços únicos para os 119 artigos", () => {
    expect(blogArticles).toHaveLength(119);
    expect(new Set(blogArticles.map((article) => article.slug)).size).toBe(119);
  });
});