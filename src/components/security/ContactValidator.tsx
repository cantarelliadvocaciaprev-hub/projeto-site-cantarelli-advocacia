import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface ValidationResult {
  status: "safe" | "danger" | null;
  message: string;
  contact?: {
    name: string;
    role: string;
  };
}

const ContactValidator = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<ValidationResult>({ status: null, message: "" });

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

    try {
      const { data, error } = await supabase.functions.invoke("validate-contact", {
        body: { phone: phoneNumber },
      });

      if (error) throw error;

      if (data.status === "safe") {
        setResult({
          status: "safe",
          message: "CONFIRMADO: Este é um contato oficial da Cantarelli Advocacia.",
          contact: { name: data.name, role: data.role },
        });
      } else {
        setResult({
          status: "danger",
          message: "CUIDADO: Este número NÃO consta em nossa base. Pode ser uma tentativa de fraude. Não faça transferências.",
        });
      }
    } catch (err) {
      console.error("Validation error:", err);
      setResult({
        status: "danger",
        message: "Erro ao validar contato. Tente novamente mais tarde.",
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
                    {result.contact && (
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-primary/20">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-foreground text-sm">
                            {result.contact.name}
                          </p>
                          <p className="font-body text-muted-foreground text-xs">
                            {result.contact.role}
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
                      href="https://wa.me/5581983421727?text=Olá,%20gostaria%20de%20denunciar%20uma%20tentativa%20de%20golpe."
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

      <p className="mt-4 text-xs text-muted-foreground text-center font-body">
        Em caso de dúvida, ligue diretamente para (81) 3049-3799.
      </p>
    </div>
  );
};

export default ContactValidator;
