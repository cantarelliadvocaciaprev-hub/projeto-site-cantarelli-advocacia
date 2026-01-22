import { Button } from "@/components/ui/button";
import { Shield, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
const Hero = () => {
  const {
    count: clientsCount,
    elementRef: clientsRef
  } = useCountUp(3100, 2000);
  const {
    count: rightsCount,
    elementRef: rightsRef
  } = useCountUp(2900, 2000);
  const {
    count: processesCount,
    elementRef: processesRef
  } = useCountUp(5800, 2000);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <ImageWithSkeleton 
          src={heroBackground} 
          alt="Cantarelli Advocacia - Escritório" 
          className="w-full h-full animate-bg-slide-in"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          enableLazyLoad={false}
          // @ts-ignore - fetchpriority is valid but not in React types yet
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo à esquerda */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-body text-foreground">4.9 estrelas no Google</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-alexandria font-bold mb-6 leading-tight lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift">
              Segurança financeira e o futuro que você merece.
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 font-body mb-8 leading-relaxed text-left font-normal">
              Com planejamento e sensibilidade, transformamos anos de trabalho em um futuro de tranquilidade e reconhecimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={() => window.open("https://wa.me/5581995441368?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.", "_blank")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Agende seu atendimento
              </Button>
              <Button onClick={() => document.getElementById("about")?.scrollIntoView({
              behavior: "smooth"
            })} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                Conheça nosso trabalho
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div ref={clientsRef} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-display font-bold text-primary">+{clientsCount.toLocaleString('pt-BR')}</p>
                  <p className="text-sm text-muted-foreground font-body">clientes ativos</p>
                </div>
              </div>
              <div ref={rightsRef} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Award className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-display font-bold text-primary">+{rightsCount.toLocaleString('pt-BR')}</p>
                  <p className="text-sm text-muted-foreground font-body">direitos assegurados</p>
                </div>
              </div>
              <div ref={processesRef} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm border border-border sm:col-span-2 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-display font-bold text-primary">+{processesCount.toLocaleString('pt-BR')}</p>
                  <p className="text-sm text-muted-foreground font-body">processos protocolados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vídeo à direita */}
          <div className="animate-slide-in-left" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/VHGLArs8qTI" title="Dr. Thiago Cantarelli - Cantarelli Advocacia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;