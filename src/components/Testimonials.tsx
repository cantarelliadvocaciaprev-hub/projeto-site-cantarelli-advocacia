import { Star, ExternalLink } from "lucide-react";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Button } from "@/components/ui/button";
import { trackReviewClick } from "@/lib/reviewTracking";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nosso maior patrimônio.
          </p>
        </div>

        <GoogleReviewsWidget />

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
            onClick={() => trackReviewClick()}
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
