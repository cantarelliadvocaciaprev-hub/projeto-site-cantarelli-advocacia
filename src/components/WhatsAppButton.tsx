import { MessageCircle } from "lucide-react";
import {
import { openWhatsApp } from "@/lib/whatsappTracking";
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    openWhatsApp("botao-flutuante");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card border-primary/30">
          <p className="font-body text-sm">Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
