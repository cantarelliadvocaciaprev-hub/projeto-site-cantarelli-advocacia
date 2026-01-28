import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FAQPageSchema from "@/components/schemas/FAQPageSchema";
import { Shield } from "lucide-react";

interface FAQItem {
  question: string;
  directAnswer: string;
  fullAnswer: string;
}

const FAQNative = () => {
  const { isVisible: faqVisible, elementRef: faqRef } = useScrollAnimation(0.1);
  
  const faqs: FAQItem[] = [
    {
      question: "Como funciona o planejamento previdenciário?",
      directAnswer: "É uma análise estratégica do seu histórico contributivo para identificar a melhor forma de aposentadoria.",
      fullAnswer: "O planejamento previdenciário avalia seu tempo de contribuição, salários, atividades especiais e outros fatores para maximizar o valor do seu benefício. Analisamos todas as regras de transição para encontrar a opção mais vantajosa."
    },
    {
      question: "Qual a diferença entre aposentadoria por tempo de contribuição e por idade?",
      directAnswer: "Por tempo considera o período contribuído; por idade exige 65 anos (homens) ou 62 (mulheres) mais 15 anos de contribuição.",
      fullAnswer: "A aposentadoria por tempo de contribuição leva em conta principalmente o período que você contribuiu ao INSS. Já a aposentadoria por idade requer idade mínima (65 anos para homens e 62 para mulheres) e um tempo mínimo de contribuição de 15 anos."
    },
    {
      question: "O que é BPC/LOAS e quem tem direito?",
      directAnswer: "É um benefício de um salário mínimo para idosos 65+ ou pessoas com deficiência de baixa renda.",
      fullAnswer: "O BPC (Benefício de Prestação Continuada) ou LOAS é destinado a idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade, desde que comprovem não possuir meios de prover a própria manutenção e a renda familiar per capita seja inferior a 1/4 do salário mínimo. Não é necessário ter contribuído ao INSS."
    },
    {
      question: "Como funciona a revisão de benefício previdenciário?",
      directAnswer: "É a reavaliação do cálculo do INSS para corrigir erros e incluir períodos não considerados.",
      fullAnswer: "A revisão de benefício verifica se há erros no cálculo inicial ou se é possível incluir períodos/salários que não foram considerados. Pode resultar no aumento do valor mensal e no pagamento de valores retroativos. O prazo para solicitar é de 10 anos a partir do primeiro pagamento."
    },
    {
      question: "Tenho direito à isenção de Imposto de Renda?",
      directAnswer: "Sim, se você é aposentado/pensionista com doença grave prevista em lei (câncer, AIDS, cardiopatia grave, etc.).",
      fullAnswer: "Aposentados e pensionistas com doenças graves previstas em lei têm direito à isenção do Imposto de Renda sobre seus proventos. Entre as doenças estão: câncer, AIDS, cardiopatia grave, esclerose múltipla, doença de Parkinson, entre outras."
    },
    {
      question: "Quanto tempo demora um processo no INSS?",
      directAnswer: "Processos administrativos levam de 45 dias a alguns meses; ações judiciais podem durar de 6 meses a 2 anos.",
      fullAnswer: "O tempo varia conforme o tipo de benefício e a complexidade do caso. Processos administrativos podem levar de 45 dias a alguns meses. Ações judiciais podem durar de 6 meses a 2 anos, dependendo da vara e da região. A Cantarelli Advocacia trabalha para agilizar ao máximo cada processo."
    },
    {
      question: "O que é aposentadoria especial?",
      directAnswer: "É um benefício para quem trabalhou 15, 20 ou 25 anos exposto a agentes nocivos à saúde.",
      fullAnswer: "É um benefício concedido ao trabalhador que exerceu atividades em condições prejudiciais à saúde ou à integridade física (insalubridade ou periculosidade) por 15, 20 ou 25 anos, conforme o grau de exposição ao agente nocivo."
    },
    {
      question: "Posso acumular aposentadoria e pensão por morte?",
      directAnswer: "Sim, mas há regras: você recebe 100% do maior benefício mais um percentual do outro.",
      fullAnswer: "É possível acumular aposentadoria com pensão por morte, mas há regras específicas. A partir de 2019, há limitações no valor acumulado, sendo permitido receber 100% do benefício de maior valor mais um percentual do outro benefício, que varia de 10% a 100% dependendo do valor."
    }
  ];

  // Convert for schema (uses original format)
  const schemaFaqs = faqs.map(faq => ({
    question: faq.question,
    answer: `${faq.directAnswer} ${faq.fullAnswer}`
  }));

  return (
    <section id="faq" className="py-20 bg-card">
      <FAQPageSchema faqs={schemaFaqs} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-alexandria font-bold text-foreground mb-4">
            Perguntas Frequentes sobre Direito Previdenciário
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 font-alexandria max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre aposentadorias, BPC LOAS, revisões e outros benefícios do INSS
          </p>
        </div>

        <div 
          ref={faqRef} 
          className={`max-w-4xl mx-auto transition-all duration-700 ${faqVisible ? 'opacity-100 animate-slide-up-scroll' : 'opacity-0'}`}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index} 
                className="group bg-background border border-border rounded-lg overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary 
                  className="flex items-center justify-between p-6 cursor-pointer text-left text-lg font-alexandria font-semibold text-foreground hover:text-primary transition-colors list-none"
                  itemProp="name"
                >
                  {faq.question}
                  <svg 
                    className="w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div 
                  className="px-6 pb-6"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">
                    {/* Direct Answer - Bolded for AI crawlers */}
                    <p className="text-base text-foreground font-alexandria font-semibold mb-3 leading-relaxed">
                      {faq.directAnswer}
                    </p>
                    {/* Full Explanation */}
                    <p className="text-base text-foreground/80 font-alexandria leading-relaxed">
                      {faq.fullAnswer}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>

          {/* E-E-A-T Badge */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-border">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-body">
              Conteúdo revisado por <strong className="text-foreground">Dr. Thiago Cantarelli</strong> (OAB/PE 28.165) • Atualizado em Janeiro 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQNative;
