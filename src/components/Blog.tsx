import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "Como funciona a Aposentadoria por Tempo de Contribuição em 2025",
      excerpt: "Entenda as regras de transição e como garantir o melhor benefício possível.",
      date: "15 de Janeiro, 2025",
      category: "Aposentadoria",
    },
    {
      title: "BPC/LOAS: Quem tem direito ao benefício assistencial?",
      excerpt: "Conheça os requisitos e documentos necessários para solicitar o BPC.",
      date: "10 de Janeiro, 2025",
      category: "Benefícios",
    },
    {
      title: "Revisão de Aposentadoria: vale a pena solicitar?",
      excerpt: "Descubra quando é possível revisar seu benefício e aumentar o valor recebido.",
      date: "5 de Janeiro, 2025",
      category: "Revisão",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Blog e Notícias
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Fique por dentro das novidades do INSS e do Direito Previdenciário.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-primary/10"></div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-body mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
