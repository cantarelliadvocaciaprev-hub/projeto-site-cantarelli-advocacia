import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_BASE = "https://wa.me/5581983421727";

interface ArticleQuestionFormProps {
  articleTitle: string;
}

const ArticleQuestionForm = ({ articleTitle }: ArticleQuestionFormProps) => {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;
    const text = encodeURIComponent(
      `Olá! Li o artigo "${articleTitle}" no blog da Cantarelli e tenho uma dúvida:\n\n${question.trim()}`
    );
    window.open(`${WHATSAPP_BASE}?text=${text}`, "_blank", "noopener,noreferrer");
    setQuestion("");
  };

  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-lg md:text-xl font-display font-bold text-foreground">
                Envie sua Pergunta
              </h2>
            </div>
            <p className="text-sm text-muted-foreground font-body mb-4">
              Tem alguma dúvida sobre este tema? Envie sua pergunta e um advogado especialista responderá pelo WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Digite sua pergunta aqui..."
                rows={3}
                className="flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-all"
                maxLength={500}
              />
              <Button
                onClick={handleSend}
                disabled={!question.trim()}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white sm:self-end"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleQuestionForm;
