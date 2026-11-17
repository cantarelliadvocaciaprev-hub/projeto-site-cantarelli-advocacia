import type { BlogArticle } from "@/data/blogArticles";
import { isoDate } from "@/lib/blogEditorial.mjs";

interface ArticleSchemaProps {
  article: BlogArticle;
}

const ArticleSchema = ({ article }: ArticleSchemaProps) => {
  const datePublished = isoDate(article.publishedAt);
  const dateModified = isoDate(article.updatedAt);

  // Build plain-text article body from structured content
  const articleBody = article.content
    .map((section) =>
      section.type === "list" ? section.items?.join(". ") ?? "" : section.text ?? ""
    )
    .filter(Boolean)
    .join("\n\n");

  const wordCount = articleBody.split(/\s+/).filter(Boolean).length;

  // Google Rich Results requires absolute image URLs in JSON-LD.
  const SITE_URL = "https://cantarelliadvocacia.com.br";
  const absoluteImage = /^https?:\/\//.test(article.image)
    ? article.image
    : `${SITE_URL}${article.image.startsWith("/") ? "" : "/"}${article.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: absoluteImage,
    datePublished,
    dateModified,
    author: article.author ? { "@type": "Person", name: article.author } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
      url: "https://cantarelliadvocacia.com.br",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cantarelliadvocacia.com.br/blog/${article.slug}`,
    },
    keywords: article.tags?.join(", "),
    articleSection: article.category,
    inLanguage: "pt-BR",
    wordCount,
    articleBody,
    about: {
      "@type": "Thing",
      name: "Direito Previdenciário",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
};

export default ArticleSchema;
