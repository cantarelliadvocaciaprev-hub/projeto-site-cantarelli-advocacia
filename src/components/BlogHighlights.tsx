import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BlogHighlights = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);
  const latestArticles = blogArticles.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Blog e Notícias
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Novidades do INSS, regras de aposentadoria e dicas para garantir seus direitos.
          </p>
        </div>

        <div
          ref={elementRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-up-scroll" : "opacity-0"
          }`}
        >
          {latestArticles.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group"
            >
              <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-0.5 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <h3 className="text-sm md:text-base font-display font-bold text-foreground mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-muted-foreground font-body line-clamp-2 mb-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground mt-auto pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{post.date}</span>
                    </div>
                    <span className="text-border">•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
