import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Blog post images
import aposentadoriaImg from "@/assets/blog/aposentadoria-tempo-contribuicao.jpg";
import bpcLoasImg from "@/assets/blog/bpc-loas-beneficio.jpg";
import revisaoImg from "@/assets/blog/revisao-aposentadoria.jpg";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  keyTakeaways: string[];
  lastUpdated?: string;
  image: string;
  imageAlt: string;
}

const Blog = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);

  const posts: BlogPost[] = [
    {
      title: "Novas Regras de Aposentadoria em 2026: O Que Mudou no INSS",
      excerpt:
        "A partir de janeiro de 2026, novas exigências entraram em vigor para quem quer se aposentar. Idade mínima aumentou e pontuação subiu. Veja como se preparar.",
      date: "20 de Janeiro, 2026",
      category: "Aposentadoria",
      readTime: "7 min",
      keyTakeaways: [
        "Idade mínima subiu para 59 anos (mulheres) e 64 anos (homens) na regra de transição",
        "Pontuação exigida agora é 92 pontos para mulheres e 102 para homens",
        "Quem não cumpriu requisitos até 31/12/2025 precisa se adequar às novas regras",
      ],
      lastUpdated: "Janeiro 2026",
      image: aposentadoriaImg,
      imageAlt: "Casal de idosos analisando documentos de aposentadoria com advogado especialista em direito previdenciário",
    },
    {
      title: "Reajuste do INSS 2026: Novo Teto de R$ 8.475,55",
      excerpt:
        "O teto do INSS foi reajustado em 3,9% e agora é de R$ 8.475,55. Saiba como o reajuste afeta sua aposentadoria e benefícios.",
      date: "15 de Janeiro, 2026",
      category: "Benefícios",
      readTime: "5 min",
      keyTakeaways: [
        "Novo salário mínimo de R$ 1.518,00 serve de base para benefícios",
        "Teto do INSS passou para R$ 8.475,55 com reajuste de 3,9%",
        "Aposentados que ganham acima do mínimo tiveram reajuste pelo INPC",
      ],
      lastUpdated: "Janeiro 2026",
      image: revisaoImg,
      imageAlt: "Advogado analisando documentos financeiros e calculando reajuste de aposentadoria INSS 2026",
    },
    {
      title: "BPC/LOAS 2026: Quem Tem Direito e Como Solicitar",
      excerpt:
        "O Benefício de Prestação Continuada (BPC) garante um salário mínimo para idosos e pessoas com deficiência. Veja os requisitos atualizados.",
      date: "10 de Janeiro, 2026",
      category: "Assistencial",
      readTime: "6 min",
      keyTakeaways: [
        "Renda per capita familiar deve ser inferior a 1/4 do salário mínimo (R$ 379,50)",
        "Idosos a partir de 65 anos e PCDs de qualquer idade podem solicitar",
        "Não é necessário ter contribuído ao INSS para ter direito ao BPC",
      ],
      lastUpdated: "Janeiro 2026",
      image: bpcLoasImg,
      imageAlt: "Idosa recebendo apoio e cuidados assistenciais relacionados ao benefício BPC LOAS 2026",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Blog e Notícias sobre Direito Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Fique por dentro das novidades do INSS, regras de aposentadoria e
            dicas para garantir seus direitos previdenciários.
          </p>
        </div>

        <div
          ref={elementRef}
          className={`grid md:grid-cols-3 gap-6 max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-up-scroll" : "opacity-0"
          }`}
        >
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Blog Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground mb-3 leading-tight line-clamp-2">
                  {post.title}
                </h3>

                {/* AI Snippet Box - Snippet-First Architecture */}
                <div 
                  id={`ai-snippet-blog-${index}`}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Direto ao Ponto
                    </span>
                  </div>
                  <p 
                    className="text-base text-foreground font-body leading-relaxed"
                    itemProp="abstract"
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* Key Takeaways - Optimized for AI extraction */}
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">
                      Pontos Principais
                    </span>
                  </div>
                  <ul className="space-y-2" itemProp="about">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-foreground/80 font-body flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* E-E-A-T Badge */}
                <div className="flex items-center gap-2 mb-4 py-2 border-t border-b border-border">
                  <Shield className="w-3 h-3 text-primary" />
                  <span className="text-[10px] text-muted-foreground font-body">
                    Revisado por <strong className="text-foreground">Dr. Thiago Cantarelli</strong>
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.lastUpdated && (
                    <span className="text-primary/70 text-[10px]">
                      Atualizado: {post.lastUpdated}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80 mt-4 w-full justify-center"
                >
                  Ler artigo completo <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional SEO content for AI crawlers */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground font-body text-sm">
            A Cantarelli Advocacia publica regularmente conteúdos sobre Direito
            Previdenciário, incluindo atualizações sobre aposentadorias, BPC
            LOAS, revisões de benefícios e planejamento previdenciário. Nossa
            equipe de advogados especialistas em Recife/PE está sempre
            atualizada com as últimas mudanças na legislação previdenciária
            brasileira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
