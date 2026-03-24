import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const INITIAL_COUNT = 4;

const Blog = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);
  const [showAll, setShowAll] = useState(false);

  const visibleArticles = showAll ? blogArticles : blogArticles.slice(0, INITIAL_COUNT);

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Blog e Notícias
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Novidades do INSS, regras de aposentadoria e dicas para garantir seus direitos.
          </p>
        </div>

        <div
          ref={elementRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-up-scroll" : "opacity-0"
          }`}
        >
          {visibleArticles.map((post, index) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
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

                  <p className="text-xs text-muted-foreground font-body line-clamp-2 mb-3 flex-1 hidden md:block">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] md:text-xs text-muted-foreground mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="hidden sm:inline">{post.date}</span>
                      <span className="sm:hidden">{post.date.split(",")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-primary text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                    <span className="hidden md:inline">Ler artigo</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Show more button */}
        {blogArticles.length > INITIAL_COUNT && !showAll && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ver mais artigos ({blogArticles.length - INITIAL_COUNT} restantes)
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
