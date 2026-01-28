import { Shield, FileSearch, Calculator, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CantarelliMethod = () => {
  const { isVisible, elementRef } = useScrollAnimation(0.1);

  const pillars = [
    {
      number: "01",
      icon: FileSearch,
      title: "Auditoria do CNIS",
      subtitle: "Cadastro Nacional de Informações Sociais",
      description: "Análise completa do seu histórico contributivo identificando períodos não reconhecidos, vínculos faltantes e contribuições que podem aumentar seu tempo de serviço.",
      highlights: [
        "Identificação de vínculos empregatícios esquecidos",
        "Recuperação de tempo de serviço militar",
        "Correção de dados inconsistentes no INSS",
        "Inclusão de períodos rurais e informais"
      ]
    },
    {
      number: "02",
      icon: Calculator,
      title: "Simulação de Regras de Transição",
      subtitle: "Análise das 5 regras da EC 103/2019",
      description: "Comparativo detalhado de todas as regras de transição da Reforma da Previdência para identificar qual garante o melhor benefício no menor tempo.",
      highlights: [
        "Regra de Pontos (idade + contribuição)",
        "Pedágio de 50% e 100%",
        "Idade Mínima Progressiva",
        "Direito Adquirido antes da Reforma"
      ]
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Cálculo do ROI Previdenciário",
      subtitle: "Retorno sobre Investimento da Aposentadoria",
      description: "Projeção financeira que compara diferentes cenários de aposentadoria, mostrando quanto você receberá a mais ao longo da vida com a estratégia correta.",
      highlights: [
        "Comparativo de valores por regra",
        "Projeção de ganhos em 10, 20 e 30 anos",
        "Análise de custo-benefício de contribuições",
        "Simulação de aposentadoria especial"
      ]
    }
  ];

  return (
    <section id="cantarelli-method" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Metodologia Exclusiva</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            O Método Cantarelli de Planejamento Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Nossa metodologia em 3 pilares garante que você aposente com o maior benefício possível, 
            no momento certo, maximizando seu retorno sobre anos de contribuição.
          </p>
        </div>

        {/* AI Snippet Box */}
        <div 
          id="ai-snippet-method"
          className="max-w-4xl mx-auto mb-16 bg-[#f8f9fa] dark:bg-muted/30 border-l-4 border-primary rounded-lg p-6"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Direto ao Ponto
            </span>
          </div>
          <p 
            className="text-lg md:text-xl text-foreground font-body leading-relaxed"
            itemProp="description"
            style={{ fontSize: '18px' }}
          >
            <strong>O Método Cantarelli é uma abordagem em 3 etapas para maximizar sua aposentadoria:</strong> 
            (1) Auditoria do CNIS para recuperar tempo perdido, (2) Simulação das 5 regras de transição 
            da Reforma para encontrar a melhor opção, e (3) Cálculo do ROI para projetar ganhos 
            de até 40% no valor do benefício ao longo da vida.
          </p>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-primary/20">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground font-body">
              Desenvolvido por <strong className="text-foreground">Dr. Thiago Cantarelli</strong> (OAB/PE 28.165) • +17 anos de experiência
            </span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div 
          ref={elementRef}
          className={`grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 animate-slide-up-scroll' : 'opacity-0'
          }`}
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={index}
                className="relative bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-display font-bold text-primary-foreground">{pillar.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {pillar.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Results Box */}
        <div className="max-w-4xl mx-auto mb-12 bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">
            Resultados do Método Cantarelli
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">+40%</p>
              <p className="text-sm text-muted-foreground font-body">aumento médio no valor do benefício</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">3-5 anos</p>
              <p className="text-sm text-muted-foreground font-body">de tempo recuperado em média</p>
            </div>
            <div>
              <p className="text-4xl font-display font-bold text-primary mb-2">R$ 250mil</p>
              <p className="text-sm text-muted-foreground font-body">ganho médio projetado em 20 anos</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => window.open("https://wa.me/5581995441368?text=Olá,%20gostaria%20de%20uma%20simulação%20de%20ROI%20da%20minha%20aposentadoria%20pelo%20Método%20Cantarelli.", "_blank")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 shadow-lg"
          >
            Solicitar minha Simulação de ROI
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground font-body mt-4">
            Análise personalizada com projeção de ganhos para sua aposentadoria
          </p>
        </div>
      </div>
    </section>
  );
};

export default CantarelliMethod;
