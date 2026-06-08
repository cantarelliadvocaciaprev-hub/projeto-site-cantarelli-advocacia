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
    name: "Isaura Aragão",
    initial: "I",
    timeAgo: "há 1 dia",
    text: "Ótimo atendimento, gostei muito do profissional que me atendeu.",
  },
  {
    name: "Deive Freire",
    initial: "D",
    timeAgo: "há 10 dias",
    text: "Excelente atendimento.",
  },
  {
    name: "Leila Leonel Nunes Leonel",
    initial: "L",
    timeAgo: "há 11 dias",
    text: "Muito dedicado e atencioso.",
  },
  {
    name: "Eveline Gibson Almeida",
    initial: "E",
    timeAgo: "há 11 dias",
    text: "A equipe da Cantarelli Advocacia me atendeu muitíssimo bem. Fiquei muito satisfeita.",
  },
  {
    name: "Denise Gomes",
    initial: "D",
    timeAgo: "há 13 dias",
    text: "Agradeço ao grupo Cantarelli pelo excelente atendimento.",
  },
  {
    name: "Cristianne Boulitreau",
    initial: "C",
    timeAgo: "há 13 dias",
    text: "A minha experiência foi excelente, recomendo a todos.",
  },
  {
    name: "Alex Lino",
    initial: "A",
    timeAgo: "há 13 dias",
    text: "Top! Todos estão de parabéns pelo atendimento.",
  },
  {
    name: "Jadicélio Avelar",
    initial: "J",
    timeAgo: "há 22 dias",
    text: "Ótimo atendimento, muito profissional e atencioso.",
  },
];

const RATING = "4.9";
const REVIEW_COUNT = 99;

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`}
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
