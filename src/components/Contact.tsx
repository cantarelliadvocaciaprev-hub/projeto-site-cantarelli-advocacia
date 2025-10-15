import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
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
                  <a
                    href="https://wa.me/5581983421727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2"
                  >
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Chamar no WhatsApp
                    </Button>
                  </a>
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
              Localização
            </h3>
            <div className="rounded-lg overflow-hidden border border-border h-[400px] mb-6">
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
            <a
              href="https://forms.gle/3oft8yBcRsfeZzht6"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Preencher Formulário de Contato
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
