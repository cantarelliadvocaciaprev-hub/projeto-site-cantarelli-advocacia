import topics from "../data/blogTopics.json" with { type: "json" };
import editorial from "../data/blogEditorial.json" with { type: "json" };

export { topics };
export function isoDate(value) {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(value)) return value.slice(0, 10);
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const m = value.toLowerCase().match(/^(\d{1,2}) de ([a-zç]+),? (\d{4})$/);
  const month = m ? months.indexOf(m[2]) + 1 : 0;
  return m && month ? `${m[3]}-${String(month).padStart(2,"0")}-${m[1].padStart(2,"0")}` : undefined;
}
export function topicFor(article) {
  const text = `${article.slug} ${article.title}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const slug = /auxilio.acidente/.test(text) ? "auxilio-acidente" : /bpc|loas|autismo|auditiva|audicao|deficiencia/.test(text) ? "bpc-loas-deficiencia" : /pensao/.test(text) ? "pensao-por-morte" : /cnis|revisao|teto|reajuste/.test(text) ? "cnis-revisao" : undefined;
  return topics.find(topic => topic.slug === slug) ?? topics.find(topic => topic.categories.includes(article.category)) ?? topics[4];
}
export function enrichArticle(article) {
  const data = editorial[article.slug] ?? {};
  const topic = topicFor(article);
  return { ...article, ...data,
    publishedAt: data.publishedAt || article.publishedAt || isoDate(article.date) || "",
    updatedAt: data.updatedAt || article.updatedAt || isoDate(article.lastUpdated) || "",
    quickAnswer: data.quickAnswer || article.quickAnswer || "",
    sources: data.sources ?? article.sources ?? [],
    relatedSlugs: data.relatedSlugs ?? article.relatedSlugs ?? [],
    serviceSlug: data.serviceSlug || article.serviceSlug || topic.serviceSlug,
    reviewedBy: data.reviewedBy || "", reviewedAt: data.reviewedAt || "",
    author: data.author || article.author || "", asOf: data.asOf || "", validUntil: data.validUntil || "", asOfSource: data.asOfSource || ""
  };
}
export function relatedFor(article, articles) {
  const topic = topicFor(article);
  const candidates = articles.filter(other => other.slug !== article.slug && topicFor(other).slug === topic.slug);
  const declared = article.relatedSlugs ?? [];
  const ranked = candidates.map(other => ({ article: other, score: (declared.includes(other.slug) ? 100 : 0) + (other.category === article.category ? 2 : 0) + (other.tags ?? []).filter(tag => (article.tags ?? []).includes(tag)).length * 3 })).sort((a,b) => b.score - a.score).map(item => item.article);
  // Rotate the pool so every article receives a related link, not only popular posts.
  const ordered = articles.filter(other => topicFor(other).slug === topic.slug);
  const index = ordered.findIndex(other => other.slug === article.slug);
  const next = ordered[(index + 1) % ordered.length];
  return [...(next && next.slug !== article.slug ? [next] : []), ...ranked].filter((other,index,list) => list.findIndex(item => item.slug === other.slug) === index).slice(0, 4);
}
export function sortUpdated(articles) {
  return [...articles].sort((a,b) => (isoDate(b.updatedAt || b.lastUpdated) ?? "").localeCompare(isoDate(a.updatedAt || a.lastUpdated) ?? ""));
}