import type { BlogArticle } from "@/data/blogArticles";
export interface BlogTopic { slug: string; title: string; description: string; serviceSlug: string; categories: string[] }
export const topics: BlogTopic[];
export function isoDate(value?: string): string | undefined;
export function topicFor(article: Pick<BlogArticle, "slug" | "title" | "category">): BlogTopic;
export function enrichArticle(article: BlogArticle): BlogArticle;
export function relatedFor(article: BlogArticle, articles: BlogArticle[]): BlogArticle[];
export function sortUpdated(articles: BlogArticle[]): BlogArticle[];