import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

const FAQPageSchema = ({ faqs }: FAQPageSchemaProps) => {
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://cantarelliadvocacia.com.br/#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "schema-faq-page";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("schema-faq-page");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [faqs]);

  return null;
};

export default FAQPageSchema;
