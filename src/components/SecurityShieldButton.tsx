import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SecurityShieldButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seguranca");
    window.scrollTo(0, 0);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleClick}
            className="fixed bottom-[88px] right-6 z-50 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
            aria-label="Página de Segurança"
          >
            <Shield className="w-6 h-6" fill="currentColor" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-card border-primary/30">
          <p className="font-body text-sm">Verifique contatos oficiais</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SecurityShieldButton;
