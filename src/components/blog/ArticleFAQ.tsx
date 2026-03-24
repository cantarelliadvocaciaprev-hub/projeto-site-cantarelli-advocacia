import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { BlogFAQ } from "@/data/blogArticles";

interface ArticleFAQProps {
  faq: BlogFAQ[];
  articleTitle: string;
}

const ArticleFAQ = ({ faq, articleTitle }: ArticleFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faq || faq.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-6 md:py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-3">
            {faq.map((item, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl overflow-hidden bg-card transition-all hover:border-primary/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-3"
                  aria-expanded={openIndex === idx}
                >
                  <span className="font-display font-semibold text-sm md:text-base text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleFAQ;
