import { describe, it, expect } from "vitest";
import { blogArticles } from "@/data/blogArticles";
import { enrichArticle, topicFor, topics, relatedFor, isoDate, sortUpdated } from "./blogEditorial.mjs";

describe("Fase 3 editorial rules", () => {
  it("assigns every existing article to one of six hubs without changing its slug", () => {
    expect(topics).toHaveLength(6);
    for (const article of blogArticles) {
      expect(enrichArticle(article).slug).toBe(article.slug);
      expect(topics.some(topic => topic.slug === topicFor(article).slug)).toBe(true);
    }
  });
  it("gives every article an incoming related link and 3 to 5 same-theme links", () => {
    const incoming = new Set<string>();
    for (const article of blogArticles) {
      const related = relatedFor(enrichArticle(article), blogArticles);
      expect(related.length).toBeGreaterThanOrEqual(3);
      expect(related.length).toBeLessThanOrEqual(5);
      for (const other of related) {
        expect(topicFor(other).slug).toBe(topicFor(article).slug);
        incoming.add(other.slug);
      }
    }
    expect(incoming.size).toBe(119);
  });
  it("never supplies today's date or a reviewer for missing facts", () => {
    expect(isoDate(undefined)).toBeUndefined();
    const article = enrichArticle({...blogArticles[0],slug:"undated-test",date:undefined,lastUpdated:undefined});
    expect(article.publishedAt).toBe("");
    expect(article.updatedAt).toBe("");
    expect(article.reviewedBy).toBe("");
  });
  it("orders confirmed updates ahead of undated posts", () => {
    const sorted=sortUpdated([{...blogArticles[0],slug:"old",updatedAt:"2026-01-01"},{...blogArticles[0],slug:"new",updatedAt:"2026-11-09"}]);
    expect(sorted.map(article=>article.slug)).toEqual(["new","old"]);
  });
});