import { Button } from "@/components/ui/button";
import { Shield, Award } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img src={officeBuilding} alt="Cantarelli Advocacia - Escritório" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 bg-slate-50 rounded-full">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-foreground">4.9 estrelas no Google</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-display mb-6 leading-tight font-extrabold text-slate-600 lg:text-7xl">Especialistas em Direito Previdenciário
        </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8 leading-relaxed">Transformando conhecimento jurídico em amparo real.
Com equipe altamente qualificada, unimos técnica, estratégia e empatia para proteger o presente e garantir o futuro de quem confia em nós.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
              Agende seu atendimento
            </Button>
            <Button onClick={() => document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
          })} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
              Conheça nosso trabalho
            </Button>
          </div>

          <div className="flex items-center gap-3 bg-card p-6 rounded-lg shadow-sm border border-border">
            <Shield className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <p className="text-3xl font-display font-bold text-primary">+5.800</p>
              <p className="text-muted-foreground font-body">processos protocolados</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
