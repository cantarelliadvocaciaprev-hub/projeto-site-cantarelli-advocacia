import { useEffect } from "react";
import { officeSchema } from "@/components/schemas/LegalServiceSchema";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  type: "organization" | "legalService" | "website" | "webpage" | "jobPosting" | "faqPage";
  breadcrumbs?: BreadcrumbItem[];
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
}

const SchemaMarkup = ({
  type,
  breadcrumbs,
  pageTitle,
  pageDescription,
  pageUrl,
}: SchemaMarkupProps) => {
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    // Organization Schema (always included)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cantarelli Advocacia",
      alternateName: "Thiago Cantarelli Sociedade Individual de Advocacia",
      url: "https://cantarelliadvocacia.com.br",
      logo: officeSchema.logo,
      description:
        "Escritório especializado em Direito Previdenciário com mais de 15 anos de experiência em Recife/PE.",
      foundingDate: "2012",
      founder: {
        "@type": "Person",
        name: "Dr. Thiago Cantarelli",
        jobTitle: "Advogado Previdenciário",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Estrada dos Remédios, 2115",
        addressLocality: "Recife",
        addressRegion: "PE",
        postalCode: "50720-715",
        addressCountry: "BR",
        neighborhood: "Madalena",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+55-81-3049-3799",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        {
          "@type": "ContactPoint",
          telephone: "+55-81-99544-1368",
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
      ],
      sameAs: [
        "https://www.instagram.com/cantarelliadvprev",
        "https://www.youtube.com/@cantarelliadvprev",
        "https://www.tiktok.com/@cantarelliadvprev",
      ],
    };

    // LegalService Schema
    const legalServiceSchema = officeSchema;

    // WebSite Schema
    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Cantarelli Advocacia",
      url: "https://cantarelliadvocacia.com.br",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://cantarelliadvocacia.com.br/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    // WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageTitle || "Cantarelli Advocacia",
      description:
        pageDescription ||
        "Especialistas em Direito Previdenciário com mais de 15 anos de experiência.",
      url: pageUrl || "https://cantarelliadvocacia.com.br",
      isPartOf: {
        "@type": "WebSite",
        name: "Cantarelli Advocacia",
        url: "https://cantarelliadvocacia.com.br",
      },
      publisher: {
        "@type": "Organization",
        name: "Cantarelli Advocacia",
      },
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = breadcrumbs
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null;

    // Helper function to add schema script
    const addSchema = (schema: object, id: string) => {
      // Remove existing script with same id
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    };

    // Add schemas based on type.
    // "website" emits only the WebSite node — used on pages that already
    // render the richer LegalService node via <LegalServiceSchema />, so the
    // organization entity is never duplicated in the same document.
    if (type === "website") {
      addSchema(webSiteSchema, "schema-website");
    }

    if (type === "organization" || type === "legalService") {
      addSchema(organizationSchema, "schema-organization");
      addSchema(legalServiceSchema, "schema-legal-service");
      addSchema(webSiteSchema, "schema-website");
    }

    if (type === "webpage" || type === "jobPosting") {
      addSchema(webPageSchema, "schema-webpage");
    }

    if (breadcrumbSchema) {
      addSchema(breadcrumbSchema, "schema-breadcrumb");
    }

    // Cleanup function
    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [type, breadcrumbs, pageTitle, pageDescription, pageUrl]);

  return null;
};

export default SchemaMarkup;
