import { Users, Target, Heart } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCarouselCenter } from "@/hooks/useCarouselCenter";
import { useState } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

// Importar imagens da galeria
import gallery1 from "@/assets/gallery/IMG_0711.jpg";
import gallery2 from "@/assets/gallery/IMG_0882.jpg";
import gallery3 from "@/assets/gallery/IMG_1115.jpg";
import gallery4 from "@/assets/gallery/IMG_1216.jpg";
import gallery5 from "@/assets/gallery/IMG_1279.jpg";
import gallery6 from "@/assets/gallery/IMG_1298.jpg";
import gallery7 from "@/assets/gallery/IMG_1562.jpg";
import gallery8 from "@/assets/gallery/IMG_1789.jpg";
import gallery9 from "@/assets/gallery/IMG_1889.jpg";
import gallery10 from "@/assets/gallery/IMG_2328.jpg";
import gallery11 from "@/assets/gallery/IMG_2412.jpg";
import gallery12 from "@/assets/gallery/IMG_2449.jpg";
import gallery13 from "@/assets/gallery/IMG_3446.jpg";
import gallery14 from "@/assets/gallery/IMG_3461.jpg";
import gallery15 from "@/assets/gallery/IMG_3632.jpg";
import gallery16 from "@/assets/gallery/IMG_3635.jpg";
import gallery17 from "@/assets/gallery/IMG_3782.jpg";

// Imagem em destaque da seção "Quem Somos"
import featuredImage from "@/assets/gallery/IMG_3739.jpg";

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
            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
              Há mais de 20 anos, transformando origens simples em liderança na advocacia previdenciária.
            </p>
          </div>



          {/* Imagem em destaque + Texto Institucional */}
          <div ref={textRef} className={`grid lg:grid-cols-2 gap-10 items-start mb-16 transition-all duration-700 ${textVisible ? 'opacity-100 animate-slide-in-right-fade' : 'opacity-0'}`}>
            <div className="lg:sticky lg:top-24">
              <div className="relative">
                {/* Moldura moderna e minimalista */}
                <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-t-2 border-l-2 border-primary/60 rounded-tl-lg" aria-hidden="true" />
                <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-b-2 border-r-2 border-primary/60 rounded-br-lg" aria-hidden="true" />
                <ImageWithSkeleton 
                  src={featuredImage} 
                  alt="Sócios da Cantarelli Advocacia - referência em Direito Previdenciário" 
                  className="relative w-full aspect-[3/4] rounded-lg shadow-lg"
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
        </div>
      </div>
    </section>;
};
export default About;
