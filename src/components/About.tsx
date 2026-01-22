import { Users, Target, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCarouselCenter } from "@/hooks/useCarouselCenter";
import { useState } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

// Importar imagens da galeria
import gallery1 from "@/assets/gallery/IMG_7269.jpg";
import gallery2 from "@/assets/gallery/IMG_7271.jpg";
import gallery3 from "@/assets/gallery/IMG_7426.jpg";
import gallery4 from "@/assets/gallery/IMG_7821.jpg";
import gallery5 from "@/assets/gallery/IMG_8660.jpg";
import gallery6 from "@/assets/gallery/IMG_8771.jpg";
import gallery7 from "@/assets/gallery/IMG_8698.jpg";
import gallery8 from "@/assets/gallery/office-1.jpg";
import gallery9 from "@/assets/gallery/office-2.jpg";
import gallery10 from "@/assets/gallery/office-3.jpg";
import gallery11 from "@/assets/gallery/IMG_7349.jpg";
import gallery12 from "@/assets/gallery/IMG_8009.jpg";
import gallery13 from "@/assets/gallery/IMG_8585.jpg";
import gallery14 from "@/assets/gallery/IMG_8799.jpg";
import gallery15 from "@/assets/gallery/IMG_8704.jpg";
import gallery16 from "@/assets/gallery/IMG_8781.jpg";
import gallery17 from "@/assets/gallery/IMG_8494.jpg";
import thiagoCantarelli from "@/assets/team/thiago-cantarelli.jpg";
import izabelaFarias from "@/assets/team/izabela-farias.jpg";
const About = () => {
  const {
    isVisible: titleVisible,
    elementRef: titleRef
  } = useScrollAnimation(0.1);
  const {
    isVisible: galleryVisible,
    elementRef: galleryRef
  } = useScrollAnimation(0.1);
  const {
    isVisible: textVisible,
    elementRef: textRef
  } = useScrollAnimation(0.1);
  const {
    isVisible: biosVisible,
    elementRef: biosRef
  } = useScrollAnimation(0.1);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const centerIndex = useCarouselCenter(carouselApi);
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17];
  const sectors = ["Marketing", "Comercial", "Recepção", "Atendimento", "Inicial", "Gestão", "Administração", "Controladoria", "Prazos", "Suporte Digital", "Financeiro"];
  return <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">Há 17 anos, unindo experiência e sensibilidade em cada atendimento. Hoje, somos 21 colaboradores distribuídos em 11 setores especializados, trabalhando com dedicação e empatia para garantir resultados que refletem nosso maior valor: cuidar de pessoas e proteger histórias.</p>
          </div>

          {/* Galeria de Imagens */}
          <div ref={galleryRef} className={`mb-12 transition-all duration-700 ${galleryVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <Carousel setApi={setCarouselApi} className="w-full max-w-5xl mx-auto" opts={{
            align: "center",
            loop: true
          }} plugins={[Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })]}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => {
                const isCenterSlide = index === centerIndex;
                return <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5 md:basis-1/2 lg:basis-1/3">
                      <div className="p-1 overflow-hidden">
                        <ImageWithSkeleton 
                          src={image} 
                          alt={`Cantarelli Advocacia - Escritório ${index + 1}`} 
                          className={`h-72 md:h-80 lg:h-96 bg-neutral-50 shadow-md transition-all duration-500 ease-in-out ${isCenterSlide ? 'carousel-center-item' : 'carousel-side-item'}`}
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </CarouselItem>;
              })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          {/* Texto Institucional */}
          <div ref={textRef} className={`prose prose-lg max-w-none mb-16 text-foreground font-body transition-all duration-700 ${textVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <p className="text-lg leading-relaxed mb-6">
              Em abril de 2008, nascia a Cantarelli Advocacia, um pequeno escritório movido por um grande propósito: defender pessoas e transformar vidas por meio do Direito. O que começou de forma simples, guiado pela coragem e pela vontade de fazer a diferença, tornou-se uma história construída com empatia, ética e resultados que mudam destinos.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Fundado pelo Dr. Thiago Cantarelli, o escritório nasceu do desejo de garantir dignidade e amparo a quem dedicou uma vida inteira ao trabalho. Com o tempo, essa missão ganhou força e forma, reunindo profissionais que acreditam que cada cliente carrega uma história única e merece ser ouvido com atenção e respeito.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Hoje, sob a direção do Dr. Thiago Cantarelli e da Dra. Izabela Farias, somos uma equipe que cresceu mantendo o mesmo propósito do início: cuidar de pessoas, assegurar direitos e oferecer esperança. Cada conquista representa mais do que um processo concluído — representa uma história de superação, um futuro protegido e o sentimento de dever cumprido.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Mais do que um escritório de advocacia, a Cantarelli é feita de gente que acredita na justiça como instrumento de transformação.
            </p>
          </div>

          {/* Biografias dos Fundadores */}
          <div ref={biosRef} className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 ${biosVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            {/* Dr. Thiago Cantarelli */}
            <div className="bg-background p-8 rounded-lg shadow-md animate-fade-in">
              <div className="mb-4">
                <ImageWithSkeleton 
                  src={thiagoCantarelli} 
                  alt="Dr. Thiago Cantarelli" 
                  className="w-full aspect-[3/4] rounded-lg mb-4"
                  style={{ objectFit: 'cover' }}
                />
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  Dr. Thiago Cantarelli
                </h3>
                
                <p className="text-muted-foreground font-body italic mb-4">
                  Advogado | Fundador da Cantarelli Advocacia
                </p>
              </div>
              <div className="space-y-4 text-foreground/90 font-body">
                <p>
                  É referência em Direito Previdenciário e Planejamento de Aposentadorias Programáveis. Lidera uma equipe multidisciplinar comprometida com a excelência técnica e o atendimento humanizado, princípios que transformaram o escritório em uma das maiores referências previdenciárias do Nordeste.
                </p>
                <p>
                  Graduado em Direito e com sólida formação em legislação previdenciária e gestão jurídica, o Dr. Thiago alia técnica, estratégia e sensibilidade humana em cada caso, sempre com foco na defesa de direitos e construção de soluções seguras e personalizadas.
                </p>
                <p>
                  À frente da Cantarelli, é responsável por implementar metodologias de gestão, inovação e qualidade que resultaram em mais de 4.500 processos protocolados desde 2018, reafirmando o compromisso com a eficiência, ética e respeito à história de cada cliente.
                </p>
                <p className="text-primary italic font-medium border-l-4 border-primary pl-4 mt-6">
                  "O Direito Previdenciário é, acima de tudo, uma forma de garantir dignidade a quem dedicou sua vida ao trabalho."
                </p>
              </div>
            </div>

            {/* Dra. Izabela Farias */}
            <div className="bg-background p-8 rounded-lg shadow-md animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              <div className="mb-0">
                <ImageWithSkeleton 
                  src={izabelaFarias} 
                  alt="Dra. Izabela Farias" 
                  className="w-full aspect-[3/4] rounded-lg mb-4"
                  style={{ objectFit: 'cover' }}
                />
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                  Dra. Izabela Farias
                </h3>
                
                <p className="text-muted-foreground font-body italic mb-4">
                  Advogada | Diretora de Operações da Cantarelli Advocacia
                </p>
              </div>
              <div className="space-y-4 text-foreground/90 font-body">
                <p>
                  Reconhecida por sua atuação técnica e empática, é especialista em Direito Previdenciário, com ampla experiência em análise de benefícios, revisões e perícias médicas. Na Cantarelli, exerce papel essencial na coordenação jurídica e estratégica dos processos, garantindo que cada cliente receba um atendimento detalhado, humanizado e eficaz.
                </p>
                <p>
                  Com sólida formação e atualização constante nas Leis 8.213/91, 8.212/91, Decreto 3.048/99, IN 128/2022 e EC 103/2019, destaca-se pela clareza nas orientações e pela condução sensível e assertiva dos casos.
                </p>
                <p className="text-primary italic font-medium border-l-4 border-primary pl-4 mt-6">
                  "Cada processo representa uma vida, uma história e um direito que precisa ser respeitado. É por isso que tratamos cada caso com o cuidado que ele merece."
                </p>
              </div>
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground font-body">
                Garantir os direitos previdenciários de nossos clientes com excelência, ética e compromisso, transformando vidas através da justiça social.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{
            animationDelay: "0.1s"
          }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground font-body">
                Ser referência nacional em Direito Previdenciário, reconhecidos pela qualidade técnica e pelo atendimento humanizado.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{
            animationDelay: "0.2s"
          }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Valores</h3>
              <p className="text-muted-foreground font-body">
                Ética, transparência, empatia, compromisso com resultados e respeito incondicional a cada cliente.
              </p>
            </div>
          </div>

          {/* Setores do Escritório */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Nossos Setores</h3>
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-wrap justify-center gap-3">
                {sectors.slice(0, 6).map((sector, index) => <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body hover:bg-primary/20 transition-colors">
                    {sector}
                  </span>)}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {sectors.slice(6).map((sector, index) => <span key={index + 6} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body hover:bg-primary/20 transition-colors">
                    {sector}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;