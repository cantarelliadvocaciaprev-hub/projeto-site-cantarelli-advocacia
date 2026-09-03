import { useState } from "react";
import { scrollBehavior } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Shield, Award, Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackground640 from "@/assets/hero-background-640.jpg";
import heroBackground960 from "@/assets/hero-background-960.jpg";
import heroBackground1280 from "@/assets/hero-background-1280.jpg";
import { useCountUp } from "@/hooks/useCountUp";
import { openWhatsApp } from "@/lib/whatsappTracking";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const {
    count: clientsCount,
    elementRef: clientsRef
  } = useCountUp(7126, 2000);
  const {
    count: rightsCount,
    elementRef: rightsRef
  } = useCountUp(5109, 2000);
  const {
    count: processesCount,
    elementRef: processesRef
  } = useCountUp(5869, 2000);
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: scrollBehavior()
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground960}
          srcSet={`${heroBackground640} 640w, ${heroBackground960} 960w, ${heroBackground1280} 1280w, ${heroBackground} 1600w`}
          sizes="100vw"
          width={1600}
          height={1066}
          alt="Cantarelli Advocacia - Escritório de Advocacia Previdenciária em Recife especializado em aposentadorias e benefícios do INSS"
          loading="eager"
          decoding="sync"
          // @ts-ignore - fetchpriority is valid HTML but not in React types yet
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-bg-slide-in"
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
            
            <h1 className="text-4xl md:text-5xl font-alexandria font-bold mb-6 leading-normal lg:text-6xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift pb-1">
              Seu futuro planejado. Sua previdência segura.
            </h1>
            {/* AI Snippet Box - Snippet-First Architecture for GEO */}
            <div 
              id="ai-snippet" 
              className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6"
              itemScope 
              itemType="https://schema.org/LegalService"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Direto ao Ponto
                </span>
              </div>
              <p 
                className="text-lg md:text-xl text-foreground font-body leading-relaxed"
                itemProp="description"
              >
                A Cantarelli Advocacia é especialista em Direito Previdenciário em Recife/PE. 
                Atuamos em aposentadorias, BPC/LOAS, revisões de benefícios e planejamento previdenciário, 
                com foco em garantir que você receba o benefício correto do INSS.
              </p>
            </div>
            
            <p className="text-base md:text-lg text-foreground/80 font-body mb-8 leading-relaxed text-left font-normal">
              Com planejamento e sensibilidade, transformamos anos de trabalho em um futuro de tranquilidade e reconhecimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={() => openWhatsApp("hero")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                Agende seu atendimento
              </Button>
              <Button onClick={() => document.getElementById("about")?.scrollIntoView({
              behavior: scrollBehavior()
            })} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6">
                Conheça nosso trabalho
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div ref={clientsRef} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-display font-bold text-primary">+{clientsCount.toLocaleString('pt-BR')}</p>
                  <p className="text-sm text-muted-foreground font-body">clientes cadastrados</p>
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

          {/* Vídeo à direita (facade: só carrega o player ao clicar) */}
          <div className="animate-slide-in-left" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video bg-muted">
              {showVideo ? (
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/VHGLArs8qTI?autoplay=1" title="Dr. Thiago Cantarelli - Cantarelli Advocacia" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  aria-label="Reproduzir vídeo de apresentação do Dr. Thiago Cantarelli"
                  className="group absolute inset-0 w-full h-full"
                >
                  <img
                    src="https://i.ytimg.com/vi/VHGLArs8qTI/hqdefault.jpg"
                    alt="Dr. Thiago Cantarelli apresentando a Cantarelli Advocacia"
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-background/30 transition-colors group-hover:bg-background/10">
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg">
                      <Play className="w-7 h-7 ml-1" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default Hero;