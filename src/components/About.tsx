import { Users, Target, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCarouselCenter } from "@/hooks/useCarouselCenter";
import { useState, useEffect, useRef } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

// Importar imagens da galeria (WebP responsivo: múltiplas larguras geradas no build)
import gallery1 from "@/assets/gallery/IMG_0711.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery2 from "@/assets/gallery/IMG_0882.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery3 from "@/assets/gallery/IMG_1115.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery4 from "@/assets/gallery/IMG_1216.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery5 from "@/assets/gallery/IMG_1279.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery6 from "@/assets/gallery/IMG_1298.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery7 from "@/assets/gallery/IMG_1562.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery8 from "@/assets/gallery/IMG_1789.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery9 from "@/assets/gallery/IMG_1889.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery10 from "@/assets/gallery/IMG_2328.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery11 from "@/assets/gallery/IMG_2412.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery12 from "@/assets/gallery/IMG_2449.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery13 from "@/assets/gallery/IMG_3446.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery14 from "@/assets/gallery/IMG_3461.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery15 from "@/assets/gallery/IMG_3632.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery16 from "@/assets/gallery/IMG_3635.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery17 from "@/assets/gallery/IMG_3782.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery18 from "@/assets/gallery/IMG_3426.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery19 from "@/assets/gallery/IMG_3332.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery20 from "@/assets/gallery/IMG_3273.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery21 from "@/assets/gallery/IMG_3212.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery22 from "@/assets/gallery/IMG_3074.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery23 from "@/assets/gallery/IMG_3035.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery24 from "@/assets/gallery/IMG_3007.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery25 from "@/assets/gallery/IMG_2938.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery26 from "@/assets/gallery/IMG_2888.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";
import gallery27 from "@/assets/gallery/IMG_2786.jpg?w=360;540;720;1080&format=webp&quality=72&as=srcset";

// Imagem em destaque da seção "Quem Somos" (WebP responsivo)
import featuredImage from "@/assets/gallery/IMG_3739.jpg?w=480;720;900;1200&format=webp&quality=78&as=srcset";

// Extrai a primeira URL de um srcset para usar como fallback do atributo src
const srcFromSrcset = (srcset: string) => srcset.split(",")[0].trim().split(" ")[0];

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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const centerIndex = useCarouselCenter(carouselApi);
  const stickySentinelRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const sentinel = stickySentinelRef.current;
    if (!sentinel) return;
    // Detecta quando a imagem passa a ficar "sticky" (sentinela sai do topo abaixo do offset top-24 = 96px)
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { rootMargin: "-96px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);
  const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25, gallery26, gallery27];
  const sectors = ["Marketing", "Comercial", "Recepção", "Atendimento", "Inicial", "Gestão", "Administração", "Controladoria", "Prazos", "Suporte Digital", "Financeiro"];
  return <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              Há mais de 20 anos, transformando origens simples em liderança na advocacia previdenciária.
            </p>
          </div>



          {/* Imagem em destaque + Texto Institucional */}
          <div ref={textRef} className={`grid lg:grid-cols-2 gap-10 items-start mb-16 transition-all duration-700 ${textVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <div className="lg:sticky lg:top-24">
              {/* Sentinela para detectar o estado sticky */}
              <div ref={stickySentinelRef} className="absolute h-px w-px" aria-hidden="true" />
              <div className={`relative transition-all duration-500 ease-out ${isStuck ? 'lg:scale-[0.97] lg:-translate-y-1' : 'lg:scale-100 lg:translate-y-0'}`}>
                {/* Moldura moderna e minimalista */}
                <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" aria-hidden="true" />
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-2 border-r-2 border-primary/60 rounded-br-lg" aria-hidden="true" />
                <ImageWithSkeleton 
                  src={srcFromSrcset(featuredImage)} 
                  srcSet={featuredImage}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="Sócios da Cantarelli Advocacia - referência em Direito Previdenciário" 
                  className={`relative w-full aspect-[3/4] rounded-lg transition-shadow duration-500 ease-out ${isStuck ? 'lg:shadow-2xl' : 'shadow-lg'}`}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>


            <div className="text-foreground font-body space-y-5">
              <p className="text-lg leading-relaxed">
                A nossa história não começou em grandes salas comerciais ou com estruturas imponentes. Em abril de 2008, nascia a Cantarelli Advocacia: um projeto que ganhou vida de forma simples, movido pela coragem, por pouquíssimos recursos e por um propósito inabalável: garantir dignidade a quem dedicou uma vida inteira ao trabalho.
              </p>
              <p className="text-lg leading-relaxed">
                Sabemos exatamente o valor do esforço de quem vem de baixo, porque essa também é a nossa raiz. Foi essa vivência que moldou nossa sensibilidade para entender que, por trás de cada documento ou pedido de aposentadoria, existe uma vida real que não pode esperar.
              </p>

              <h3 className="text-2xl font-display font-bold text-foreground pt-2">
                De um início humilde a uma das maiores referências do mercado
              </h3>
              <p className="text-lg leading-relaxed">
                O mercado jurídico é competitivo, mas a verdade e o compromisso com o cliente sempre abrem caminhos. O que começou como o sonho solitário do fundador, Dr. Thiago Cantarelli, consolidou-se através de uma gestão técnica, humana e inovadora.
              </p>
              <p className="text-lg leading-relaxed">
                Hoje, sob a liderança do Dr. Thiago Cantarelli, da Dra. Izabela Farias e da Dra. Milena Moura, a Cantarelli Advocacia orgulha-se de ser um dos escritórios mais procurados e respeitados do país no segmento previdenciário.
              </p>
              <p className="text-lg leading-relaxed">
                Nossa estrutura cresceu para acompanhar a enorme demanda, mas sem perder a essência:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 text-lg leading-relaxed">
                  <span className="text-primary font-bold">•</span>
                  <span>Colaboradores altamente qualificados prontos para acolher cada caso.</span>
                </li>
                <li className="flex gap-3 text-lg leading-relaxed">
                  <span className="text-primary font-bold">•</span>
                  <span>Setores especializados que garantem que nenhuma brecha legal seja esquecida na defesa dos seus direitos.</span>
                </li>
                <li className="flex gap-3 text-lg leading-relaxed">
                  <span className="text-primary font-bold">•</span>
                  <span>Atendimento focado em alta performance, unindo tecnologia de ponta à máxima empatia.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-display font-bold text-foreground pt-2">
                Nosso maior valor: cuidar de pessoas e proteger histórias
              </h3>
              <p className="text-lg leading-relaxed">
                Para nós, o sucesso e a alta procura não são medidos apenas pelo volume de processos ganhos, mas pelo tamanho do impacto que geramos na vida das famílias que confiam em nosso trabalho. Cada conquista em nosso escritório representa muito mais do que um caso encerrado; representa um futuro protegido, uma injustiça corrigida e o resgate da dignidade de um trabalhador.
              </p>
              <p className="text-lg leading-relaxed">
                Mais do que uma banca de advogados renomados, a Cantarelli Advocacia é feita de pessoas que vieram de baixo, venceram pelo trabalho e hoje usam o Direito como o maior instrumento de transformação social e amparo para a sua vida.
              </p>
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

          {/* Galeria de Imagens */}
          <div ref={galleryRef} className={`mt-16 transition-all duration-700 ${galleryVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <Carousel setApi={setCarouselApi} className="w-full max-w-5xl mx-auto px-10 md:px-12" opts={{
            align: "center",
            loop: true
          }} plugins={[Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          })]}>
              <CarouselContent className="-ml-3 md:-ml-4">
                {galleryImages.map((image, index) => {
                const isCenterSlide = index === centerIndex;
                return <CarouselItem key={index} className="pl-3 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                      <div className="overflow-hidden rounded-lg">
                        <ImageWithSkeleton 
                          src={srcFromSrcset(image)} 
                          srcSet={image}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          alt={`Cantarelli Advocacia - Escritório de Direito Previdenciário em Recife - Imagem ${index + 1}`} 
                          className={`w-full aspect-[4/5] rounded-lg bg-neutral-100 shadow-md transition-all duration-500 ease-in-out ${isCenterSlide ? 'carousel-center-item' : 'carousel-side-item'}`}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </CarouselItem>;
              })}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:left-2" />
              <CarouselNext className="right-0 md:right-2" />
            </Carousel>
          </div>

        </div>
      </div>
    </section>;
};
export default About;
