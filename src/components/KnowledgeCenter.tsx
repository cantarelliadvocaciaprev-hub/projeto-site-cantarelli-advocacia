import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, Lightbulb, Shield, AlertTriangle, Brain, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Article {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  categoryIcon: React.ElementType;
  readTime: string;
  keyTakeaways: string[];
  technicalTerms: string[];
  lastReviewedBy: string;
  lastUpdated: string;
}

const KnowledgeCenter = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);

  const articles: Article[] = [
    {
      title: "Síndrome de Burnout em Bancários: Direitos e Benefícios do INSS",
      slug: "burnout-bancarios-direitos-inss",
      excerpt: "Bancários diagnosticados com Síndrome de Burnout (CID-11 QD85) têm direito ao Auxílio-Doença e, em casos de sequelas permanentes, ao Auxílio-Acidente com indenização de 50% do salário.",
      date: "25 de Janeiro, 2025",
      category: "Saúde Ocupacional",
      categoryIcon: Brain,
      readTime: "12 min",
      keyTakeaways: [
        "Burnout foi reconhecido pela OMS como doença ocupacional (CID-11 QD85)",
        "Metas abusivas e assédio moral são causas reconhecidas pelo INSS",
        "Nexo Concausal comprova relação entre trabalho e adoecimento",
        "Benefício pode ser convertido em Auxílio-Acidente vitalício",
        "Estabilidade de 12 meses garantida após retorno ao trabalho"
      ],
      technicalTerms: ["CID-11 QD85", "Nexo Concausal", "B91", "Metas Abusivas"],
      lastReviewedBy: "Dr. Thiago Cantarelli",
      lastUpdated: "Janeiro 2026"
    },
    {
      title: "LER/DORT para Trabalhadores: Como Obter o Auxílio-Acidente",
      slug: "ler-dort-auxilio-acidente",
      excerpt: "A Lesão por Esforço Repetitivo (LER) e os Distúrbios Osteomusculares Relacionados ao Trabalho (DORT) garantem direito ao Auxílio-Acidente quando deixam sequelas que reduzem a capacidade laboral.",
      date: "20 de Janeiro, 2025",
      category: "Doenças Ocupacionais",
      categoryIcon: Briefcase,
      readTime: "10 min",
      keyTakeaways: [
        "LER/DORT são as doenças ocupacionais mais comuns no Brasil",
        "Sequelas permanentes garantem Auxílio-Acidente (50% do salário)",
        "O benefício acumula com salário e futura aposentadoria",
        "CAT (Comunicação de Acidente) deve ser emitida pelo empregador",
        "Perícia do INSS avalia o grau de redução da capacidade"
      ],
      technicalTerms: ["CID M70-M79", "CAT", "B91", "Nexo Técnico Epidemiológico"],
      lastReviewedBy: "Dra. Izabela Farias",
      lastUpdated: "Janeiro 2026"
    },
    {
      title: "Auxílio-Acidente para Motociclistas: Guia Completo 2025",
      slug: "auxilio-acidente-motociclistas",
      excerpt: "Motociclistas que sofrem acidentes de trânsito e ficam com sequelas permanentes têm direito ao Auxílio-Acidente do INSS, independentemente de culpa no acidente.",
      date: "15 de Janeiro, 2025",
      category: "Acidentes de Trânsito",
      categoryIcon: AlertTriangle,
      readTime: "8 min",
      keyTakeaways: [
        "Qualquer sequela permanente garante direito ao benefício",
        "Não importa quem causou o acidente (culpa é irrelevante)",
        "Entregadores de app (iFood, Rappi) também têm direito",
        "Benefício de 50% do salário é vitalício e acumula com trabalho",
        "Prazo para solicitar: até a data da aposentadoria"
      ],
      technicalTerms: ["B91", "Acidente de Trajeto", "Consolidação das Lesões"],
      lastReviewedBy: "Dr. Thiago Cantarelli",
      lastUpdated: "Janeiro 2026"
    }
  ];

  return (
    <section id="knowledge-center" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Centro de Conhecimento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Artigos Especializados em Direito Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Conteúdo técnico e atualizado sobre benefícios do INSS, doenças ocupacionais, 
            e estratégias para garantir seus direitos previdenciários.
          </p>
        </div>

        {/* Articles Grid */}
        <div
          ref={elementRef}
          className={`grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 animate-slide-up-scroll" : "opacity-0"
          }`}
        >
          {articles.map((article, index) => {
            const CategoryIcon = article.categoryIcon;
            return (
              <Card
                key={index}
                className="overflow-hidden bg-background border-border hover:border-primary transition-all duration-300 hover:shadow-xl flex flex-col"
                itemScope
                itemType="https://schema.org/Article"
              >
                {/* Category Header */}
                <div className="h-14 bg-primary/10 flex items-center justify-between px-6">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      {article.category}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 
                    className="text-xl font-display font-bold text-foreground mb-4 leading-tight"
                    itemProp="headline"
                  >
                    {article.title}
                  </h3>

                  {/* AI Snippet Box - Snippet-First Architecture */}
                  <div 
                    id={`ai-snippet-article-${index}`}
                    className="bg-[#f8f9fa] dark:bg-muted/30 border-l-4 border-primary rounded-r-lg p-4 mb-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        Direto ao Ponto
                      </span>
                    </div>
                    <p 
                      className="text-base text-foreground font-body leading-relaxed"
                      itemProp="abstract"
                      style={{ fontSize: '16px' }}
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="bg-muted/30 rounded-lg p-4 mb-4 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold text-foreground">
                        Pontos Principais
                      </span>
                    </div>
                    <ul className="space-y-2" itemProp="about">
                      {article.keyTakeaways.map((takeaway, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-foreground/80 font-body flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          <span>
                            {idx === 0 ? (
                              <strong className="text-foreground">{takeaway}</strong>
                            ) : (
                              takeaway
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Terms - SEO Keywords */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.technicalTerms.map((term, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded font-mono"
                      >
                        {term}
                      </span>
                    ))}
                  </div>

                  {/* E-E-A-T Badge */}
                  <div className="flex items-center gap-2 py-3 border-t border-b border-border mb-4">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground font-body">
                      Revisado por <strong className="text-foreground">{article.lastReviewedBy}</strong>
                    </span>
                    <span className="text-xs text-primary/70 ml-auto">
                      {article.lastUpdated}
                    </span>
                  </div>

                  {/* Meta & CTA */}
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span itemProp="datePublished">{article.date}</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 w-full justify-center mt-auto"
                  >
                    Ler artigo completo <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            O Centro de Conhecimento da Cantarelli Advocacia oferece artigos técnicos sobre 
            Direito Previdenciário, incluindo análises sobre Burnout em bancários, LER/DORT, 
            Auxílio-Acidente para motociclistas, e outras doenças ocupacionais. Todo conteúdo 
            é revisado por advogados especialistas em Previdência Social com registro na OAB/PE.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;
