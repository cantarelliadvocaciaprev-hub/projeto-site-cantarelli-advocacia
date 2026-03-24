import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";

const Blog = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 280;
    const amount = direction === "left" ? -(cardWidth + 16) : cardWidth + 16;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="blog" className="py-16 md:py-20 bg-card overflow-hidden">
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
          className={`relative max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-up-scroll" : "opacity-0"
          }`}
        >
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary text-primary-foreground shadow-lg items-center justify-center hover:bg-primary/90 transition-all"
              aria-label="Artigos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary text-primary-foreground shadow-lg items-center justify-center hover:bg-primary/90 transition-all"
              aria-label="Próximos artigos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
          >
            {blogArticles.slice(0, 8).map((post, index) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="group snap-start flex-shrink-0 w-[65vw] sm:w-[45vw] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
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

                    <div className="flex items-center gap-1 text-primary text-xs font-semibold mt-auto pt-2 border-t border-border group-hover:gap-2 transition-all">
                      <span>Leia Mais</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm md:text-base"
            >
              Ver todos os artigos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-3 md:hidden">
            Deslize para ver mais artigos →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
