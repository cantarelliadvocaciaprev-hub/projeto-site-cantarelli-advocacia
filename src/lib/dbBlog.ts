import { supabase } from "@/integrations/supabase/client";
import type { BlogArticle, BlogArticleContent, BlogFAQ } from "@/data/blogArticles";

export type DbBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  seo_title: string | null;
  meta_description: string | null;
  category: string;
  tags: string[];
  read_time: string;
  image_url: string | null;
  image_alt: string | null;
  author: string | null;
  body: string;
  key_takeaways: string[];
  faq: unknown;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

const DEFAULT_IMAGE = "/placeholder.svg";

/**
 * Converte o texto simples do editor em blocos de conteúdo.
 * "## " = título, "### " = subtítulo, "- " = lista, "> " = destaque,
 * qualquer outra linha = parágrafo.
 */
export const parseBody = (body: string): BlogArticleContent[] => {
  const blocks: BlogArticleContent[] = [];
  let list: string[] = [];

  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "list", items: list });
      list = [];
    }
  };

  for (const rawLine of body.split("\n")) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      blocks.push({ type: "subheading", text: line.slice(4).trim() });
    } else if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "heading", text: line.slice(3).trim() });
    } else if (line.startsWith("> ")) {
      flushList();
      blocks.push({ type: "highlight", text: line.slice(2).trim() });
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      list.push(line.slice(2).trim());
    } else {
      flushList();
      blocks.push({ type: "paragraph", text: line });
    }
  }
  flushList();
  return blocks;
};

const parseFaq = (value: unknown): BlogFAQ[] => {
  if (!Array.isArray(value)) return [];
  return value
    .filter(
      (item): item is BlogFAQ =>
        !!item &&
        typeof item === "object" &&
        typeof (item as BlogFAQ).question === "string" &&
        typeof (item as BlogFAQ).answer === "string",
    )
    .map((item) => ({ question: item.question, answer: item.answer }));
};

const formatDate = (iso: string | null) => {
  if (!iso) return undefined;
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const dbPostToArticle = (post: DbBlogPost): BlogArticle => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  seoTitle: post.seo_title ?? undefined,
  metaDescription: post.meta_description ?? undefined,
  date: formatDate(post.published_at ?? post.created_at),
  category: post.category,
  tags: post.tags ?? [],
  readTime: post.read_time,
  keyTakeaways: post.key_takeaways ?? [],
  image: post.image_url || DEFAULT_IMAGE,
  imageAlt: post.image_alt || post.title,
  author: post.author ?? undefined,
  content: parseBody(post.body),
  faq: parseFaq(post.faq),
});

export const fetchPublishedPosts = async (): Promise<BlogArticle[]> => {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error || !data) return [];
  return (data as unknown as DbBlogPost[]).map(dbPostToArticle);
};
