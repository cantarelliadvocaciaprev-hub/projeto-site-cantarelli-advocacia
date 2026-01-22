import { motion } from "framer-motion";
import { MessageSquareWarning, CreditCard, Phone } from "lucide-react";

const ScamInfoCards = () => {
  const scamMethods = [
    {
      icon: MessageSquareWarning,
      title: "Mensagens Falsas",
      description:
        "Golpistas criam perfis falsos no WhatsApp usando nosso nome e logo. Eles afirmam que seu alvará ou precatório foi liberado e pedem pagamento para 'liberar' os valores.",
      warning: "Nunca solicitamos pagamentos via WhatsApp.",
    },
    {
      icon: CreditCard,
      title: "Pedidos de PIX",
      description:
        "Criminosos pedem transferências urgentes via PIX ou depósito bancário, alegando que é necessário para taxas, custas ou 'liberação de valores'.",
      warning: "Não fazemos cobranças por PIX para liberar processos.",
    },
    {
      icon: Phone,
      title: "Números Desconhecidos",
      description:
        "Os golpistas usam números de telefone que não são os nossos canais oficiais. Sempre verifique o número que está entrando em contato com você.",
      warning: "Confirme sempre pelos nossos canais oficiais.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">
            Como Identificar o Golpe do Alvará
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Conheça as táticas utilizadas por criminosos para se proteger de fraudes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scamMethods.map((method, index) => (
            <motion.div
              key={method.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#b22222]/10 mb-5">
                <method.icon className="w-7 h-7 text-[#b22222]" strokeWidth={1.5} />
              </div>

              <h3 className="font-display font-bold text-foreground text-lg mb-3">
                {method.title}
              </h3>

              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {method.description}
              </p>

              <div className="bg-primary/10 border-l-4 border-primary rounded-r-md px-4 py-3">
                <p className="text-primary font-display font-semibold text-sm">
                  {method.warning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScamInfoCards;
