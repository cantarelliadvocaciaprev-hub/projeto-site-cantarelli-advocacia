import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              A Cantarelli Advocacia é um escritório especializado em Direito Previdenciário, com mais de 17 anos de experiência transformando vidas através da conquista de direitos previdenciários.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12 text-foreground font-body">
            <p className="text-lg leading-relaxed mb-6">
              Nossa equipe é formada por 21 colaboradores dedicados, distribuídos em 11 setores especializados, todos comprometidos em oferecer um atendimento humanizado e personalizado. Acreditamos que cada cliente tem uma história única e merece atenção individualizada.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Fundado pelo Dr. Thiago Cantarelli e pela Dra. Izabela Farias, nosso escritório se destaca pela ética, transparência e resultados comprovados, com mais de 9.200 processos protocolados ao longo de nossa trajetória.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground font-body">
                Garantir os direitos previdenciários de nossos clientes com excelência, ética e compromisso, transformando vidas através da justiça social.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground font-body">
                Ser referência nacional em Direito Previdenciário, reconhecidos pela qualidade técnica e pelo atendimento humanizado.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Valores</h3>
              <p className="text-muted-foreground font-body">
                Ética, transparência, empatia, compromisso com resultados e respeito incondicional a cada cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
