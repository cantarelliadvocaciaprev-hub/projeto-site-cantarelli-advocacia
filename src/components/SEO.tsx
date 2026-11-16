import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalUrl } from "@/lib/publicUrls";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/oAVZtOygXbW2PkAr0aG4IhJcC5c2/social-images/social-1760713613475-IMG_8009.jpg",
  ogType = "website",
  canonical,
  noindex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const pageCanonical = canonicalUrl(canonical ?? pathname);
    const fit = (text: string, max: number) => text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;
    const pageTitle = fit(title, 60);
    const pageDescription = fit(description, 155);
    document.title = pageTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute("content", content);
      } else {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        element.setAttribute("content", content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag("description", pageDescription);
    updateMetaTag("robots", noindex || pathname.startsWith("/admin/") || pathname === "/verificacao-deploy" ? "noindex, follow" : "index, follow, max-image-preview:large");

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph
    updateMetaTag("og:title", ogTitle || pageTitle, true);
    updateMetaTag("og:description", ogDescription || pageDescription, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", "Cantarelli Advocacia", true);
    updateMetaTag("og:locale", "pt_BR", true);
    if (pageCanonical) {
      updateMetaTag("og:url", pageCanonical, true);
    }

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || pageTitle);
    updateMetaTag("twitter:description", ogDescription || pageDescription);
    updateMetaTag("twitter:image", ogImage);

    // Update canonical URL if provided
    if (pageCanonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (linkElement) {
        linkElement.setAttribute("href", pageCanonical);
      } else {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        linkElement.setAttribute("href", pageCanonical);
        document.head.appendChild(linkElement);
      }

      // hreflang alternates: site is single-language (pt-BR), so each URL
      // self-references and also serves as x-default for other languages.
      const setAlternate = (hreflang: string, href: string) => {
        let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
        if (!el) {
          el = document.createElement("link");
          el.setAttribute("rel", "alternate");
          el.setAttribute("hreflang", hreflang);
          document.head.appendChild(el);
        }
        el.setAttribute("href", href);
      };

      setAlternate("pt-br", pageCanonical);
      setAlternate("x-default", pageCanonical);
      document.documentElement.setAttribute("lang", "pt-BR");
    }

    // Cleanup function to restore default title
    return () => {
      document.title = "Cantarelli Advocacia | Especialistas em Direito Previdenciário - Recife/PE";
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonical, pathname, noindex]);

  return null;
};

export default SEO;
