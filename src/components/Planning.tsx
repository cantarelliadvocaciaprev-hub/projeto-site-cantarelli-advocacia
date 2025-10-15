import { Button } from "@/components/ui/button";
import { Search, Calculator, FileText, CheckCircle2 } from "lucide-react";

const Planning = () => {
  const steps = [
    {
      icon: Search,
      title: "Coleta de Dados",
      description: "Analisamos seu histórico profissional e contribuições ao INSS.",
    },
    {
      icon: Calculator,
      title: "Simulação",
      description: "Calculamos diferentes cenários para identificar a melhor estratégia.",
    },
    {
      icon: FileText,
      title: "Análise Jurídica",
      description: "Avaliamos as alternativas e recomendamos o melhor caminho.",
    },
    {
      icon: CheckCircle2,
      title: "Entrega do Plano",
      description: "Você recebe um relatório completo com todas as orientações.",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="planning" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Planejamento Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Planejar hoje é garantir o futuro com segurança. Maximize o valor do seu benefício com estratégia personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Solicitar Planejamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Planning;
