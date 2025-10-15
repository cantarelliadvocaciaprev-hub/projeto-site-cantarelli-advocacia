import { Scale, FileCheck, Shield, Heart, Briefcase, ClipboardCheck, Building2, Gavel } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Aposentadorias Programáveis",
      description: "Análise completa do seu tempo de contribuição para garantir o melhor benefício.",
    },
    {
      icon: Shield,
      title: "Aposentadoria Especial",
      description: "Para quem trabalhou exposto a agentes nocivos à saúde ou integridade física.",
    },
    {
      icon: FileCheck,
      title: "Revisões Previdenciárias",
      description: "Reavaliação de benefícios concedidos com valores incorretos ou desatualizados.",
    },
    {
      icon: Heart,
      title: "BPC/LOAS",
      description: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda.",
    },
    {
      icon: Briefcase,
      title: "Auxílio-doença",
      description: "Garantia do benefício por incapacidade temporária para o trabalho.",
    },
    {
      icon: ClipboardCheck,
      title: "Planejamento Previdenciário",
      description: "Estratégia personalizada para otimizar seu tempo de contribuição e valor do benefício.",
    },
    {
      icon: Building2,
      title: "RPPS - Regime Próprio",
      description: "Atendimento especializado para servidores públicos estaduais e municipais.",
    },
    {
      icon: Gavel,
      title: "Judicialização contra o INSS",
      description: "Ação judicial para benefícios negados ou indeferidos administrativamente.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Oferecemos soluções completas em Direito Previdenciário, com expertise em todas as modalidades de benefícios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
