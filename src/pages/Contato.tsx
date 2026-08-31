import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SkipLinks from "@/components/SkipLinks";
import SEO from "@/components/SEO";
import SchemaMarkup from "@/components/SchemaMarkup";
import LegalServiceSchema from "@/components/schemas/LegalServiceSchema";
import Breadcrumb from "@/components/Breadcrumb";

const WHATSAPP =
  "https://wa.me/5581983421727?text=Olá,%20estava%20no%20site%20da%20Cantarelli%20e%20gostaria%20de%20um%20atendimento.";

const ADDRESS = "Estrada dos Remédios, 2115 — Madalena, Recife – PE, CEP 50720-715";

const HOURS = [
  { day: "Segunda-feira", time: "08:30 – 17:00" },
  { day: "Terça-feira", time: "08:30 – 17:00" },
  { day: "Quarta-feira", time: "08:30 – 17:00" },
  { day: "Quinta-feira", time: "08:30 – 17:00" },
  { day: "Sexta-feira", time: "08:30 – 12:00" },
  { day: "Sábado e domingo", time: "Fechado" },
];

const PHONES = [
  { label: "Atendimento", value: "(81) 3049-3799", tel: "+558130493799" },
  { label: "WhatsApp", value: "(81) 98342-1727", tel: "+5581983421727" },
  {
    label: "Comercial",
    value: "(81) 99544-1368 / (81) 98611-3970 / (81) 98379-5595",
    tel: "+5581995441368",
  },
  { label: "WhatsApp Comercial", value: "(81) 98392-5828", tel: "+5581983925828" },
  { label: "Financeiro", value: "(81) 98771-8606", tel: "+5581987718606" },
];

const CITIES = [
  "Recife",
  "Olinda",
  "Jaboatão dos Guararapes",
  "Paulista",
  "Camaragibe",
  "São Lourenço da Mata",
  "Cabo de Santo Agostinho",
  "Igarassu",
  "Caruaru",
  "Petrolina",
  "Garanhuns",
  "Serra Talhada",
];

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato, Endereço e Horário | Advocacia Previdenciária em Recife – PE"
        description="Fale com a Cantarelli Advocacia em Recife/PE: Estrada dos Remédios, 2115 – Madalena. Telefones oficiais, WhatsApp, horário de atendimento e como chegar."
        keywords="advogado previdenciário Recife, escritório de advocacia Pernambuco, contato advogado INSS Recife, endereço advocacia Madalena Recife, horário de atendimento advogado PE"
        canonical="https://cantarelliadvocacia.com.br/contato"
      />
      <SchemaMarkup
        type="webpage"
        pageTitle="Contato, Endereço e Horário | Cantarelli Advocacia — Recife/PE"
        pageDescription="Endereço, telefones oficiais, WhatsApp e horário de atendimento da Cantarelli Advocacia em Recife, Pernambuco."
        pageUrl="https://cantarelliadvocacia.com.br/contato"
        breadcrumbs={[
          { name: "Início", url: "https://cantarelliadvocacia.com.br/" },
          { name: "Contato", url: "https://cantarelliadvocacia.com.br/contato" },
        ]}
      />
      <LegalServiceSchema />
      <SkipLinks />
      <Header />

      <main id="main-content" tabIndex={-1} className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ name: "Contato", url: "/contato" }]} />

          <header className="max-w-3xl mt-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Contato, endereço e horário em Recife – PE
            </h1>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-lg text-muted-foreground font-body">
              A Cantarelli Advocacia atende presencialmente na Madalena, em Recife, e
              de forma remota em todo o estado de Pernambuco. Abaixo estão nossos
              canais oficiais, o horário de funcionamento e como chegar ao escritório.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12">
            <section aria-labelledby="dados" className="space-y-8">
              <h2 id="dados" className="text-2xl font-display font-bold text-foreground">
                Dados do escritório
              </h2>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Endereço</h3>
                  <address className="not-italic text-muted-foreground font-body">
                    Estrada dos Remédios, 2115<br />
                    Madalena, Recife – PE<br />
                    CEP: 50720-715
                  </address>
                  <Button
                    size="sm"
                    variant="outline"
                    className="mt-3"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/dir/?api=1&destination=" +
                          encodeURIComponent(ADDRESS),
                        "_blank"
                      )
                    }
                  >
                    <Navigation className="w-4 h-4 mr-2" aria-hidden="true" />
                    Como chegar
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Telefones oficiais
                  </h3>
                  <ul className="text-muted-foreground font-body space-y-1">
                    {PHONES.map((p) => (
                      <li key={p.label}>
                        <span className="text-foreground font-medium">{p.label}:</span>{" "}
                        {p.value}
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="sm"
                    onClick={() => window.open(WHATSAPP, "_blank")}
                    className="mt-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                    Fale com especialista
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">E-mail</h3>
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
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <h3 className="font-display font-bold text-foreground mb-2">
                    Horário de funcionamento
                  </h3>
                  <table className="w-full max-w-sm text-sm font-body">
                    <caption className="sr-only">
                      Horário de atendimento da Cantarelli Advocacia em Recife
                    </caption>
                    <tbody>
                      {HOURS.map((h) => (
                        <tr key={h.day} className="border-b border-border last:border-0">
                          <th
                            scope="row"
                            className="text-left py-1.5 font-medium text-foreground"
                          >
                            {h.day}
                          </th>
                          <td className="py-1.5 text-right text-muted-foreground">
                            {h.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground font-body mt-2">
                    Horário de Brasília (UTC-3). Atendimentos presenciais mediante
                    agendamento prévio.
                  </p>
                </div>
              </div>
            </section>

            <section aria-labelledby="localizacao" className="space-y-6">
              <h2
                id="localizacao"
                className="text-2xl font-display font-bold text-foreground"
              >
                Localização em Recife
              </h2>
              <div className="rounded-lg overflow-hidden border border-border h-[320px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.319282937658!2d-34.9164!3d-8.0442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18cc8fa0dd9f%3A0x5c408e0b4e2f1898!2sCantarelli%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa da localização da Cantarelli Advocacia na Madalena, Recife – PE"
                />
              </div>

              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                  Onde atendemos em Pernambuco
                </h2>
                <p className="text-muted-foreground font-body mb-4">
                  Além do atendimento presencial na Região Metropolitana do Recife,
                  acompanhamos clientes de todo o estado por atendimento on-line:
                </p>
                <ul className="flex flex-wrap gap-2">
                  {CITIES.map((city) => (
                    <li
                      key={city}
                      className="text-sm font-body px-3 py-1 rounded-full bg-primary/10 text-foreground"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-border p-6 bg-card">
                <h2 className="text-xl font-display font-bold text-foreground mb-2">
                  Prefere falar agora?
                </h2>
                <p className="text-muted-foreground font-body mb-4">
                  Nossa equipe responde dentro do horário de funcionamento pelos canais
                  oficiais listados nesta página.
                </p>
                <Button
                  onClick={() => window.open(WHATSAPP, "_blank")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Fale com especialista
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Contato;
