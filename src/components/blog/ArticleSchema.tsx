import type { BlogArticle } from "@/data/blogArticles";

interface ArticleSchemaProps {
  article: BlogArticle;
}

const toIsoDate = (value?: string): string | undefined => {
  if (!value) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const match = value.toLowerCase().match(/^(\d{1,2}) de ([a-zç]+),? (\d{4})$/);
  if (!match) return undefined;
  const month = months.indexOf(match[2]) + 1;
  return month ? `${match[3]}-${String(month).padStart(2, "0")}-${match[1].padStart(2, "0")}` : undefined;
};

const ArticleSchema = ({ article }: ArticleSchemaProps) => {
  const datePublished = toIsoDate(article.date);
  const dateModified = toIsoDate(article.lastUpdated) ?? datePublished;

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
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: absoluteImage,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
      url: "https://cantarelliadvocacia.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Cantarelli Advocacia",
      url: "https://cantarelliadvocacia.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://cantarelliadvocacia.com.br/logo.png",
      },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://cantarelliadvocacia.com.br",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://cantarelliadvocacia.com.br/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://cantarelliadvocacia.com.br/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ArticleSchema;
