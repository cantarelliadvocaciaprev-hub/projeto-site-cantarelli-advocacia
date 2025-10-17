import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o planejamento previdenciário?",
      answer: "O planejamento previdenciário é uma análise detalhada do seu histórico contributivo para identificar a melhor estratégia de aposentadoria. Avaliamos seu tempo de contribuição, salários, atividades especiais e outros fatores para maximizar o valor do seu benefício."
    },
    {
      question: "Qual a diferença entre aposentadoria por tempo de contribuição e por idade?",
      answer: "A aposentadoria por tempo de contribuição considera principalmente o período que você contribuiu ao INSS, enquanto a aposentadoria por idade leva em conta sua idade mínima (65 anos para homens e 62 para mulheres) e um tempo mínimo de contribuição de 15 anos."
    },
    {
      question: "O que é BPC/LOAS e quem tem direito?",
      answer: "O BPC (Benefício de Prestação Continuada) ou LOAS é um benefício assistencial no valor de um salário mínimo destinado a idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade, desde que comprovem não possuir meios de prover a própria manutenção e a renda familiar per capita seja inferior a 1/4 do salário mínimo."
    },
    {
      question: "Como funciona a revisão de benefício previdenciário?",
      answer: "A revisão de benefício é uma análise do cálculo realizado pelo INSS para verificar se há erros ou se é possível incluir períodos/salários que não foram considerados inicialmente. Pode resultar no aumento do valor do benefício e no pagamento de valores retroativos."
    },
    {
      question: "Tenho direito à isenção de Imposto de Renda?",
      answer: "Aposentados e pensionistas com doenças graves previstas em lei (como câncer, AIDS, cardiopatia grave, entre outras) têm direito à isenção do Imposto de Renda sobre seus proventos de aposentadoria ou pensão."
    },
    {
      question: "Quanto tempo demora um processo no INSS?",
      answer: "O tempo varia conforme o tipo de benefício e a complexidade do caso. Processos administrativos podem levar de 45 dias a alguns meses. Ações judiciais podem durar de 6 meses a 2 anos, dependendo da vara e da região."
    },
    {
      question: "O que é aposentadoria especial?",
      answer: "É um benefício concedido ao trabalhador que exerceu atividades em condições prejudiciais à saúde ou à integridade física (insalubridade ou periculosidade) por 15, 20 ou 25 anos, conforme o grau de exposição ao agente nocivo."
    },
    {
      question: "Posso acumular aposentadoria e pensão por morte?",
      answer: "Sim, é possível acumular aposentadoria com pensão por morte, mas há regras específicas. A partir de 2019, há limitações no valor acumulado, sendo permitido receber 100% do benefício de maior valor mais um percentual do outro benefício."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre Direito Previdenciário
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
