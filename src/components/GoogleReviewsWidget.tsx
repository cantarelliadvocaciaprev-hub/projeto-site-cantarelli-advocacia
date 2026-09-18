import { Star } from "lucide-react";

type Review = {
  name: string;
  initial: string;
  timeAgo: string;
  text: string;
};

// Avaliações reais do perfil da Cantarelli Advocacia no Google
const REVIEWS: Review[] = [
  {
    name: "Elia Silva",
    initial: "E",
    timeAgo: "há 2 semanas",
    text: "Minha experiência inicialmente está sendo de um caminho amplo, pois percebi que diante do diálogo profissional alguns impecilios poderão ser destruídos. Até logo, desde já obrigada.",
  },
  {
    name: "Ana Carla",
    initial: "A",
    timeAgo: "há 1 mês",
    text: "Muito satisfeita com o atendimento tanto do Dr. Thiago como de todos do escritório.",
  },
  {
    name: "Paulinha Machado",
    initial: "P",
    timeAgo: "há 2 meses",
    text: "Esse escritório merece as 5 estrelas: os horários são pontuais, você é atendido pelo próprio Dr. Tiago Cantarelli e a equipe planeja o melhor para a sua necessidade. A organização e a recepção são impecáveis e você é orientada no passo a passo, com acompanhamento até o final.",
  },
  {
    name: "Cristianne Boulitreau",
    initial: "C",
    timeAgo: "há 3 meses",
    text: "A minha experiência no Cantarelli Advocacia foi maravilhosa, fui muito bem recebida por todos. O acolhimento desde o primeiro momento até o cuidado comigo foi essencial nessa caminhada. Gratidão a todos e todas que fazem esta empresa.",
  },
  {
    name: "Alecsiano Silva",
    initial: "A",
    timeAgo: "há 4 meses",
    text: "Muito satisfeito com a recepção e atendimento, o qual superou minhas expectativas, abordando o assunto tecnicamente com simplicidade, citando todas as possibilidades, sem imposição de valores e exploração financeira.",
  },
  {
    name: "Rodrigo Solano",
    initial: "R",
    timeAgo: "há 5 meses",
    text: "Sempre muito prestativos e foco 100% em entender e resolver a necessidade do cliente. Isso faz toda diferença e me senti muito respeitado.",
  },
];

const RATING = "4.9";
const REVIEW_COUNT = 141;


const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/60"}`}
      />
    ))}
  </div>
);

const GoogleReviewsWidget = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
          Avaliações reais no Google
        </h3>
        <div className="w-16 h-1 bg-primary mx-auto mt-3 mb-6"></div>

        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4">
          <span className="font-display text-xl font-bold text-foreground">Google</span>
          <span className="text-3xl font-bold text-foreground">{RATING}</span>
          <Stars count={5} />
          <span className="text-muted-foreground font-body text-sm">
            ({REVIEW_COUNT} avaliações)
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {REVIEWS.map((review) => (
          <article
            key={review.name}
            className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                {review.initial}
              </div>
              <div className="min-w-0">
                <p className="truncate font-body font-semibold text-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
              </div>
            </div>
            <Stars count={5} />
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
              {review.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsWidget;
