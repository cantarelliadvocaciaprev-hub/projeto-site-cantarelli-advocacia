import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import type { BlogArticle } from "@/data/blogArticles";
import { blogArticles } from "@/data/blogArticles";

interface RelatedArticlesProps {
  currentSlug: string;
  tags: string[];
  category: string;
}

const RelatedArticles = ({ currentSlug, tags, category }: RelatedArticlesProps) => {
  // Score articles by tag overlap, then category match
  const scored = blogArticles
    .filter((a) => a.slug !== currentSlug)
    .map((a) => {
      let score = 0;
      if (a.category === category) score += 2;
      const overlap = a.tags?.filter((t) => tags.includes(t)).length ?? 0;
      score += overlap * 3;
      return { article: a, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <section className="py-8 md:py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center">
            Artigos Relacionados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scored.map(({ article }) => (
              <Link
                to={`/blog/${article.slug}`}
                key={article.slug}
                className="group"
              >
                <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded-full shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-3 md:p-4 flex flex-col flex-1">
                    <h3 className="text-sm md:text-base font-display font-bold text-foreground mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body line-clamp-2 mb-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-auto pt-2 border-t border-border group-hover:gap-2 transition-all">
                      <span>Leia Mais</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
