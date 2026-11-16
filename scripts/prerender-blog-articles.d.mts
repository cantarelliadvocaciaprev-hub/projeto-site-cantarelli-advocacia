import type { Plugin } from "vite";
export declare function prerenderBlogArticlesPlugin(): Plugin;
export declare function parseArticles(source: string): Array<Record<string, any>>;
export declare function buildSitemap(articles: Array<Record<string, any>>, services: Array<{ slug: string }>, staticPages: Array<{ slug: string }>, existing?: string): string;
