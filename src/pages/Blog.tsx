import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEO from "@/components/SEO";

const Blog = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title="Blog | Cantarelli Advocacia - Notícias sobre Direito Previdenciário"
        description="Artigos, notícias e atualizações sobre Direito Previdenciário, INSS, aposentadorias, BPC/LOAS e mais. Conteúdo atualizado por especialistas."
        keywords="blog direito previdenciário, notícias INSS 2026, aposentadoria blog, BPC LOAS artigos, reforma previdenciária"
        canonical="https://cantarelliadvocacia.com.br/blog"
      />
      <Header />
      <main className="pt-24 pb-16 md:pt-28 md:pb-20 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Blog e Notícias
            </h1>
            <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Novidades do INSS, regras de aposentadoria e dicas para garantir seus direitos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {blogArticles.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                key={post.slug}
                className="group"
              >
                <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-xl h-full flex flex-col">
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
                    <h2 className="text-sm md:text-base font-display font-bold text-foreground mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

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
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Blog;
