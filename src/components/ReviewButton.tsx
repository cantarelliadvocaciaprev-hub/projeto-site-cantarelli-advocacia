import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GOOGLE_REVIEW_WEB_URL, openGoogleReview } from "@/lib/reviewTracking";

interface ReviewButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  label?: string;
}

/**
 * Botão reutilizável "Avaliar no Google".
 * Abre o app do Google Maps no mobile (com fallback para navegador) e
 * registra o clique para rastreamento de conversão.
 */
const ReviewButton = ({
  className,
  variant = "default",
  size = "default",
  label = "Avaliar no Google",
}: ReviewButtonProps) => {
  return (
    <a
      href={GOOGLE_REVIEW_WEB_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openGoogleReview}
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        className={cn(
          "gap-2",
          variant === "default" && "bg-primary hover:bg-primary/90",
          className,
        )}
      >
        <Star className="w-4 h-4" />
        {label}
      </Button>
    </a>
  );
};

export default ReviewButton;
