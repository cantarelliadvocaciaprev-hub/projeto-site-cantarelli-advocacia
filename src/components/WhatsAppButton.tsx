import { MessageCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5581995441368?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.", "_blank");
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
