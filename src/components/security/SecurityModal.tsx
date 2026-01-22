import { useState, useEffect } from "react";
import { ShieldAlert, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SecurityModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("cantarelli_security_modal_seen");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("cantarelli_security_modal_seen", "true");
    setIsOpen(false);
  };

  const handleReport = () => {
    window.open(
      "https://wa.me/5581983421727?text=Olá,%20gostaria%20de%20denunciar%20uma%20tentativa%20de%20golpe.",
      "_blank"
    );
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-[#1a1a1a] border-primary/30 text-[#ede7e4] max-w-lg p-0 overflow-hidden">
        <div className="bg-[#b22222] py-3 px-6 flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-white" />
          <DialogTitle className="text-white font-display font-bold text-lg tracking-wide">
            ALERTA DE SEGURANÇA
          </DialogTitle>
          <button
            onClick={handleClose}
            className="ml-auto p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="font-body text-[#ede7e4] leading-relaxed">
              <span className="font-bold text-primary">Atenção:</span> A Cantarelli Advocacia{" "}
              <span className="font-bold text-[#b22222]">NUNCA</span> solicita pagamentos
              antecipados via WhatsApp para liberação de alvarás ou precatórios.
            </p>
            <p className="font-body text-[#ede7e4] leading-relaxed">
              Se você recebeu uma mensagem pedindo PIX ou transferência para liberar valores,
              é <span className="font-bold text-[#b22222]">GOLPE</span>.
            </p>
          </div>

          <div className="bg-[#ede7e4]/10 border border-primary/30 rounded-lg p-4">
            <p className="text-sm font-body text-[#c5c9ce]">
              <span className="text-primary font-semibold">Dica:</span> Sempre confirme qualquer
              solicitação através dos nossos canais oficiais antes de realizar qualquer pagamento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleClose}
              className="flex-1 bg-primary hover:bg-primary/90 text-[#1a1a1a] font-display font-semibold py-5"
            >
              Entendi
            </Button>
            <Button
              onClick={handleReport}
              variant="outline"
              className="flex-1 border-[#b22222] text-[#b22222] hover:bg-[#b22222] hover:text-white font-display py-5"
            >
              Denunciar Tentativa
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecurityModal;
