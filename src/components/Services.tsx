import { Scale, FileCheck, Shield, Heart, Briefcase, ClipboardCheck, Building2, Gavel, Users, Target, BadgeCheck, Calculator, TrendingUp, FileText, UserCheck, Baby, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { isVisible: primaryVisible, elementRef: primaryRef } = useScrollAnimation(0.1);
  const { isVisible: secondaryVisible, elementRef: secondaryRef } = useScrollAnimation(0.1);
  const primaryServices = [{
    icon: ClipboardCheck,
    title: "Planejamento Previdenciário",
    description: "Método Cantarelli: Auditoria CNIS, Simulação de Regras e Cálculo de ROI para maximizar sua aposentadoria."
  }, {
    icon: Scale,
    title: "Aposentadorias Programáveis",
    description: "Análise completa do seu tempo de contribuição para garantir o melhor benefício."
  }, {
    icon: Target,
    title: "Auxílio-Acidente",
    description: "Indenização de 50% para trabalhadores com sequelas permanentes de acidentes de trabalho."
  }, {
    icon: Users,
    title: "BPC Autista",
    description: "Benefício assistencial para pessoas com Transtorno do Espectro Autista."
  }, {
    icon: FileCheck,
    title: "Revisões Previdenciárias",
    description: "Reavaliação de benefícios concedidos com valores incorretos ou desatualizados."
  }, {
    icon: TrendingUp,
    title: "Pedidos em Análise",
    description: "Acompanhamento e agilização de benefícios pendentes de decisão no INSS."
  }, {
    icon: Calculator,
    title: "Isenção de Imposto de Renda",
    description: "Assessoria para obtenção de isenção de IR para aposentados com doenças graves."
  }, {
    icon: BadgeCheck,
    title: "Diagnóstico Previdenciário",
    description: "Análise completa da sua situação previdenciária e melhor estratégia a seguir."
  }];
  const secondaryServices = [{
    icon: Shield,
    title: "Aposentadoria Especial",
    description: "Para quem trabalhou exposto a agentes nocivos à saúde."
  }, {
    icon: Heart,
    title: "BPC/LOAS",
    description: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda."
  }, {
    icon: Briefcase,
    title: "Auxílio-Doença",
    description: "Garantia do benefício por incapacidade temporária para o trabalho."
  }, {
    icon: UserCheck,
    title: "Aposentadoria por Invalidez",
    description: "Benefício para quem está permanentemente incapacitado para o trabalho."
  }, {
    icon: Gavel,
    title: "Judicialização contra o INSS",
    description: "Ação judicial para benefícios negados ou indeferidos."
  }, {
    icon: FileText,
    title: "Mandado de Segurança",
    description: "Proteção de direitos líquidos e certos violados pela administração."
  }, {
    icon: Baby,
    title: "Salário-Maternidade",
    description: "Benefício pago durante o período de licença maternidade."
  }, {
    icon: Heart,
    title: "Pensão por Morte",
    description: "Benefício para dependentes de segurado falecido."
  }, {
    icon: Building2,
    title: "RPPS - Regime Próprio",
    description: "Atendimento especializado para servidores públicos estaduais e municipais."
  }, {
    icon: Lock,
    title: "Auxílio-Reclusão",
    description: "Benefício para dependentes de segurado detido ou recluso."
  }];
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Áreas de Atuação em Direito Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Oferecemos soluções completas em Direito Previdenciário, com expertise em todas as modalidades de benefícios do INSS.
          </p>
          <p className="text-sm text-muted-foreground/70 font-body mt-2">
            Última atualização: Janeiro de 2026
          </p>
        </div>

        {/* Serviços Carro-Chefe */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-foreground text-center mb-8">Serviços em destaque</h3>
          <div ref={primaryRef} className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-700 ${primaryVisible ? 'opacity-100 animate-slide-up-scroll' : 'opacity-0'}`}>
            {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return <div key={index} className="bg-card p-6 rounded-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-xl">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>;
          })}
          </div>
        </div>

        {/* Serviços Secundários */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Outros Serviços
          </h3>
          <div ref={secondaryRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto transition-all duration-700 ${secondaryVisible ? 'opacity-100 animate-slide-up-scroll' : 'opacity-0'}`}>
            {secondaryServices.map((service, index) => {
            const Icon = service.icon;
            return <div key={index} className="bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold text-foreground mb-1">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground font-body text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Services;