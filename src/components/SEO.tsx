import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
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
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

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

    updateMetaTag("description", description);

    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph
    updateMetaTag("og:title", ogTitle || title, true);
    updateMetaTag("og:description", ogDescription || description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", "Cantarelli Advocacia", true);
    updateMetaTag("og:locale", "pt_BR", true);
    if (canonical) {
      updateMetaTag("og:url", canonical, true);
    }

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", ogTitle || title);
    updateMetaTag("twitter:description", ogDescription || description);
    updateMetaTag("twitter:image", ogImage);

    // Update canonical URL if provided
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (linkElement) {
        linkElement.setAttribute("href", canonical);
      } else {
        linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "canonical");
        linkElement.setAttribute("href", canonical);
        document.head.appendChild(linkElement);
      }
    }

    // Cleanup function to restore default title
    return () => {
      document.title = "Cantarelli Advocacia | Especialistas em Direito Previdenciário - Recife/PE";
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);

  return null;
};

export default SEO;
