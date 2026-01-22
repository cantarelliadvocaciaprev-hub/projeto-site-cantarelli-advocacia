import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SecurityShieldButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seguranca");
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 bg-[#2563eb] hover:bg-[#1d4ed8] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in"
      aria-label="Página de Segurança"
      title="Verifique contatos oficiais"
    >
      <Shield className="w-6 h-6" fill="currentColor" />
    </button>
  );
};

export default SecurityShieldButton;
