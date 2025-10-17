import { Star, Quote, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Atendimento excepcional! A equipe foi muito atenciosa e profissional durante todo o processo da minha aposentadoria.",
      author: "Maria Silva",
      location: "Recife, PE",
      rating: 5,
    },
    {
      text: "Consegui minha revisão de benefício graças ao trabalho dedicado da Cantarelli. Muito obrigado!",
      author: "João Santos",
      location: "Olinda, PE",
      rating: 5,
    },
    {
      text: "Profissionais competentes e humanos. Me senti acolhida desde o primeiro contato.",
      author: "Ana Paula",
      location: "Jaboatão, PE",
      rating: 5,
    },
    {
      text: "O planejamento previdenciário me ajudou a entender exatamente quando e como me aposentar melhor.",
      author: "Carlos Mendes",
      location: "Recife, PE",
      rating: 5,
    },
    {
      text: "Equipe extremamente preparada e dedicada. Consegui minha aposentadoria especial com o apoio deles!",
      author: "Roberto Lima",
      location: "Recife, PE",
      rating: 5,
    },
    {
      text: "Transparência e honestidade em cada etapa do processo. Super recomendo!",
      author: "Fernanda Costa",
      location: "Paulista, PE",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nosso maior patrimônio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground font-body leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="https://g.page/r/CRjPlDrLjgBcEAE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Ver mais avaliações no Google
            </Button>
          </a>
          <a
            href="https://g.page/r/CRjPlDrLjgBcEAE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 bg-primary hover:bg-primary/90">
              <Star className="w-4 h-4" />
              Avaliar no Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
