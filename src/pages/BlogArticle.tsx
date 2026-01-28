import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Shield, User, Share2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogArticles } from "@/data/blogArticles";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display font-bold text-foreground mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link to="/#blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={`${article.title} | Cantarelli Advocacia`}
        description={article.excerpt}
        canonical={`https://cantarelli.adv.br/blog/${article.slug}`}
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/#blog" 
                className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Blog
              </Link>
              
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full mb-4">
                {article.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} de leitura</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Por {article.author}</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="mb-8"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Key Takeaways Box */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Pontos Principais
                  </h2>
                </div>
                <ul className="space-y-3">
                  {article.keyTakeaways.map((takeaway, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="font-body">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              {article.content.map((section, idx) => (
                <div key={idx} className="mb-8">
                  {section.type === "paragraph" && (
                    <p className="text-foreground/90 font-body leading-relaxed text-lg">
                      {section.text}
                    </p>
                  )}
                  {section.type === "heading" && (
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-12 mb-4">
                      {section.text}
                    </h2>
                  )}
                  {section.type === "subheading" && (
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mt-8 mb-3">
                      {section.text}
                    </h3>
                  )}
                  {section.type === "list" && (
                    <ul className="space-y-2 my-6">
                      {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/90">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span className="font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.type === "highlight" && (
                    <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r-lg my-8">
                      <p className="text-foreground font-body italic text-lg">
                        {section.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* E-E-A-T Section */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Conteúdo revisado por especialista
                  </p>
                  <p className="font-display font-semibold text-foreground">
                    Dr. {article.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Advogado especialista em Direito Previdenciário • Atualizado em {article.lastUpdated}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Precisa de ajuda com seu benefício?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nossa equipe de advogados especialistas em Direito Previdenciário está pronta para analisar seu caso e garantir seus direitos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Fale com um Especialista
                  </Button>
                </Link>
                <Link to="/#blog">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ver Mais Artigos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;
