import type { BlogArticle } from "@/data/blogArticles";

const SITE_URL = "https://cantarelliadvocacia.com.br";

interface BlogListSchemaProps {
  articles: BlogArticle[];
  /** Max number of articles listed in the ItemList (keeps the payload small). */
  limit?: number;
}

/**
 * Structured data for the blog listing page: a Blog node with an ItemList of
 * the most recent posts, plus breadcrumbs. Emitted inline so it is part of the
 * DOM as soon as React renders (no effect-based head mutation).
 */
const BlogListSchema = ({ articles, limit = 20 }: BlogListSchemaProps) => {
  const items = articles.slice(0, limit);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "Blog Cantarelli Advocacia",
    description:
      "Artigos e atualizações sobre Direito Previdenciário, INSS, aposentadorias, BPC/LOAS e revisões de benefícios.",
    url: `${SITE_URL}/blog`,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    blogPost: items.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      description: a.excerpt,
      url: `${SITE_URL}/blog/${a.slug}`,
      mainEntityOfPage: `${SITE_URL}/blog/${a.slug}`,
      author: {
        "@type": "Organization",
        name: "Cantarelli Advocacia",
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default BlogListSchema;
