import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import thiagoCantarelli from "@/assets/team/thiago-cantarelli.jpg";
import izabelaFarias from "@/assets/team/izabela-farias.jpg";

interface ValidationResult {
  status: "safe" | "danger" | null;
  message: string;
  lawyer?: {
    name: string;
    role: string;
    photo: string;
  };
}

const ContactValidator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<ValidationResult>({ status: null, message: "" });

  // Official numbers database (mock)
  const officialContacts: Record<string, { name: string; role: string; photo: string }> = {
    "8130493799": { name: "Cantarelli Advocacia", role: "Escritório Principal", photo: thiagoCantarelli },
    "81995441368": { name: "Equipe Comercial", role: "Atendimento Comercial", photo: izabelaFarias },
    "81987718606": { name: "Setor Financeiro", role: "Atendimento Financeiro", photo: izabelaFarias },
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    setResult({ status: null, message: "" });
  };

  const validateContact = async () => {
    setIsValidating(true);
    setResult({ status: null, message: "" });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const contact = officialContacts[cleanNumber];

    if (contact) {
      setResult({
        status: "safe",
        message: "CONFIRMADO: Este é um contato oficial da Cantarelli Advocacia.",
        lawyer: contact,
      });
    } else {
      setResult({
        status: "danger",
        message: "CUIDADO: Este número NÃO consta em nossa base. Pode ser uma tentativa de fraude. Não faça transferências.",
      });
    }

    setIsValidating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.replace(/\D/g, "").length >= 10) {
      validateContact();
    }
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-lg max-w-xl mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Search className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-display font-bold text-foreground text-xl md:text-2xl mb-2">
          Verificador de Contato Oficial
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Verifique se quem falou com você é realmente da nossa equipe.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-body text-foreground">
            Digite o número que entrou em contato (DDD + Número)
          </label>
          <Input
            type="tel"
            placeholder="(00) 00000-0000"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-primary/20 text-center text-lg font-body"
          />
        </div>

        <Button
          type="submit"
          disabled={phoneNumber.replace(/\D/g, "").length < 10 || isValidating}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold py-5"
        >
          {isValidating ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Validando...
            </span>
          ) : (
            "Validar Contato"
          )}
        </Button>
      </form>

      <AnimatePresence>
        {result.status && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {result.status === "safe" ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-primary text-sm mb-2">
                      {result.message}
                    </p>
                    {result.lawyer && (
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-primary/20">
                        <img
                          src={result.lawyer.photo}
                          alt={result.lawyer.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                        <div>
                          <p className="font-display font-semibold text-foreground text-sm">
                            {result.lawyer.name}
                          </p>
                          <p className="font-body text-muted-foreground text-xs">
                            {result.lawyer.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#b22222]/10 border border-[#b22222]/30 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-[#b22222]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-bold text-[#b22222] text-sm mb-2">
                      {result.message}
                    </p>
                    <a
                      href="https://wa.me/5581995441368?text=Olá,%20gostaria%20de%20denunciar%20uma%20tentativa%20de%20golpe."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-body text-[#b22222] hover:underline mt-2"
                    >
                      <User className="w-4 h-4" />
                      Denunciar este número
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactValidator;
