import type { BlogArticle } from "@/data/blogArticles";

interface ArticleSchemaProps {
  article: BlogArticle;
}

const ArticleSchema = ({ article }: ArticleSchemaProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: "2026-03-01",
    dateModified: "2026-03-25",
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
