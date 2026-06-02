import type { BlogArticle } from "@/data/blogArticles";

interface ArticleSchemaProps {
  article: BlogArticle;
}

// Maps Portuguese month names to ISO month numbers for schema dates
const PT_MONTHS: Record<string, string> = {
  janeiro: "01",
  fevereiro: "02",
  março: "03",
  marco: "03",
  abril: "04",
  maio: "05",
  junho: "06",
  julho: "07",
  agosto: "08",
  setembro: "09",
  outubro: "10",
  novembro: "11",
  dezembro: "12",
};

const toIsoDate = (value?: string, fallback = "2026-01-01"): string => {
  if (!value) return fallback;
  // Already ISO (YYYY-MM-DD)
  if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
  // Format like "Junho 2026"
  const match = value.trim().toLowerCase().match(/([a-zç]+)\s+(\d{4})/);
  if (match) {
    const month = PT_MONTHS[match[1]] ?? "01";
    return `${match[2]}-${month}-01`;
  }
  return fallback;
};

const ArticleSchema = ({ article }: ArticleSchemaProps) => {
  const datePublished = toIsoDate(article.date, "2026-01-01");
  const dateModified = toIsoDate(article.lastUpdated, datePublished);

  // Build plain-text article body from structured content
  const articleBody = article.content
    .map((section) =>
      section.type === "list" ? section.items?.join(". ") ?? "" : section.text ?? ""
    )
    .filter(Boolean)
    .join("\n\n");

  const wordCount = articleBody.split(/\s+/).filter(Boolean).length;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
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
