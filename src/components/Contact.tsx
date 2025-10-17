import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.name.length > 100 || formData.email.length > 255 || formData.message.length > 1000) {
      toast.error("Algum campo excedeu o limite de caracteres permitido.");
      return;
    }

    setIsSubmitting(true);

    // Criar mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Nova mensagem do site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.phone || "Não informado"}\n\n` +
      `*Mensagem:*\n${formData.message}`
    );

    // Abrir WhatsApp
    window.open(`https://wa.me/5581988884914?text=${whatsappMessage}`, "_blank");

    toast.success("Mensagem enviada! Entraremos em contato em breve.");
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground font-body">
                    Estrada dos Remédios, 2115<br />
                    Madalena, Recife – PE<br />
                    CEP: 50720-715
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Telefones</h4>
                  <p className="text-muted-foreground font-body">
                    Tel: (81) 3049-3799<br />
                    WhatsApp: (81) 98342-1727
                  </p>
                  <button
                    onClick={() => window.open("https://wa.me/5581988884914?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.", "_blank")}
                    className="inline-block mt-2"
                  >
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Chamar no WhatsApp
                    </Button>
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">E-mail</h4>
                  <a
                    href="mailto:contato@cantarelliadvocacia.com.br"
                    className="text-muted-foreground font-body hover:text-primary"
                  >
                    contato@cantarelliadvocacia.com.br
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-1">Horário de Atendimento</h4>
                  <p className="text-muted-foreground font-body">
                    Segunda a Quinta: 08:30 – 17:00<br />
                    Sexta: 08:30 – 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div>
                <Input
                  type="text"
                  placeholder="Nome completo *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  maxLength={100}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="E-mail *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  maxLength={255}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Telefone (opcional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  maxLength={20}
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  maxLength={1000}
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>

            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Localização
            </h3>
            <div className="rounded-lg overflow-hidden border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.319282937658!2d-34.9164!3d-8.0442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18cc8fa0dd9f%3A0x5c408e0b4e2f1898!2sCantarelli%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Cantarelli Advocacia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
