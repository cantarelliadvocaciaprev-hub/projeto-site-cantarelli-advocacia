import defAuditivaImg from "@/assets/blog/aposentadoria-deficiencia-auditiva-2026.jpg";
import depressaoImg from "@/assets/blog/depressao-aposentadoria-invalidez-2026.jpg";
import casalPlanejImg from "@/assets/blog/aposentadoria-casal-planejamento-2026.jpg";
import herniaDiscoImg from "@/assets/blog/hernia-disco-aposentadoria-2026.jpg";
import motoristaAppImg from "@/assets/blog/motorista-aplicativo-inss-2026.jpg";
import doencaCardiacaImg from "@/assets/blog/doenca-cardiaca-aposentadoria-2026.jpg";
import acidenteTrabalhoImg from "@/assets/blog/acidente-trabalho-direitos-2026.jpg";
import meiAposentImg from "@/assets/blog/mei-aposentadoria-direitos-2026.jpg";
import diabetesImg from "@/assets/blog/diabetes-aposentadoria-invalidez-2026.jpg";
import adicional25Img from "@/assets/blog/adicional-25-grande-invalidez-2026.jpg";
import reformaImg from "@/assets/blog/reforma-previdenciaria-2026.jpg";
import auxilioImg from "@/assets/blog/auxilio-incapacidade-2026.jpg";
import pensaoImg from "@/assets/blog/pensao-morte-2026.jpg";
import ruralImg from "@/assets/blog/aposentadoria-rural-2026.jpg";
import especialImg from "@/assets/blog/aposentadoria-especial-2026.jpg";
import pcdImg from "@/assets/blog/aposentadoria-pcd-2026.jpg";
import ruidoImg from "@/assets/blog/aposentadoria-ruido-especial-2026.jpg";
import bpcLoasImg from "@/assets/blog/bpc-loas-2026.jpg";
import revisaoImg from "@/assets/blog/revisao-beneficio-2026.jpg";
import auxAcidenteImg from "@/assets/blog/auxilio-acidente-2026.jpg";
import diagnosticoImg from "@/assets/blog/diagnostico-previdenciario-2026.jpg";
import invalidezImg from "@/assets/blog/aposentadoria-invalidez-2026.jpg";
import tempoContribuicaoImg from "@/assets/blog/tempo-contribuicao-2026.jpg";
import doencaOcupacionalImg from "@/assets/blog/doenca-ocupacional-2026.jpg";
import salarioMaternidadeImg from "@/assets/blog/salario-maternidade-2026.jpg";
import contribuinteIndividualImg from "@/assets/blog/contribuinte-individual-2026.jpg";
import aposentadoriaProfessorImg from "@/assets/blog/aposentadoria-professor-2026.jpg";
import cnisAnaliseImg from "@/assets/blog/cnis-analise-2026.jpg";
import tendiniteLerImg from "@/assets/blog/tendinite-ler-aposentadoria-invalidez.jpg";
import autismoPcdImg from "@/assets/blog/autismo-aposentadoria.jpg";
import processoAuxAcidenteImg from "@/assets/blog/processo-auxilio-acidente-justica-2026.jpg";
import salMatDesempregadaImg from "@/assets/blog/salario-maternidade-desempregada-2026.jpg";
import tempoProcessoAuxImg from "@/assets/blog/tempo-processo-auxilio-acidente-2026.jpg";
import bpcNegadoImg from "@/assets/blog/bpc-negado-o-que-fazer-2026.jpg";
import aposentAntecipadaImg from "@/assets/blog/aposentadoria-antecipada-2026.jpg";
import aposentMulherImg from "@/assets/blog/aposentadoria-mulher-regras-2026.jpg";
import bpcParaAposentImg from "@/assets/blog/bpc-para-aposentadoria-2026.jpg";
import loasPensaoMorteImg from "@/assets/blog/loas-pensao-morte-marido-2026.jpg";
import auxAcidenteTrabalharImg from "@/assets/blog/auxilio-acidente-pode-trabalhar-2026.jpg";
import tetoInssImg from "@/assets/blog/teto-inss-2026-valor.jpg";
import penteFinoImg from "@/assets/blog/pente-fino-inss-2026.jpg";
import auxReclusaoImg from "@/assets/blog/auxilio-reclusao-2026.jpg";
import fibromialgiaImg from "@/assets/blog/fibromialgia-aposentadoria-2026.jpg";
import provaVidaImg from "@/assets/blog/prova-vida-inss-2026.jpg";
import esquizofreniaImg from "@/assets/blog/esquizofrenia-aposentadoria-2026.jpg";
import aposentPontosImg from "@/assets/blog/aposentadoria-pontos-2026.jpg";
import periodoGracaImg from "@/assets/blog/periodo-graca-inss-2026.jpg";
import margemConsigImg from "@/assets/blog/margem-consignavel-2026.jpg";
import reajusteImg from "@/assets/blog/reajuste-aposentadoria-2026.jpg";
import pensaoMorteFilhoImg from "@/assets/blog/pensao-morte-filho-maior-21.jpg";
import bpcCriancaAutismoImg from "@/assets/blog/bpc-loas-crianca-autismo.jpg";
import autismoAdultoDireitosImg from "@/assets/blog/autismo-adulto-direitos-2026.jpg";
import engenheiroMecanicoImg from "@/assets/blog/engenheiro-mecanico-aposentadoria-especial.jpg";
import bpcIdosoSolicitarImg from "@/assets/blog/bpc-loas-idoso-solicitar-2026.jpg";
import revisaoVidaTodaImg from "@/assets/blog/revisao-vida-toda-2026.jpg";
import planejamentoContinuarImg from "@/assets/blog/planejamento-continuar-contribuindo-2026.jpg";
import contribuicoesAtrasoImg from "@/assets/blog/contribuicoes-atraso-regularizar-2026.jpg";
import doencaOcupacionalAcidenteImg from "@/assets/blog/doenca-ocupacional-acidente-2026.jpg";
import pensaoUniaoEstavelImg from "@/assets/blog/pensao-morte-uniao-estavel-2026.jpg";
import autismoCuratelaImg from "@/assets/blog/autismo-curatela-previdencia-2026.jpg";
import autismoBpcAdultoImg from "@/assets/blog/autismo-bpc-adulto-2026.jpg";
import licencaPaternidadeImg from "@/assets/blog/licenca-paternidade-lei-15371-2026.jpg";


export interface BlogArticleContent {
  type: "paragraph" | "heading" | "subheading" | "list" | "highlight";
  text?: string;
  items?: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  category: string;
  tags: string[];
  readTime: string;
  keyTakeaways: string[];
  lastUpdated?: string;
  image: string;
  imageAlt: string;
  author?: string;
  content: BlogArticleContent[];
  faq?: BlogFAQ[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "licenca-paternidade-lei-15371-2026",
    title: "Licença-Paternidade Ampliada: O Que Muda com a Lei 15.371/2026",
    excerpt:
      "A nova lei amplia gradualmente a licença-paternidade para até 20 dias, cria o salário-paternidade e garante estabilidade no emprego. Entenda todos os seus direitos.",
    category: "Benefícios",
    tags: ["Licença-Paternidade", "Salário-Paternidade", "Lei 15.371", "INSS", "CLT", "2026"],
    readTime: "9 min",
    keyTakeaways: [
      "A licença-paternidade será ampliada gradualmente: 10 dias em 2027, 15 em 2028 e 20 dias a partir de 2029",
      "Foi criado o salário-paternidade, custeado pela Previdência Social, nos mesmos moldes do salário-maternidade",
      "O pai terá estabilidade no emprego durante a licença e até 1 mês após o retorno",
      "Em adoção monoparental ou ausência materna, o pai terá direito a 120 dias de licença",
      "Crianças com deficiência geram acréscimo de 1/3 no período da licença"
    ],
    image: licencaPaternidadeImg,
    imageAlt:
      "Pai segurando recém-nascido em momento de vínculo afetivo representando a nova licença-paternidade ampliada",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "No dia 31 de março de 2026, o presidente Lula sancionou a Lei nº 15.371, que promove uma reforma histórica na licença-paternidade no Brasil. Após quase 38 anos de espera — desde a Constituição de 1988 —, o direito do pai ao afastamento remunerado após o nascimento ou adoção de um filho foi finalmente regulamentado e ampliado de forma significativa."
      },
      {
        type: "heading",
        text: "O Que Era a Licença-Paternidade Antes da Nova Lei?"
      },
      {
        type: "paragraph",
        text: "Desde 1988, a Constituição Federal previu a licença-paternidade como direito social, mas não fixou sua duração definitiva. O Ato das Disposições Constitucionais Transitórias (ADCT) estabeleceu um prazo provisório de 5 dias, que permaneceu inalterado por quase quatro décadas. Empresas participantes do Programa Empresa Cidadã podiam estender para 20 dias, mas essa era uma adesão voluntária e limitada."
      },
      {
        type: "heading",
        text: "Cronograma de Ampliação da Licença-Paternidade"
      },
      {
        type: "paragraph",
        text: "A Lei 15.371/2026 estabelece um aumento gradual do período de afastamento, que será implementado da seguinte forma:"
      },
      {
        type: "list",
        items: [
          "Até 31 de dezembro de 2026: mantém-se o prazo atual de 5 dias",
          "A partir de 1º de janeiro de 2027: 10 dias de licença",
          "A partir de 1º de janeiro de 2028: 15 dias de licença",
          "A partir de 1º de janeiro de 2029: 20 dias de licença (condicionado a metas fiscais)"
        ]
      },
      {
        type: "highlight",
        text: "Para crianças com deficiência, a lei prevê um acréscimo de 1/3 ao período total da licença, ampliando ainda mais o tempo de cuidado paterno."
      },
      {
        type: "heading",
        text: "Salário-Paternidade: Nova Prestação Previdenciária"
      },
      {
        type: "paragraph",
        text: "Uma das maiores inovações da lei é a criação do salário-paternidade, que passa a funcionar nos mesmos moldes do salário-maternidade. A partir de 2027, o pagamento dos dias de afastamento deixa de ser um custo exclusivo do empregador e passa a ser responsabilidade da Previdência Social."
      },
      {
        type: "paragraph",
        text: "Na prática, o empregador continuará pagando o salário do trabalhador durante a licença, mas será reembolsado pelo governo federal por meio de compensações tributárias. Microempresas e empresas de pequeno porte terão prioridade no reembolso."
      },
      {
        type: "heading",
        text: "Estabilidade no Emprego e Proteção Contra Demissão"
      },
      {
        type: "paragraph",
        text: "A nova lei garante proteção robusta ao trabalhador que se torna pai:"
      },
      {
        type: "list",
        items: [
          "Estabilidade no emprego: o pai não pode ser demitido sem justa causa desde o início da licença até 1 mês após o término",
          "Indenização em dobro: empresas que demitirem o funcionário após a comunicação da data provável do parto ou adoção, para evitar que ele usufrua do direito, ficam sujeitas a pagar indenização dobrada",
          "Suspensão do benefício: a licença pode ser suspensa ou cessada em casos de violência doméstica ou abandono material contra a criança"
        ]
      },
      {
        type: "heading",
        text: "Direitos Especiais na Adoção"
      },
      {
        type: "paragraph",
        text: "A lei trouxe avanços significativos para pais adotantes. Em casos de adoção monoparental (quando há apenas o pai, sem mãe registrada no documento de identificação) ou guarda judicial para fins de adoção, o trabalhador terá direito à licença e ao salário-paternidade com as mesmas regras e duração da licença-maternidade: 120 dias."
      },
      {
        type: "highlight",
        text: "Essa é uma conquista fundamental para famílias monoparentais masculinas e casais homoafetivos, garantindo igualdade no tratamento dos vínculos parentais."
      },
      {
        type: "heading",
        text: "Obrigações do Trabalhador"
      },
      {
        type: "paragraph",
        text: "Para usufruir da licença-paternidade ampliada, o trabalhador também precisa cumprir alguns requisitos:"
      },
      {
        type: "list",
        items: [
          "Comunicar o empregador com antecedência mínima de 30 dias sobre a data provável do parto ou da adoção",
          "Não exercer qualquer atividade remunerada durante o período de licença, dedicando-se ao cuidado e convivência com a criança",
          "O trabalhador pode optar por emendar a licença com as férias, desde que comunique previamente ao empregador"
        ]
      },
      {
        type: "heading",
        text: "Quem Tem Direito ao Salário-Paternidade?"
      },
      {
        type: "paragraph",
        text: "O benefício abrange diversas categorias de segurados da Previdência Social:"
      },
      {
        type: "list",
        items: [
          "Empregados com carteira assinada (CLT)",
          "Trabalhadores avulsos",
          "Contribuintes individuais (autônomos)",
          "Segurados especiais (trabalhadores rurais)",
          "Segurados facultativos"
        ]
      },
      {
        type: "paragraph",
        text: "Para empregados e trabalhadores avulsos, o valor do salário-paternidade será igual à remuneração integral, proporcional à duração do benefício. Para os demais segurados, o cálculo segue as regras gerais de benefícios do RGPS."
      },
      {
        type: "heading",
        text: "Impacto Previdenciário e Financeiro"
      },
      {
        type: "paragraph",
        text: "A implementação gradual da lei considerou o impacto fiscal e econômico. O avanço para 20 dias em 2029 está condicionado ao cumprimento de metas fiscais. A criação do salário-paternidade como prestação previdenciária altera a Lei 8.213/91 (Planos de Benefícios) e a Lei 8.212/91 (Lei Orgânica da Seguridade Social), consolidando o benefício dentro do arcabouço da Previdência Social."
      },
      {
        type: "heading",
        text: "Como a Cantarelli Advocacia Pode Ajudar?"
      },
      {
        type: "paragraph",
        text: "A nova lei traz direitos importantes, mas também pode gerar dúvidas sobre a aplicação prática — especialmente em situações de negativa do empregador, demissão durante o período de estabilidade ou dificuldades na concessão do salário-paternidade pelo INSS. Se você está enfrentando qualquer uma dessas situações, a Cantarelli Advocacia pode avaliar seu caso e garantir que seus direitos sejam plenamente respeitados."
      }
    ],
    faq: [
      {
        question: "Quando a licença-paternidade de 20 dias começa a valer?",
        answer: "A ampliação é gradual: 10 dias a partir de janeiro de 2027, 15 dias em 2028 e 20 dias a partir de 2029, condicionado ao cumprimento de metas fiscais."
      },
      {
        question: "O que é o salário-paternidade?",
        answer: "É um novo benefício previdenciário criado pela Lei 15.371/2026. Funciona como o salário-maternidade: a empresa paga o trabalhador e é reembolsada pela Previdência Social."
      },
      {
        question: "Posso ser demitido durante a licença-paternidade?",
        answer: "Não. A nova lei garante estabilidade no emprego desde o início da licença até 1 mês após o término. A demissão nesse período gera direito a indenização em dobro."
      },
      {
        question: "Pai adotante tem direito à licença?",
        answer: "Sim. Em caso de adoção monoparental ou quando não há mãe no documento de identificação, o pai tem direito a 120 dias de licença, nos mesmos moldes da licença-maternidade."
      },
      {
        question: "Autônomos e MEIs têm direito ao salário-paternidade?",
        answer: "Sim. Contribuintes individuais, segurados especiais e facultativos também têm direito ao salário-paternidade, desde que cumpram os requisitos de carência da Previdência Social."
      },
      {
        question: "A licença-paternidade vale para crianças com deficiência?",
        answer: "Sim, e com um benefício adicional: a lei prevê acréscimo de 1/3 no período total da licença quando a criança tem deficiência."
      }
    ]
  },
  {
    slug: "regras-transicao-aposentadoria-marco-2026",
    title: "Regras de Transição da Aposentadoria: O Que Muda em Março de 2026",
    excerpt:
      "Com o avanço progressivo das regras de transição, muitos segurados estão perdendo prazos importantes. Veja como calcular sua melhor data para se aposentar em 2026.",
    date: "15 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Reforma", "Transição", "INSS", "2026"],
    readTime: "8 min",
    keyTakeaways: [
      "Pedágio de 100% pode ser mais vantajoso que a regra por pontos em alguns casos",
      "Mulheres com 59 anos e homens com 64 precisam agir antes que a idade suba novamente em 2027",
      "O planejamento previdenciário pode identificar a regra de transição ideal para cada caso",
    ],
    lastUpdated: "Março 2026",
    image: reformaImg,
    imageAlt:
      "Advogado especialista em direito previdenciário analisando documentos de aposentadoria e regras de transição",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "Com o avanço progressivo das regras de transição da Reforma da Previdência, o primeiro trimestre de 2026 marca um ponto crucial para milhares de segurados do INSS. As exigências estão mais rigorosas e a escolha da regra certa pode significar uma diferença de anos no tempo de espera — e milhares de reais no valor do benefício.",
      },
      {
        type: "heading",
        text: "As 5 Regras de Transição Vigentes em 2026",
      },
      {
        type: "paragraph",
        text: "A Reforma da Previdência de 2019 criou cinco regras de transição para quem já estava contribuindo antes da reforma. Cada uma possui critérios diferentes e pode beneficiar perfis distintos de segurados.",
      },
      {
        type: "subheading",
        text: "1. Regra por Pontos",
      },
      {
        type: "paragraph",
        text: "Em 2026, a pontuação exigida é de 92 pontos para mulheres e 102 para homens. A soma de idade + tempo de contribuição deve atingir esse mínimo. É a regra mais utilizada por quem começou a trabalhar cedo.",
      },
      {
        type: "subheading",
        text: "2. Idade Mínima Progressiva",
      },
      {
        type: "paragraph",
        text: "A idade mínima em 2026 é de 59 anos para mulheres e 64 para homens, com tempo mínimo de 30 e 35 anos de contribuição, respectivamente. A cada ano, 6 meses são adicionados à idade mínima.",
      },
      {
        type: "subheading",
        text: "3. Pedágio de 50%",
      },
      {
        type: "paragraph",
        text: "Disponível apenas para quem estava a no máximo 2 anos de se aposentar quando a reforma entrou em vigor (novembro de 2019). O segurado paga 50% do tempo que faltava como pedágio adicional. Aplica o fator previdenciário.",
      },
      {
        type: "subheading",
        text: "4. Pedágio de 100%",
      },
      {
        type: "paragraph",
        text: "O segurado precisa cumprir o dobro do tempo que faltava na data da reforma, além de atingir a idade mínima de 57 anos (mulheres) ou 60 anos (homens). Não aplica fator previdenciário, o que pode ser muito vantajoso.",
      },
      {
        type: "subheading",
        text: "5. Idade Mínima (Regra Antiga Adaptada)",
      },
      {
        type: "paragraph",
        text: "Para quem se aposentava por idade: mulheres precisam de 62 anos e homens de 65, com pelo menos 15 anos de contribuição.",
      },
      {
        type: "highlight",
        text: "Atenção: Cada regra de transição gera um valor de benefício diferente. A escolha errada pode reduzir seu benefício mensal em até 30%. Um planejamento previdenciário profissional é essencial.",
      },
      {
        type: "heading",
        text: "Por Que Março de 2026 é um Momento Crítico?",
      },
      {
        type: "paragraph",
        text: "Muitos segurados que completaram requisitos em 2025 não deram entrada no pedido a tempo. Agora, em 2026, precisam atender exigências maiores. Além disso, quem está próximo de completar os requisitos deve ficar atento: a cada 1º de janeiro, as regras ficam mais rigorosas.",
      },
      {
        type: "list",
        items: [
          "A pontuação sobe 1 ponto por ano (será 93/103 em 2027)",
          "A idade mínima progressiva sobe 6 meses por ano",
          "Períodos de contribuição informal ou rural podem ser reconhecidos judicialmente",
          "O INSS frequentemente erra nos cálculos — sempre peça uma segunda análise",
        ],
      },
      {
        type: "heading",
        text: "Dicas para Escolher a Melhor Regra",
      },
      {
        type: "list",
        items: [
          "Solicite o CNIS (Cadastro Nacional de Informações Sociais) atualizado",
          "Compare o valor do benefício em cada regra de transição aplicável",
          "Verifique se existem períodos não computados (trabalho sem carteira, serviço militar, etc.)",
          "Considere se vale contribuir mais alguns meses para mudar de regra",
          "Procure um advogado previdenciário para simulação completa",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A escolha da regra de transição correta é uma das decisões financeiras mais importantes da sua vida. Não aceite apenas o que o INSS calcula automaticamente — busque orientação especializada para garantir o melhor benefício possível. A Cantarelli Advocacia tem mais de 17 anos de experiência ajudando segurados em Recife e em todo o Brasil.",
      },
    ],
  faq: [
    { question: "É possível combinar tempo de contribuição de dois regimes diferentes?", answer: "Sim. A contagem recíproca permite somar tempo do RGPS (INSS) com regimes próprios (servidores públicos), desde que não seja simultâneo." },
    { question: "Quem estava perto de se aposentar antes da reforma perdeu o direito?", answer: "Não. As regras de transição foram criadas exatamente para proteger quem já contribuía. Dependendo do tempo faltante, pode haver opções vantajosas." },
    { question: "Posso desistir de uma regra de transição e escolher outra?", answer: "Sim. Antes da concessão definitiva, é possível solicitar a aplicação da regra mais vantajosa. Um advogado pode simular cada cenário." }
  ]
  },
  {
    slug: "auxilio-incapacidade-temporaria-2026-como-solicitar",
    title: "Auxílio por Incapacidade Temporária em 2026: Como Solicitar e Evitar Indeferimento",
    excerpt:
      "O antigo auxílio-doença agora é chamado de auxílio por incapacidade temporária. Saiba como funciona o pedido, a perícia e o que fazer se seu benefício for negado.",
    date: "10 de Março, 2026",
    category: "Benefícios",
    tags: ["Auxílio-Doença", "Perícia Médica", "INSS", "Incapacidade"],
    readTime: "6 min",
    keyTakeaways: [
      "O pedido pode ser feito com auxílio de um advogado especialista para maior chance de aprovação",
      "A perícia médica por telemedicina foi ampliada em 2026 para mais municípios",
      "Recurso administrativo contra indeferimento tem prazo de 30 dias",
    ],
    lastUpdated: "Março 2026",
    image: auxilioImg,
    imageAlt:
      "Pessoa recebendo orientação médica sobre auxílio por incapacidade temporária do INSS",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O auxílio por incapacidade temporária (antigo auxílio-doença) é um dos benefícios mais solicitados do INSS e também um dos mais indeferidos. Em 2026, mudanças no processo de perícia e no sistema digital trouxeram novidades que todo segurado precisa conhecer.",
      },
      {
        type: "heading",
        text: "O Que é o Auxílio por Incapacidade Temporária?",
      },
      {
        type: "paragraph",
        text: "É um benefício pago ao segurado do INSS que fica temporariamente incapaz de exercer seu trabalho por motivo de doença ou acidente. O benefício é pago enquanto durar a incapacidade, avaliada periodicamente por perícia médica.",
      },
      {
        type: "highlight",
        text: "Diferente da aposentadoria por invalidez (agora chamada de benefício por incapacidade permanente), o auxílio temporário é concedido quando há expectativa de recuperação.",
      },
      {
        type: "heading",
        text: "Requisitos para Concessão em 2026",
      },
      {
        type: "list",
        items: [
          "Ter qualidade de segurado (estar contribuindo ou em período de graça)",
          "Cumprir carência mínima de 12 contribuições mensais (exceto para acidentes e doenças graves)",
          "Estar incapacitado para o trabalho por mais de 15 dias consecutivos",
          "Comprovar a incapacidade por atestado médico com CID e período de afastamento",
        ],
      },
      {
        type: "heading",
        text: "Motivos Comuns de Indeferimento",
      },
      {
        type: "list",
        items: [
          "Atestado médico incompleto ou sem CID",
          "Perícia concluindo que não há incapacidade para o trabalho",
          "Falta de carência (menos de 12 contribuições)",
          "Perda da qualidade de segurado",
          "Doença ou lesão preexistente à filiação ao INSS",
        ],
      },
      {
        type: "heading",
        text: "O Que Fazer se o Benefício For Negado?",
      },
      {
        type: "paragraph",
        text: "Se seu auxílio for indeferido, você tem três opções: recurso administrativo ao Conselho de Recursos da Previdência Social (prazo de 30 dias), novo pedido com documentação complementar, ou ação judicial. Em muitos casos, a via judicial é a mais eficaz.",
      },
      {
        type: "highlight",
        text: "Importante: Em ações judiciais, é possível obter tutela antecipada (decisão urgente) que garante o pagamento do benefício enquanto o processo tramita. Consulte um advogado especialista.",
      },
      {
        type: "heading",
        text: "Valor do Benefício",
      },
      {
        type: "paragraph",
        text: "O valor do auxílio por incapacidade temporária corresponde a 91% do salário de benefício, calculado com base na média de todas as contribuições desde julho de 1994. O piso é de R$ 1.621,00 (salário mínimo 2026) e o teto é de R$ 8.157,41.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você está impossibilitado de trabalhar por doença ou acidente, não hesite em buscar seus direitos. O auxílio por incapacidade temporária existe para proteger o segurado nesse momento difícil. Conte com a Cantarelli Advocacia para orientação especializada em todo o processo.",
      },
    ],
  faq: [
    { question: "A empresa pode demitir durante o recebimento de auxílio-doença?", answer: "Não. O contrato de trabalho fica suspenso durante o benefício. A demissão só pode ocorrer após o retorno ao trabalho." },
    { question: "Existe limite de vezes para pedir auxílio por incapacidade?", answer: "Não. O segurado pode solicitar quantas vezes forem necessárias, desde que comprove nova incapacidade e mantenha a qualidade de segurado." },
    { question: "O auxílio-doença pode ser transformado em aposentadoria por invalidez?", answer: "Sim. Se durante o período de benefício a perícia constatar incapacidade permanente, o auxílio pode ser convertido em aposentadoria por invalidez." }
  ]
  },
  {
    slug: "pensao-por-morte-2026-novas-regras-duracao",
    title: "Pensão por Morte em 2026: Regras de Duração, Valor e Quem Tem Direito",
    excerpt:
      "A pensão por morte sofreu mudanças importantes após a Reforma. Entenda as regras de duração, quem são os dependentes e como calcular o valor do benefício em 2026.",
    date: "5 de Março, 2026",
    category: "Pensões",
    tags: ["Pensão", "Dependentes", "Óbito", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "O valor base da pensão é 50% + 10% por dependente, podendo chegar a 100%",
      "A duração para cônjuges varia de 3 anos a vitalícia conforme a idade e tempo de casamento",
      "Filhos recebem até 21 anos (ou 24 se universitários, em alguns casos judiciais)",
    ],
    lastUpdated: "Março 2026",
    image: pensaoImg,
    imageAlt:
      "Família analisando documentos financeiros sobre pensão por morte e planejamento previdenciário",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A pensão por morte é um dos benefícios previdenciários mais importantes para a proteção da família. Após o falecimento de um segurado do INSS, seus dependentes podem ter direito a receber um valor mensal. Em 2026, as regras continuam seguindo o formato da Reforma da Previdência, com alguns detalhes que merecem atenção.",
      },
      {
        type: "heading",
        text: "Quem São os Dependentes?",
      },
      {
        type: "paragraph",
        text: "O INSS classifica os dependentes em três classes. A existência de dependentes em uma classe exclui o direito dos dependentes das classes seguintes:",
      },
      {
        type: "list",
        items: [
          "Classe 1: Cônjuge, companheiro(a) e filhos menores de 21 anos ou inválidos/com deficiência",
          "Classe 2: Pais do segurado falecido",
          "Classe 3: Irmãos menores de 21 anos ou inválidos/com deficiência",
        ],
      },
      {
        type: "highlight",
        text: "Cônjuges e companheiros em união estável têm dependência presumida — não precisam comprovar dependência econômica. Pais e irmãos precisam comprovar.",
      },
      {
        type: "heading",
        text: "Como é Calculado o Valor da Pensão em 2026",
      },
      {
        type: "paragraph",
        text: "Após a Reforma da Previdência, o cálculo da pensão por morte mudou significativamente. O valor base é de 50% do que o segurado recebia (ou teria direito) mais 10% por cada dependente, até o limite de 100%.",
      },
      {
        type: "subheading",
        text: "Exemplos de Cálculo",
      },
      {
        type: "list",
        items: [
          "1 dependente: 50% + 10% = 60% do valor da aposentadoria",
          "2 dependentes: 50% + 20% = 70% do valor da aposentadoria",
          "3 dependentes: 50% + 30% = 80% do valor da aposentadoria",
          "5 ou mais dependentes: 50% + 50% = 100% do valor da aposentadoria",
        ],
      },
      {
        type: "paragraph",
        text: "Se o valor calculado for inferior a um salário mínimo (R$ 1.621,00 em 2026), o beneficiário receberá o mínimo. Quando o dependente que gerou a cota perde a condição (ex: filho completa 21 anos), a cota não é redistribuída.",
      },
      {
        type: "heading",
        text: "Duração da Pensão por Morte",
      },
      {
        type: "paragraph",
        text: "A duração da pensão para cônjuges e companheiros depende da idade do beneficiário na data do óbito e do tempo de casamento/união estável:",
      },
      {
        type: "list",
        items: [
          "Menos de 2 anos de casamento e menos de 18 contribuições: 4 meses",
          "Cônjuge com menos de 22 anos: 3 anos",
          "Cônjuge entre 22 e 27 anos: 6 anos",
          "Cônjuge entre 28 e 30 anos: 10 anos",
          "Cônjuge entre 31 e 41 anos: 15 anos",
          "Cônjuge entre 42 e 44 anos: 20 anos",
          "Cônjuge com 45 anos ou mais: vitalícia",
        ],
      },
      {
        type: "heading",
        text: "Documentos Necessários para Solicitar",
      },
      {
        type: "list",
        items: [
          "Certidão de óbito do segurado",
          "Documentos de identificação do dependente (RG, CPF)",
          "Certidão de casamento ou prova de união estável",
          "Certidão de nascimento (para filhos)",
          "Documentos do segurado falecido (CPF, carteira de trabalho)",
          "Comprovante de dependência econômica (para pais e irmãos)",
        ],
      },
      {
        type: "heading",
        text: "Casos Especiais",
      },
      {
        type: "subheading",
        text: "Morte por Acidente de Trabalho",
      },
      {
        type: "paragraph",
        text: "Quando o óbito decorre de acidente de trabalho ou doença ocupacional, não há exigência de carência e podem existir indenizações adicionais contra o empregador.",
      },
      {
        type: "subheading",
        text: "Ex-cônjuge com Pensão Alimentícia",
      },
      {
        type: "paragraph",
        text: "O ex-cônjuge que recebia pensão alimentícia do falecido também tem direito à pensão por morte, desde que comprove a dependência econômica. O valor será rateado com os demais dependentes.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A pensão por morte é um direito fundamental para a proteção da família após a perda de um ente querido. Conhecer as regras e ter toda a documentação em ordem agiliza o processo e evita indeferimentos. A Cantarelli Advocacia está à disposição para orientar você e sua família em todo o processo.",
      },
    ],
  faq: [
    { question: "Companheiro(a) em união estável tem direito à pensão?", answer: "Sim. A união estável é equiparada ao casamento para fins de pensão por morte, desde que comprovada por documentos ou testemunhos." },
    { question: "Ex-cônjuge que recebia pensão alimentícia tem direito à pensão por morte?", answer: "Sim. O ex-cônjuge ou companheiro que recebia pensão alimentícia mantém o direito à pensão por morte, comprovada a dependência econômica." },
    { question: "A pensão por morte pode ser solicitada anos depois do óbito?", answer: "Sim, mas os atrasados só retroagem à data do óbito se requerida em até 90 dias (180 dias para menores). Após esse prazo, vale a partir do requerimento." }
  ]
  },
  {
    slug: "aposentadoria-rural-2026-como-comprovar",
    title: "Aposentadoria Rural 2026: Como Comprovar Tempo de Trabalho no Campo",
    excerpt:
      "Trabalhadores rurais têm regras diferenciadas para aposentadoria. Saiba como comprovar atividade rural, quais documentos são aceitos e os requisitos atualizados para 2026.",
    date: "1 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Rural", "Trabalhador do Campo", "INSS", "Comprovação"],
    readTime: "8 min",
    keyTakeaways: [
      "Idade mínima: 55 anos para mulheres e 60 para homens, sem alteração pela Reforma",
      "Tempo de atividade rural de 15 anos pode ser comprovado por documentos e testemunhas",
      "Notas fiscais de produtor, contratos de arrendamento e declaração do sindicato são provas aceitas",
    ],
    lastUpdated: "Março 2026",
    image: ruralImg,
    imageAlt:
      "Casal de trabalhadores rurais em propriedade agrícola, representando aposentadoria rural no INSS",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A aposentadoria rural é uma das modalidades mais importantes do sistema previdenciário brasileiro, beneficiando milhões de trabalhadores do campo. Em 2026, as regras continuam diferenciadas em relação à aposentadoria urbana, mas a comprovação do tempo de trabalho rural continua sendo o maior desafio.",
      },
      {
        type: "heading",
        text: "Quem É Considerado Trabalhador Rural?",
      },
      {
        type: "paragraph",
        text: "O INSS classifica como segurado especial rural o trabalhador que exerce atividade agropecuária individualmente ou em regime de economia familiar, sem empregados permanentes. Isso inclui agricultores, pescadores artesanais, seringueiros e indígenas.",
      },
      {
        type: "list",
        items: [
          "Agricultor familiar que trabalha em pequena propriedade",
          "Pescador artesanal que exerce a pesca como profissão habitual",
          "Garimpeiro que trabalha em regime de economia familiar",
          "Cônjuge ou companheiro que participa da atividade rural",
          "Filho maior de 16 anos que trabalha com a família na propriedade",
        ],
      },
      {
        type: "heading",
        text: "Requisitos para Aposentadoria Rural em 2026",
      },
      {
        type: "paragraph",
        text: "A Reforma da Previdência de 2019 NÃO alterou as regras da aposentadoria rural. Os requisitos permanecem os mesmos:",
      },
      {
        type: "list",
        items: [
          "Mulheres: 55 anos de idade",
          "Homens: 60 anos de idade",
          "15 anos de atividade rural comprovada",
          "Estar exercendo atividade rural no momento do requerimento ou ter sido a última atividade exercida",
        ],
      },
      {
        type: "highlight",
        text: "Diferente da aposentadoria urbana, não é necessário ter contribuído financeiramente ao INSS. A comprovação do exercício da atividade rural substitui as contribuições.",
      },
      {
        type: "heading",
        text: "Documentos Aceitos para Comprovar Atividade Rural",
      },
      {
        type: "paragraph",
        text: "A comprovação do tempo de trabalho rural é feita através do chamado 'início de prova material', que são documentos que evidenciam a atividade no campo. A partir de 2023, o INSS passou a ser mais rigoroso na análise documental.",
      },
      {
        type: "list",
        items: [
          "Contrato de arrendamento, parceria ou comodato rural",
          "Notas fiscais de venda de produção rural",
          "Declaração do sindicato dos trabalhadores rurais",
          "Bloco de notas de produtor rural",
          "Comprovante de recebimento de benefício social (Pronaf, etc.)",
          "Certidão de casamento ou nascimento com profissão 'agricultor'",
          "Declaração de Aptidão ao Pronaf (DAP)",
          "Cadastro no INCRA",
          "Comprovantes de pagamento do ITR (Imposto Territorial Rural)",
        ],
      },
      {
        type: "heading",
        text: "Prova Testemunhal: Quando e Como Usar",
      },
      {
        type: "paragraph",
        text: "A prova testemunhal sozinha não basta para comprovar atividade rural perante o INSS. É necessário pelo menos um início de prova material (documento). Porém, na Justiça, testemunhas podem complementar a prova documental e são frequentemente decisivas.",
      },
      {
        type: "highlight",
        text: "Importante: Na via judicial, a Súmula 149 do STJ estabelece que a prova testemunhal é válida para comprovar atividade rural, desde que apoiada por início de prova material. Na prática, vizinhos, comerciantes locais e colegas de trabalho são testemunhas válidas.",
      },
      {
        type: "heading",
        text: "Período de Carência e Tempo Misto",
      },
      {
        type: "paragraph",
        text: "Se você trabalhou parte da vida no campo e parte na cidade, pode somar os períodos para obter uma aposentadoria por tempo misto. Nesse caso, as regras de idade e tempo de contribuição seguem as da aposentadoria urbana, mas o tempo rural é contado normalmente.",
      },
      {
        type: "heading",
        text: "Erros Comuns que Causam Indeferimento",
      },
      {
        type: "list",
        items: [
          "Não reunir documentos suficientes antes de dar entrada no pedido",
          "Ter registro em carteira em atividade urbana no período que se quer comprovar como rural",
          "Propriedade rural acima do limite legal (4 módulos fiscais)",
          "Não comprovar atividade rural recente (nos últimos meses antes do pedido)",
          "Documentos em nome de terceiros sem vínculo familiar comprovado",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A aposentadoria rural é um direito garantido pela Constituição, mas a burocracia na comprovação faz com que muitos pedidos sejam negados injustamente. Se você é trabalhador rural e está próximo da idade, comece a reunir seus documentos agora. A Cantarelli Advocacia tem experiência em ações rurais e pode ajudar a garantir seu benefício.",
      },
    ],
  faq: [
    { question: "Quem mudou do campo para a cidade perde o tempo rural?", answer: "Não. O tempo de atividade rural pode ser somado ao tempo urbano para qualquer aposentadoria, mediante comprovação documental." },
    { question: "Filhos de agricultores podem usar o tempo rural dos pais?", answer: "Não diretamente, mas o filho que trabalhou na propriedade familiar desde jovem pode comprovar seu próprio tempo rural a partir dos 12 anos." },
    { question: "Pescador artesanal tem os mesmos direitos do trabalhador rural?", answer: "Sim. Pescadores artesanais são considerados segurados especiais com os mesmos benefícios e requisitos dos trabalhadores rurais." }
  ]
  },
  {
    slug: "aposentadoria-especial-insalubridade-2026",
    title: "Aposentadoria Especial por Insalubridade em 2026: Quem Tem Direito",
    excerpt:
      "Profissionais expostos a agentes nocivos podem se aposentar mais cedo. Conheça as regras da aposentadoria especial em 2026, os agentes reconhecidos e como comprovar a exposição.",
    date: "22 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Insalubridade", "Agentes Nocivos", "PPP", "LTCAT"],
    readTime: "7 min",
    keyTakeaways: [
      "Tempo mínimo de exposição: 15, 20 ou 25 anos conforme o grau de risco",
      "O PPP (Perfil Profissiográfico Previdenciário) é o documento principal de comprovação",
      "Após a Reforma, exige-se também idade mínima de 55, 58 ou 60 anos conforme o risco",
    ],
    lastUpdated: "Março 2026",
    image: especialImg,
    imageAlt:
      "Trabalhador com equipamento de proteção individual em ambiente industrial, aposentadoria especial",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A aposentadoria especial é destinada a trabalhadores que exercem atividades em condições prejudiciais à saúde ou à integridade física. Em 2026, as regras seguem as determinações da Reforma da Previdência, com exigências adicionais de idade mínima que não existiam antes.",
      },
      {
        type: "heading",
        text: "O Que É a Aposentadoria Especial?",
      },
      {
        type: "paragraph",
        text: "É um benefício concedido ao segurado que trabalhou exposto a agentes nocivos (químicos, físicos ou biológicos) de forma habitual e permanente. Permite aposentadoria com menos tempo de contribuição do que a regra geral.",
      },
      {
        type: "heading",
        text: "Quem Tem Direito em 2026?",
      },
      {
        type: "paragraph",
        text: "Profissionais de diversas áreas podem ter direito à aposentadoria especial. Os mais comuns incluem:",
      },
      {
        type: "list",
        items: [
          "Profissionais de saúde (médicos, enfermeiros, dentistas) — exposição a agentes biológicos",
          "Eletricistas — exposição a tensão elétrica acima de 250 volts",
          "Mineradores — exposição a agentes químicos e físicos",
          "Metalúrgicos e soldadores — exposição a calor, ruído e agentes químicos",
          "Trabalhadores da construção civil — exposição a poeira, cal, cimento",
          "Vigilantes armados — exposição a periculosidade",
          "Frentistas e trabalhadores de postos de combustível — agentes químicos",
        ],
      },
      {
        type: "heading",
        text: "Regras Após a Reforma da Previdência",
      },
      {
        type: "paragraph",
        text: "Antes da Reforma de 2019, bastava comprovar o tempo de exposição. Agora, além do tempo, é necessário cumprir uma idade mínima:",
      },
      {
        type: "list",
        items: [
          "Risco alto (15 anos de exposição): idade mínima de 55 anos — Ex: mineração subterrânea",
          "Risco médio (20 anos de exposição): idade mínima de 58 anos — Ex: mineração em superfície, amianto",
          "Risco baixo (25 anos de exposição): idade mínima de 60 anos — Ex: ruído, calor, agentes químicos",
        ],
      },
      {
        type: "highlight",
        text: "Regra de transição por pontos: quem já trabalhava antes da Reforma pode usar o sistema de pontos — 66 pontos (15 anos), 76 pontos (20 anos) ou 86 pontos (25 anos) em 2026.",
      },
      {
        type: "heading",
        text: "Como Comprovar a Exposição a Agentes Nocivos",
      },
      {
        type: "subheading",
        text: "PPP — Perfil Profissiográfico Previdenciário",
      },
      {
        type: "paragraph",
        text: "O PPP é o documento principal. Deve ser emitido pela empresa e conter informações sobre as atividades exercidas, os agentes nocivos presentes no ambiente de trabalho, e a intensidade da exposição. A partir de 2023, o PPP passou a ser eletrônico, integrado ao eSocial.",
      },
      {
        type: "subheading",
        text: "LTCAT — Laudo Técnico de Condições Ambientais do Trabalho",
      },
      {
        type: "paragraph",
        text: "O LTCAT é elaborado por engenheiro de segurança ou médico do trabalho e fundamenta as informações do PPP. Embora não seja entregue ao INSS diretamente, é essencial para sustentar o pedido administrativo ou judicial.",
      },
      {
        type: "heading",
        text: "Conversão de Tempo Especial em Comum",
      },
      {
        type: "paragraph",
        text: "Após a Reforma, o STF decidiu que não é mais possível converter tempo especial em comum para períodos trabalhados após novembro de 2019. Porém, períodos anteriores à Reforma podem ser convertidos com os fatores 1,4 (homem) e 1,2 (mulher), o que pode adiantar a aposentadoria comum.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A aposentadoria especial é um direito importante para quem arrisca a saúde no trabalho. Se você trabalha ou já trabalhou em condições insalubres ou perigosas, procure um advogado previdenciário para analisar seu caso. A Cantarelli Advocacia tem ampla experiência em ações de aposentadoria especial em Recife e em todo o Brasil.",
      },
    ],
  faq: [
    { question: "Profissional de saúde tem direito à aposentadoria especial?", answer: "Sim, se comprovar exposição habitual e permanente a agentes biológicos nocivos, como vírus e bactérias, em ambiente hospitalar." },
    { question: "É possível converter tempo especial em comum?", answer: "Sim, para períodos anteriores à Reforma de 2019. O fator de conversão é 1,4 para homens e 1,2 para mulheres com atividade de 25 anos." },
    { question: "Trabalhador terceirizado tem direito à aposentadoria especial?", answer: "Sim, se comprovar a exposição a agentes nocivos, independentemente do vínculo ser direto ou terceirizado. O PPP deve ser fornecido pela empresa tomadora." }
  ]
  },
  {
    slug: "aposentadoria-pcd-por-idade-tempo-contribuicao-2026",
    title: "Aposentadoria da Pessoa com Deficiência (PCD): Por Idade e Por Tempo de Contribuição em 2026",
    excerpt:
      "A aposentadoria da pessoa com deficiência tem regras próprias e mais favoráveis que a regra geral. Conheça os requisitos por idade e por tempo de contribuição, o diagnóstico previdenciário e como garantir esse direito.",
    date: "20 de Março, 2026",
    category: "Autismo",
    tags: ["PCD", "Deficiência", "LC 142", "INSS"],
    readTime: "9 min",
    keyTakeaways: [
      "PCD pode se aposentar com idade reduzida (55 anos mulheres / 60 anos homens) e apenas 15 anos de contribuição",
      "A aposentadoria por tempo de contribuição da PCD não exige idade mínima e varia conforme o grau de deficiência",
      "O diagnóstico previdenciário é essencial para comprovar o grau e a duração da deficiência perante o INSS",
      "Contribuintes individuais com deficiência também têm direito à aposentadoria PCD",
    ],
    lastUpdated: "Março 2026",
    image: pcdImg,
    imageAlt:
      "Pessoa com deficiência em consulta com advogado previdenciário sobre aposentadoria PCD",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A Lei Complementar nº 142/2013 garantiu à pessoa com deficiência regras diferenciadas para aposentadoria, reconhecendo que esses segurados enfrentam barreiras adicionais no mercado de trabalho. Em 2026, essas regras seguem vigentes e representam um dos benefícios mais importantes do sistema previdenciário brasileiro.",
      },
      {
        type: "heading",
        text: "Aposentadoria PCD por Idade",
      },
      {
        type: "paragraph",
        text: "A aposentadoria por idade da pessoa com deficiência possui requisitos mais brandos que a regra geral. Os requisitos são:",
      },
      {
        type: "list",
        items: [
          "Idade: 60 anos (homens) ou 55 anos (mulheres)",
          "Tempo de contribuição mínimo: 15 anos",
          "Comprovar a existência de deficiência durante todo o período de contribuição exigido",
          "A deficiência pode ser de qualquer grau (leve, moderada ou grave)",
        ],
      },
      {
        type: "highlight",
        text: "Atenção: A Reforma da Previdência de 2019 NÃO alterou as regras da aposentadoria PCD. Essa é uma das únicas modalidades que manteve suas condições originais.",
      },
      {
        type: "heading",
        text: "Aposentadoria PCD por Tempo de Contribuição",
      },
      {
        type: "paragraph",
        text: "Esta modalidade não exige idade mínima. O tempo de contribuição necessário varia conforme o grau de deficiência avaliado pela perícia biopsicossocial do INSS:",
      },
      {
        type: "list",
        items: [
          "Deficiência grave: 25 anos (homens) ou 20 anos (mulheres)",
          "Deficiência moderada: 29 anos (homens) ou 24 anos (mulheres)",
          "Deficiência leve: 33 anos (homens) ou 28 anos (mulheres)",
        ],
      },
      {
        type: "paragraph",
        text: "A grande vantagem é a ausência de idade mínima e o cálculo mais favorável do benefício: 100% do salário de benefício para quem cumpre os requisitos, sem a aplicação do fator previdenciário de forma obrigatória.",
      },
      {
        type: "heading",
        text: "O Que é o Diagnóstico Previdenciário?",
      },
      {
        type: "paragraph",
        text: "O diagnóstico previdenciário é uma análise técnica completa da situação do segurado frente ao INSS. No caso da pessoa com deficiência, ele é especialmente importante porque permite:",
      },
      {
        type: "list",
        items: [
          "Identificar se a deficiência se enquadra nos critérios do INSS (leve, moderada ou grave)",
          "Mapear todo o histórico contributivo e verificar períodos que podem ser reconhecidos",
          "Simular o melhor momento para dar entrada no benefício",
          "Reunir antecipadamente a documentação médica necessária para a perícia",
          "Avaliar se há direito a auxílio-acidente cumulado com aposentadoria",
        ],
      },
      {
        type: "highlight",
        text: "O diagnóstico previdenciário evita indeferimentos e garante que o segurado PCD entre com o pedido no momento mais vantajoso, com toda a documentação correta.",
      },
      {
        type: "heading",
        text: "Perícia Biopsicossocial: Como Funciona",
      },
      {
        type: "paragraph",
        text: "A perícia para aposentadoria PCD é diferente da perícia médica comum. Ela é realizada por uma equipe multiprofissional que avalia não apenas a condição médica, mas também os aspectos sociais, ambientais e pessoais que afetam a participação do segurado na sociedade.",
      },
      {
        type: "list",
        items: [
          "Avaliação médica: natureza e grau da deficiência física, mental, intelectual ou sensorial",
          "Avaliação funcional: impacto da deficiência nas atividades diárias e no trabalho",
          "Avaliação social: barreiras enfrentadas no ambiente social e profissional",
          "Classificação baseada na CIF (Classificação Internacional de Funcionalidade)",
        ],
      },
      {
        type: "heading",
        text: "Auxílio-Acidente e a Relação com a Aposentadoria PCD",
      },
      {
        type: "paragraph",
        text: "O auxílio-acidente é um benefício indenizatório pago ao segurado que sofre um acidente e fica com sequela permanente que reduz sua capacidade de trabalho. Ele equivale a 50% do salário de benefício e pode ser acumulado com o salário do trabalho.",
      },
      {
        type: "paragraph",
        text: "Importante: o auxílio-acidente pode ser recebido até a data da aposentadoria, e o período de recebimento é computado como tempo de contribuição. Além disso, se a sequela do acidente configura deficiência nos termos da LC 142/2013, o segurado pode ter direito à aposentadoria PCD.",
      },
      {
        type: "heading",
        text: "Documentos Essenciais para o Pedido",
      },
      {
        type: "list",
        items: [
          "Laudos médicos detalhados com CID e descrição funcional da deficiência",
          "Exames complementares (ressonância, audiometria, exames laboratoriais, etc.)",
          "Relatórios de acompanhamento médico ao longo dos anos",
          "Declaração de empregador sobre condições de trabalho",
          "Carteira de trabalho e CNIS atualizado",
          "Cartão de benefício do BPC/LOAS (se aplicável)",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A aposentadoria da pessoa com deficiência é um direito garantido por lei com regras mais favoráveis que a aposentadoria comum. Se você é PCD ou conhece alguém nessa situação, procure um advogado previdenciário para realizar o diagnóstico previdenciário e garantir o melhor benefício possível. A Cantarelli Advocacia é especialista em aposentadoria PCD em Recife e atende todo o Brasil.",
      },
    ],
  faq: [
    { question: "Deficiência adquirida depois de anos de contribuição dá direito?", answer: "Sim. O tempo contribuído antes e depois da deficiência é contabilizado proporcionalmente, aplicando-se a regra mais vantajosa ao segurado." },
    { question: "É necessário ter laudo médico atualizado para a perícia do INSS?", answer: "Sim. Laudos recentes (até 12 meses) fortalecem a avaliação, especialmente para condições que podem variar ao longo do tempo." },
    { question: "PCD pode acumular aposentadoria com benefício assistencial?", answer: "Não. Ao se aposentar, o beneficiário deve abrir mão do BPC/LOAS. Porém, a aposentadoria costuma ser mais vantajosa financeiramente." }
  ]
  },
  {
    slug: "aposentadoria-especial-ruido-contribuinte-individual-2026",
    title: "Aposentadoria Especial por Exposição ao Ruído e Tempo Especial para Contribuintes Individuais em 2026",
    excerpt:
      "Trabalhadores expostos ao ruído acima de 85 dB podem ter direito à aposentadoria especial. Saiba também como contribuintes individuais podem conseguir o reconhecimento de tempo especial no INSS.",
    date: "18 de Março, 2026",
    category: "Aposentadoria Especial",
    tags: ["Ruído", "85 dB", "Tempo Especial", "Autônomo"],
    readTime: "8 min",
    keyTakeaways: [
      "Exposição a ruído acima de 85 dB garante direito à aposentadoria especial com 25 anos de contribuição",
      "O uso de EPI não descaracteriza a exposição ao ruído para fins de aposentadoria especial (decisão do STF)",
      "Contribuintes individuais podem ter tempo especial reconhecido judicialmente, mesmo sem vínculo CLT",
      "O PPP e o LTCAT são documentos indispensáveis para comprovar a exposição",
    ],
    lastUpdated: "Março 2026",
    image: ruidoImg,
    imageAlt:
      "Trabalhador usando proteção auricular em ambiente industrial com exposição a ruído ocupacional",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A exposição ocupacional ao ruído é uma das causas mais comuns de aposentadoria especial no Brasil. Milhões de trabalhadores em indústrias, construção civil, mineração e transporte convivem diariamente com níveis sonoros prejudiciais à saúde. Além disso, uma questão pouco conhecida é que contribuintes individuais (autônomos) também podem ter direito ao reconhecimento de tempo especial.",
      },
      {
        type: "heading",
        text: "Aposentadoria Especial por Exposição ao Ruído",
      },
      {
        type: "paragraph",
        text: "O ruído é classificado como agente físico nocivo pela legislação previdenciária. Os limites de tolerância mudaram ao longo dos anos:",
      },
      {
        type: "list",
        items: [
          "Até 05/03/1997: acima de 80 dB era considerado especial",
          "De 06/03/1997 a 18/11/2003: acima de 90 dB",
          "A partir de 19/11/2003: acima de 85 dB (regra atual vigente em 2026)",
        ],
      },
      {
        type: "highlight",
        text: "Importante: O STF decidiu no Tema 555 que o uso de Equipamento de Proteção Individual (EPI) NÃO descaracteriza o tempo especial por exposição ao ruído, pois não é possível eliminar completamente os efeitos nocivos do ruído sobre a audição.",
      },
      {
        type: "heading",
        text: "Quem Tem Direito à Aposentadoria Especial por Ruído?",
      },
      {
        type: "paragraph",
        text: "Qualquer trabalhador que comprove exposição habitual e permanente a níveis de ruído acima de 85 dB durante sua jornada de trabalho. As profissões mais comuns incluem:",
      },
      {
        type: "list",
        items: [
          "Operadores de máquinas industriais (tornos, prensas, injetoras)",
          "Trabalhadores da construção civil (betoneiras, marteletes, compactadores)",
          "Motoristas de ônibus, caminhão e maquinário pesado",
          "Metalúrgicos e soldadores",
          "Trabalhadores de mineração",
          "Operadores de motosserra e roçadeira",
          "Músicos profissionais em ambientes com alta intensidade sonora",
        ],
      },
      {
        type: "heading",
        text: "Requisitos em 2026",
      },
      {
        type: "paragraph",
        text: "Para quem já contribuía antes da Reforma de 2019, aplica-se a regra de transição por pontos. Para a aposentadoria especial com 25 anos de exposição (risco baixo, categoria do ruído):",
      },
      {
        type: "list",
        items: [
          "25 anos de efetiva exposição ao agente nocivo",
          "86 pontos (soma de idade + tempo de contribuição) em 2026",
          "Ou, para quem completou os requisitos antes da Reforma: idade mínima de 60 anos + 25 anos de exposição",
        ],
      },
      {
        type: "heading",
        text: "Contribuintes Individuais e o Reconhecimento de Tempo Especial",
      },
      {
        type: "paragraph",
        text: "Uma questão muito relevante e pouco divulgada: contribuintes individuais (autônomos, profissionais liberais, empresários) também podem ter o reconhecimento de tempo especial, desde que comprovem a exposição a agentes nocivos durante sua atividade.",
      },
      {
        type: "subheading",
        text: "Base Legal",
      },
      {
        type: "paragraph",
        text: "O artigo 57 da Lei 8.213/91 não restringe a aposentadoria especial a empregados CLT. A jurisprudência do TRF e do STJ reconhece que contribuintes individuais têm direito ao tempo especial quando comprovada a exposição a agentes nocivos, independentemente da categoria profissional.",
      },
      {
        type: "subheading",
        text: "Como o Contribuinte Individual Comprova a Exposição",
      },
      {
        type: "list",
        items: [
          "Laudo técnico elaborado por engenheiro de segurança do trabalho ou médico do trabalho",
          "Laudos de medição ambiental do local de trabalho (ruído, agentes químicos, etc.)",
          "Notas fiscais e contratos que comprovem a atividade exercida",
          "Fotografias e registros do ambiente de trabalho",
          "Testemunhas que atestem as condições insalubres ou perigosas",
          "Perícia judicial no local de trabalho",
        ],
      },
      {
        type: "highlight",
        text: "O INSS costuma negar o tempo especial para contribuintes individuais na via administrativa. Porém, na via judicial, há ampla jurisprudência favorável. Um advogado especialista pode fazer toda a diferença.",
      },
      {
        type: "heading",
        text: "Exemplos de Contribuintes Individuais com Direito a Tempo Especial",
      },
      {
        type: "list",
        items: [
          "Dentistas autônomos — exposição a agentes biológicos e ruído de equipamentos",
          "Mecânicos autônomos — exposição a ruído, óleos minerais e solventes",
          "Eletricistas autônomos — exposição a tensão elétrica superior a 250V",
          "Soldadores autônomos — exposição a fumos metálicos, calor e radiação",
          "Motoristas autônomos de caminhão — exposição a ruído e vibração",
          "Marceneiros e carpinteiros — exposição a ruído e poeira de madeira",
        ],
      },
      {
        type: "heading",
        text: "PPP e LTCAT: Documentos Indispensáveis",
      },
      {
        type: "paragraph",
        text: "O Perfil Profissiográfico Previdenciário (PPP) é o documento oficial para comprovar a exposição a agentes nocivos. Para empregados CLT, ele é emitido pela empresa. Para contribuintes individuais, a comprovação geralmente é feita por laudos técnicos e perícia judicial.",
      },
      {
        type: "paragraph",
        text: "O LTCAT (Laudo Técnico de Condições Ambientais do Trabalho) fundamenta o PPP e deve ser elaborado por profissional habilitado. Ele mede quantitativamente os agentes nocivos presentes no ambiente de trabalho.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você trabalha ou trabalhou exposto ao ruído — seja como empregado CLT ou como contribuinte individual — pode ter direito à aposentadoria especial ou à conversão de tempo especial em comum. Não deixe de buscar seus direitos. A Cantarelli Advocacia possui experiência comprovada em ações de aposentadoria especial por ruído e reconhecimento de tempo especial para autônomos em Recife e todo o Brasil.",
      },
    ],
  faq: [
    { question: "O trabalhador pode medir o ruído por conta própria?", answer: "Não. A medição deve constar em laudos técnicos oficiais (LTCAT) elaborados por engenheiro de segurança do trabalho ou médico do trabalho." },
    { question: "Trabalho com fone de ouvido em call center configura exposição a ruído?", answer: "Pode configurar, se houver medição técnica que comprove exposição acima de 85 dB. É necessário laudo específico do ambiente." },
    { question: "Período sem PPP impede a aposentadoria especial?", answer: "Não necessariamente. É possível obter o PPP retroativamente ou usar outros meios de prova como laudos técnicos e perícia judicial." }
  ]
  },
  {
    slug: "bpc-loas-2026-quem-tem-direito-como-solicitar",
    title: "BPC LOAS em 2026: Quem Tem Direito e Como Solicitar o Benefício",
    excerpt:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal para idosos e pessoas com deficiência de baixa renda. Saiba quem tem direito e como dar entrada em 2026.",
    date: "24 de Março, 2026",
    category: "BPC/LOAS",
    tags: ["BPC", "LOAS", "Baixa Renda", "CadÚnico"],
    readTime: "7 min",
    keyTakeaways: [
      "Idosos acima de 65 anos e pessoas com deficiência de longo prazo podem requerer o BPC",
      "A renda per capita familiar deve ser inferior a 1/4 do salário mínimo (R$ 405,25 em 2026)",
      "Não é necessário ter contribuído ao INSS para receber o BPC/LOAS",
      "O benefício precisa ser revisado a cada 2 anos pelo INSS",
    ],
    lastUpdated: "Março 2026",
    image: bpcLoasImg,
    imageAlt:
      "Idoso brasileiro recebendo orientação sobre BPC LOAS em escritório de advocacia previdenciária",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), é um dos benefícios assistenciais mais importantes do Brasil. Ele garante o pagamento de um salário mínimo mensal para idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade que comprovem não ter meios de prover a própria manutenção.",
      },
      {
        type: "heading",
        text: "Quem Tem Direito ao BPC/LOAS em 2026?",
      },
      {
        type: "paragraph",
        text: "Existem duas categorias de beneficiários do BPC: idosos e pessoas com deficiência. Em ambos os casos, o requisito fundamental é a comprovação de baixa renda familiar.",
      },
      {
        type: "subheading",
        text: "BPC para Idosos",
      },
      {
        type: "list",
        items: [
          "Ter 65 anos ou mais",
          "Renda familiar per capita inferior a 1/4 do salário mínimo",
          "Não receber outro benefício da seguridade social (exceto assistência médica)",
          "Estar inscrito no CadÚnico (Cadastro Único)",
        ],
      },
      {
        type: "subheading",
        text: "BPC para Pessoa com Deficiência",
      },
      {
        type: "list",
        items: [
          "Ter impedimento de longo prazo (físico, mental, intelectual ou sensorial)",
          "O impedimento deve durar pelo menos 2 anos ou ser permanente",
          "Renda familiar per capita inferior a 1/4 do salário mínimo",
          "Passar por avaliação social e médica do INSS",
        ],
      },
      {
        type: "highlight",
        text: "Importante: O BPC/LOAS não exige contribuição prévia ao INSS. Mesmo quem nunca trabalhou com carteira assinada pode ter direito ao benefício.",
      },
      {
        type: "heading",
        text: "Como Calcular a Renda Familiar em 2026",
      },
      {
        type: "paragraph",
        text: "Com o salário mínimo de R$ 1.621,00 em 2026, a renda per capita máxima para ter direito ao BPC é de R$ 405,25 por pessoa. Entram no cálculo: cônjuge, filhos, enteados e irmãos que residam no mesmo domicílio.",
      },
      {
        type: "paragraph",
        text: "Alguns rendimentos podem ser excluídos do cálculo, como o BPC já recebido por outro membro da família e estágios supervisionados. A jurisprudência também tem admitido critérios mais flexíveis de aferição da miserabilidade.",
      },
      {
        type: "heading",
        text: "Por Que Contar com um Advogado Especialista?",
      },
      {
        type: "paragraph",
        text: "O processo de solicitação do BPC/LOAS envolve critérios técnicos complexos, como a análise de renda per capita, inscrição no CadÚnico e avaliação médica e social. Erros na documentação ou no enquadramento podem resultar em indeferimento. Um advogado previdenciário garante que todo o processo seja conduzido corretamente, aumentando significativamente as chances de aprovação.",
      },
      {
        type: "heading",
        text: "BPC Negado: O Que Fazer?",
      },
      {
        type: "paragraph",
        text: "Se o BPC for negado, existem duas opções: recurso administrativo ao CRPS (Conselho de Recursos da Previdência Social) ou ação judicial. Na via judicial, o juiz pode considerar outros critérios de miserabilidade além da renda per capita de 1/4 do salário mínimo, o que aumenta as chances de concessão.",
      },
      {
        type: "highlight",
        text: "Em Recife/PE, a Cantarelli Advocacia tem experiência comprovada na concessão judicial de BPC/LOAS, incluindo casos em que o benefício foi inicialmente negado pelo INSS.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "O BPC/LOAS é um direito fundamental para idosos e pessoas com deficiência em situação de vulnerabilidade. Se você ou um familiar se enquadra nos requisitos, não deixe de buscar orientação jurídica especializada para garantir o acesso ao benefício.",
      },
    ],
  faq: [
    { question: "Estrangeiro residente no Brasil pode receber BPC?", answer: "Sim. O STF decidiu que estrangeiros com residência fixa no Brasil têm direito ao BPC, desde que cumpram os demais requisitos legais." },
    { question: "O que acontece com o BPC se eu começar a trabalhar?", answer: "O benefício pode ser suspenso. Porém, pessoas com deficiência têm direito ao retorno automático do BPC se pararem de trabalhar em até 2 anos." },
    { question: "Morador de rua pode receber BPC?", answer: "Sim. Pessoas em situação de rua podem solicitar o BPC. A ausência de endereço fixo não impede o acesso ao benefício." }
  ]
  },
  {
    slug: "revisao-beneficio-inss-2026-aumento-aposentadoria",
    title: "Revisão de Benefício do INSS em 2026: Como Aumentar Sua Aposentadoria",
    excerpt:
      "Milhares de aposentados têm direito a revisões que podem aumentar significativamente o valor da aposentadoria. Conheça as principais teses revisionais vigentes em 2026.",
    date: "23 de Março, 2026",
    category: "Revisão",
    tags: ["Revisão", "Teses Revisionais", "Aumento", "INSS"],
    readTime: "9 min",
    keyTakeaways: [
      "A revisão da vida toda permite incluir salários anteriores a julho de 1994 no cálculo",
      "O prazo para pedir revisão é de 10 anos a partir do primeiro pagamento",
      "Revisões podem aumentar aposentadorias em até 40% dependendo do caso",
      "Erros no CNIS (extrato previdenciário) podem reduzir o valor do benefício",
    ],
    lastUpdated: "Março 2026",
    image: revisaoImg,
    imageAlt:
      "Profissional calculando revisão de benefício do INSS com documentos e calculadora",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A revisão de benefício é um direito de todo segurado que acredita que o valor da sua aposentadoria foi calculado incorretamente ou que existem teses jurídicas que podem melhorar o valor recebido. Em 2026, diversas revisões continuam sendo aplicadas pelos tribunais brasileiros.",
      },
      {
        type: "heading",
        text: "Principais Revisões Disponíveis em 2026",
      },
      {
        type: "subheading",
        text: "Revisão da Vida Toda (Tema 999 do STF)",
      },
      {
        type: "paragraph",
        text: "A revisão da vida toda permite que o segurado inclua no cálculo do benefício os salários de contribuição anteriores a julho de 1994. Isso é vantajoso para quem tinha salários altos antes do Plano Real e viu seu benefício ser calculado apenas com as contribuições posteriores.",
      },
      {
        type: "subheading",
        text: "Revisão do Teto (EC 20/98 e EC 41/03)",
      },
      {
        type: "paragraph",
        text: "Quem se aposentou entre 1988 e 2003 e teve o benefício limitado pelo teto da época pode ter direito à readequação dos valores com base nos novos tetos estabelecidos pelas Emendas Constitucionais 20/1998 e 41/2003.",
      },
      {
        type: "subheading",
        text: "Revisão do Buraco Negro",
      },
      {
        type: "paragraph",
        text: "Benefícios concedidos entre 5 de outubro de 1988 e 5 de abril de 1991 podem ter sido calculados sem a aplicação do artigo 144 da Lei 8.213/91, gerando valores menores do que o devido.",
      },
      {
        type: "heading",
        text: "Prazo para Pedir Revisão",
      },
      {
        type: "highlight",
        text: "O prazo decadencial para revisão de benefício é de 10 anos, contados a partir do primeiro dia do mês seguinte ao do recebimento da primeira prestação. Após esse prazo, o direito à revisão se extingue.",
      },
      {
        type: "heading",
        text: "Como Saber se Tenho Direito a Uma Revisão",
      },
      {
        type: "list",
        items: [
          "Solicite o extrato do CNIS e verifique se todos os vínculos e salários estão corretos",
          "Compare o valor do benefício com o cálculo baseado em todos os salários de contribuição",
          "Consulte um advogado previdenciário para análise do processo de concessão",
          "Verifique a data de concessão para confirmar que está dentro do prazo de 10 anos",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você recebe aposentadoria, pensão ou auxílio do INSS, vale a pena verificar se existe alguma revisão aplicável ao seu caso. A Cantarelli Advocacia oferece análise gratuita do seu benefício para identificar possíveis revisões.",
      },
    ],
  faq: [
    { question: "Aposentadoria concedida por acordo judicial pode ser revisada?", answer: "Depende. Se o acordo incluiu cláusula de renúncia à revisão, não será possível. Caso contrário, o prazo de 10 anos se aplica normalmente." },
    { question: "Revisão da vida toda ainda é possível em 2026?", answer: "Sim, desde que dentro do prazo decadencial de 10 anos e que as contribuições anteriores a julho/1994 sejam mais vantajosas ao cálculo." },
    { question: "Erro de digitação no nome pode afetar o valor da aposentadoria?", answer: "Indiretamente, sim. Erros cadastrais podem fazer com que contribuições não sejam computadas. A correção é feita pela retificação do CNIS." }
  ]
  },
  {
    slug: "auxilio-acidente-2026-quem-tem-direito-valor",
    title: "Auxílio-Acidente em 2026: Quem Tem Direito, Valor e Como Solicitar",
    excerpt:
      "O auxílio-acidente é um benefício pago ao trabalhador que sofre acidente e fica com sequelas permanentes. Entenda quem tem direito, quanto recebe e como pedir em 2026.",
    date: "21 de Março, 2026",
    category: "Benefícios",
    tags: ["Acidente", "Sequela", "Indenização", "INSS"],
    readTime: "6 min",
    keyTakeaways: [
      "O auxílio-acidente corresponde a 50% do salário de benefício após a Reforma",
      "É pago como indenização e pode ser acumulado com o salário do trabalho",
      "Somente segurados empregados, avulsos e segurados especiais têm direito",
      "A sequela deve reduzir permanentemente a capacidade para o trabalho",
    ],
    lastUpdated: "Março 2026",
    image: auxAcidenteImg,
    imageAlt:
      "Trabalhador brasileiro em consulta com advogado previdenciário sobre auxílio-acidente e documentos",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O auxílio-acidente é um benefício de natureza indenizatória, concedido ao segurado do INSS que, após consolidação das lesões decorrentes de acidente de qualquer natureza, apresenta sequelas que impliquem redução da capacidade para o trabalho que exercia habitualmente.",
      },
      {
        type: "heading",
        text: "Requisitos para o Auxílio-Acidente em 2026",
      },
      {
        type: "list",
        items: [
          "Ter qualidade de segurado (estar contribuindo ou no período de graça)",
          "Ter sofrido acidente de qualquer natureza (trabalho, trânsito, doméstico, etc.)",
          "Apresentar sequela permanente que reduza a capacidade laboral",
          "Não é exigido tempo mínimo de contribuição (carência)",
        ],
      },
      {
        type: "heading",
        text: "Valor do Auxílio-Acidente Após a Reforma",
      },
      {
        type: "paragraph",
        text: "Após a Reforma da Previdência de 2019, o auxílio-acidente passou a corresponder a 50% do salário de benefício. O salário de benefício é calculado com base na média de todos os salários de contribuição desde julho de 1994.",
      },
      {
        type: "highlight",
        text: "O auxílio-acidente é um dos poucos benefícios que pode ser acumulado com o salário do trabalho. O segurado pode continuar trabalhando e recebendo o benefício simultaneamente.",
      },
      {
        type: "heading",
        text: "Diferença entre Auxílio-Acidente e Auxílio por Incapacidade",
      },
      {
        type: "paragraph",
        text: "O auxílio-acidente é pago quando o segurado volta a trabalhar mas ficou com sequelas. Já o auxílio por incapacidade temporária (antigo auxílio-doença) é pago enquanto o segurado está impossibilitado de trabalhar. São benefícios diferentes e não podem ser recebidos simultaneamente.",
      },
      {
        type: "heading",
        text: "A Importância da Orientação Jurídica Especializada",
      },
      {
        type: "paragraph",
        text: "O auxílio-acidente exige comprovação de sequela permanente por perícia médica, o que torna o processo técnico e sujeito a indeferimentos. Um advogado previdenciário pode reunir a documentação médica adequada, orientar sobre a CAT (Comunicação de Acidente de Trabalho) e, se necessário, recorrer administrativa ou judicialmente para garantir a concessão do benefício.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você sofreu um acidente e ficou com sequelas que afetam sua capacidade de trabalho, procure orientação jurídica para garantir o auxílio-acidente. A Cantarelli Advocacia atua na concessão e revisão desse benefício em Recife e em todo o Brasil.",
      },
    ],
  faq: [
    { question: "Acidente de trânsito a caminho do trabalho gera auxílio-acidente?", answer: "Sim. O acidente de trajeto (in itinere) era equiparado ao acidente de trabalho. Após a Reforma, ainda pode gerar direitos dependendo do caso." },
    { question: "Perda parcial da audição por trabalho dá direito ao auxílio-acidente?", answer: "Sim. A perda auditiva parcial e permanente causada pelo ambiente de trabalho é uma das causas mais comuns de concessão de auxílio-acidente." },
    { question: "É possível receber auxílio-acidente e auxílio-doença ao mesmo tempo?", answer: "Não. O auxílio-acidente só é concedido após a alta do auxílio-doença, quando resta sequela que reduz a capacidade laboral." }
  ]
  },
  {
    slug: "diagnostico-previdenciario-2026-planejamento-aposentadoria",
    title: "Diagnóstico Previdenciário em 2026: Planeje Sua Aposentadoria com Segurança",
    excerpt:
      "O diagnóstico previdenciário é a ferramenta essencial para quem quer se aposentar com o melhor benefício possível. Saiba como funciona e por que é indispensável em 2026.",
    date: "19 de Março, 2026",
    category: "Planejamento",
    tags: ["Planejamento", "Diagnóstico", "Simulação", "Aposentadoria"],
    readTime: "7 min",
    keyTakeaways: [
      "O diagnóstico identifica a melhor regra de aposentadoria para cada segurado",
      "Pode revelar períodos de contribuição não registrados no CNIS",
      "Calcula o valor estimado do benefício em diferentes cenários",
      "Evita aposentadorias precipitadas que resultam em valores menores",
    ],
    lastUpdated: "Março 2026",
    image: diagnosticoImg,
    imageAlt:
      "Advogado previdenciário realizando diagnóstico previdenciário com gráficos e documentos de aposentadoria",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O diagnóstico previdenciário é uma análise completa e personalizada da vida contributiva do segurado. Ele mapeia todos os vínculos empregatícios, contribuições, tempo de serviço e condições especiais para determinar a melhor estratégia de aposentadoria.",
      },
      {
        type: "heading",
        text: "O Que é o Diagnóstico Previdenciário?",
      },
      {
        type: "paragraph",
        text: "Trata-se de um estudo detalhado que analisa o CNIS (Cadastro Nacional de Informações Sociais), identifica possíveis erros ou omissões, simula cenários de aposentadoria e indica qual regra é mais vantajosa para cada caso específico.",
      },
      {
        type: "heading",
        text: "Por Que Fazer um Diagnóstico em 2026?",
      },
      {
        type: "list",
        items: [
          "As regras de transição mudam a cada ano — o que é vantajoso hoje pode não ser amanhã",
          "Erros no CNIS podem reduzir o valor da aposentadoria em até 30%",
          "Período de atividade especial não reconhecido reduz o tempo de contribuição",
          "Contribuições em atraso podem ser mais vantajosas se feitas no momento certo",
          "Evitar dar entrada na aposentadoria pela regra errada, perdendo dinheiro para sempre",
        ],
      },
      {
        type: "heading",
        text: "O Que o Diagnóstico Analisa?",
      },
      {
        type: "list",
        items: [
          "Tempo total de contribuição (incluindo atividades rurais, militares e autônomas)",
          "Possibilidade de reconhecimento de tempo especial",
          "Simulação do valor do benefício em cada regra de transição",
          "Identificação da data ideal para dar entrada na aposentadoria",
          "Viabilidade de contribuições em atraso para atingir requisitos",
          "Análise de períodos no exterior com países que têm acordo previdenciário",
        ],
      },
      {
        type: "highlight",
        text: "Um diagnóstico previdenciário bem feito pode representar uma diferença de R$ 500 a R$ 2.000 por mês no valor da aposentadoria. Ao longo de 20 anos, isso pode significar mais de R$ 400.000 a mais no bolso do aposentado.",
      },
      {
        type: "heading",
        text: "Como Funciona na Prática",
      },
      {
        type: "list",
        items: [
          "1. Coleta de documentos: CTPS, CNIS, carnês de contribuição, PPP e laudos",
          "2. Análise do histórico contributivo completo",
          "3. Simulação de cenários com diferentes regras de aposentadoria",
          "4. Elaboração de relatório com recomendações personalizadas",
          "5. Orientação sobre passos a seguir para maximizar o benefício",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "O diagnóstico previdenciário é o primeiro passo para garantir uma aposentadoria justa e vantajosa. A Cantarelli Advocacia realiza diagnósticos completos para segurados em Recife/PE e em todo o Brasil, com análise gratuita inicial.",
      },
    ],
  faq: [
    { question: "Com que antecedência devo fazer o planejamento previdenciário?", answer: "Idealmente 5 a 10 anos antes da previsão de aposentadoria, pois ainda é possível corrigir falhas e otimizar contribuições." },
    { question: "Planejamento previdenciário serve para quem já está aposentado?", answer: "Sim. Pode identificar se há direito à revisão do benefício ou à inclusão de períodos não computados pelo INSS." },
    { question: "O que é simulação previdenciária e como funciona?", answer: "É uma projeção que compara cenários de aposentadoria em diferentes regras, mostrando a melhor data e o valor estimado de cada opção." }
  ]
  },
  {
    slug: "aposentadoria-por-invalidez-2026-requisitos-valor",
    title: "Aposentadoria por Invalidez em 2026: Requisitos, Valor e Direitos do Segurado",
    excerpt:
      "A aposentadoria por incapacidade permanente (antiga invalidez) garante renda a quem não pode mais trabalhar. Conheça os requisitos, valores e como evitar o indeferimento em 2026.",
    date: "17 de Março, 2026",
    category: "Incapacidade",
    tags: ["Invalidez", "Incapacidade Permanente", "Perícia", "INSS"],
    readTime: "8 min",
    keyTakeaways: [
      "O benefício corresponde a 60% da média + 2% por ano acima de 20 anos de contribuição",
      "Se a incapacidade decorrer de acidente de trabalho, o valor é de 100% da média",
      "A carência é de 12 contribuições, exceto para acidentes e doenças graves",
      "O INSS pode convocar o segurado para perícia de reavaliação a qualquer momento",
    ],
    lastUpdated: "Março 2026",
    image: invalidezImg,
    imageAlt:
      "Pessoa com incapacidade permanente recebendo orientação sobre aposentadoria por invalidez no INSS",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "A aposentadoria por incapacidade permanente, popularmente conhecida como aposentadoria por invalidez, é concedida ao segurado que, por doença ou acidente, está total e definitivamente incapaz de exercer qualquer atividade laboral. Em 2026, as regras seguem as alterações trazidas pela Reforma da Previdência.",
      },
      {
        type: "heading",
        text: "Requisitos para Aposentadoria por Invalidez em 2026",
      },
      {
        type: "list",
        items: [
          "Estar incapaz de forma total e permanente para qualquer trabalho",
          "Ter qualidade de segurado (estar contribuindo ou no período de graça)",
          "Cumprir carência mínima de 12 contribuições mensais",
          "A incapacidade deve ser comprovada por perícia médica do INSS",
        ],
      },
      {
        type: "highlight",
        text: "A carência de 12 meses é dispensada nos casos de acidente de qualquer natureza e doenças graves listadas em lei, como câncer, AIDS, cardiopatia grave, Parkinson, entre outras.",
      },
      {
        type: "heading",
        text: "Valor do Benefício Após a Reforma",
      },
      {
        type: "paragraph",
        text: "O cálculo da aposentadoria por invalidez mudou significativamente com a Reforma. Agora, o valor é de 60% da média dos salários de contribuição, acrescido de 2% para cada ano que exceder 20 anos de contribuição (homens) ou 15 anos (mulheres).",
      },
      {
        type: "paragraph",
        text: "Exceção importante: quando a incapacidade decorre de acidente de trabalho ou doença profissional, o benefício corresponde a 100% da média dos salários, sem aplicação do redutor.",
      },
      {
        type: "heading",
        text: "Adicional de 25% para Grande Invalidez",
      },
      {
        type: "paragraph",
        text: "O segurado que necessitar de assistência permanente de outra pessoa (para atividades básicas como alimentação, higiene e locomoção) tem direito ao acréscimo de 25% sobre o valor do benefício, mesmo que o total ultrapasse o teto do INSS.",
      },
      {
        type: "heading",
        text: "Benefício Negado: Como Recorrer",
      },
      {
        type: "list",
        items: [
          "Recurso administrativo ao CRPS em até 30 dias após a ciência da decisão",
          "Ação judicial com pedido de tutela antecipada para casos urgentes",
          "Nova perícia com médico assistente para comprovar a incapacidade",
          "Juntada de laudos, exames e relatórios médicos atualizados",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A aposentadoria por invalidez é essencial para quem perdeu a capacidade de trabalhar. Se você teve o benefício negado ou quer saber se tem direito, a Cantarelli Advocacia é especialista em incapacidade e pode analisar seu caso gratuitamente.",
      },
    ],
  faq: [
    { question: "Aposentado por invalidez pode viajar para o exterior?", answer: "Sim, mas deve comparecer às convocações de perícia. Ausência pode gerar suspensão do benefício." },
    { question: "O que é pente-fino do INSS na aposentadoria por invalidez?", answer: "É a revisão periódica em que o INSS convoca aposentados por invalidez para nova perícia médica, verificando se a incapacidade persiste." },
    { question: "Aposentado por invalidez pode fazer faculdade?", answer: "Sim. Estudar não é considerado atividade remunerada e não afeta o benefício. Inclusive, a reabilitação profissional é incentivada." }
  ]
  },
  {
    slug: "tempo-contribuicao-inss-2026-como-calcular",
    title: "Tempo de Contribuição ao INSS em 2026: Como Calcular e Contar Períodos",
    excerpt: "Saiba como calcular seu tempo de contribuição, incluir períodos especiais e evitar perdas que podem atrasar sua aposentadoria.",
    date: "22 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Tempo de Contribuição", "Cálculo", "CNIS", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "É possível converter tempo especial em comum para antecipar a aposentadoria",
      "Períodos como militar, aluno-aprendiz e rural podem ser computados",
      "Erros no CNIS podem omitir anos inteiros de contribuição",
      "O planejamento previdenciário identifica períodos perdidos e a melhor estratégia",
    ],
    lastUpdated: "Março 2026",
    image: tempoContribuicaoImg,
    imageAlt: "Advogado previdenciário analisando tempo de contribuição e documentos do INSS",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O tempo de contribuição é o principal requisito para a maioria das aposentadorias do INSS. No entanto, muitos segurados não sabem que existem períodos que podem ser incluídos no cálculo e que, se ignorados, podem atrasar a concessão do benefício em anos.",
      },
      {
        type: "heading",
        text: "Como Funciona o Tempo de Contribuição em 2026",
      },
      {
        type: "paragraph",
        text: "Após a Reforma da Previdência, o tempo de contribuição continua sendo essencial nas regras de transição. Para homens, são exigidos no mínimo 35 anos de contribuição, e para mulheres, 30 anos. Nas regras de transição por pontos, o tempo se soma à idade para atingir a pontuação mínima.",
      },
      {
        type: "heading",
        text: "Períodos que Podem Ser Computados",
      },
      {
        type: "list",
        items: [
          "Trabalho rural antes de 1991, mesmo sem contribuição formal",
          "Serviço militar obrigatório",
          "Período como aluno-aprendiz em escolas técnicas federais",
          "Tempo de recebimento de auxílio-doença (intercalado com atividade)",
          "Contribuições em atraso para contribuinte individual",
          "Período no exterior com acordo previdenciário bilateral",
        ],
      },
      {
        type: "heading",
        text: "Conversão de Tempo Especial em Comum",
      },
      {
        type: "paragraph",
        text: "Quem trabalhou em condições insalubres ou perigosas antes de 13/11/2019 tem direito à conversão do tempo especial em comum. O fator de conversão é de 1,4 para homens e 1,2 para mulheres, o que pode representar anos a mais no cálculo.",
      },
      {
        type: "highlight",
        text: "Exemplo: um homem com 10 anos de atividade especial pode converter para 14 anos de tempo comum, ganhando 4 anos no cálculo da aposentadoria.",
      },
      {
        type: "heading",
        text: "Erros Comuns no CNIS que Prejudicam o Segurado",
      },
      {
        type: "list",
        items: [
          "Vínculos empregatícios não registrados ou com datas incorretas",
          "Contribuições pagas que não aparecem no extrato",
          "Indicadores de pendência que bloqueiam a contagem",
          "Salários de contribuição zerados ou com valores errados",
        ],
      },
      {
        type: "heading",
        text: "A Importância do Planejamento Previdenciário",
      },
      {
        type: "paragraph",
        text: "Um advogado previdenciário pode analisar seu CNIS em detalhes, identificar períodos não computados, solicitar a correção de dados e simular diferentes cenários de aposentadoria para encontrar a melhor estratégia.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Não deixe que erros ou omissões no seu tempo de contribuição prejudiquem sua aposentadoria. A Cantarelli Advocacia realiza a análise completa do seu histórico previdenciário para garantir que todos os períodos sejam contabilizados corretamente.",
      },
    ],
  faq: [
    { question: "Trabalho informal conta como tempo de contribuição?", answer: "Somente se houver recolhimento ao INSS. Trabalho sem registro e sem contribuição não é computado automaticamente." },
    { question: "Tempo de estágio conta para aposentadoria?", answer: "Somente se houve contribuição ao INSS durante o estágio. Estágios sem vínculo previdenciário não contam." },
    { question: "O período em que recebi seguro-desemprego conta como contribuição?", answer: "Não. O seguro-desemprego mantém a qualidade de segurado, mas não conta como tempo de contribuição para aposentadoria." }
  ]
  },
  {
    slug: "doenca-ocupacional-burnout-inss-2026",
    title: "Doença Ocupacional e Burnout: Direitos no INSS em 2026",
    excerpt: "Burnout, LER/DORT e doenças ocupacionais garantem benefícios específicos no INSS. Veja como comprovar e quais são seus direitos.",
    date: "20 de Março, 2026",
    category: "Benefícios",
    tags: ["Burnout", "LER/DORT", "Doença Ocupacional", "CAT"],
    readTime: "6 min",
    keyTakeaways: [
      "A Síndrome de Burnout é reconhecida como doença ocupacional desde 2022",
      "Doenças ocupacionais dão direito a auxílio por incapacidade acidentário (B91)",
      "O segurado com doença ocupacional tem estabilidade de 12 meses após alta",
      "É fundamental ter laudos médicos detalhados que estabeleçam o nexo causal",
    ],
    lastUpdated: "Março 2026",
    image: doencaOcupacionalImg,
    imageAlt: "Trabalhadora com dor nas costas no ambiente de trabalho representando doença ocupacional",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "As doenças ocupacionais são aquelas causadas ou agravadas pelo ambiente de trabalho. Em 2026, com o aumento de diagnósticos de Burnout, LER/DORT e transtornos psiquiátricos relacionados ao trabalho, cresce a demanda por benefícios previdenciários específicos.",
      },
      {
        type: "heading",
        text: "O Que é Doença Ocupacional?",
      },
      {
        type: "paragraph",
        text: "A legislação divide em duas categorias: doença profissional (causada pela atividade específica) e doença do trabalho (causada pelas condições do ambiente). Ambas se equiparam a acidente de trabalho para fins previdenciários.",
      },
      {
        type: "heading",
        text: "Burnout: Reconhecimento e Direitos",
      },
      {
        type: "paragraph",
        text: "Desde janeiro de 2022, a Síndrome de Burnout (CID-11 QD85) foi classificada pela OMS como doença ocupacional. Isso significa que trabalhadores diagnosticados com esgotamento profissional têm direito ao auxílio por incapacidade temporária na modalidade acidentária (B91).",
      },
      {
        type: "heading",
        text: "Benefícios Garantidos por Doença Ocupacional",
      },
      {
        type: "list",
        items: [
          "Auxílio por incapacidade temporária acidentário (B91) — sem exigência de carência",
          "Aposentadoria por incapacidade permanente acidentária (B92) — 100% da média salarial",
          "Auxílio-acidente (B94) — indenização por sequelas permanentes",
          "Estabilidade provisória de 12 meses após cessação do benefício",
          "Depósitos de FGTS durante todo o período de afastamento",
        ],
      },
      {
        type: "heading",
        text: "Como Comprovar a Doença Ocupacional",
      },
      {
        type: "list",
        items: [
          "Emissão de CAT (Comunicação de Acidente de Trabalho) pela empresa",
          "Laudos médicos com descrição detalhada da doença e nexo com o trabalho",
          "Relatórios de condições do ambiente de trabalho",
          "Prontuário médico com histórico de tratamentos",
          "Testemunhos de colegas sobre as condições laborais",
        ],
      },
      {
        type: "highlight",
        text: "Mesmo que a empresa se recuse a emitir a CAT, o próprio trabalhador, o sindicato ou o médico assistente podem fazê-lo. A falta de CAT não impede o reconhecimento judicial da doença ocupacional.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você desenvolveu uma doença em razão do trabalho, incluindo Burnout, é fundamental buscar orientação jurídica especializada. A Cantarelli Advocacia pode ajudar a comprovar o nexo causal e garantir todos os seus direitos previdenciários e trabalhistas.",
      },
    ],
  faq: [
    { question: "LER/DORT adquirida em home office é considerada doença ocupacional?", answer: "Sim, se comprovado o nexo causal com as condições de trabalho remoto. Laudos ergonômicos e médicos são fundamentais para a comprovação." },
    { question: "A empresa pode ser responsabilizada por doença ocupacional?", answer: "Sim. Além do benefício previdenciário, o trabalhador pode mover ação indenizatória contra a empresa por danos morais e materiais." },
    { question: "Existe estabilidade no emprego após doença ocupacional?", answer: "Sim. O trabalhador tem 12 meses de estabilidade após a alta do benefício acidentário, conforme o artigo 118 da Lei 8.213/91." }
  ]
  },
  {
    slug: "salario-maternidade-inss-2026-quem-tem-direito",
    title: "Salário-Maternidade em 2026: Quem Tem Direito e Como Funciona",
    excerpt: "Entenda quem pode receber o salário-maternidade em 2026, qual o valor, duração e como solicitar esse benefício do INSS.",
    date: "18 de Março, 2026",
    category: "Benefícios",
    tags: ["Maternidade", "Gestante", "Adoção", "INSS"],
    readTime: "6 min",
    keyTakeaways: [
      "O salário-maternidade é pago por 120 dias em caso de parto ou adoção",
      "Seguradas especiais (rurais) não precisam de contribuição mínima",
      "O benefício também cobre casos de aborto espontâneo (14 dias) e natimorto (120 dias)",
      "O valor para empregadas CLT corresponde à remuneração integral",
    ],
    lastUpdated: "Março 2026",
    image: salarioMaternidadeImg,
    imageAlt: "Mãe segurando bebê recém-nascido representando salário-maternidade e direitos previdenciários",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O salário-maternidade é um benefício previdenciário pago à segurada do INSS durante o período de afastamento por motivo de parto, adoção, guarda judicial ou aborto não criminoso. Em 2026, as regras permanecem com ajustes importantes que todo segurado precisa conhecer.",
      },
      {
        type: "heading",
        text: "Quem Tem Direito ao Salário-Maternidade?",
      },
      {
        type: "list",
        items: [
          "Empregadas com carteira assinada (CLT)",
          "Trabalhadoras avulsas",
          "Empregadas domésticas",
          "Contribuintes individuais (autônomas)",
          "Seguradas facultativas",
          "Seguradas especiais (trabalhadoras rurais)",
          "Desempregadas no período de graça",
        ],
      },
      {
        type: "heading",
        text: "Carência Exigida",
      },
      {
        type: "paragraph",
        text: "Para empregadas CLT, domésticas e avulsas, não há carência — o direito é imediato. Já para contribuintes individuais e facultativas, é necessário cumprir 10 meses de contribuição. Seguradas especiais precisam comprovar 10 meses de atividade rural.",
      },
      {
        type: "heading",
        text: "Duração do Benefício",
      },
      {
        type: "list",
        items: [
          "Parto (inclusive prematuro): 120 dias",
          "Adoção ou guarda judicial: 120 dias, independente da idade da criança",
          "Natimorto: 120 dias",
          "Aborto espontâneo ou previsto em lei: 14 dias",
        ],
      },
      {
        type: "heading",
        text: "Valor do Benefício em 2026",
      },
      {
        type: "paragraph",
        text: "O valor varia conforme a categoria: empregadas CLT recebem a remuneração integral; domésticas recebem o último salário de contribuição; contribuintes individuais e facultativas recebem a média dos 12 últimos salários; seguradas especiais recebem 1 salário mínimo (R$ 1.621,00 em 2026).",
      },
      {
        type: "highlight",
        text: "O salário-maternidade não pode ser inferior ao salário mínimo de R$ 1.621,00 e pode chegar ao teto do INSS de R$ 8.157,41.",
      },
      {
        type: "heading",
        text: "Salário-Maternidade para Homens",
      },
      {
        type: "paragraph",
        text: "Em casos de adoção por homem solteiro, falecimento da mãe ou em uniões homoafetivas, o segurado homem também tem direito ao salário-maternidade nas mesmas condições.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "O salário-maternidade é um direito fundamental da segurada. Se você teve o pedido negado ou tem dúvidas sobre o seu caso, a Cantarelli Advocacia pode analisar sua situação e garantir o recebimento do benefício.",
      },
    ],
  faq: [
    { question: "Mãe adotiva tem direito ao salário-maternidade?", answer: "Sim. A adoção garante 120 dias de salário-maternidade, independentemente da idade da criança adotada." },
    { question: "Pai solo tem direito ao salário-maternidade?", answer: "Sim. Em caso de falecimento da mãe ou adoção por pai solo, o segurado do sexo masculino tem direito ao benefício integral." },
    { question: "O salário-maternidade pode ser prorrogado?", answer: "Pode, em caso de internação da mãe ou do recém-nascido. O período de internação é acrescido ao benefício, conforme decisão judicial." }
  ]
  },
  {
    slug: "contribuinte-individual-inss-2026-direitos-aposentadoria",
    title: "Contribuinte Individual (Autônomo) no INSS em 2026: Direitos e Aposentadoria",
    excerpt: "Trabalhador autônomo, MEI ou profissional liberal? Saiba como contribuir corretamente ao INSS e garantir sua aposentadoria.",
    date: "16 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Autônomo", "MEI", "Contribuição", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "O contribuinte individual pode pagar 20% sobre a renda ou 11% sobre o mínimo",
      "Quem paga 11% (código 1163) não tem direito à aposentadoria por tempo de contribuição",
      "MEI contribui com 5% do salário mínimo e tem cobertura previdenciária básica",
      "É possível complementar contribuições passadas para melhorar o valor do benefício",
    ],
    lastUpdated: "Março 2026",
    image: contribuinteIndividualImg,
    imageAlt: "Idoso recebendo pagamento de benefício previdenciário em agência bancária",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "Milhões de brasileiros trabalham como autônomos, profissionais liberais ou microempreendedores individuais (MEI). Em 2026, é fundamental entender as regras de contribuição ao INSS para garantir acesso a benefícios como aposentadoria, auxílio-doença e salário-maternidade.",
      },
      {
        type: "heading",
        text: "Formas de Contribuição em 2026",
      },
      {
        type: "list",
        items: [
          "Plano Normal (20%): alíquota sobre a renda, entre o mínimo de R$ 1.518,00 e o teto de R$ 8.157,41. Dá acesso a todas as aposentadorias.",
          "Plano Simplificado (11%): R$ 166,98/mês (11% do mínimo). Dá direito apenas à aposentadoria por idade.",
          "MEI (5%): R$ 75,90/mês (5% do mínimo). Direito à aposentadoria por idade com valor de 1 salário mínimo.",
        ],
      },
      {
        type: "heading",
        text: "Quais Benefícios Cada Plano Garante?",
      },
      {
        type: "paragraph",
        text: "Quem contribui com 20% tem acesso a todas as aposentadorias (idade, tempo de contribuição pelas regras de transição, especial e por invalidez). Quem paga 11% ou 5% (MEI) só tem direito à aposentadoria por idade e aos demais benefícios (auxílio-doença, pensão por morte, salário-maternidade).",
      },
      {
        type: "highlight",
        text: "Atenção: quem contribuiu com 11% ou 5% pode complementar a diferença até 20% a qualquer tempo para ter o período contado como tempo de contribuição. Isso pode ser estratégico no planejamento previdenciário.",
      },
      {
        type: "heading",
        text: "Contribuições em Atraso",
      },
      {
        type: "paragraph",
        text: "O contribuinte individual pode recolher contribuições em atraso para cobrir períodos sem pagamento. Para atrasos superiores a 5 anos ou para primeiro recolhimento, é necessário comprovar o exercício da atividade no período.",
      },
      {
        type: "heading",
        text: "Erros Comuns do Contribuinte Individual",
      },
      {
        type: "list",
        items: [
          "Pagar sobre o valor errado e receber aposentadoria menor",
          "Usar código de pagamento incorreto na GPS",
          "Não guardar comprovantes de atividade profissional",
          "Desconhecer o direito à complementação de contribuições",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Se você é autônomo ou MEI e quer garantir uma aposentadoria justa, a Cantarelli Advocacia pode orientar sobre a melhor forma de contribuição e realizar o planejamento previdenciário completo.",
      },
    ],
  faq: [
    { question: "Contribuinte individual pode receber auxílio-doença?", answer: "Sim, desde que tenha cumprido a carência de 12 contribuições e esteja com os pagamentos em dia no momento da incapacidade." },
    { question: "É possível mudar de contribuinte individual para facultativo?", answer: "Sim, se deixar de exercer atividade remunerada. A mudança é feita alterando o código de pagamento na guia GPS." },
    { question: "Profissional liberal precisa contribuir como contribuinte individual?", answer: "Sim. Profissionais liberais como advogados, médicos e dentistas são contribuintes individuais obrigatórios do INSS." }
  ]
  },
  {
    slug: "aposentadoria-professor-2026-regras-requisitos",
    title: "Aposentadoria do Professor em 2026: Regras Especiais e Requisitos",
    excerpt: "Professores têm regras diferenciadas de aposentadoria. Conheça os requisitos atualizados para 2026 e como garantir seu direito.",
    date: "14 de Março, 2026",
    category: "Aposentadoria",
    tags: ["Professor", "Magistério", "Educação", "Regras Especiais"],
    readTime: "7 min",
    keyTakeaways: [
      "Professores da educação básica têm redução de 5 anos nos requisitos",
      "A regra de transição por pontos exige 87 pontos (mulheres) e 97 (homens) em 2026",
      "Apenas magistério em educação infantil, fundamental e médio conta como tempo especial",
      "Atividades de direção, coordenação e assessoramento pedagógico também contam",
    ],
    lastUpdated: "Março 2026",
    image: aposentadoriaProfessorImg,
    imageAlt: "Professor em sala de aula representando aposentadoria especial do magistério",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "Os professores que exercem funções de magistério na educação infantil, ensino fundamental e ensino médio possuem regras diferenciadas para aposentadoria, com redução de 5 anos nos requisitos de idade e tempo de contribuição em relação às regras gerais.",
      },
      {
        type: "heading",
        text: "Regras de Transição para Professores em 2026",
      },
      {
        type: "subheading",
        text: "Regra por Pontos",
      },
      {
        type: "paragraph",
        text: "Em 2026, a pontuação exigida para professores é de 87 pontos para mulheres e 97 pontos para homens (soma de idade + tempo de contribuição em magistério). O tempo mínimo em magistério é de 25 anos para mulheres e 30 para homens.",
      },
      {
        type: "subheading",
        text: "Idade Mínima Progressiva",
      },
      {
        type: "paragraph",
        text: "A idade mínima para professores em 2026 é de 54 anos para mulheres e 59 anos para homens, mantendo o tempo mínimo de 25 e 30 anos de contribuição em magistério, respectivamente.",
      },
      {
        type: "subheading",
        text: "Pedágio de 100%",
      },
      {
        type: "paragraph",
        text: "Professor que estava a poucos anos de se aposentar em 2019 pode optar pelo pedágio de 100%: cumprir o dobro do tempo que faltava na data da reforma, com idade mínima de 52 anos (mulheres) e 55 anos (homens).",
      },
      {
        type: "heading",
        text: "O Que Conta Como Tempo de Magistério?",
      },
      {
        type: "list",
        items: [
          "Docência em educação infantil, ensino fundamental e ensino médio",
          "Direção de unidade escolar",
          "Coordenação e assessoramento pedagógico",
          "Atividades de supervisão educacional",
          "Magistério em instituições públicas e privadas",
        ],
      },
      {
        type: "highlight",
        text: "Atenção: professores universitários NÃO têm direito à regra especial desde a EC 20/1998. Apenas magistério na educação básica (infantil, fundamental e médio) é considerado.",
      },
      {
        type: "heading",
        text: "Valor da Aposentadoria do Professor",
      },
      {
        type: "paragraph",
        text: "O cálculo segue a regra geral pós-Reforma: 60% da média salarial + 2% por ano que exceder 20 anos de contribuição (homens) ou 15 anos (mulheres). Na regra do pedágio de 100%, o valor corresponde a 100% da média.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "A aposentadoria do professor envolve particularidades que exigem análise especializada. A Cantarelli Advocacia pode avaliar seu histórico de magistério e identificar a regra de transição mais vantajosa para o seu caso.",
      },
    ],
  faq: [
    { question: "Professor de curso livre ou cursinho tem direito à aposentadoria especial?", answer: "Não. A aposentadoria de professor com requisitos reduzidos é exclusiva para educação infantil, ensino fundamental e médio." },
    { question: "Professor que também é coordenador perde o direito?", answer: "Não, desde que a coordenação seja exercida em estabelecimento de ensino e esteja vinculada à atividade pedagógica." },
    { question: "Tempo de magistério em escola particular conta igual ao de pública?", answer: "Sim. Para fins de aposentadoria pelo INSS, o tempo de magistério é contado igualmente, independente de a escola ser pública ou particular." }
  ]
  },
  {
    slug: "cnis-erros-correcao-2026-como-resolver",
    title: "CNIS com Erros em 2026: Como Identificar e Corrigir para Não Perder Benefícios",
    excerpt: "Seu CNIS pode conter erros que prejudicam sua aposentadoria. Saiba como identificar e corrigir vínculos, contribuições e pendências.",
    date: "12 de Março, 2026",
    category: "Planejamento",
    tags: ["CNIS", "Retificação", "Vínculos", "Contribuições"],
    readTime: "6 min",
    keyTakeaways: [
      "O CNIS é o principal documento usado pelo INSS para conceder benefícios",
      "Erros como vínculos não registrados e contribuições ausentes são comuns",
      "A retificação pode ser feita administrativamente ou judicialmente",
      "Manter documentos como carteira de trabalho e holerites é fundamental para comprovar",
    ],
    lastUpdated: "Março 2026",
    image: cnisAnaliseImg,
    imageAlt: "Especialista analisando cadastro previdenciário e documentos para correção de erros no CNIS",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O Cadastro Nacional de Informações Sociais (CNIS) é o extrato que reúne todo o histórico de contribuições e vínculos do trabalhador junto ao INSS. Em 2026, é o documento mais importante na análise de qualquer pedido de benefício previdenciário — e erros nele podem custar anos de atraso.",
      },
      {
        type: "heading",
        text: "O Que é o CNIS e Para Que Serve?",
      },
      {
        type: "paragraph",
        text: "O CNIS registra todas as relações de trabalho, contribuições como autônomo, períodos de benefício e informações cadastrais. O INSS utiliza esse extrato como base para calcular tempo de contribuição, carência e valor do benefício.",
      },
      {
        type: "heading",
        text: "Erros Mais Comuns no CNIS",
      },
      {
        type: "list",
        items: [
          "Vínculos empregatícios que não aparecem (empresa não informou ao governo)",
          "Datas de admissão ou demissão incorretas",
          "Salários de contribuição zerados ou com valores errados",
          "Indicadores de pendência (PEXT, PREC, PVIN) que bloqueiam a contagem",
          "Contribuições como autônomo que não foram processadas",
          "Períodos de benefício por incapacidade não registrados",
        ],
      },
      {
        type: "heading",
        text: "Os Indicadores de Pendência",
      },
      {
        type: "paragraph",
        text: "O CNIS utiliza códigos chamados 'indicadores' que sinalizam inconsistências. Os mais comuns são: PEXT (extemporâneo), PREC (recolhimento com data questionável), PVIN (vínculo com pendência) e IREC (recolhimento indébito). Cada um requer tratamento específico.",
      },
      {
        type: "heading",
        text: "Como Corrigir Erros no CNIS",
      },
      {
        type: "list",
        items: [
          "Requerimento administrativo com documentos comprobatórios (CTPS, holerites, contratos)",
          "Justificação administrativa quando não há documentos formais",
          "Ação judicial para inclusão de vínculos e retificação de dados",
          "Pedido de acerto de dados cadastrais (nome, CPF, data de nascimento)",
        ],
      },
      {
        type: "highlight",
        text: "Dica importante: o CNIS detalhado (com indicadores) pode revelar pendências ocultas que impactam seu benefício. Um advogado previdenciário pode solicitar e analisar esse documento para identificar todas as correções necessárias.",
      },
      {
        type: "heading",
        text: "Documentos que Ajudam na Retificação",
      },
      {
        type: "list",
        items: [
          "Carteira de Trabalho (CTPS) com registros legíveis",
          "Holerites e contracheques",
          "Carnês de contribuição (GPS)",
          "Contrato de trabalho e termos de rescisão",
          "Declarações de sindicatos e ex-empregadores",
          "PPP (Perfil Profissiográfico Previdenciário) para atividades especiais",
        ],
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "Antes de pedir qualquer benefício ao INSS, analise seu CNIS com cuidado. A Cantarelli Advocacia oferece análise completa do CNIS com identificação de erros, períodos omitidos e estratégias de correção para maximizar seu benefício.",
      },
    ],
  faq: [
    { question: "O que fazer se a empresa que deveria emitir documentos fechou?", answer: "É possível utilizar outros meios de prova como carteira de trabalho, contracheques, RAIS e até depoimentos de testemunhas." },
    { question: "O INSS pode corrigir o CNIS automaticamente?", answer: "Sim, para alguns tipos de pendências. Mas na maioria dos casos, o segurado precisa apresentar documentação para requerer a correção." },
    { question: "Contribuição paga em duplicidade aparece no CNIS?", answer: "Nem sempre. É importante conferir e solicitar a restituição ou compensação de valores pagos em duplicidade junto à Receita Federal." }
  ]
  },
  {
    slug: "tendinite-ler-aposentadoria-invalidez",
    title: "Qual Tipo de Tendinite Aposenta? Entenda Quando a LER Gera Invalidez",
    excerpt: "Nem toda tendinite dá direito à aposentadoria, mas quando a LER/DORT se torna incapacitante, o INSS pode conceder benefício por invalidez. Saiba quando isso acontece.",
    category: "Aposentadoria",
    tags: ["Tendinite", "LER", "DORT", "Invalidez", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "Tendinite crônica e LER/DORT podem gerar aposentadoria por invalidez quando há incapacidade total e permanente para o trabalho.",
      "O nexo causal entre a doença e o trabalho precisa ser comprovado por perícia médica e documentos como o PPP e laudos médicos.",
      "Um advogado previdenciário pode identificar se o seu caso se enquadra como doença ocupacional e garantir o benefício correto.",
      "Mesmo que o INSS negue, é possível reverter a decisão na Justiça com provas adequadas."
    ],
    image: tendiniteLerImg,
    imageAlt: "Pessoa com dor no punho por tendinite em ambiente de trabalho, representando LER e aposentadoria por invalidez",
    content: [
      { type: "paragraph", text: "A tendinite é uma das doenças ocupacionais mais comuns no Brasil, afetando milhões de trabalhadores que realizam movimentos repetitivos. Quando essa condição evolui para uma Lesão por Esforço Repetitivo (LER) ou Distúrbio Osteomuscular Relacionado ao Trabalho (DORT), pode se tornar incapacitante e gerar direito a benefícios do INSS." },
      { type: "heading", text: "Quando a Tendinite Dá Direito à Aposentadoria?" },
      { type: "paragraph", text: "Nem toda tendinite gera direito à aposentadoria. Para isso, é necessário que a doença cause incapacidade total e permanente para o trabalho, sem possibilidade de reabilitação profissional. Isso geralmente ocorre nos graus III e IV da classificação médica, quando há dor constante, perda de força e limitação funcional grave." },
      { type: "heading", text: "Tipos de Tendinite que Podem Aposentar" },
      { type: "list", items: [
        "Tendinite crônica de De Quervain (punho e polegar)",
        "Epicondilite lateral e medial (cotovelo)",
        "Tendinite do manguito rotador (ombro)",
        "Síndrome do túnel do carpo associada à LER",
        "Tenossinovite crônica dos flexores"
      ]},
      { type: "heading", text: "Como Comprovar a Incapacidade?" },
      { type: "paragraph", text: "A comprovação da incapacidade exige laudos médicos detalhados, exames de imagem (ressonância magnética, ultrassom), Perfil Profissiográfico Previdenciário (PPP) e Comunicação de Acidente de Trabalho (CAT). Um advogado previdenciário pode organizar toda essa documentação e identificar a melhor estratégia." },
      { type: "highlight", text: "Importante: se a tendinite foi causada ou agravada pelo trabalho, ela pode ser reconhecida como doença ocupacional, o que garante benefícios diferenciados como o auxílio-acidente e estabilidade no emprego." },
      { type: "heading", text: "INSS Negou? O Que Fazer?" },
      { type: "paragraph", text: "Caso o INSS negue o benefício, é possível recorrer administrativamente ou entrar com ação judicial. Na Justiça, um perito independente avalia o caso, o que frequentemente resulta em decisões favoráveis ao segurado. A Cantarelli Advocacia tem experiência comprovada em casos de LER/DORT e pode analisar seu caso sem compromisso." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você sofre de tendinite crônica que compromete sua capacidade de trabalhar, pode ter direito à aposentadoria por invalidez. Não tente resolver sozinho — procure orientação jurídica especializada para garantir seus direitos." }
    ],
    faq: [
      { question: "A tendinite pode voltar após tratamento e gerar novo benefício?", answer: "Sim. Se houver recidiva com nova incapacidade, é possível solicitar novo auxílio-doença ou até aposentadoria por invalidez." },
      { question: "Quais profissões têm maior incidência de tendinite/LER?", answer: "Digitadores, operadores de caixa, metalúrgicos, costureiras e profissionais de limpeza estão entre os mais afetados." },
      { question: "Fisioterapia é obrigatória antes de pedir aposentadoria por tendinite?", answer: "Não é obrigatória, mas o INSS considera se o segurado esgotou as possibilidades de tratamento antes de conceder a invalidez." }
    ]
  },
  {
    slug: "autismo-aposentadoria-pessoa-com-deficiencia",
    title: "Qual Grau de Autismo Aposenta? Entenda a Aposentadoria da Pessoa com Deficiência",
    excerpt: "Pessoas com Transtorno do Espectro Autista (TEA) podem ter direito à aposentadoria por deficiência com tempo reduzido. Entenda os critérios e como garantir o benefício.",
    category: "Autismo",
    tags: ["Autismo", "TEA", "PCD", "Deficiência", "INSS"],
    readTime: "8 min",
    keyTakeaways: [
      "Pessoas com autismo podem se aposentar com tempo de contribuição reduzido pela Lei Complementar 142/2013.",
      "O grau de deficiência (leve, moderado ou grave) é avaliado por perícia médica e social do INSS.",
      "Não é necessário estar incapaz para o trabalho — basta comprovar a deficiência e o tempo mínimo de contribuição.",
      "Um advogado especialista pode preparar a documentação adequada e acompanhar todo o processo."
    ],
    image: autismoPcdImg,
    imageAlt: "Mãe abraçando criança com autismo, representando direitos previdenciários da pessoa com deficiência",
    content: [
      { type: "paragraph", text: "O Transtorno do Espectro Autista (TEA) é reconhecido como deficiência para fins previdenciários, o que garante à pessoa com autismo o direito de se aposentar com requisitos diferenciados. A Lei Complementar 142/2013 assegura tempo de contribuição reduzido para pessoas com deficiência." },
      { type: "heading", text: "Como Funciona a Aposentadoria por Deficiência?" },
      { type: "paragraph", text: "A aposentadoria da pessoa com deficiência é diferente da aposentadoria por invalidez. Nela, o segurado não precisa estar incapaz para trabalhar — basta comprovar a deficiência e cumprir o tempo mínimo de contribuição, que varia conforme o grau avaliado." },
      { type: "heading", text: "Tempo de Contribuição por Grau de Deficiência" },
      { type: "list", items: [
        "Deficiência grave: 25 anos (homem) e 20 anos (mulher)",
        "Deficiência moderada: 29 anos (homem) e 24 anos (mulher)",
        "Deficiência leve: 33 anos (homem) e 28 anos (mulher)",
        "Aposentadoria por idade: 60 anos (homem) e 55 anos (mulher) com 15 anos de contribuição"
      ]},
      { type: "heading", text: "Qual Grau de Autismo se Enquadra?" },
      { type: "paragraph", text: "O grau de deficiência não é determinado apenas pelo diagnóstico de autismo, mas pela avaliação funcional realizada por perícia médica e social do INSS. São analisadas as barreiras enfrentadas no dia a dia, a necessidade de suporte e o impacto nas atividades laborais e sociais." },
      { type: "highlight", text: "Atenção: muitas pessoas com autismo nível 1 (antigo Asperger) são classificadas como deficiência leve ou moderada, o que já garante redução significativa no tempo de contribuição." },
      { type: "heading", text: "Documentação Necessária" },
      { type: "list", items: [
        "Laudos médicos e neuropsicológicos detalhados",
        "Relatórios de acompanhamento terapêutico",
        "Declarações de escolas ou empregadores sobre adaptações necessárias",
        "Histórico de tratamentos e medicamentos",
        "CNIS atualizado com todos os vínculos"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você ou um familiar tem autismo e contribui para o INSS, é possível se aposentar com tempo reduzido. A Cantarelli Advocacia pode avaliar seu caso, preparar a documentação adequada e acompanhar todo o processo junto ao INSS." }
    ],
    faq: [
      { question: "Adulto diagnosticado tardiamente com TEA tem direito?", answer: "Sim. O diagnóstico tardio não impede o acesso à aposentadoria PCD, desde que se comprove que a condição existia antes do diagnóstico." },
      { question: "A família precisa ser curatelada para solicitar o benefício?", answer: "Não necessariamente. Pessoas com TEA podem solicitar seus próprios benefícios. A curatela é necessária apenas em casos de interdição judicial." },
      { question: "Autista que trabalha com carteira assinada pode se aposentar como PCD?", answer: "Sim. Trabalhar com carteira assinada não impede a aposentadoria PCD. Na verdade, o tempo de contribuição com deficiência tem redução." }
    ]
  },
  {
    slug: "processo-auxilio-acidente-justica-prazos",
    title: "Como Funciona um Processo de Auxílio-Acidente na Justiça? Entenda os Prazos",
    excerpt: "Teve o auxílio-acidente negado pelo INSS? Entenda como funciona o processo judicial, quais os prazos envolvidos e como um advogado pode ajudar.",
    category: "Benefícios",
    tags: ["Auxílio-Acidente", "Processo Judicial", "INSS", "Prazos"],
    readTime: "7 min",
    keyTakeaways: [
      "O processo judicial de auxílio-acidente pode durar de 6 meses a 2 anos, dependendo da complexidade e da comarca.",
      "É necessário comprovar que o acidente ou doença causou redução permanente da capacidade laboral.",
      "A perícia judicial é o momento mais importante do processo — um advogado experiente faz toda a diferença.",
      "É possível receber valores retroativos desde a data do indeferimento administrativo."
    ],
    image: processoAuxAcidenteImg,
    imageAlt: "Tribunal com balança da justiça e martelo, representando processo judicial de auxílio-acidente",
    content: [
      { type: "paragraph", text: "Quando o INSS nega o auxílio-acidente, muitos segurados ficam sem saber o que fazer. A boa notícia é que é possível recorrer à Justiça Federal para garantir esse benefício. Entenda como funciona o processo e quais são os prazos envolvidos." },
      { type: "heading", text: "O Que é o Auxílio-Acidente?" },
      { type: "paragraph", text: "O auxílio-acidente é um benefício indenizatório pago pelo INSS ao segurado que sofreu um acidente (de qualquer natureza) ou desenvolveu doença que resultou em redução permanente da capacidade para o trabalho. Ele é pago junto com o salário, como uma espécie de compensação." },
      { type: "heading", text: "Quando Entrar na Justiça?" },
      { type: "list", items: [
        "Quando o INSS nega o pedido administrativo",
        "Quando a perícia do INSS não reconhece as sequelas",
        "Quando o benefício é cessado indevidamente",
        "Quando há divergência sobre o grau de redução da capacidade"
      ]},
      { type: "heading", text: "Prazos do Processo Judicial" },
      { type: "paragraph", text: "O tempo médio de um processo de auxílio-acidente varia conforme a região e a complexidade do caso. Em geral, processos nos Juizados Especiais Federais (JEF) costumam durar entre 6 meses e 1 ano. Em varas federais comuns, o prazo pode chegar a 2 anos ou mais." },
      { type: "highlight", text: "Dica importante: ao entrar com o processo, é possível solicitar tutela antecipada (liminar) para receber o benefício enquanto o processo tramita. Um advogado experiente sabe quando e como fazer esse pedido." },
      { type: "heading", text: "Valores Retroativos" },
      { type: "paragraph", text: "Se o juiz reconhecer o direito ao auxílio-acidente, o segurado pode receber todos os valores retroativos desde a data em que o benefício deveria ter sido concedido. Isso pode representar uma quantia significativa." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Não aceite a negativa do INSS como decisão final. A Cantarelli Advocacia tem experiência em processos de auxílio-acidente e pode avaliar seu caso para garantir que você receba o benefício que merece." }
    ],
    faq: [
      { question: "Posso entrar com ação judicial sem ter passado pelo INSS antes?", answer: "Em regra, é necessário o prévio requerimento administrativo. Sem ele, a ação pode ser extinta por falta de interesse processual." },
      { question: "A perícia judicial é diferente da perícia do INSS?", answer: "Sim. A perícia judicial é realizada por perito nomeado pelo juiz, geralmente mais detalhada e imparcial que a perícia administrativa." },
      { question: "É possível obter tutela antecipada no processo de auxílio-acidente?", answer: "Sim. Se houver urgência e provas robustas da sequela, o juiz pode conceder o benefício provisoriamente antes da sentença final." }
    ]
  },
  {
    slug: "salario-maternidade-desempregada-quem-tem-direito",
    title: "Salário-Maternidade para Desempregada: Quem Tem Direito?",
    excerpt: "Ficou desempregada e descobriu a gravidez? Saiba que você pode ter direito ao salário-maternidade mesmo sem estar trabalhando. Entenda os requisitos.",
    category: "Benefícios",
    tags: ["Salário-Maternidade", "Desempregada", "INSS", "Gestante"],
    readTime: "6 min",
    keyTakeaways: [
      "A segurada desempregada pode ter direito ao salário-maternidade durante o período de graça do INSS.",
      "O período de graça é de 12 meses após a demissão, podendo ser estendido para 24 ou 36 meses em alguns casos.",
      "É necessário ter cumprido a carência mínima de 10 contribuições mensais.",
      "O valor do benefício é calculado com base nas últimas contribuições, com piso de um salário mínimo (R$ 1.621,00 em 2026)."
    ],
    image: salMatDesempregadaImg,
    imageAlt: "Mulher analisando documentos sobre direito ao salário-maternidade para desempregadas",
    content: [
      { type: "paragraph", text: "Perder o emprego durante a gravidez ou descobrir a gestação após a demissão é uma situação angustiante. No entanto, a legislação previdenciária brasileira prevê a manutenção da qualidade de segurada mesmo após o desligamento, garantindo o direito ao salário-maternidade em determinadas condições." },
      { type: "heading", text: "O Que é o Período de Graça?" },
      { type: "paragraph", text: "O período de graça é o tempo em que o segurado mantém seus direitos junto ao INSS mesmo sem contribuir. Para quem foi demitido sem justa causa, esse período é de pelo menos 12 meses. Pode ser estendido para 24 meses se a segurada tiver mais de 120 contribuições, e para 36 meses se comprovar situação de desemprego." },
      { type: "heading", text: "Requisitos para Receber o Benefício" },
      { type: "list", items: [
        "Estar dentro do período de graça na data do parto ou adoção",
        "Ter cumprido a carência de 10 contribuições mensais",
        "Comprovar a qualidade de segurada perante o INSS",
        "Apresentar certidão de nascimento ou termo de adoção"
      ]},
      { type: "heading", text: "Qual o Valor do Salário-Maternidade?" },
      { type: "paragraph", text: "Para a segurada desempregada, o valor do salário-maternidade é calculado com base na média dos últimos 12 salários de contribuição. O valor mínimo é de um salário mínimo (R$ 1.621,00 em 2026) e o máximo é o teto do INSS (R$ 8.157,41 em 2026)." },
      { type: "highlight", text: "Atenção: mesmo que o INSS negue o benefício alegando perda da qualidade de segurada, é possível reverter essa decisão com a documentação correta. Muitas seguradas perdem o benefício por falta de orientação jurídica adequada." },
      { type: "heading", text: "INSS Negou? Saiba o Que Fazer" },
      { type: "paragraph", text: "Se o INSS indeferiu seu pedido de salário-maternidade, não desista. Um advogado previdenciário pode analisar se houve erro na contagem do período de graça ou na verificação da carência e, se necessário, ingressar com ação judicial para garantir seus direitos." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você está desempregada e grávida, pode ter direito ao salário-maternidade. A Cantarelli Advocacia pode avaliar seu caso gratuitamente e orientá-la sobre os próximos passos para garantir esse benefício." }
    ],
    faq: [
      { question: "Demissão durante a gravidez dá direito à estabilidade?", answer: "Sim. A gestante tem estabilidade desde a confirmação da gravidez até 5 meses após o parto, mesmo em contrato de experiência." },
      { question: "Aborto espontâneo dá direito ao salário-maternidade?", answer: "Sim, por 14 dias em caso de aborto não criminoso, conforme previsto na legislação previdenciária." },
      { question: "Contribuinte facultativa desempregada tem direito?", answer: "Sim, desde que mantenha os pagamentos em dia. A contribuinte facultativa que para de pagar perde a qualidade de segurada." }
    ]
  },
  {
    slug: "quanto-tempo-demora-processo-auxilio-acidente",
    title: "Quanto Tempo Demora um Processo de Auxílio-Acidente?",
    excerpt: "Entenda os prazos médios de um processo de auxílio-acidente no INSS e na Justiça, e como acelerar a obtenção do seu benefício.",
    category: "Benefícios",
    tags: ["Auxílio-Acidente", "Prazos", "INSS", "Processo"],
    readTime: "6 min",
    keyTakeaways: [
      "O pedido administrativo no INSS leva em média 45 a 90 dias para ser analisado.",
      "Na Justiça, o processo pode durar de 6 meses a 2 anos dependendo da comarca.",
      "A tutela antecipada pode garantir o recebimento do benefício enquanto o processo tramita.",
      "Ter documentação completa e um advogado especialista acelera significativamente o processo."
    ],
    image: tempoProcessoAuxImg,
    imageAlt: "Calendário e ampulheta representando o tempo de duração de um processo de auxílio-acidente",
    content: [
      { type: "paragraph", text: "Uma das maiores preocupações de quem precisa do auxílio-acidente é saber quanto tempo vai demorar para conseguir o benefício. Os prazos variam conforme a via escolhida (administrativa ou judicial) e a complexidade do caso." },
      { type: "heading", text: "Prazos na Via Administrativa (INSS)" },
      { type: "paragraph", text: "Quando o pedido é feito diretamente ao INSS, o prazo médio de análise é de 45 a 90 dias. No entanto, em períodos de grande demanda, esse prazo pode se estender. A perícia médica é agendada dentro desse período e o resultado costuma sair na mesma data." },
      { type: "heading", text: "Prazos na Via Judicial" },
      { type: "list", items: [
        "Juizado Especial Federal (até 60 salários mínimos): 6 a 12 meses em média",
        "Vara Federal comum: 1 a 2 anos em média",
        "Recurso em segunda instância: mais 6 a 12 meses",
        "Com tutela antecipada deferida: benefício pode começar em 30 a 60 dias"
      ]},
      { type: "heading", text: "Como Acelerar o Processo?" },
      { type: "paragraph", text: "A documentação é o fator mais importante para agilizar o processo. Laudos médicos detalhados, exames de imagem, CAT (Comunicação de Acidente de Trabalho) e o PPP devem estar organizados antes de dar entrada no pedido." },
      { type: "highlight", text: "Um advogado previdenciário experiente sabe exatamente quais documentos são necessários e como apresentá-los de forma estratégica para reduzir o tempo do processo." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O tempo de um processo de auxílio-acidente depende de vários fatores, mas com a documentação certa e orientação jurídica especializada, é possível reduzir significativamente essa espera. A Cantarelli Advocacia pode ajudar você a conseguir seu benefício no menor prazo possível." }
    ],
    faq: [
      { question: "Existe como acelerar o processo na Justiça?", answer: "Sim. Juntar documentação completa desde o início, solicitar perícia antecipada e optar pelo JEF quando possível aceleram o trâmite." },
      { question: "O processo pode ser arquivado se eu não comparecer?", answer: "Sim. A ausência injustificada em audiências ou perícias pode levar ao arquivamento da ação. É fundamental comparecer a todos os atos." },
      { question: "Recurso do INSS após sentença favorável atrasa muito?", answer: "O recurso na Turma Recursal do JEF costuma levar de 6 a 12 meses adicionais. Na Justiça Federal comum, pode levar mais." }
    ]
  },
  {
    slug: "bpc-negado-o-que-fazer",
    title: "Teve o BPC Negado? Saiba Agora o Que Fazer",
    excerpt: "O INSS negou seu pedido de BPC/LOAS? Entenda os motivos mais comuns de negativa e descubra como reverter essa decisão com ajuda jurídica especializada.",
    category: "BPC/LOAS",
    tags: ["BPC", "LOAS", "Negativa", "INSS", "Recurso"],
    readTime: "7 min",
    keyTakeaways: [
      "Os motivos mais comuns de negativa do BPC são: renda familiar acima do limite, deficiência não reconhecida na perícia e irregularidade no CadÚnico.",
      "É possível recorrer administrativamente em até 30 dias após a negativa.",
      "Na via judicial, o critério de renda pode ser flexibilizado, considerando gastos com saúde e medicamentos.",
      "Um advogado especialista aumenta significativamente as chances de reverter a negativa."
    ],
    image: bpcNegadoImg,
    imageAlt: "Idoso preocupado segurando carta de negativa do BPC LOAS do INSS",
    content: [
      { type: "paragraph", text: "Ter o BPC/LOAS negado é uma situação frustrante, especialmente quando a pessoa realmente precisa do benefício para sobreviver. No entanto, a negativa do INSS não é uma decisão final — existem caminhos legais para reverter essa situação." },
      { type: "heading", text: "Motivos Mais Comuns de Negativa" },
      { type: "list", items: [
        "Renda per capita familiar acima de 1/4 do salário mínimo (R$ 405,25 em 2026)",
        "Perícia médica que não reconhece a deficiência ou incapacidade",
        "CadÚnico desatualizado ou com informações incorretas",
        "Falta de documentação comprobatória adequada",
        "Composição familiar incorretamente calculada pelo INSS"
      ]},
      { type: "heading", text: "Recurso Administrativo" },
      { type: "paragraph", text: "Após a negativa, o segurado tem 30 dias para interpor recurso administrativo junto à Junta de Recursos do INSS. Nesse recurso, é possível apresentar novos documentos e laudos que comprovem o direito ao benefício." },
      { type: "heading", text: "Ação Judicial" },
      { type: "paragraph", text: "Na via judicial, o juiz pode aplicar critérios mais flexíveis para avaliar a renda familiar. Gastos com medicamentos, tratamentos médicos, fraldas geriátricas e outras despesas essenciais podem ser descontados da renda para fins de verificação do critério econômico." },
      { type: "highlight", text: "A Justiça Federal frequentemente reconhece o direito ao BPC mesmo quando a renda per capita supera ligeiramente o limite legal, desde que fique comprovada a situação de vulnerabilidade social." },
      { type: "heading", text: "Documentos Importantes para o Recurso" },
      { type: "list", items: [
        "Laudos médicos atualizados e detalhados",
        "Comprovantes de gastos com saúde e medicamentos",
        "Comprovantes de renda de todos os membros da família",
        "CadÚnico atualizado",
        "Declaração de composição familiar"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se o seu BPC foi negado, não desista. A Cantarelli Advocacia tem ampla experiência em reverter negativas de BPC/LOAS e pode analisar seu caso para identificar a melhor estratégia." }
    ],
    faq: [
      { question: "Posso pedir o BPC novamente após uma negativa?", answer: "Sim. Não há limite de pedidos. Se houve mudança na situação econômica ou de saúde, um novo requerimento pode ser feito a qualquer momento." },
      { question: "O CadÚnico precisa estar atualizado para o BPC?", answer: "Sim. O cadastro no CadÚnico é obrigatório e deve estar atualizado nos últimos 2 anos. Dados desatualizados podem causar negativa." },
      { question: "Defensor público pode ajudar no caso de BPC negado?", answer: "Sim. A Defensoria Pública oferece assistência jurídica gratuita para quem não pode pagar advogado, inclusive em ações previdenciárias." }
    ]
  },
  {
    slug: "aposentadoria-antecipada-como-conseguir",
    title: "Aposentadoria Antecipada: Como Conseguir e Evitar Perder Dinheiro",
    excerpt: "Descubra se você pode se aposentar antes do tempo e quais cuidados tomar para não reduzir o valor do seu benefício. Entenda as regras de transição em 2026.",
    category: "Aposentadoria",
    tags: ["Aposentadoria Antecipada", "Regras de Transição", "INSS", "2026"],
    readTime: "8 min",
    keyTakeaways: [
      "As regras de transição da Reforma de 2019 permitem aposentadoria antecipada em alguns casos específicos.",
      "O pedágio de 50% e 100% são opções para quem estava próximo de se aposentar em 2019.",
      "Aposentar-se antes do tempo pode significar redução significativa no valor do benefício.",
      "Um planejamento previdenciário detalhado evita perdas financeiras e identifica a melhor data para o pedido."
    ],
    image: aposentAntecipadaImg,
    imageAlt: "Profissional analisando documentos de planejamento de aposentadoria antecipada",
    content: [
      { type: "paragraph", text: "Muitas pessoas desejam se aposentar o mais cedo possível, mas nem sempre isso é a melhor decisão financeira. Aposentar-se antes do tempo pode significar uma redução significativa no valor do benefício mensal. Entenda como funciona e quando vale a pena." },
      { type: "heading", text: "Regras de Transição Disponíveis em 2026" },
      { type: "list", items: [
        "Pedágio de 50%: para quem faltavam até 2 anos para se aposentar em novembro de 2019",
        "Pedágio de 100%: exige idade mínima (57 mulheres, 60 homens) + tempo faltante x2",
        "Pontos progressivos: soma de idade + tempo de contribuição (92 pontos para mulheres, 102 para homens em 2026)",
        "Idade mínima progressiva: 59 anos para mulheres e 64 para homens em 2026"
      ]},
      { type: "heading", text: "O Que Pode Reduzir Seu Benefício?" },
      { type: "paragraph", text: "O principal fator que reduz o valor da aposentadoria é o coeficiente de cálculo. Após a Reforma, o cálculo é de 60% da média + 2% por ano que exceder 15 anos (mulheres) ou 20 anos (homens). Aposentar-se com poucos anos além do mínimo resulta em benefício significativamente menor." },
      { type: "highlight", text: "Exemplo: uma mulher com 30 anos de contribuição recebe 90% da média salarial. Se esperar mais 5 anos, chega a 100%. Cada ano pode representar milhares de reais ao longo da aposentadoria." },
      { type: "heading", text: "Quando Vale a Pena Antecipar?" },
      { type: "paragraph", text: "A aposentadoria antecipada pode valer a pena quando o segurado tem problemas de saúde, está desempregado há muito tempo, ou quando a regra de transição do pedágio oferece condições vantajosas. Cada caso é único e precisa ser analisado individualmente." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Antes de pedir a aposentadoria, faça um planejamento previdenciário completo. A Cantarelli Advocacia realiza análise detalhada do seu caso para identificar a regra mais vantajosa e a melhor data para se aposentar sem perder dinheiro." }
    ],
    faq: [
      { question: "Contribuir com valor maior adianta a aposentadoria?", answer: "Não. O valor da contribuição afeta o valor do benefício, não o tempo. O que adianta a aposentadoria é ter mais tempo de contribuição." },
      { question: "Servidor público pode se aposentar antecipadamente pelo INSS?", answer: "Somente se tiver tempo de contribuição no regime geral (INSS) anterior ao ingresso no serviço público, que pode ser contado via contagem recíproca." },
      { question: "Quem trabalhou com insalubridade pode antecipar a aposentadoria?", answer: "Sim. O tempo especial pode ser convertido em tempo comum com fator multiplicador, adiantando a data da aposentadoria." }
    ]
  },
  {
    slug: "regras-aposentadoria-mulher-2026",
    title: "Conheça as Regras de Aposentadoria para Mulher: Saiba Quando é a Hora Certa",
    excerpt: "As mulheres têm regras diferenciadas para aposentadoria no INSS. Conheça todas as opções disponíveis em 2026 e descubra quando é o melhor momento para se aposentar.",
    category: "Aposentadoria",
    tags: ["Mulher", "Aposentadoria", "INSS", "2026", "Regras"],
    readTime: "8 min",
    keyTakeaways: [
      "A idade mínima para aposentadoria da mulher é 62 anos na regra permanente, com pelo menos 15 anos de contribuição.",
      "As regras de transição podem permitir aposentadoria antes dos 62 anos dependendo do tempo de contribuição.",
      "Tempo como dona de casa, período de maternidade e trabalho rural podem contar para a aposentadoria.",
      "Um planejamento previdenciário identifica qual regra é mais vantajosa para cada mulher."
    ],
    image: aposentMulherImg,
    imageAlt: "Mulheres profissionais em diferentes fases da carreira representando planejamento de aposentadoria",
    content: [
      { type: "paragraph", text: "As mulheres possuem regras diferenciadas para aposentadoria no INSS, com requisitos de idade e tempo de contribuição menores do que os homens. No entanto, com tantas regras de transição em vigor, é fundamental entender qual delas oferece o melhor benefício." },
      { type: "heading", text: "Regra Permanente (Pós-Reforma)" },
      { type: "list", items: [
        "Idade mínima: 62 anos",
        "Tempo mínimo de contribuição: 15 anos",
        "Cálculo: 60% da média + 2% por ano acima de 15 anos de contribuição"
      ]},
      { type: "heading", text: "Regras de Transição para Mulheres em 2026" },
      { type: "list", items: [
        "Pontos: 92 pontos (idade + tempo de contribuição) com mínimo de 30 anos de contribuição",
        "Idade mínima progressiva: 59 anos com 30 anos de contribuição",
        "Pedágio de 50%: para quem faltava até 2 anos em novembro/2019",
        "Pedágio de 100%: 57 anos de idade + tempo que faltava x2"
      ]},
      { type: "heading", text: "Períodos Especiais que Contam" },
      { type: "paragraph", text: "Muitas mulheres não sabem que determinados períodos podem ser computados para a aposentadoria, como período de salário-maternidade, tempo como segurada facultativa (dona de casa) e atividade rural exercida antes de 1991." },
      { type: "highlight", text: "Muitas mulheres se aposentam recebendo menos do que poderiam por falta de planejamento. Cada ano de contribuição pode representar até 2% a mais no valor do benefício." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Não se aposente sem antes fazer um planejamento previdenciário completo. A Cantarelli Advocacia pode analisar seu histórico contributivo e identificar a regra mais vantajosa para o seu caso, garantindo o maior benefício possível." }
    ],
    faq: [
      { question: "Período como dona de casa conta para aposentadoria?", answer: "Somente se houver contribuição como segurada facultativa. O tempo sem contribuição não é computado pelo INSS." },
      { question: "Licença-maternidade conta como tempo de contribuição?", answer: "Sim. O período de licença-maternidade é considerado tempo de contribuição normalmente para todos os fins previdenciários." },
      { question: "Mulher que nunca trabalhou pode se aposentar?", answer: "Sim, contribuindo como facultativa de baixa renda (5% do mínimo) por pelo menos 15 anos e atingindo a idade mínima de 62 anos." }
    ]
  },
  {
    slug: "transformar-bpc-em-aposentadoria",
    title: "É Possível Transformar o BPC em Aposentadoria? Entenda!",
    excerpt: "Recebe BPC/LOAS e quer saber se pode converter em aposentadoria? Entenda as diferenças, vantagens e como fazer a transição corretamente.",
    category: "BPC/LOAS",
    tags: ["BPC", "LOAS", "Aposentadoria", "Conversão", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "O BPC não se transforma automaticamente em aposentadoria — são benefícios com naturezas diferentes.",
      "É possível cancelar o BPC e requerer aposentadoria se o segurado cumprir os requisitos.",
      "A aposentadoria gera direito a 13º salário e pensão por morte, que o BPC não oferece.",
      "Antes de trocar, é essencial fazer uma análise comparativa dos valores e direitos de cada benefício."
    ],
    image: bpcParaAposentImg,
    imageAlt: "Documentos legais sobre conversão de BPC LOAS em aposentadoria do INSS",
    content: [
      { type: "paragraph", text: "Muitas pessoas que recebem o BPC/LOAS se perguntam se é possível converter esse benefício em aposentadoria. A resposta curta é: não existe uma conversão automática, mas é possível cancelar o BPC e requerer uma aposentadoria, desde que os requisitos sejam cumpridos." },
      { type: "heading", text: "Diferenças Entre BPC e Aposentadoria" },
      { type: "list", items: [
        "BPC: não exige contribuição ao INSS, mas não gera 13º salário nem pensão por morte",
        "Aposentadoria: exige tempo de contribuição, mas oferece 13º salário e gera pensão por morte",
        "BPC: valor fixo de 1 salário mínimo (R$ 1.621,00 em 2026)",
        "Aposentadoria: pode ser superior ao salário mínimo dependendo das contribuições"
      ]},
      { type: "heading", text: "Quando Vale a Pena Trocar?" },
      { type: "paragraph", text: "A troca pode ser vantajosa quando o beneficiário do BPC tem tempo de contribuição suficiente para uma aposentadoria com valor igual ou superior. Além disso, a aposentadoria garante 13º salário e pensão por morte para os dependentes — benefícios que o BPC não oferece." },
      { type: "highlight", text: "Importante: antes de cancelar o BPC, é fundamental ter a certeza de que a aposentadoria será concedida. Cancelar o BPC sem garantia pode deixar a pessoa sem nenhum benefício." },
      { type: "heading", text: "Contribuições Enquanto Recebe BPC" },
      { type: "paragraph", text: "Quem recebe BPC pode contribuir como segurado facultativo para acumular tempo de contribuição e, futuramente, requerer uma aposentadoria. No entanto, é importante planejar essas contribuições com orientação profissional para não pagar valores desnecessários." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "A transição do BPC para a aposentadoria exige planejamento cuidadoso. A Cantarelli Advocacia pode fazer uma análise comparativa completa e orientar sobre a melhor decisão para o seu caso." }
    ],
    faq: [
      { question: "Posso contribuir ao INSS enquanto recebo BPC?", answer: "Sim. Não há impedimento legal. As contribuições contarão para uma futura aposentadoria, e o BPC será cessado quando a aposentadoria for concedida." },
      { question: "O valor da aposentadoria será maior que o BPC?", answer: "Geralmente sim, especialmente se contribuir por tempo suficiente. Além disso, a aposentadoria garante 13º salário, que o BPC não oferece." },
      { question: "Quanto tempo preciso contribuir para trocar o BPC por aposentadoria?", answer: "No mínimo 15 anos de contribuição e atingir a idade mínima (62 anos mulheres, 65 anos homens) para a aposentadoria por idade." }
    ]
  },
  {
    slug: "quem-recebe-loas-pode-receber-pensao-por-morte",
    title: "Quem Recebe LOAS Pode Receber Pensão por Morte do Marido?",
    excerpt: "Descubra se é possível acumular o BPC/LOAS com a pensão por morte do cônjuge e quais são as regras de acumulação de benefícios do INSS.",
    category: "BPC/LOAS",
    tags: ["LOAS", "Pensão por Morte", "Acumulação", "INSS", "BPC"],
    readTime: "6 min",
    keyTakeaways: [
      "Em regra, não é possível acumular o BPC/LOAS com a pensão por morte — a pessoa deve optar pelo mais vantajoso.",
      "A pensão por morte geralmente é mais vantajosa por oferecer valor superior e 13º salário.",
      "Em alguns casos judiciais, tem sido reconhecido o direito de acumulação quando os valores são baixos.",
      "É fundamental analisar cada caso individualmente antes de tomar a decisão."
    ],
    image: loasPensaoMorteImg,
    imageAlt: "Idosa recebendo orientação jurídica sobre acumulação de LOAS e pensão por morte",
    content: [
      { type: "paragraph", text: "Essa é uma dúvida muito comum entre beneficiários do BPC/LOAS: após o falecimento do cônjuge, é possível receber também a pensão por morte? A legislação traz uma regra geral de não acumulação, mas existem nuances importantes que precisam ser analisadas." },
      { type: "heading", text: "Regra Geral: Não Acumulação" },
      { type: "paragraph", text: "A Lei 8.742/93 (Lei Orgânica da Assistência Social) estabelece que o BPC não pode ser acumulado com nenhum outro benefício da Seguridade Social, exceto assistência médica e pensão especial de natureza indenizatória. Isso inclui a pensão por morte." },
      { type: "heading", text: "Quando Optar pela Pensão por Morte?" },
      { type: "list", items: [
        "Quando o valor da pensão é superior ao BPC (R$ 1.621,00 em 2026)",
        "Quando a pensão garante 13º salário (que o BPC não oferece)",
        "Quando a pensão gera menos restrições de renda familiar"
      ]},
      { type: "heading", text: "Exceções e Decisões Judiciais" },
      { type: "paragraph", text: "Alguns tribunais têm reconhecido o direito de acumular BPC e pensão por morte em situações excepcionais, especialmente quando ambos os valores são muito baixos e a vedação da acumulação coloca a pessoa em situação de extrema vulnerabilidade social." },
      { type: "highlight", text: "Cada caso é único. A análise de um advogado previdenciário é essencial para determinar qual benefício é mais vantajoso e se há possibilidade de acumulação no seu caso específico." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você recebe BPC/LOAS e perdeu o cônjuge, procure orientação jurídica antes de tomar qualquer decisão. A Cantarelli Advocacia pode analisar qual benefício é mais vantajoso e se existe possibilidade legal de acumulação no seu caso." }
    ],
    faq: [
      { question: "Se eu optar pela pensão por morte, posso voltar ao LOAS depois?", answer: "Sim. Se a pensão por morte for cessada e você ainda cumprir os requisitos do BPC, pode solicitar o retorno ao benefício assistencial." },
      { question: "A renda da pensão por morte afeta o BPC de outro familiar?", answer: "Sim. A pensão entra no cálculo de renda familiar per capita, podendo afetar o BPC de outro membro da família." },
      { question: "Filho que recebe BPC pode receber pensão por morte do pai?", answer: "Precisa escolher um dos dois. Se o filho for menor e a pensão for maior, geralmente vale optar pela pensão por morte." }
    ]
  },
  {
    slug: "auxilio-acidente-pode-trabalhar",
    title: "Quem Recebe Auxílio-Acidente Pode Trabalhar Normal? Entenda Como Funciona",
    excerpt: "Muitos segurados não sabem que o auxílio-acidente pode ser recebido junto com o salário. Entenda as regras e saiba como esse benefício funciona na prática.",
    category: "Benefícios",
    tags: ["Auxílio-Acidente", "Trabalho", "INSS", "Benefício"],
    readTime: "6 min",
    keyTakeaways: [
      "Sim, quem recebe auxílio-acidente pode trabalhar normalmente — o benefício é indenizatório e acumula com o salário.",
      "O auxílio-acidente é pago quando há redução permanente da capacidade laboral, mas não impede o trabalho.",
      "O benefício corresponde a 50% do salário de benefício e é pago até a aposentadoria.",
      "O auxílio-acidente é incorporado no cálculo da aposentadoria, aumentando o valor final."
    ],
    image: auxAcidenteTrabalharImg,
    imageAlt: "Trabalhador de construção civil com equipamento de segurança que recebe auxílio-acidente e continua trabalhando",
    content: [
      { type: "paragraph", text: "Uma das dúvidas mais frequentes sobre o auxílio-acidente é se o segurado pode continuar trabalhando enquanto recebe o benefício. A resposta é sim — e essa é justamente a característica que diferencia o auxílio-acidente de outros benefícios por incapacidade." },
      { type: "heading", text: "O Que é o Auxílio-Acidente?" },
      { type: "paragraph", text: "O auxílio-acidente é um benefício indenizatório pago pelo INSS ao segurado que sofreu um acidente ou doença que resultou em sequelas permanentes que reduzem sua capacidade de trabalho. Diferente do auxílio-doença, ele não exige afastamento do trabalho." },
      { type: "heading", text: "Características do Auxílio-Acidente" },
      { type: "list", items: [
        "Valor: 50% do salário de benefício",
        "Pode ser acumulado com o salário do trabalho",
        "É pago mensalmente até a data da aposentadoria",
        "Não pode ser acumulado com outro auxílio-acidente",
        "É incorporado no cálculo da aposentadoria"
      ]},
      { type: "heading", text: "Quando o Auxílio-Acidente é Cessado?" },
      { type: "paragraph", text: "O auxílio-acidente só é cessado em duas situações: quando o segurado se aposenta ou em caso de óbito. A aposentadoria substitui o auxílio-acidente, mas o valor deste é incluído no cálculo do benefício de aposentadoria, o que pode aumentar significativamente o valor final." },
      { type: "highlight", text: "Dica valiosa: muitos segurados que tiveram acidentes de trabalho não sabem que têm direito ao auxílio-acidente. Se você tem sequelas permanentes de um acidente, mesmo que consiga trabalhar, pode ter direito a esse benefício." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O auxílio-acidente é um direito de quem ficou com sequelas permanentes de um acidente e pode ser recebido junto com o salário do trabalho. Se você tem sequelas que reduzem sua capacidade laboral, a Cantarelli Advocacia pode avaliar seu direito a esse benefício." }
    ]
  }
,
  {
    slug: "deficiencia-auditiva-aposentadoria-pcd",
    title: "Deficiência Auditiva Aposenta? Conheça Seus Direitos no INSS",
    excerpt: "Entenda quando a perda auditiva garante aposentadoria da pessoa com deficiência ou por invalidez e quais documentos são necessários.",
    category: "Autismo",
    tags: ["PCD", "Deficiência Auditiva", "INSS", "Aposentadoria"],
    readTime: "7 min",
    keyTakeaways: [
      "Perda auditiva bilateral pode garantir aposentadoria PCD com tempo reduzido",
      "A avaliação é biopsicossocial, não apenas audiométrica",
      "Surdez unilateral também pode ser reconhecida dependendo do grau",
      "Laudo audiológico e histórico médico são fundamentais"
    ],
    image: defAuditivaImg,
    imageAlt: "Documentos de aposentadoria por deficiência auditiva",
    content: [
      { type: "paragraph", text: "A deficiência auditiva é uma das condições que pode garantir acesso à aposentadoria da pessoa com deficiência, com redução no tempo de contribuição e na idade mínima. Porém, muitos segurados não sabem que têm esse direito ou desconhecem os critérios utilizados pelo INSS na avaliação." },
      { type: "heading", text: "Quando a Perda Auditiva Garante Aposentadoria?" },
      { type: "paragraph", text: "A Lei Complementar 142/2013 garante aposentadoria com requisitos reduzidos para pessoas com deficiência. A perda auditiva pode ser classificada como deficiência leve, moderada ou grave, dependendo do grau de comprometimento e das barreiras enfrentadas no dia a dia." },
      { type: "list", items: ["Perda auditiva bilateral acima de 41 dB pode ser considerada deficiência", "Surdez profunda bilateral (acima de 91 dB) geralmente é classificada como grave", "Uso de aparelho auditivo não elimina o reconhecimento da deficiência", "A avaliação considera impactos sociais, laborais e de comunicação"] },
      { type: "heading", text: "Como é Feita a Avaliação pelo INSS?" },
      { type: "paragraph", text: "O INSS realiza avaliação biopsicossocial com perito médico e assistente social. Não basta apresentar o audiograma — são avaliados os impedimentos de longo prazo e as barreiras que a pessoa enfrenta na participação social e no trabalho." },
      { type: "highlight", text: "Importante: mesmo que você use aparelho auditivo e consiga trabalhar, ainda pode ter direito à aposentadoria PCD se a deficiência auditiva impõe barreiras significativas." },
      { type: "heading", text: "Documentos Necessários" },
      { type: "list", items: ["Audiometria tonal e vocal recente", "Laudos de otorrinolaringologista", "Relatórios de fonoaudiólogo", "Histórico médico completo", "CNIS atualizado"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você tem deficiência auditiva e contribui para o INSS, pode ter direito a se aposentar com requisitos reduzidos. A Cantarelli Advocacia pode analisar seu caso e identificar a melhor estratégia para garantir seus direitos." }
    ],
    faq: [
      { question: "Implante coclear elimina o direito à aposentadoria PCD?", answer: "Não. Mesmo com implante coclear, a pessoa continua sendo considerada deficiente auditiva para fins previdenciários." },
      { question: "Surdez congênita tem tratamento diferente da adquirida?", answer: "Não para fins previdenciários. O que importa é o grau de limitação atual, independente de a surdez ser congênita ou adquirida." },
      { question: "Laudo audiológico é suficiente para comprovar deficiência auditiva?", answer: "É um documento importante, mas a avaliação do INSS é biopsicossocial. Outros laudos e relatórios complementam o processo." }
    ]
  },
  {
    slug: "depressao-aposentadoria-por-invalidez",
    title: "Depressão Aposenta por Invalidez? Entenda os Requisitos do INSS",
    excerpt: "Saiba quando a depressão grave e outros transtornos mentais podem gerar aposentadoria por invalidez e como provar a incapacidade.",
    category: "Incapacidade",
    tags: ["Depressão", "Invalidez", "Saúde Mental", "INSS", "Auxílio-Doença"],
    readTime: "8 min",
    keyTakeaways: [
      "Depressão grave pode gerar aposentadoria por invalidez se causar incapacidade total",
      "É necessário comprovar tratamento contínuo e refratariedade ao tratamento",
      "Laudos psiquiátricos detalhados são essenciais para a perícia",
      "Muitos casos são negados administrativamente mas deferidos na Justiça"
    ],
    image: depressaoImg,
    imageAlt: "Consulta sobre depressão e aposentadoria por invalidez",
    content: [
      { type: "paragraph", text: "A depressão é uma das doenças que mais afasta trabalhadores no Brasil, e em casos graves pode gerar direito à aposentadoria por invalidez. Porém, o INSS frequentemente nega esses pedidos, exigindo comprovação robusta da incapacidade permanente para o trabalho." },
      { type: "heading", text: "Quando a Depressão Gera Aposentadoria por Invalidez?" },
      { type: "paragraph", text: "Para obter aposentadoria por invalidez por depressão, é necessário comprovar que: a doença é grave e persistente, o tratamento adequado já foi tentado sem sucesso (refratariedade), e a pessoa está total e permanentemente incapaz para qualquer atividade profissional." },
      { type: "heading", text: "Diferença entre Auxílio-Doença e Aposentadoria por Invalidez" },
      { type: "list", items: ["Auxílio-doença: incapacidade temporária, expectativa de recuperação", "Aposentadoria por invalidez: incapacidade total e permanente", "O INSS pode converter auxílio-doença em aposentadoria por invalidez", "A conversão depende de perícia médica que ateste a permanência da incapacidade"] },
      { type: "heading", text: "Como Provar Incapacidade por Depressão" },
      { type: "paragraph", text: "A comprovação exige laudos psiquiátricos detalhados, relatórios de internações, receituários de medicamentos, relatórios de psicólogos e, preferencialmente, documentação que demonstre a evolução da doença ao longo do tempo e a falha dos tratamentos tentados." },
      { type: "highlight", text: "Atenção: depressão leve ou moderada com resposta ao tratamento dificilmente gerará aposentadoria por invalidez. O INSS avalia se a pessoa consegue exercer qualquer atividade, não apenas a habitual." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você sofre de depressão grave que impede totalmente seu trabalho e os tratamentos não surtiram efeito, pode ter direito à aposentadoria por invalidez. A Cantarelli Advocacia pode avaliar seu caso e orientar sobre a melhor estratégia jurídica." }
    ],
    faq: [
      { question: "Depressão com tentativa de suicídio tem peso maior na perícia?", answer: "Sim. Registros de internação psiquiátrica e tentativas de suicídio são fortes indicadores de incapacidade total para fins previdenciários." },
      { question: "Remédio controlado é prova suficiente de depressão para o INSS?", answer: "É um indício, mas não suficiente isoladamente. Laudos médicos detalhados com CID e descrição funcional são fundamentais." },
      { question: "Fibromialgia junto com depressão aumenta as chances?", answer: "Sim. A combinação de patologias (multicomorbidade) é considerada na avaliação e pode reforçar a incapacidade total." }
    ]
  },
  {
    slug: "aposentadoria-por-idade-planejamento-2026",
    title: "Aposentadoria por Idade em 2026: Como Planejar e Não Perder Dinheiro",
    excerpt: "Descubra os requisitos atualizados da aposentadoria por idade, como planejar suas contribuições e evitar erros que reduzem o benefício.",
    category: "Planejamento",
    tags: ["Aposentadoria por Idade", "Planejamento", "INSS", "Contribuição"],
    readTime: "7 min",
    keyTakeaways: [
      "Idade mínima: 65 anos (homem) e 62 anos (mulher) com 15 anos de contribuição",
      "O valor depende da média de todos os salários desde julho/1994",
      "Contribuições em atraso podem completar o tempo necessário",
      "Planejamento evita valores abaixo do esperado"
    ],
    image: casalPlanejImg,
    imageAlt: "Casal planejando aposentadoria por idade",
    content: [
      { type: "paragraph", text: "A aposentadoria por idade é a modalidade mais comum no Brasil, mas muitos segurados se surpreendem negativamente com o valor do benefício por falta de planejamento. Entender as regras e planejar suas contribuições pode significar centenas de reais a mais por mês." },
      { type: "heading", text: "Requisitos em 2026" },
      { type: "list", items: ["Homens: 65 anos de idade + 15 anos de contribuição", "Mulheres: 62 anos de idade + 15 anos de contribuição", "Para quem começou a contribuir após a reforma: 20 anos de contribuição (homens)", "Carência de 180 meses de contribuição efetiva"] },
      { type: "heading", text: "Como é Calculado o Valor" },
      { type: "paragraph", text: "O cálculo considera a média de todos os salários de contribuição desde julho de 1994. O benefício corresponde a 60% dessa média + 2% por ano que exceder 20 anos de contribuição (homem) ou 15 anos (mulher). Isso significa que contribuir mais tempo aumenta significativamente o valor." },
      { type: "highlight", text: "Exemplo prático: uma mulher com 20 anos de contribuição recebe 70% da média salarial. Com 30 anos, recebe 90%. Com 35 anos, recebe 100%." },
      { type: "heading", text: "Erros Comuns que Reduzem o Benefício" },
      { type: "list", items: ["Contribuir sobre o salário mínimo quando poderia recolher mais", "Não corrigir erros no CNIS antes de se aposentar", "Ignorar períodos de trabalho rural ou informal", "Não considerar atividade especial para conversão de tempo"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "A aposentadoria por idade exige planejamento para garantir o melhor valor possível. A Cantarelli Advocacia oferece diagnóstico previdenciário completo para identificar a estratégia mais vantajosa para o seu caso." }
    ],
    faq: [
      { question: "Quem contribuiu como MEI precisa complementar para aposentadoria por idade?", answer: "Não para a aposentadoria por idade. A contribuição de 5% do MEI já garante esse tipo de aposentadoria com valor de um salário mínimo." },
      { question: "Posso me aposentar por idade e continuar trabalhando?", answer: "Sim. A aposentadoria por idade não impede o exercício de atividade remunerada. O aposentado pode continuar trabalhando normalmente." },
      { question: "Aposentadoria por idade tem valor menor que por tempo de contribuição?", answer: "Geralmente sim, pois o cálculo considera menos tempo de contribuição. Porém, para quem tem poucos anos contribuídos, é a opção mais viável." }
    ]
  },
  {
    slug: "hernia-de-disco-aposentadoria-invalidez",
    title: "Hérnia de Disco Aposenta? Entenda Quando Gera Invalidez no INSS",
    excerpt: "Descubra quando a hérnia de disco pode gerar aposentadoria por invalidez, quais documentos são necessários e como provar a incapacidade.",
    category: "Incapacidade",
    tags: ["Hérnia de Disco", "Invalidez", "Doença Ocupacional", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "Hérnia de disco pode gerar aposentadoria por invalidez se causar incapacidade total",
      "Nem toda hérnia gera direito — depende do grau de comprometimento funcional",
      "Ressonância magnética e laudos médicos detalhados são essenciais",
      "Se a hérnia for ocupacional, os direitos são ainda maiores"
    ],
    image: herniaDiscoImg,
    imageAlt: "Trabalhador com dor na coluna e hérnia de disco",
    content: [
      { type: "paragraph", text: "A hérnia de disco é uma das patologias mais comuns entre trabalhadores brasileiros, especialmente aqueles que exercem atividades com esforço físico repetitivo. Quando a condição é grave o suficiente para impedir o trabalho, pode gerar direito a benefícios previdenciários." },
      { type: "heading", text: "Quando a Hérnia de Disco Gera Aposentadoria?" },
      { type: "paragraph", text: "A hérnia de disco, por si só, não garante aposentadoria. O que determina o direito é a incapacidade funcional — se a pessoa consegue ou não exercer suas atividades profissionais. Uma hérnia que causa dor intensa, limitação de movimentos e que não responde a tratamentos pode gerar aposentadoria por invalidez." },
      { type: "heading", text: "Hérnia de Disco como Doença Ocupacional" },
      { type: "paragraph", text: "Quando a hérnia de disco é causada ou agravada pelo trabalho, ela é considerada doença ocupacional. Isso garante direitos adicionais como estabilidade no emprego, depósito do FGTS durante o afastamento e possibilidade de aposentadoria por invalidez acidentária com valor integral." },
      { type: "highlight", text: "Se sua hérnia de disco foi causada pelo trabalho, você pode ter direito ao benefício integral (100% da média salarial), sem o redutor de 60% aplicado na regra geral." },
      { type: "heading", text: "Documentos Importantes" },
      { type: "list", items: ["Ressonância magnética da coluna", "Laudos de ortopedista ou neurocirurgião", "CAT (Comunicação de Acidente de Trabalho) se ocupacional", "Relatórios de fisioterapia", "Receituários e exames complementares"] },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você tem hérnia de disco que compromete sua capacidade de trabalho, procure orientação jurídica especializada. A Cantarelli Advocacia pode analisar seu caso e identificar o melhor caminho para garantir seus direitos previdenciários." }
    ],
    faq: [
      { question: "Ressonância magnética que mostra hérnia garante o benefício?", answer: "Não automaticamente. O INSS avalia a incapacidade funcional, não apenas o diagnóstico por imagem. A correlação clínica é fundamental." },
      { question: "Trabalho braçal com hérnia de disco tem mais chances?", answer: "Sim. A perícia considera a atividade habitual. Trabalhadores braçais com hérnia têm mais chance de comprovar incapacidade." },
      { question: "Hérnia de disco pode gerar auxílio-acidente além do auxílio-doença?", answer: "Sim. Se após a alta do auxílio-doença restarem sequelas que reduzam a capacidade de trabalho, o auxílio-acidente pode ser concedido." }
    ]
  },
  {
    slug: "motorista-aplicativo-uber-inss-direitos",
    title: "Motorista de Aplicativo Tem Direito a Aposentadoria? Entenda o INSS para Uber e 99",
    excerpt: "Saiba como motoristas de Uber, 99 e iFood podem garantir aposentadoria e benefícios do INSS com contribuições corretas.",
    category: "Contribuição",
    tags: ["Motorista de Aplicativo", "Uber", "Contribuinte Individual", "INSS"],
    readTime: "6 min",
    keyTakeaways: [
      "Motorista de aplicativo é contribuinte individual obrigatório do INSS",
      "Deve recolher 20% sobre o rendimento mensal via GPS ou carnê",
      "Tem direito a aposentadoria, auxílio-doença e salário-maternidade",
      "Não recolher pode gerar multas e perda de benefícios"
    ],
    image: motoristaAppImg,
    imageAlt: "Motorista de aplicativo e direitos no INSS",
    content: [
      { type: "paragraph", text: "Com o crescimento das plataformas digitais, milhões de brasileiros trabalham como motoristas de aplicativo. Apesar de não terem carteira assinada, esses profissionais são considerados contribuintes individuais obrigatórios do INSS e devem recolher suas contribuições para garantir proteção previdenciária." },
      { type: "heading", text: "Como o Motorista de Aplicativo Contribui para o INSS?" },
      { type: "list", items: ["Alíquota de 20% sobre o rendimento mensal (entre o mínimo e o teto)", "Opção do plano simplificado: 11% sobre o salário mínimo (sem aposentadoria por tempo)", "Recolhimento via GPS (Guia da Previdência Social) até o dia 15 do mês seguinte", "É obrigatório, não opcional — a falta de recolhimento gera débito com a Receita"] },
      { type: "heading", text: "Quais Benefícios o Motorista Tem Direito?" },
      { type: "paragraph", text: "Ao contribuir regularmente, o motorista de aplicativo garante acesso a todos os benefícios do INSS: aposentadoria por idade ou tempo de contribuição, auxílio por incapacidade temporária, aposentadoria por invalidez, salário-maternidade e pensão por morte para dependentes." },
      { type: "highlight", text: "Atenção: quem contribui com 11% (plano simplificado) só tem direito à aposentadoria por idade, não por tempo de contribuição." },
      { type: "heading", text: "Riscos de Não Contribuir" },
      { type: "paragraph", text: "O motorista que não contribui perde a qualidade de segurado e fica sem proteção em caso de acidente, doença ou invalidez. Além disso, pode ser cobrado retroativamente pela Receita Federal com juros e multas." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você é motorista de aplicativo, contribuir para o INSS é obrigatório e garante sua proteção previdenciária. A Cantarelli Advocacia pode orientar sobre a melhor forma de contribuição para garantir o maior benefício futuro." }
    ],
    faq: [
      { question: "Motorista de aplicativo tem direito a seguro-desemprego?", answer: "Não. O seguro-desemprego é exclusivo para empregados com carteira assinada. Motoristas de app são contribuintes individuais." },
      { question: "Entregador de iFood e Rappi tem as mesmas regras do motorista?", answer: "Sim. Entregadores de aplicativo são contribuintes individuais e seguem as mesmas regras de contribuição e benefícios do INSS." },
      { question: "Motorista que também é CLT precisa contribuir em dobro?", answer: "Não. As contribuições de ambas as atividades são somadas, respeitando o teto do INSS. Não há pagamento duplicado." }
    ]
  },
  {
    slug: "doenca-cardiaca-aposentadoria-invalidez",
    title: "Doença Cardíaca Aposenta por Invalidez? Saiba Seus Direitos no INSS",
    excerpt: "Entenda quando cardiopatias graves como infarto, insuficiência cardíaca e arritmias geram direito à aposentadoria por invalidez.",
    category: "Incapacidade",
    tags: ["Doença Cardíaca", "Invalidez", "Cardiopatia Grave", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "Cardiopatia grave está na lista de doenças que dispensam carência",
      "Infarto, insuficiência cardíaca e arritmias graves podem gerar invalidez",
      "O benefício pode ser integral se a doença dispensar carência",
      "Laudo cardiológico detalhado é fundamental"
    ],
    image: doencaCardiacaImg,
    imageAlt: "Doença cardíaca e aposentadoria por invalidez",
    content: [
      { type: "paragraph", text: "As doenças cardíacas são uma das principais causas de incapacidade no Brasil. Quando uma cardiopatia é grave o suficiente para impedir o trabalho, o segurado pode ter direito à aposentadoria por invalidez — e, em muitos casos, sem necessidade de cumprir carência." },
      { type: "heading", text: "Quais Doenças Cardíacas Dão Direito?" },
      { type: "list", items: ["Insuficiência cardíaca congestiva (classes III e IV da NYHA)", "Infarto agudo do miocárdio com sequelas", "Arritmias graves com risco de morte súbita", "Cardiopatia isquêmica grave", "Valvulopatias com comprometimento funcional importante"] },
      { type: "heading", text: "Isenção de Carência" },
      { type: "paragraph", text: "A cardiopatia grave está na lista de doenças que dispensam o período de carência (12 meses de contribuição). Isso significa que, mesmo com poucas contribuições, se a doença for grave e incapacitante, o segurado pode obter o benefício." },
      { type: "highlight", text: "Importante: a isenção de carência aplica-se à aposentadoria por invalidez e ao auxílio-doença. Porém, é necessário ter qualidade de segurado (estar contribuindo ou no período de graça)." },
      { type: "heading", text: "Como Provar a Incapacidade" },
      { type: "paragraph", text: "A perícia do INSS avaliará laudos cardiológicos, exames como ecocardiograma, cateterismo, teste ergométrico, holter e eletrocardiograma. Quanto mais detalhada a documentação médica, maiores as chances de aprovação." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você tem doença cardíaca grave que impede seu trabalho, pode ter direito a benefícios do INSS sem carência. A Cantarelli Advocacia está preparada para analisar seu caso e garantir seus direitos." }
    ],
    faq: [
      { question: "Arritmia cardíaca controlada com medicamento dá direito?", answer: "Geralmente não, se estiver controlada. Mas se houver restrições severas de atividade e risco de morte súbita, pode haver direito." },
      { question: "É necessário passar por junta médica para cardiopatia grave?", answer: "No INSS, a perícia é individual. Na Justiça, o juiz pode determinar junta médica com especialistas em cardiologia." },
      { question: "Marca-passo implantado garante aposentadoria por invalidez?", answer: "Não automaticamente. O que determina é a capacidade funcional residual. Muitos pacientes com marca-passo retornam às atividades normais." }
    ]
  },
  {
    slug: "acidente-de-trabalho-direitos-inss",
    title: "Acidente de Trabalho: Quais São Seus Direitos no INSS?",
    excerpt: "Conheça todos os direitos de quem sofreu acidente de trabalho: estabilidade, FGTS, auxílio-acidente e aposentadoria por invalidez acidentária.",
    category: "Acidente de Trabalho",
    tags: ["Acidente de Trabalho", "CAT", "Auxílio-Acidente", "Estabilidade", "INSS"],
    readTime: "8 min",
    keyTakeaways: [
      "Acidente de trabalho garante benefício integral sem redutor",
      "O trabalhador tem 12 meses de estabilidade após alta do INSS",
      "A empresa deve emitir a CAT — senão o trabalhador pode solicitar",
      "Sequelas permanentes geram direito ao auxílio-acidente"
    ],
    image: acidenteTrabalhoImg,
    imageAlt: "Trabalhador de construção e direitos por acidente de trabalho",
    content: [
      { type: "paragraph", text: "O acidente de trabalho é uma das situações que mais geram dúvidas entre os trabalhadores. Além dos direitos trabalhistas, existem diversos benefícios previdenciários específicos que protegem quem sofre um acidente durante a atividade profissional." },
      { type: "heading", text: "O Que é Considerado Acidente de Trabalho?" },
      { type: "list", items: ["Acidente típico: ocorre durante o exercício do trabalho", "Acidente de trajeto: ocorre no percurso casa-trabalho-casa", "Doença ocupacional: causada ou agravada pelo trabalho", "Acidente fora do local de trabalho a serviço da empresa"] },
      { type: "heading", text: "Direitos do Trabalhador Acidentado" },
      { type: "paragraph", text: "O trabalhador que sofre acidente de trabalho tem direitos específicos que vão além dos benefícios previdenciários comuns. O benefício acidentário é calculado sobre a média integral (sem o redutor de 60%) e não exige carência." },
      { type: "list", items: ["Auxílio-doença acidentário (B91): sem carência, valor integral", "Aposentadoria por invalidez acidentária: 100% da média salarial", "Auxílio-acidente: indenização por sequelas permanentes", "Estabilidade de 12 meses no emprego após alta", "FGTS depositado durante todo o afastamento"] },
      { type: "heading", text: "A Importância da CAT" },
      { type: "paragraph", text: "A Comunicação de Acidente de Trabalho (CAT) é o documento que formaliza o acidente. A empresa é obrigada a emitir a CAT, mas caso se recuse, o próprio trabalhador, o sindicato, o médico ou o SUS podem emitir." },
      { type: "highlight", text: "Se a empresa não emitiu a CAT, não desista. A Justiça pode reconhecer o acidente de trabalho mesmo sem a CAT, desde que comprovado o nexo causal." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você sofreu acidente de trabalho, seus direitos são amplos e específicos. A Cantarelli Advocacia pode orientar sobre todos os benefícios a que você tem direito e garantir que nenhum direito seja perdido." }
    ],
    faq: [
      { question: "Acidente durante intervalo de almoço dentro da empresa é acidente de trabalho?", answer: "Sim. Acidentes ocorridos nas dependências da empresa durante o horário de trabalho, inclusive intervalos, são considerados acidentes de trabalho." },
      { question: "Home office: acidente em casa pode ser acidente de trabalho?", answer: "Sim, se ocorrer durante o exercício da atividade profissional e houver nexo causal com o trabalho, mesmo em regime de teletrabalho." },
      { question: "A empresa pode contestar a CAT emitida pelo trabalhador?", answer: "A empresa não pode cancelar a CAT, mas pode apresentar defesa em eventual processo. A CAT emitida por qualquer legitimado tem validade legal." }
    ]
  },
  {
    slug: "mei-aposentadoria-direitos-beneficios",
    title: "MEI Tem Direito a Aposentadoria? Entenda os Benefícios e Limitações",
    excerpt: "Descubra quais benefícios do INSS o MEI tem direito, como funciona a contribuição e como garantir aposentadoria por tempo de contribuição.",
    category: "Contribuição",
    tags: ["MEI", "Contribuinte Individual", "INSS", "Aposentadoria por Idade"],
    readTime: "6 min",
    keyTakeaways: [
      "MEI contribui com 5% do salário mínimo via DAS",
      "Com 5% só tem direito à aposentadoria por idade",
      "Para aposentadoria por tempo, deve complementar com 15% adicional",
      "MEI tem direito a auxílio-doença, salário-maternidade e pensão por morte"
    ],
    image: meiAposentImg,
    imageAlt: "Microempreendedor individual e direitos previdenciários",
    content: [
      { type: "paragraph", text: "O Microempreendedor Individual (MEI) tem direitos previdenciários garantidos, mas com limitações importantes que muitos desconhecem. A contribuição reduzida de 5% sobre o salário mínimo garante acesso a alguns benefícios, mas não a todos." },
      { type: "heading", text: "Como o MEI Contribui para o INSS?" },
      { type: "paragraph", text: "O MEI paga uma contribuição mensal fixa via DAS (Documento de Arrecadação do Simples Nacional), que inclui 5% do salário mínimo para o INSS (R$ 81,05 em 2026), mais valores de ICMS e ISS conforme a atividade." },
      { type: "heading", text: "Quais Benefícios o MEI Tem Direito?" },
      { type: "list", items: ["Aposentadoria por idade (65 anos homem / 62 anos mulher)", "Auxílio por incapacidade temporária (auxílio-doença)", "Aposentadoria por invalidez", "Salário-maternidade", "Pensão por morte e auxílio-reclusão para dependentes"] },
      { type: "heading", text: "Limitação: Aposentadoria por Tempo de Contribuição" },
      { type: "paragraph", text: "Com a contribuição de 5%, o MEI NÃO tem direito à aposentadoria por tempo de contribuição. Para obter esse direito, é necessário complementar a contribuição com mais 15% sobre o salário mínimo (R$ 243,15 em 2026) via GPS." },
      { type: "highlight", text: "Dica importante: se você pretende se aposentar por tempo de contribuição, complemente suas contribuições mensalmente. Pagar retroativamente com juros e multas sai muito mais caro." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O MEI tem direitos previdenciários importantes, mas é fundamental entender as limitações. A Cantarelli Advocacia pode ajudar a planejar sua aposentadoria e identificar se a complementação de contribuição vale a pena no seu caso." }
    ],
    faq: [
      { question: "MEI que fecha a empresa perde o tempo de contribuição?", answer: "Não. O tempo contribuído como MEI é mantido no CNIS e conta para aposentadoria, mesmo que o CNPJ seja encerrado." },
      { question: "MEI pode contratar previdência privada como complemento?", answer: "Sim. É uma estratégia recomendada, já que a aposentadoria do MEI sem complementação é limitada a um salário mínimo." },
      { question: "DAS atrasado do MEI pode ser parcelado?", answer: "Sim. Débitos do MEI podem ser parcelados em até 60 vezes pelo portal do Simples Nacional ou Receita Federal." }
    ]
  },
  {
    slug: "diabetes-aposentadoria-por-invalidez",
    title: "Diabetes Aposenta por Invalidez? Conheça Seus Direitos no INSS",
    excerpt: "Saiba quando o diabetes pode gerar aposentadoria por invalidez, quais complicações dão direito e como provar a incapacidade.",
    category: "Incapacidade",
    tags: ["Diabetes", "Invalidez", "INSS", "Doença Grave"],
    readTime: "7 min",
    keyTakeaways: [
      "Diabetes por si só geralmente não gera invalidez — as complicações sim",
      "Neuropatia diabética, retinopatia e nefropatia podem incapacitar",
      "Diabetes tipo 1 insulinodependente tem maior chance de reconhecimento",
      "Laudos detalhando complicações são essenciais"
    ],
    image: diabetesImg,
    imageAlt: "Diabetes e aposentadoria por invalidez no INSS",
    content: [
      { type: "paragraph", text: "O diabetes mellitus é uma das doenças crônicas mais prevalentes no Brasil. Embora o diabetes por si só nem sempre gere incapacidade, suas complicações podem ser graves o suficiente para impedir o trabalho e gerar direito à aposentadoria por invalidez." },
      { type: "heading", text: "Quando o Diabetes Gera Aposentadoria?" },
      { type: "paragraph", text: "O INSS avalia a incapacidade funcional, não apenas o diagnóstico. O diabetes geralmente gera aposentadoria quando provoca complicações graves como perda de visão, amputações, insuficiência renal ou neuropatia severa que impedem o exercício de qualquer atividade profissional." },
      { type: "heading", text: "Complicações que Podem Gerar Invalidez" },
      { type: "list", items: ["Retinopatia diabética com perda significativa de visão", "Nefropatia diabética com necessidade de hemodiálise", "Neuropatia periférica grave com perda de sensibilidade", "Pé diabético com amputações", "Complicações cardiovasculares graves"] },
      { type: "heading", text: "Diabetes e Isenção de Carência" },
      { type: "paragraph", text: "O diabetes não consta na lista de doenças que dispensam carência. Porém, se o diabetes causar complicações como cegueira ou insuficiência renal crônica, essas condições podem dispensar a carência por serem consideradas doenças graves." },
      { type: "highlight", text: "Atenção: mesmo sem isenção de carência, se você contribuiu por pelo menos 12 meses e tem diabetes com complicações incapacitantes, pode ter direito ao benefício." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se o diabetes está afetando sua capacidade de trabalhar, especialmente por complicações graves, você pode ter direito a benefícios do INSS. A Cantarelli Advocacia pode analisar seu caso e orientar sobre a melhor estratégia." }
    ],
    faq: [
      { question: "Diabetes gestacional dá direito a algum benefício?", answer: "Não para aposentadoria, mas a gestante tem direito ao salário-maternidade. Se a diabetes persistir e gerar incapacidade, pode buscar auxílio-doença." },
      { question: "Amputação por diabetes garante aposentadoria por invalidez?", answer: "Geralmente sim. A amputação de membro é forte indicador de incapacidade, especialmente se limitar significativamente a capacidade de trabalho." },
      { question: "Uso de insulina é prova de gravidade para o INSS?", answer: "É um indício de diabetes avançado, mas não garante benefício por si só. A perícia avalia a incapacidade funcional, não apenas o tratamento." }
    ]
  },
  {
    slug: "adicional-25-grande-invalidez-aposentadoria",
    title: "Adicional de 25% na Aposentadoria por Invalidez: Quem Tem Direito?",
    excerpt: "Entenda o adicional de grande invalidez que aumenta em 25% a aposentadoria de quem precisa de cuidador permanente.",
    category: "Incapacidade",
    tags: ["Grande Invalidez", "Adicional 25%", "Aposentadoria por Invalidez", "INSS"],
    readTime: "6 min",
    keyTakeaways: [
      "O adicional de 25% é para quem precisa de assistência permanente de outra pessoa",
      "Pode ultrapassar o teto do INSS",
      "Cegueira, paralisia e Alzheimer são exemplos que geram o adicional",
      "O STJ já reconheceu o direito para aposentados por idade e tempo"
    ],
    image: adicional25Img,
    imageAlt: "Aposentado com necessidade de cuidador e adicional de 25%",
    content: [
      { type: "paragraph", text: "O adicional de 25% na aposentadoria por invalidez é um benefício pouco conhecido mas extremamente importante. Ele se destina a segurados que, além de serem inválidos para o trabalho, necessitam de assistência permanente de outra pessoa para os atos da vida diária." },
      { type: "heading", text: "O Que é o Adicional de Grande Invalidez?" },
      { type: "paragraph", text: "Previsto no art. 45 da Lei 8.213/91, o adicional de 25% é um acréscimo ao valor da aposentadoria por invalidez para segurados que comprovem necessidade de acompanhamento permanente. O valor pode inclusive ultrapassar o teto do INSS." },
      { type: "heading", text: "Quem Tem Direito?" },
      { type: "list", items: ["Cegueira total ou visão severamente comprometida", "Paralisia de membros superiores ou inferiores", "Perda de membros que impeça autonomia", "Doença de Alzheimer ou demência avançada", "Transtornos mentais graves que impeçam autocuidado", "Qualquer condição que exija cuidador permanente"] },
      { type: "heading", text: "Extensão para Outras Aposentadorias" },
      { type: "paragraph", text: "Embora a lei preveja o adicional apenas para aposentadoria por invalidez, o STJ tem reconhecido o direito para aposentados por idade e por tempo de contribuição que passem a necessitar de cuidador permanente. Essa é uma tese importante que pode beneficiar muitos segurados." },
      { type: "highlight", text: "O adicional de 25% pode ser o único benefício previdenciário que ultrapassa o teto do INSS. Se sua aposentadoria é de R$ 8.157,41 (teto), o adicional eleva para R$ 10.196,76." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você ou um familiar aposentado precisa de cuidador permanente, pode ter direito ao adicional de 25%. A Cantarelli Advocacia pode avaliar o caso e ingressar com o pedido administrativo ou judicial." }
    ],
    faq: [
      { question: "Como comprovar a necessidade de cuidador permanente?", answer: "Com laudos médicos que atestem a impossibilidade de realizar atividades da vida diária (higiene, alimentação, locomoção) sem auxílio de terceiros." },
      { question: "O valor do adicional pode ser usado para contratar cuidador?", answer: "Sim. Embora não haja obrigação de prestação de contas, o adicional tem natureza indenizatória para custear assistência permanente." },
      { question: "Idoso acamado que não é aposentado por invalidez tem direito?", answer: "Pela lei, não. Mas há decisões judiciais do STJ estendendo o adicional a aposentados por idade e tempo de contribuição que necessitem de cuidador." }
    ]
  }
,
  {
    slug: "teto-inss-2026-valor-como-chegar",
    title: "Teto do INSS 2026: Qual o Valor e Como Chegar ao Benefício Máximo",
    excerpt: "O teto do INSS em 2026 é de R$ 8.475,55. Descubra como planejar suas contribuições para alcançar o benefício máximo na aposentadoria.",
    category: "Aposentadoria",
    tags: ["Teto INSS", "Contribuição", "Planejamento", "2026"],
    readTime: "7 min",
    keyTakeaways: [
      "O teto do INSS em 2026 é de R$ 8.475,55 após reajuste de 3,9%",
      "Nem todo segurado que contribui pelo teto receberá o valor máximo",
      "O planejamento previdenciário é essencial para maximizar o benefício",
      "Contribuições abaixo do teto ao longo da vida reduzem a média salarial"
    ],
    image: tetoInssImg,
    imageAlt: "Advogado previdenciário analisando documentos sobre o teto do INSS e valores de aposentadoria em 2026",
    content: [
      { type: "paragraph", text: "O teto do INSS é o valor máximo que um segurado pode receber de benefício previdenciário. Em 2026, esse valor foi reajustado para R$ 8.475,55, representando um aumento de 3,9% em relação ao ano anterior. Porém, alcançar esse valor na prática exige planejamento e estratégia contributiva ao longo de toda a vida laboral." },
      { type: "heading", text: "Qual o Teto do INSS em 2026?" },
      { type: "paragraph", text: "O valor de R$ 8.475,55 representa o limite máximo para qualquer benefício pago pelo INSS, incluindo aposentadorias, pensões e auxílios. Nenhum segurado pode receber mais do que esse valor, independentemente de quanto tenha contribuído — com exceção do adicional de 25% para grande invalidez, que pode ultrapassar o teto." },
      { type: "heading", text: "Por Que Poucos Segurados Atingem o Teto?" },
      { type: "paragraph", text: "Para receber o valor máximo, é necessário ter contribuído sempre sobre o teto ao longo de toda a carreira. Na prática, a maioria dos trabalhadores tem salários que variam ao longo da vida, e contribuições menores puxam a média para baixo." },
      { type: "list", items: ["Oscilações salariais ao longo da carreira reduzem a média", "Períodos sem contribuição (desemprego, informalidade) afetam o cálculo", "A fórmula pós-reforma considera 100% dos salários, incluindo os mais baixos", "Contribuir como autônomo pelo mínimo reduz significativamente a média"] },
      { type: "heading", text: "Como Maximizar o Valor da Aposentadoria" },
      { type: "paragraph", text: "A estratégia para se aproximar do teto envolve manter contribuições consistentes sobre valores altos e evitar lacunas no histórico contributivo. Um planejamento previdenciário identifica os períodos que mais impactam o cálculo e orienta sobre a melhor estratégia de contribuição." },
      { type: "highlight", text: "Contribuir pelo teto nos últimos anos antes da aposentadoria não garante o benefício máximo. O que importa é a média de toda a vida contributiva." },
      { type: "heading", text: "Tabela de Contribuição INSS 2026" },
      { type: "paragraph", text: "As alíquotas de contribuição em 2026 variam de 7,5% a 14% de forma progressiva. Empregados com salário acima de R$ 7.786,02 contribuem com a alíquota máxima efetiva. Já contribuintes individuais recolhem 20% sobre o salário de contribuição escolhido, até o teto." },
      { type: "heading", text: "A Importância do Planejamento" },
      { type: "paragraph", text: "Um advogado previdenciário pode simular diferentes cenários de contribuição e identificar a estratégia mais eficiente para maximizar o valor do seu benefício. Muitas vezes, ajustes simples no padrão de contribuição podem significar milhares de reais a mais na aposentadoria." }
    ],
    faq: [
      { question: "Autônomo pode contribuir pelo teto do INSS?", answer: "Sim. O contribuinte individual pode escolher contribuir com 20% sobre qualquer valor entre o salário mínimo e o teto (R$ 8.475,55)." },
      { question: "Se eu ganho acima do teto, o excedente é perdido?", answer: "Para fins previdenciários, sim. O INSS não considera valores acima do teto. Quem ganha mais pode complementar com previdência privada." },
      { question: "O teto do INSS é reajustado todo ano?", answer: "Sim. O reajuste é anual, geralmente baseado no INPC, e entra em vigor em janeiro de cada ano." }
    ]
  },
  {
    slug: "pente-fino-inss-2026-como-se-proteger",
    title: "Pente-Fino do INSS 2026: Como se Proteger e Não Perder Seu Benefício",
    excerpt: "O INSS intensificou a revisão de benefícios em 2026. Saiba como funciona o pente-fino e o que fazer para proteger sua aposentadoria ou auxílio.",
    category: "Benefícios",
    tags: ["Pente-Fino", "INSS", "Revisão", "Benefícios", "2026"],
    readTime: "8 min",
    keyTakeaways: [
      "O pente-fino convoca beneficiários para reavaliação periódica",
      "Aposentados por invalidez são os mais convocados para perícia",
      "Não comparecer à convocação pode gerar suspensão do benefício",
      "Um advogado especialista pode preparar a documentação de defesa"
    ],
    image: penteFinoImg,
    imageAlt: "Revisão de benefícios do INSS com lupa sobre documentos previdenciários em escritório jurídico",
    content: [
      { type: "paragraph", text: "O pente-fino do INSS é um programa de revisão de benefícios que visa identificar irregularidades e pagamentos indevidos. Em 2026, o INSS intensificou essas ações, convocando milhares de beneficiários para reavaliação. Se você recebe aposentadoria por invalidez, auxílio-doença ou BPC, precisa estar preparado." },
      { type: "heading", text: "O Que É o Pente-Fino do INSS?" },
      { type: "paragraph", text: "O pente-fino consiste na revisão periódica dos benefícios concedidos pelo INSS para verificar se os requisitos que geraram a concessão ainda são atendidos. O programa foi intensificado nos últimos anos como medida de economia fiscal." },
      { type: "heading", text: "Quem Pode Ser Convocado?" },
      { type: "list", items: ["Aposentados por invalidez com menos de 60 anos", "Beneficiários de auxílio-doença de longa duração", "Titulares de BPC/LOAS que não atualizaram o CadÚnico", "Pensionistas com pendências cadastrais", "Beneficiários com indícios de irregularidade identificados por cruzamento de dados"] },
      { type: "heading", text: "O Que Acontece na Convocação?" },
      { type: "paragraph", text: "O segurado recebe uma carta ou notificação pelo aplicativo Meu INSS com data e local para comparecimento. Na perícia, o médico do INSS avalia se a incapacidade que gerou o benefício persiste. Se considerar que houve recuperação, o benefício pode ser cessado." },
      { type: "highlight", text: "Atenção: não comparecer à convocação do pente-fino resulta na suspensão automática do benefício. Mesmo que esteja doente, é fundamental justificar a ausência." },
      { type: "heading", text: "Como se Preparar para o Pente-Fino" },
      { type: "list", items: ["Mantenha seus laudos médicos sempre atualizados (últimos 6 meses)", "Leve todos os exames, receitas e relatórios médicos na perícia", "Documente qualquer limitação que impeça o trabalho", "Consulte um advogado previdenciário antes da perícia para orientação"] },
      { type: "heading", text: "E Se o Benefício For Cortado?" },
      { type: "paragraph", text: "Se o INSS cessar seu benefício após o pente-fino, você pode recorrer administrativamente ao CRPS em até 30 dias ou ingressar com ação judicial. Um advogado especializado pode reverter a decisão apresentando provas de que a incapacidade persiste." }
    ],
    faq: [
      { question: "Aposentado por invalidez com mais de 60 anos é convocado?", answer: "Geralmente não. A Lei 13.063/2014 isenta de perícia periódica os aposentados por invalidez com mais de 60 anos, salvo suspeita de fraude." },
      { question: "O pente-fino pode aumentar meu benefício?", answer: "Não. O pente-fino é apenas revisional. Para aumento, é necessário pedir revisão específica do valor do benefício." },
      { question: "Recebo BPC e não atualizei o CadÚnico. Posso perder?", answer: "Sim. O CadÚnico deve ser atualizado a cada 2 anos. A falta de atualização pode levar à suspensão do BPC." }
    ]
  },
  {
    slug: "auxilio-reclusao-2026-quem-tem-direito",
    title: "Auxílio-Reclusão 2026: Quem Tem Direito e Como Solicitar",
    excerpt: "O auxílio-reclusão é um benefício pago aos dependentes do segurado preso. Entenda as regras atualizadas para 2026 e quem pode receber.",
    category: "Benefícios",
    tags: ["Auxílio-Reclusão", "Dependentes", "INSS", "2026"],
    readTime: "6 min",
    keyTakeaways: [
      "O auxílio-reclusão é pago aos dependentes, não ao preso",
      "O segurado deve ter renda igual ou inferior a R$ 1.819,26 em 2026",
      "É necessário comprovar a qualidade de segurado na data da prisão",
      "O benefício é de um salário mínimo (R$ 1.621,00) por família"
    ],
    image: auxReclusaoImg,
    imageAlt: "Família buscando orientação jurídica sobre auxílio-reclusão com advogado especialista em direito previdenciário",
    content: [
      { type: "paragraph", text: "O auxílio-reclusão é um dos benefícios previdenciários mais controversos e menos compreendidos. Diferente do que muitos pensam, ele não é pago ao preso, mas sim aos seus dependentes que ficam desamparados com a prisão do provedor da família." },
      { type: "heading", text: "Como Funciona o Auxílio-Reclusão" },
      { type: "paragraph", text: "O benefício é destinado aos dependentes de segurados do INSS que foram presos em regime fechado ou semiaberto. O objetivo é garantir a subsistência da família durante o período de reclusão." },
      { type: "heading", text: "Requisitos para 2026" },
      { type: "list", items: ["O segurado preso deve ter renda bruta mensal igual ou inferior a R$ 1.819,26", "O segurado deve estar em dia com as contribuições ao INSS na data da prisão", "O requerente deve ser dependente habilitado (cônjuge, filhos menores de 21 anos ou inválidos)", "A prisão deve ser em regime fechado ou semiaberto"] },
      { type: "heading", text: "Valor do Benefício" },
      { type: "paragraph", text: "Após a Reforma da Previdência de 2019, o valor do auxílio-reclusão passou a ser de um salário mínimo (R$ 1.621,00 em 2026), independentemente da remuneração anterior do segurado. O benefício é dividido entre todos os dependentes habilitados." },
      { type: "highlight", text: "O auxílio-reclusão cessa quando o preso é solto, foge, morre, ou quando o dependente perde essa condição (filho completa 21 anos, por exemplo)." },
      { type: "heading", text: "Documentação Necessária" },
      { type: "list", items: ["Certidão de nascimento ou casamento (comprovação de dependência)", "Certidão de recolhimento à prisão emitida pela autoridade carcerária", "Documentos pessoais do segurado e do dependente", "Carteira de trabalho e comprovantes de contribuição do preso"] },
      { type: "paragraph", text: "O pedido é feito pelo Meu INSS ou presencialmente na agência. A comprovação de que o segurado permanece preso deve ser renovada trimestralmente." }
    ],
    faq: [
      { question: "Preso em regime aberto recebe auxílio-reclusão?", answer: "Não. Após a reforma de 2019, o auxílio-reclusão é concedido apenas para regime fechado. O semiaberto depende de regulamentação específica." },
      { question: "Se o preso trabalhava sem carteira, a família tem direito?", answer: "Somente se ele era contribuinte individual ou mantinha qualidade de segurado. Trabalho informal sem contribuição ao INSS não gera direito." },
      { question: "O auxílio-reclusão pode ser acumulado com outros benefícios?", answer: "Depende. Não pode acumular com pensão por morte do mesmo instituidor, mas pode coexistir com benefícios próprios do dependente." }
    ]
  },
  {
    slug: "fibromialgia-aposentadoria-invalidez-inss",
    title: "Fibromialgia Aposenta? Entenda Seus Direitos no INSS",
    excerpt: "A fibromialgia pode gerar direito a auxílio-doença ou aposentadoria por invalidez. Saiba como comprovar a incapacidade e garantir seu benefício.",
    category: "Aposentadoria",
    tags: ["Fibromialgia", "Invalidez", "Incapacidade", "INSS", "Doença"],
    readTime: "7 min",
    keyTakeaways: [
      "A fibromialgia é reconhecida pelo INSS como doença incapacitante",
      "O maior desafio é comprovar a incapacidade, pois exames não detectam a doença",
      "Laudos médicos detalhados são fundamentais para o sucesso do pedido",
      "A Justiça tem sido mais favorável que o INSS em conceder benefícios por fibromialgia"
    ],
    image: fibromialgiaImg,
    imageAlt: "Mulher com fibromialgia consultando médico sobre incapacidade para fins de aposentadoria no INSS",
    content: [
      { type: "paragraph", text: "A fibromialgia é uma síndrome crônica caracterizada por dor generalizada, fadiga extrema, distúrbios do sono e alterações cognitivas. Estima-se que acometa entre 2% e 8% da população brasileira, com maior prevalência em mulheres. Apesar de não ter cura, a condição pode gerar direito a benefícios do INSS quando causa incapacidade para o trabalho." },
      { type: "heading", text: "O INSS Reconhece a Fibromialgia?" },
      { type: "paragraph", text: "Sim. A fibromialgia é classificada pelo CID-10 como M79.7 e é reconhecida como condição que pode gerar incapacidade. O problema é que a doença não aparece em exames de imagem ou laboratoriais, tornando a comprovação mais difícil na perícia do INSS." },
      { type: "heading", text: "Quais Benefícios o Fibromialgo Pode Receber?" },
      { type: "list", items: ["Auxílio por incapacidade temporária (auxílio-doença): quando a fibromialgia impede temporariamente o trabalho", "Aposentadoria por invalidez: quando a incapacidade é total e permanente, sem perspectiva de reabilitação", "BPC/LOAS: para quem não é segurado do INSS, mas comprova deficiência de longo prazo e baixa renda"] },
      { type: "heading", text: "Como Comprovar a Fibromialgia na Perícia" },
      { type: "paragraph", text: "A perícia médica do INSS avalia a funcionalidade, não apenas o diagnóstico. Por isso, é fundamental apresentar documentação que demonstre o impacto real da fibromialgia na capacidade de trabalho." },
      { type: "list", items: ["Laudos do reumatologista com descrição detalhada dos sintomas e limitações", "Relatórios de outros especialistas (neurologista, psiquiatra, ortopedista)", "Lista de medicamentos em uso contínuo e seus efeitos colaterais", "Histórico de atestados médicos e afastamentos do trabalho", "Exames complementares que descartem outras patologias"] },
      { type: "highlight", text: "Dica importante: peça ao seu médico que descreva suas limitações funcionais (não apenas o diagnóstico). Por exemplo: 'paciente incapaz de permanecer sentada por mais de 30 minutos' é mais eficaz que apenas 'diagnóstico de fibromialgia'." },
      { type: "heading", text: "Fibromialgia na Justiça" },
      { type: "paragraph", text: "Quando o INSS nega o benefício, a Justiça Federal tem sido mais sensível aos casos de fibromialgia. A perícia judicial costuma ser mais detalhada, e o juiz pode considerar fatores como idade, escolaridade e tipo de atividade exercida para avaliar a incapacidade." }
    ],
    faq: [
      { question: "Fibromialgia está na lista de doenças que dispensam carência?", answer: "Não diretamente. Mas se associada a outras condições graves (como depressão severa), pode haver dispensa de carência por via judicial." },
      { question: "Homem com fibromialgia tem os mesmos direitos?", answer: "Sim. Embora menos diagnosticados, homens com fibromialgia têm os mesmos direitos previdenciários que mulheres." },
      { question: "Fibromialgia pode ser considerada deficiência para aposentadoria PCD?", answer: "Sim, em casos graves. Se a fibromialgia causar impedimento de longo prazo e barreiras para participação social, pode ser enquadrada como deficiência." }
    ]
  },
  {
    slug: "prova-de-vida-inss-2026-como-funciona",
    title: "Prova de Vida INSS 2026: Como Funciona e Como Fazer pela Internet",
    excerpt: "A prova de vida do INSS em 2026 é majoritariamente digital. Entenda o novo processo, os prazos e como evitar a suspensão do seu benefício.",
    category: "Benefícios",
    tags: ["Prova de Vida", "INSS", "Digital", "Aposentadoria", "2026"],
    readTime: "6 min",
    keyTakeaways: [
      "A prova de vida agora é feita de forma digital e automática na maioria dos casos",
      "O INSS cruza dados de bancos, SUS e outros órgãos para confirmar a vida do beneficiário",
      "Quem não for detectado automaticamente será convocado para procedimento presencial",
      "O prazo para regularização é de 60 dias após a convocação"
    ],
    image: provaVidaImg,
    imageAlt: "Aposentado realizando prova de vida digital pelo celular no aplicativo Meu INSS",
    content: [
      { type: "paragraph", text: "A prova de vida é um procedimento obrigatório para todos os beneficiários do INSS, com o objetivo de confirmar que o titular do benefício está vivo. Em 2026, o processo foi amplamente digitalizado, reduzindo a necessidade de comparecimento presencial às agências bancárias." },
      { type: "heading", text: "Como Funciona a Prova de Vida Digital" },
      { type: "paragraph", text: "O INSS realiza a prova de vida de forma automática cruzando dados de diferentes bases governamentais. Se o beneficiário realizou qualquer atividade que comprove estar vivo — como consulta no SUS, vacinação, votação, movimentação bancária com biometria — a prova é considerada realizada." },
      { type: "heading", text: "Situações que Comprovam Automaticamente" },
      { type: "list", items: ["Movimentação bancária com biometria (digital ou facial)", "Consulta médica pelo SUS ou rede conveniada", "Atualização cadastral em órgão público", "Emissão ou renovação de documentos oficiais", "Recadastramento eleitoral ou votação"] },
      { type: "heading", text: "Quando a Prova Presencial É Necessária" },
      { type: "paragraph", text: "Se o INSS não conseguir confirmar a vida do beneficiário pelos meios digitais, ele será convocado para procedimento presencial. Nesse caso, o beneficiário deve comparecer à agência bancária onde recebe o benefício com documento de identidade com foto." },
      { type: "highlight", text: "Importante: o beneficiário que não realizar a prova de vida dentro do prazo terá o benefício suspenso. Após 6 meses de suspensão, o benefício pode ser cessado definitivamente." },
      { type: "heading", text: "Procuração para Prova de Vida" },
      { type: "paragraph", text: "Beneficiários acamados, internados ou com dificuldade de locomoção podem realizar a prova de vida por meio de procurador devidamente habilitado. Também é possível solicitar visita domiciliar ao INSS em casos de impossibilidade de comparecimento." }
    ],
    faq: [
      { question: "Quem mora no exterior precisa fazer prova de vida?", answer: "Sim. Brasileiros que recebem benefício do INSS no exterior devem apresentar atestado de vida emitido pelo consulado ou embaixada." },
      { question: "A prova de vida tem data fixa ou prazo?", answer: "O prazo é o mês de aniversário do beneficiário. Se o cruzamento automático não detectar atividade, a convocação ocorre nesse período." },
      { question: "Posso perder a aposentadoria por não fazer prova de vida?", answer: "O benefício é suspenso primeiro. Após regularização, os valores retroativos são pagos. Somente após 6 meses sem regularização há cessação." }
    ]
  },
  {
    slug: "esquizofrenia-transtornos-mentais-aposentadoria",
    title: "Esquizofrenia e Transtornos Mentais Graves: Direitos no INSS",
    excerpt: "Portadores de esquizofrenia e transtornos mentais graves têm direitos previdenciários específicos. Entenda como funciona a aposentadoria e o BPC.",
    category: "Aposentadoria",
    tags: ["Esquizofrenia", "Saúde Mental", "Invalidez", "INSS", "Transtorno Mental"],
    readTime: "8 min",
    keyTakeaways: [
      "Esquizofrenia é doença grave que dispensa carência para benefícios do INSS",
      "O beneficiário pode ter direito a auxílio-doença, aposentadoria por invalidez ou BPC",
      "A curatela pode ser necessária para que familiares solicitem o benefício",
      "A Justiça tem reconhecido direitos mesmo quando o INSS nega"
    ],
    image: esquizofreniaImg,
    imageAlt: "Consulta médica sobre transtornos mentais e direitos previdenciários com especialista em saúde mental",
    content: [
      { type: "paragraph", text: "Transtornos mentais graves como esquizofrenia, transtorno bipolar, transtorno esquizoafetivo e psicoses em geral podem gerar incapacidade total e permanente para o trabalho. O INSS reconhece essas condições e prevê benefícios específicos, incluindo a dispensa de carência quando a doença é considerada grave." },
      { type: "heading", text: "A Esquizofrenia Dispensa Carência?" },
      { type: "paragraph", text: "Sim. A alienação mental (que inclui esquizofrenia e psicoses graves) está na lista de doenças que dispensam o período de carência de 12 contribuições. Isso significa que basta ter qualidade de segurado para ter direito ao benefício." },
      { type: "heading", text: "Quais Benefícios Estão Disponíveis" },
      { type: "list", items: ["Auxílio por incapacidade temporária: durante crises agudas que impeçam o trabalho", "Aposentadoria por invalidez: quando a incapacidade é total e permanente", "Adicional de 25%: quando o paciente necessita de cuidador permanente", "BPC/LOAS: para quem não é segurado do INSS e comprova baixa renda"] },
      { type: "heading", text: "Como Comprovar a Incapacidade" },
      { type: "paragraph", text: "A documentação médica é crucial para o sucesso do pedido. Laudos psiquiátricos detalhados, relatórios de internações, prescrições de medicamentos psicotrópicos e declarações sobre o impacto funcional da doença são fundamentais." },
      { type: "highlight", text: "Importante: muitos pacientes com esquizofrenia não têm consciência da própria doença (anosognosia). Nesses casos, um familiar ou curador pode requerer o benefício em nome do paciente." },
      { type: "heading", text: "Curatela e Interdição" },
      { type: "paragraph", text: "Em casos graves em que o paciente não consegue gerir sua própria vida, pode ser necessário o processo de curatela. O curador nomeado pela Justiça pode administrar o benefício e tomar decisões legais em nome do curatelado." },
      { type: "heading", text: "Transtornos Mentais na Justiça" },
      { type: "paragraph", text: "A Justiça Federal tem sido sensível aos casos de transtornos mentais graves, reconhecendo que a perícia do INSS muitas vezes subestima a gravidade dessas condições. A perícia judicial com psiquiatra forense tende a ser mais detalhada e favorável ao segurado." }
    ],
    faq: [
      { question: "Transtorno bipolar dá direito a aposentadoria?", answer: "Sim, quando o transtorno bipolar causa incapacidade total e permanente para o trabalho, comprovada por laudo psiquiátrico detalhado." },
      { question: "Esquizofrênico pode trabalhar e manter o benefício?", answer: "Se estiver aposentado por invalidez, exercer atividade remunerada pode levar à cessação do benefício. Atividade terapêutica é exceção." },
      { question: "TDAH adulto dá direito a benefício do INSS?", answer: "O TDAH isolado raramente gera incapacidade total. Mas quando associado a comorbidades (depressão, ansiedade), pode haver direito ao benefício." }
    ]
  },
  {
    slug: "aposentadoria-por-pontos-2026-regras",
    title: "Aposentadoria por Pontos 2026: Quantos Pontos Você Precisa?",
    excerpt: "A regra de pontos exige 92 pontos para mulheres e 102 para homens em 2026. Entenda como calcular e se essa é a melhor regra para você.",
    category: "Aposentadoria",
    tags: ["Pontos", "Regra de Transição", "INSS", "2026", "Reforma"],
    readTime: "7 min",
    keyTakeaways: [
      "Em 2026: mulheres precisam de 92 pontos e homens de 102 pontos",
      "Pontos = idade + tempo de contribuição",
      "É necessário ter no mínimo 30 anos (mulher) ou 35 anos (homem) de contribuição",
      "Essa pode não ser a regra mais vantajosa — compare com as demais"
    ],
    image: aposentPontosImg,
    imageAlt: "Trabalhador calculando pontos necessários para aposentadoria por regra de transição do INSS em 2026",
    content: [
      { type: "paragraph", text: "A regra de transição por pontos é uma das mais utilizadas por segurados que buscam a aposentadoria em 2026. Ela combina idade e tempo de contribuição em uma pontuação mínima que aumenta a cada ano. Entender como funciona é essencial para planejar o melhor momento de se aposentar." },
      { type: "heading", text: "Quantos Pontos São Necessários em 2026?" },
      { type: "paragraph", text: "A pontuação mínima em 2026 é de 92 pontos para mulheres e 102 pontos para homens. Esses pontos são calculados somando a idade com o tempo de contribuição. Por exemplo: uma mulher com 57 anos e 35 anos de contribuição tem 92 pontos e pode se aposentar por essa regra." },
      { type: "heading", text: "Requisitos Completos" },
      { type: "list", items: ["Mulheres: 92 pontos + mínimo de 30 anos de contribuição", "Homens: 102 pontos + mínimo de 35 anos de contribuição", "Já estar contribuindo antes da Reforma de 2019 (13/11/2019)", "A pontuação aumenta 1 ponto por ano até atingir o limite (100 para mulheres, 105 para homens)"] },
      { type: "heading", text: "Como Calcular Seus Pontos" },
      { type: "paragraph", text: "O cálculo é simples: some sua idade atual com seu tempo total de contribuição ao INSS. Lembre-se de que tempo especial pode ser convertido com fator multiplicador, aumentando sua pontuação." },
      { type: "highlight", text: "Exemplo prático: João tem 60 anos e 42 anos de contribuição. Seus pontos: 60 + 42 = 102 pontos. Ele pode se aposentar pela regra de pontos em 2026." },
      { type: "heading", text: "Valor do Benefício pela Regra de Pontos" },
      { type: "paragraph", text: "O cálculo segue a regra geral pós-reforma: 60% da média salarial + 2% para cada ano acima de 20 anos de contribuição (homem) ou 15 anos (mulher). Quem tem muitos anos de contribuição pode alcançar 100% ou até mais da média." },
      { type: "heading", text: "Essa É a Melhor Regra Para Você?" },
      { type: "paragraph", text: "Não necessariamente. Existem outras regras de transição (pedágio de 50%, pedágio de 100%, idade progressiva) que podem ser mais vantajosas dependendo do seu perfil. Um planejamento previdenciário compara todas as opções e identifica a melhor estratégia." }
    ],
    faq: [
      { question: "A pontuação vai parar de aumentar?", answer: "Sim. O limite é 100 pontos para mulheres (previsto para 2033) e 105 pontos para homens (previsto para 2028)." },
      { question: "Tempo como MEI conta para a regra de pontos?", answer: "Sim, mas apenas se o MEI complementar a contribuição com 15% adicional. Sem complementação, o tempo conta apenas para aposentadoria por idade." },
      { question: "Posso usar tempo especial para aumentar meus pontos?", answer: "Sim. Tempo especial anterior à Reforma pode ser convertido em tempo comum com fator multiplicador (1,4 para homens, 1,2 para mulheres)." }
    ]
  },
  {
    slug: "periodo-de-graca-inss-quando-perde-qualidade",
    title: "Período de Graça do INSS: Quando Você Perde a Qualidade de Segurado?",
    excerpt: "O período de graça mantém seus direitos no INSS mesmo sem contribuir. Entenda os prazos e como não perder a proteção previdenciária.",
    category: "Benefícios",
    tags: ["Período de Graça", "Qualidade de Segurado", "INSS", "Contribuição"],
    readTime: "7 min",
    keyTakeaways: [
      "O período de graça pode variar de 3 a 36 meses dependendo da situação",
      "Durante o período de graça, você mantém todos os direitos no INSS",
      "Perder a qualidade de segurado pode impedir o acesso a benefícios",
      "É possível recuperar a qualidade de segurado com novas contribuições"
    ],
    image: periodoGracaImg,
    imageAlt: "Relógio e calendário representando o período de graça do INSS e prazos de qualidade de segurado",
    content: [
      { type: "paragraph", text: "O período de graça é o intervalo de tempo em que o segurado mantém seus direitos no INSS mesmo sem estar contribuindo. Esse conceito é crucial porque, sem a qualidade de segurado, você perde o direito a benefícios como auxílio-doença, salário-maternidade e pensão por morte." },
      { type: "heading", text: "O Que É Qualidade de Segurado?" },
      { type: "paragraph", text: "Qualidade de segurado significa estar coberto pela proteção previdenciária do INSS. Enquanto você contribui, tem essa qualidade. Quando para de contribuir, ela é mantida por um período — o chamado período de graça." },
      { type: "heading", text: "Prazos do Período de Graça" },
      { type: "list", items: ["3 meses: segurado facultativo (dona de casa, estudante)", "6 meses: segurado que recebia auxílio-doença ou auxílio-acidente", "12 meses: regra geral para quem deixou de contribuir (empregado, autônomo)", "24 meses: quem comprova mais de 120 contribuições sem interrupção que acarrete perda da qualidade", "36 meses: 24 meses + 12 meses adicionais para quem comprova desemprego involuntário"] },
      { type: "heading", text: "Como Funciona na Prática" },
      { type: "paragraph", text: "Se você foi demitido em janeiro de 2026 e tinha mais de 120 contribuições, seu período de graça vai até janeiro de 2028 (24 meses). Se comprovar que está desempregado (cadastro no SINE ou recebimento de seguro-desemprego), pode estender até janeiro de 2029 (36 meses)." },
      { type: "highlight", text: "Atenção: o período de graça vale a partir do primeiro dia do mês seguinte ao da última contribuição. A contagem inclui o 'mês seguinte ao final do período de graça' para efeitos de perda definitiva." },
      { type: "heading", text: "Consequências de Perder a Qualidade" },
      { type: "list", items: ["Perde o direito a auxílio-doença, mesmo que fique doente", "Perde o direito a salário-maternidade", "Dependentes perdem o direito à pensão por morte", "Pode ser necessário cumprir nova carência para alguns benefícios"] },
      { type: "heading", text: "Como Recuperar a Qualidade" },
      { type: "paragraph", text: "Para recuperar a qualidade de segurado, basta voltar a contribuir ao INSS. Porém, para benefícios que exigem carência, pode ser necessário cumprir 1/3 da carência exigida após a nova filiação." }
    ],
    faq: [
      { question: "Se eu perdi a qualidade de segurado, perco todo o tempo anterior?", answer: "Não. O tempo de contribuição anterior é mantido para aposentadoria. O que se perde é a proteção imediata para benefícios como auxílio-doença." },
      { question: "Preso mantém a qualidade de segurado?", answer: "Sim. Enquanto preso, o segurado mantém a qualidade de segurado por até 12 meses após a soltura, mesmo sem contribuição." },
      { question: "Doença grave durante o período de graça gera direito ao benefício?", answer: "Sim. Se a doença surgir durante o período de graça, o segurado tem direito ao auxílio-doença normalmente, sem necessidade de nova carência." }
    ]
  },
  {
    slug: "margem-consignavel-inss-2026-novas-regras",
    title: "Margem Consignável INSS 2026: Novas Regras e Como Calcular",
    excerpt: "As regras da margem consignável para aposentados mudaram em 2026. Entenda os novos limites, como calcular e como se proteger de fraudes.",
    category: "Benefícios",
    tags: ["Consignado", "Margem", "Aposentadoria", "INSS", "2026"],
    readTime: "6 min",
    keyTakeaways: [
      "A margem consignável é o valor máximo que pode ser descontado do benefício",
      "O limite para empréstimo consignado é de 35% do benefício líquido",
      "Para cartão de crédito consignado, o limite é de 5% adicional",
      "Fraudes em consignado são frequentes e exigem atenção redobrada"
    ],
    image: margemConsigImg,
    imageAlt: "Aposentado analisando margem consignável do INSS com advogado especialista em empréstimo consignado",
    content: [
      { type: "paragraph", text: "A margem consignável é o percentual do benefício do INSS que pode ser comprometido com empréstimos e cartões consignados. Em 2026, com o reajuste dos benefícios, as margens foram recalculadas, e é fundamental entender os limites para evitar comprometer demais sua renda." },
      { type: "heading", text: "Como Funciona a Margem Consignável" },
      { type: "paragraph", text: "A margem é calculada sobre o valor líquido do benefício (após descontos obrigatórios como IR e contribuição de saúde). O beneficiário pode comprometer até 45% do seu benefício líquido com consignações." },
      { type: "heading", text: "Distribuição da Margem em 2026" },
      { type: "list", items: ["35% para empréstimo consignado", "5% para cartão de crédito consignado (RMC)", "5% para cartão de benefício consignado (RCC)", "Total: até 45% do benefício líquido pode ser comprometido"] },
      { type: "heading", text: "Como Consultar Sua Margem" },
      { type: "paragraph", text: "A margem disponível pode ser consultada pelo aplicativo ou site Meu INSS, na opção 'Empréstimo Consignado'. A atualização é feita mensalmente pela Dataprev após o processamento da folha de pagamento." },
      { type: "highlight", text: "Cuidado com fraudes: nunca forneça seus dados bancários ou número de benefício por telefone. O INSS não liga para oferecer empréstimos. Desconfie de propostas não solicitadas." },
      { type: "heading", text: "Como se Proteger de Fraudes" },
      { type: "list", items: ["Bloqueie a margem consignável pelo Meu INSS se não pretende contratar empréstimo", "Nunca assine documentos sem ler atentamente", "Verifique se o banco é autorizado pelo INSS a operar consignados", "Em caso de empréstimo não autorizado, registre reclamação no Banco Central e procure um advogado"] },
      { type: "paragraph", text: "Se você foi vítima de empréstimo consignado não autorizado, é possível cancelar o contrato e receber os valores descontados de volta, com juros e correção. Um advogado especialista pode orientar sobre a melhor estratégia." }
    ],
    faq: [
      { question: "Posso bloquear minha margem para não receberem propostas?", answer: "Sim. Pelo Meu INSS ou presencialmente na agência, você pode bloquear e desbloquear a margem consignável a qualquer momento." },
      { question: "Isenção de IR aumenta a margem consignável?", answer: "Sim. Com a isenção ou redução do IR, o valor líquido do benefício aumenta e, consequentemente, a margem disponível também." },
      { question: "É possível transferir consignado de um banco para outro?", answer: "Sim, através da portabilidade de crédito consignado. O novo banco pode oferecer taxas menores e liberar parte da margem." }
    ]
  },
  {
    slug: "reajuste-aposentadoria-inss-2026-como-funciona",
    title: "Reajuste da Aposentadoria 2026: Como Funciona e Quanto Você Vai Receber",
    excerpt: "Entenda como funciona o reajuste das aposentadorias do INSS em 2026, quais os novos valores e como verificar se seu benefício foi corrigido corretamente.",
    category: "Aposentadoria",
    tags: ["Reajuste", "Aposentadoria", "INSS", "Salário Mínimo", "2026"],
    readTime: "6 min",
    keyTakeaways: [
      "O salário mínimo em 2026 é de R$ 1.621,00 e o teto é de R$ 8.475,55",
      "Quem recebe acima do mínimo teve reajuste de 3,9% (INPC)",
      "Os novos valores passaram a valer em fevereiro de 2026",
      "É importante verificar se o reajuste foi aplicado corretamente no seu benefício"
    ],
    image: reajusteImg,
    imageAlt: "Aposentado conferindo extrato de pagamento do INSS com novos valores de reajuste para 2026",
    content: [
      { type: "paragraph", text: "Todo início de ano, os benefícios do INSS passam por reajuste. Em 2026, os valores foram atualizados com base no INPC (Índice Nacional de Preços ao Consumidor), garantindo a manutenção do poder de compra dos aposentados e pensionistas. Entender como esse reajuste funciona é essencial para conferir se seu benefício está correto." },
      { type: "heading", text: "Novos Valores em 2026" },
      { type: "list", items: ["Salário mínimo: R$ 1.621,00 (ganho real acima da inflação)", "Teto do INSS: R$ 8.475,55 (reajuste de 3,9%)", "Benefícios acima do mínimo: reajuste de 3,9% baseado no INPC", "Benefícios de um salário mínimo: acompanham o reajuste do mínimo"] },
      { type: "heading", text: "Quem Recebe Um Salário Mínimo" },
      { type: "paragraph", text: "Quem recebe o piso previdenciário teve o benefício reajustado para R$ 1.621,00. Esse grupo geralmente tem reajuste maior em termos percentuais, pois o salário mínimo é corrigido com ganho real (inflação + crescimento do PIB)." },
      { type: "heading", text: "Quem Recebe Acima do Mínimo" },
      { type: "paragraph", text: "Para quem recebe acima do mínimo, o reajuste segue o INPC acumulado no ano anterior. Em 2026, o índice aplicado foi de 3,9%. Isso significa que um benefício de R$ 3.000 passou para R$ 3.117,00." },
      { type: "highlight", text: "Importante: o reajuste é aplicado sobre o valor total do benefício, e não sobre o último reajuste. Sempre confira seu extrato de pagamento no Meu INSS para verificar a correção." },
      { type: "heading", text: "Como Verificar Seu Reajuste" },
      { type: "list", items: ["Acesse o aplicativo ou site Meu INSS", "Consulte o extrato de pagamento atualizado", "Compare o valor anterior com o novo valor", "Se houver divergência, procure um advogado para análise"] },
      { type: "heading", text: "O Reajuste Pode Estar Errado?" },
      { type: "paragraph", text: "Sim. Erros no reajuste são mais comuns do que se imagina. Benefícios que tiveram revisão judicial, complementação ou desdobramento podem ter o índice aplicado incorretamente. Se você suspeita de erro, é fundamental buscar orientação especializada." }
    ],
    faq: [
      { question: "O 13º salário do INSS também é reajustado?", answer: "Sim. O 13º salário é calculado sobre o valor atualizado do benefício, refletindo o reajuste aplicado no ano." },
      { question: "Aposentados de regimes próprios (servidores) seguem o mesmo reajuste?", answer: "Não necessariamente. Servidores públicos seguem as regras do regime próprio de previdência, que pode ter índice de reajuste diferente do INSS." },
      { question: "Quando o reajuste do INSS começa a ser pago?", answer: "Os novos valores começam a ser pagos a partir de fevereiro de cada ano, seguindo o calendário de pagamentos do INSS." }
    ]
  },
  {
    slug: "pensao-por-morte-filho-maior-21-anos",
    title: "Pensão por Morte para Filho Maior de 21 Anos: Quando é Possível?",
    excerpt: "Filhos maiores de 21 anos podem receber pensão por morte em situações específicas. Entenda os requisitos legais e quando o benefício é garantido.",
    category: "Pensões",
    tags: ["Pensão por Morte", "Filhos", "Dependentes", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "Filhos inválidos ou com deficiência grave podem receber pensão por morte sem limite de idade",
      "Filhos universitários até 24 anos podem ter direito reconhecido judicialmente em alguns casos",
      "A dependência econômica deve ser comprovada quando não é presumida",
      "A invalidez ou deficiência deve ser anterior ao óbito do segurado"
    ],
    image: pensaoMorteFilhoImg,
    imageAlt: "Documentos legais sobre pensão por morte e benefícios para dependentes no INSS",
    content: [
      { type: "paragraph", text: "A regra geral do INSS estabelece que filhos recebem pensão por morte até os 21 anos de idade. Porém, existem exceções importantes que podem estender esse direito. Conhecer essas possibilidades é fundamental para famílias que perderam um ente querido." },
      { type: "heading", text: "Regra Geral: Até 21 Anos" },
      { type: "paragraph", text: "O INSS concede pensão por morte automaticamente para filhos menores de 21 anos, desde que o falecido fosse segurado. Ao completar 21 anos, o benefício é cessado. No entanto, existem exceções previstas em lei e na jurisprudência." },
      { type: "heading", text: "Exceções que Estendem o Benefício" },
      { type: "list", items: [
        "Filhos inválidos: recebem pensão por morte sem limite de idade, desde que a invalidez seja anterior ao óbito",
        "Filhos com deficiência intelectual, mental ou grave: mantêm o direito independentemente da idade",
        "Filhos universitários até 24 anos: há decisões judiciais reconhecendo o direito por analogia à legislação do imposto de renda",
        "Filhos com dependência econômica comprovada: em situações excepcionais, a Justiça pode reconhecer o direito"
      ]},
      { type: "highlight", text: "Importante: a invalidez ou deficiência deve existir ANTES do falecimento do segurado. Deficiência superveniente ao óbito não gera direito à pensão." },
      { type: "heading", text: "Como Comprovar o Direito" },
      { type: "list", items: [
        "Laudos médicos que comprovem a invalidez ou deficiência anterior ao óbito",
        "Documentos que demonstrem dependência econômica",
        "Comprovante de matrícula universitária (para filhos estudantes)",
        "Certidão de óbito do segurado e documentos de vínculo familiar"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você é filho maior de 21 anos e perdeu um genitor segurado do INSS, pode ter direito à pensão por morte em situações específicas. A Cantarelli Advocacia pode analisar seu caso e identificar a melhor estratégia jurídica." }
    ],
    faq: [
      { question: "Filho adotivo tem os mesmos direitos na pensão por morte?", answer: "Sim. Filhos adotivos têm os mesmos direitos que filhos biológicos, incluindo a pensão por morte." },
      { question: "A emancipação do filho encerra a pensão por morte?", answer: "Sim. A emancipação antes dos 21 anos encerra o direito à pensão, exceto nos casos de invalidez ou deficiência." },
      { question: "Enteado pode receber pensão por morte?", answer: "Sim, desde que comprovada a dependência econômica e que não recebia alimentos do pai ou mãe biológicos." }
    ]
  },
  {
    slug: "pensao-por-morte-uniao-estavel-como-comprovar",
    title: "Pensão por Morte em União Estável: Como Comprovar e Garantir o Benefício",
    excerpt: "Companheiros em união estável têm direito à pensão por morte, mas a comprovação pode ser um desafio. Saiba quais documentos são aceitos e como garantir seu direito.",
    category: "Pensões",
    tags: ["Pensão por Morte", "União Estável", "Companheiro", "INSS"],
    readTime: "7 min",
    keyTakeaways: [
      "A união estável gera os mesmos direitos que o casamento para fins de pensão por morte",
      "A comprovação pode ser feita com diversos documentos, mesmo sem escritura pública",
      "União estável homoafetiva tem os mesmos direitos reconhecidos pelo STF",
      "Não é necessário tempo mínimo de convivência para união estável"
    ],
    image: pensaoUniaoEstavelImg,
    imageAlt: "Documentos de comprovação de união estável para pensão por morte no INSS",
    content: [
      { type: "paragraph", text: "A união estável é reconhecida pela Constituição Federal como entidade familiar, gerando os mesmos direitos que o casamento para fins previdenciários. No entanto, a comprovação da união estável perante o INSS pode ser um desafio, especialmente quando não há documentos formais." },
      { type: "heading", text: "O Que Caracteriza a União Estável" },
      { type: "paragraph", text: "A união estável é a convivência pública, contínua e duradoura entre duas pessoas com o objetivo de constituir família. Não é necessário morar junto, ter filhos ou ter tempo mínimo de convivência." },
      { type: "heading", text: "Documentos Aceitos pelo INSS" },
      { type: "list", items: [
        "Escritura pública de declaração de união estável",
        "Contrato de aluguel ou financiamento em nome dos dois",
        "Conta bancária conjunta",
        "Plano de saúde como dependente",
        "Declaração de imposto de renda como dependente",
        "Fotos do casal em eventos familiares",
        "Certidão de nascimento de filhos em comum"
      ]},
      { type: "highlight", text: "Dica: quanto mais documentos você reunir, maior a chance de aprovação. O INSS exige início de prova material, que pode ser complementada por prova testemunhal." },
      { type: "heading", text: "União Estável Homoafetiva" },
      { type: "paragraph", text: "Desde a decisão do STF em 2011, a união estável homoafetiva tem os mesmos direitos que a heteroafetiva. O INSS deve conceder pensão por morte ao companheiro do mesmo sexo nos mesmos termos." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você vivia em união estável e perdeu seu companheiro, tem direito à pensão por morte. A Cantarelli Advocacia pode ajudar na comprovação e garantir que seus direitos sejam respeitados." }
    ],
    faq: [
      { question: "Posso receber pensão por morte mesmo sem ter morado junto?", answer: "Sim. A coabitação não é requisito obrigatório para a união estável, conforme entendimento consolidado dos tribunais." },
      { question: "Ex-companheiro que recebia pensão alimentícia tem direito à pensão por morte?", answer: "Sim. O ex-companheiro que recebia alimentos pode requerer a pensão, comprovando a dependência econômica." },
      { question: "É possível dividir a pensão entre cônjuge e companheiro(a)?", answer: "Sim. Se o falecido era casado e mantinha união estável simultaneamente, a pensão pode ser dividida entre os dependentes." }
    ]
  },
  {
    slug: "bpc-loas-crianca-autismo-como-solicitar",
    title: "BPC/LOAS para Criança com Autismo: Como Solicitar e Garantir o Benefício",
    excerpt: "Crianças com Transtorno do Espectro Autista (TEA) podem ter direito ao BPC/LOAS. Entenda os requisitos de renda, a avaliação e como dar entrada no pedido.",
    category: "Autismo",
    tags: ["BPC", "LOAS", "Autismo", "TEA", "Criança"],
    readTime: "8 min",
    keyTakeaways: [
      "Crianças com autismo podem receber um salário mínimo mensal (R$ 1.621,00 em 2026) pelo BPC/LOAS",
      "A renda familiar per capita deve ser inferior a 1/4 do salário mínimo (R$ 405,25)",
      "A avaliação é biopsicossocial, considerando as barreiras enfrentadas pela criança",
      "O cadastro no CadÚnico é obrigatório antes de solicitar o benefício"
    ],
    image: bpcCriancaAutismoImg,
    imageAlt: "Peças de quebra-cabeça coloridas representando autismo ao lado de documentos legais do BPC LOAS",
    content: [
      { type: "paragraph", text: "O Benefício de Prestação Continuada (BPC/LOAS) é um direito constitucional que garante um salário mínimo mensal para pessoas com deficiência de baixa renda, incluindo crianças com Transtorno do Espectro Autista (TEA). Em 2026, o valor é de R$ 1.621,00." },
      { type: "heading", text: "Requisitos para o BPC/LOAS" },
      { type: "list", items: [
        "A criança deve ter diagnóstico de TEA (CID F84)",
        "A renda familiar per capita deve ser inferior a 1/4 do salário mínimo (R$ 405,25 em 2026)",
        "Inscrição no CadÚnico atualizada",
        "A deficiência deve impor barreiras de longo prazo (mínimo 2 anos)"
      ]},
      { type: "heading", text: "Avaliação Biopsicossocial" },
      { type: "paragraph", text: "O INSS realiza uma avaliação com perito médico e assistente social. Não basta o diagnóstico — é avaliado como o autismo impacta a participação social, escolar e familiar da criança. Laudos detalhados fazem toda a diferença." },
      { type: "highlight", text: "Atenção: mesmo que a renda familiar ultrapasse levemente o limite, a Justiça frequentemente flexibiliza o critério quando há gastos elevados com tratamentos, medicamentos e terapias." },
      { type: "heading", text: "Documentação Necessária" },
      { type: "list", items: [
        "Laudo médico com CID F84 e descrição funcional",
        "Relatórios de terapeutas (fonoaudiólogo, terapeuta ocupacional, psicólogo)",
        "Comprovantes de renda de todos os membros da família",
        "Comprovante de inscrição no CadÚnico",
        "Comprovantes de gastos com tratamentos e medicamentos"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O BPC/LOAS é um direito fundamental para famílias de crianças com autismo. A Cantarelli Advocacia pode orientar sobre a documentação adequada e acompanhar todo o processo para garantir a concessão do benefício." }
    ],
    faq: [
      { question: "A criança precisa estar na escola para receber o BPC?", answer: "Não é obrigatório estar matriculada, mas a frequência escolar é um fator positivo na avaliação social." },
      { question: "O BPC para criança autista é permanente?", answer: "Não. O benefício é revisado periodicamente (a cada 2 anos). Se as condições mudarem, pode ser cessado." },
      { question: "A família pode receber mais de um BPC?", answer: "Sim. Se houver mais de uma pessoa com deficiência na família, cada uma pode receber seu próprio BPC, e o valor de um BPC não entra no cálculo de renda do outro." }
    ]
  },
  {
    slug: "autismo-adulto-direitos-previdenciarios-2026",
    title: "Autismo no Adulto: Direitos Previdenciários e Benefícios Disponíveis em 2026",
    excerpt: "Adultos com Transtorno do Espectro Autista têm direitos previdenciários específicos, desde aposentadoria com tempo reduzido até BPC/LOAS. Conheça todas as possibilidades.",
    category: "Autismo",
    tags: ["Autismo", "TEA", "Adulto", "Aposentadoria", "BPC"],
    readTime: "8 min",
    keyTakeaways: [
      "Adultos com TEA podem se aposentar com tempo de contribuição reduzido pela LC 142/2013",
      "O BPC/LOAS é uma alternativa para autistas que não contribuíram ao INSS",
      "O diagnóstico tardio não impede o acesso aos benefícios previdenciários",
      "A Tomada de Decisão Apoiada preserva a autonomia do autista adulto"
    ],
    image: autismoAdultoDireitosImg,
    imageAlt: "Fita de conscientização do autismo ao lado de pasta profissional e documentos legais",
    content: [
      { type: "paragraph", text: "O número de diagnósticos de autismo em adultos tem crescido significativamente nos últimos anos, especialmente entre pessoas com TEA nível 1 (antigo Asperger). Muitos desses adultos desconhecem seus direitos previdenciários, que incluem aposentadoria com requisitos reduzidos e benefícios assistenciais." },
      { type: "heading", text: "Aposentadoria da Pessoa com Deficiência" },
      { type: "paragraph", text: "A Lei Complementar 142/2013 garante que pessoas com deficiência, incluindo autistas, possam se aposentar com tempo de contribuição reduzido. O tempo varia conforme o grau de deficiência avaliado pela perícia biopsicossocial." },
      { type: "list", items: [
        "Deficiência grave: 25 anos (homem) / 20 anos (mulher)",
        "Deficiência moderada: 29 anos (homem) / 24 anos (mulher)",
        "Deficiência leve: 33 anos (homem) / 28 anos (mulher)",
        "Por idade: 60 anos (homem) / 55 anos (mulher) com 15 anos de contribuição"
      ]},
      { type: "heading", text: "BPC/LOAS para Autista Adulto" },
      { type: "paragraph", text: "Autistas adultos que não contribuíram ao INSS ou que estão em situação de vulnerabilidade econômica podem ter direito ao BPC/LOAS, no valor de R$ 1.621,00 em 2026. É necessário comprovar renda familiar per capita inferior a 1/4 do salário mínimo." },
      { type: "highlight", text: "Diagnóstico tardio: mesmo que o diagnóstico de TEA tenha sido feito na vida adulta, é possível comprovar que a condição existia desde a infância para fins de aposentadoria PCD." },
      { type: "heading", text: "Tomada de Decisão Apoiada" },
      { type: "paragraph", text: "Diferente da curatela, a Tomada de Decisão Apoiada permite que o autista adulto mantenha sua autonomia enquanto recebe suporte para decisões complexas. É uma alternativa menos restritiva e mais respeitosa à capacidade do indivíduo." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Adultos com autismo têm direitos previdenciários importantes que frequentemente são desconhecidos. A Cantarelli Advocacia possui experiência em casos de TEA e pode orientar sobre a melhor estratégia para cada situação." }
    ],
    faq: [
      { question: "Autista com Asperger tem direito à aposentadoria PCD?", answer: "Sim. O TEA nível 1 (antigo Asperger) é reconhecido como deficiência e pode garantir aposentadoria com tempo reduzido." },
      { question: "É possível acumular BPC com salário de trabalho?", answer: "Não. O BPC não pode ser acumulado com atividade remunerada, exceto na condição de aprendiz por até 2 anos." },
      { question: "O autista adulto precisa de curatela para solicitar benefícios?", answer: "Não necessariamente. Muitos autistas adultos podem exercer seus direitos de forma autônoma ou com Tomada de Decisão Apoiada." }
    ]
  },
  {
    slug: "autismo-curatela-tutela-direitos-previdenciarios",
    title: "Autismo, Curatela e Tutela: Como Proteger os Direitos Previdenciários",
    excerpt: "Entenda as diferenças entre curatela, tutela e tomada de decisão apoiada para pessoas com autismo e como cada uma impacta os benefícios previdenciários.",
    category: "Autismo",
    tags: ["Autismo", "Curatela", "Tutela", "TEA", "Direitos"],
    readTime: "7 min",
    keyTakeaways: [
      "A curatela para autistas deve ser parcial, preservando direitos existenciais",
      "A Tomada de Decisão Apoiada é a alternativa preferível e menos restritiva",
      "O curador pode representar o curatelado perante o INSS",
      "A Lei Brasileira de Inclusão (Lei 13.146/2015) priorizou a autonomia da pessoa com deficiência"
    ],
    image: autismoCuratelaImg,
    imageAlt: "Peças de quebra-cabeça do autismo ao lado de documentos de curatela e martelo de juiz",
    content: [
      { type: "paragraph", text: "A questão da capacidade civil de pessoas com autismo é delicada e envolve um equilíbrio entre proteção e autonomia. A legislação brasileira evoluiu significativamente com a Lei Brasileira de Inclusão (2015), priorizando a capacidade plena e oferecendo instrumentos de apoio quando necessário." },
      { type: "heading", text: "Curatela para Pessoas com Autismo" },
      { type: "paragraph", text: "A curatela é uma medida judicial que nomeia um responsável para administrar os interesses de pessoa que não pode fazê-lo sozinha. Para autistas, deve ser sempre parcial, limitada a atos patrimoniais e negociais, preservando direitos existenciais como casamento, voto e trabalho." },
      { type: "heading", text: "Tomada de Decisão Apoiada" },
      { type: "paragraph", text: "Instituída pelo Estatuto da Pessoa com Deficiência, a Tomada de Decisão Apoiada permite que a pessoa escolha dois apoiadores de confiança para auxiliá-la em decisões sobre atos da vida civil, sem perder sua capacidade." },
      { type: "highlight", text: "A Tomada de Decisão Apoiada é sempre preferível à curatela, pois preserva a autonomia e a dignidade da pessoa com autismo." },
      { type: "heading", text: "Impacto nos Benefícios Previdenciários" },
      { type: "list", items: [
        "O curador pode requerer e administrar benefícios previdenciários em nome do curatelado",
        "A pensão por morte de segurado autista curatelado é requerida pelo curador",
        "O BPC/LOAS pode ser solicitado pelo representante legal",
        "A aposentadoria PCD pode ser requerida pelo próprio autista ou seu representante"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "A proteção dos direitos previdenciários de pessoas com autismo exige conhecimento tanto da legislação previdenciária quanto do direito das pessoas com deficiência. A Cantarelli Advocacia pode orientar famílias sobre a melhor forma de proteger esses direitos." }
    ],
    faq: [
      { question: "Autista com curatela pode trabalhar?", answer: "Sim. A curatela não impede o exercício de atividade laborativa. A pessoa curatelada mantém o direito ao trabalho." },
      { question: "A curatela é definitiva?", answer: "Não. A curatela pode ser revista a qualquer momento, podendo ser extinta se a pessoa demonstrar capacidade para administrar seus interesses." },
      { question: "Quem pode ser curador de pessoa com autismo?", answer: "Preferencialmente cônjuge, pais ou parentes próximos. O juiz avalia quem melhor atende aos interesses do curatelado." }
    ]
  },
  {
    slug: "bpc-loas-autismo-adulto-como-garantir",
    title: "BPC/LOAS para Adulto com Autismo: Requisitos e Como Garantir o Benefício",
    excerpt: "Adultos com TEA que não contribuíram ao INSS podem ter direito ao BPC/LOAS. Entenda os critérios de renda, a avaliação e como superar o indeferimento.",
    category: "Autismo",
    tags: ["BPC", "LOAS", "Autismo", "TEA", "Adulto"],
    readTime: "7 min",
    keyTakeaways: [
      "O BPC garante R$ 1.621,00 mensais para autistas adultos de baixa renda",
      "A renda familiar per capita deve ser inferior a R$ 405,25 em 2026",
      "A Justiça frequentemente flexibiliza o critério de renda quando há gastos com tratamentos",
      "O benefício não é aposentadoria e não gera 13º salário"
    ],
    image: autismoBpcAdultoImg,
    imageAlt: "Símbolo do infinito colorido representando neurodiversidade ao lado de documentos do BPC LOAS",
    content: [
      { type: "paragraph", text: "O BPC/LOAS é uma importante rede de proteção social para adultos com autismo que não possuem meios de prover sua subsistência. Diferente da aposentadoria, não exige contribuições ao INSS, bastando comprovar a deficiência e a vulnerabilidade socioeconômica." },
      { type: "heading", text: "Requisitos do BPC para Autista Adulto" },
      { type: "list", items: [
        "Diagnóstico de TEA com impedimento de longo prazo (mínimo 2 anos)",
        "Renda familiar per capita inferior a 1/4 do salário mínimo",
        "Inscrição atualizada no CadÚnico",
        "Residir no Brasil"
      ]},
      { type: "heading", text: "Quando a Renda Ultrapassa o Limite" },
      { type: "paragraph", text: "A jurisprudência consolidada permite a flexibilização do critério de renda quando a família demonstra gastos elevados com medicamentos, terapias e acompanhamentos médicos que comprometem a renda disponível." },
      { type: "highlight", text: "Importante: o valor de outro BPC recebido por membro da família (como BPC de idoso) não entra no cálculo da renda per capita familiar." },
      { type: "heading", text: "O Que Fazer se o BPC For Negado" },
      { type: "list", items: [
        "Recurso administrativo ao Conselho de Recursos (prazo de 30 dias)",
        "Novo requerimento com documentação complementar",
        "Ação judicial com pedido de tutela antecipada",
        "Atualização do CadÚnico com informações corretas sobre despesas"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O BPC/LOAS é um direito fundamental de adultos com autismo em situação de vulnerabilidade. A Cantarelli Advocacia pode avaliar seu caso e orientar sobre a melhor estratégia para obter o benefício." }
    ],
    faq: [
      { question: "Autista que recebe BPC pode trabalhar?", answer: "O BPC é suspenso durante o exercício de atividade remunerada, mas pode ser retomado sem nova perícia em caso de demissão, dentro de prazo legal." },
      { question: "O BPC gera direito a pensão por morte?", answer: "Não. O BPC é pessoal e intransferível, não gerando pensão por morte para dependentes." },
      { question: "Autista que mora sozinho pode receber BPC?", answer: "Sim. A composição familiar para o BPC considera quem mora na mesma residência. Se o autista mora sozinho, apenas sua renda é considerada." }
    ]
  },
  {
    slug: "engenheiro-mecanico-aposentadoria-especial-tempo-especial",
    title: "Engenheiro Mecânico: Direito à Aposentadoria Especial e Conversão de Tempo Especial",
    excerpt: "Engenheiros mecânicos que trabalharam até 28/04/1995 têm direito à aposentadoria especial ou à conversão de tempo especial em comum. Entenda o enquadramento por categoria profissional.",
    category: "Aposentadoria Especial",
    tags: ["Engenheiro Mecânico", "Aposentadoria Especial", "Tempo Especial", "Conversão"],
    readTime: "9 min",
    keyTakeaways: [
      "Até 28/04/1995, o enquadramento como atividade especial era automático por categoria profissional",
      "Engenheiros mecânicos são enquadrados por analogia a engenheiros/metalúrgicos nos Decretos 53.831/64 e 83.080/79",
      "Após 28/04/1995, é necessário comprovar exposição a agentes nocivos por PPP e LTCAT",
      "A conversão de tempo especial em comum permite antecipar a aposentadoria em anos"
    ],
    image: engenheiroMecanicoImg,
    imageAlt: "Ferramentas de engenharia mecânica, engrenagens e capacete de segurança ao lado de documentos de aposentadoria",
    content: [
      { type: "paragraph", text: "A aposentadoria especial é um benefício concedido a trabalhadores expostos a agentes nocivos à saúde ou à integridade física. Para engenheiros mecânicos, o enquadramento por categoria profissional até 28/04/1995 representa uma oportunidade significativa de antecipar a aposentadoria ou aumentar o tempo de contribuição." },
      { type: "heading", text: "Enquadramento por Categoria Profissional até 28/04/1995" },
      { type: "paragraph", text: "Até a publicação da Lei 9.032/1995 (em 28/04/1995), o reconhecimento de atividade especial era feito pelo enquadramento por categoria profissional, sem necessidade de comprovar exposição individual a agentes nocivos. Bastava exercer a profissão listada nos Decretos 53.831/64 e 83.080/79." },
      { type: "highlight", text: "Os engenheiros mecânicos são enquadrados por analogia aos engenheiros e metalúrgicos previstos nos anexos dos Decretos 53.831/64 (código 2.1.1) e 83.080/79 (Anexo II). O enquadramento é automático, bastando comprovar o exercício da profissão." },
      { type: "heading", text: "Após 28/04/1995: Mudança nas Regras" },
      { type: "paragraph", text: "Após 28 de abril de 1995, o enquadramento por categoria profissional foi extinto. A partir dessa data, o engenheiro mecânico precisa comprovar a efetiva exposição a agentes nocivos por meio de documentos técnicos:" },
      { type: "list", items: [
        "PPP (Perfil Profissiográfico Previdenciário): documento emitido pela empresa com o histórico de exposição",
        "LTCAT (Laudo Técnico de Condições Ambientais do Trabalho): laudo elaborado por engenheiro de segurança ou médico do trabalho",
        "Agentes nocivos comuns para engenheiros mecânicos: ruído acima de 85 dB, calor, vibração, óleos minerais, solventes químicos",
        "A partir de 2003 (Decreto 4.882), apenas PPP com referência ao LTCAT é suficiente"
      ]},
      { type: "heading", text: "Conversão de Tempo Especial em Comum" },
      { type: "paragraph", text: "Mesmo que o engenheiro mecânico não tenha os 25 anos de atividade especial necessários para a aposentadoria especial, é possível converter o tempo especial em tempo comum com o fator de multiplicação 1,4 (homens) ou 1,2 (mulheres)." },
      { type: "list", items: [
        "Exemplo: 10 anos de tempo especial equivalem a 14 anos de tempo comum (homem)",
        "A conversão pode antecipar a aposentadoria em vários anos",
        "É válida apenas para períodos anteriores à Reforma da Previdência (13/11/2019)",
        "A conversão vale para atividades exercidas tanto antes quanto depois de 28/04/1995"
      ]},
      { type: "heading", text: "Documentos Necessários" },
      { type: "list", items: [
        "Carteira de trabalho com registro como engenheiro mecânico",
        "Diploma ou registro no CREA",
        "PPP das empresas onde trabalhou (para períodos após 28/04/1995)",
        "LTCAT (se disponível)",
        "Formulários antigos: SB-40, DSS-8030, DIRBEN-8030 (para períodos anteriores)"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Engenheiros mecânicos que trabalharam antes de 28/04/1995 têm um direito valioso ao reconhecimento automático de tempo especial. Mesmo para períodos posteriores, a comprovação de exposição a agentes nocivos pode garantir a aposentadoria especial ou a conversão de tempo. A Cantarelli Advocacia pode analisar seu histórico profissional e identificar a melhor estratégia." }
    ],
    faq: [
      { question: "Engenheiro mecânico que trabalhou em escritório tem direito à aposentadoria especial?", answer: "Até 28/04/1995, sim, pelo enquadramento por categoria. Após essa data, apenas se comprovar exposição efetiva a agentes nocivos no ambiente de trabalho." },
      { question: "A empresa fechou e não consigo o PPP. O que fazer?", answer: "É possível recorrer à Justiça do Trabalho, utilizar laudos técnicos de empresas similares (perícia por similaridade) ou outros documentos que comprovem a exposição." },
      { question: "O enquadramento por categoria profissional ainda pode ser usado em 2026?", answer: "Sim. O direito adquirido garante que períodos trabalhados até 28/04/1995 podem ser enquadrados pela categoria profissional, independentemente de quando o pedido de aposentadoria é feito." }
    ]
  },
  {
    slug: "bpc-loas-idoso-2026-como-solicitar",
    title: "BPC/LOAS para Idoso em 2026: Requisitos Atualizados e Como Solicitar",
    excerpt: "Idosos com 65 anos ou mais e baixa renda têm direito ao BPC/LOAS. Entenda os requisitos atualizados, como dar entrada e o que fazer se o pedido for negado.",
    category: "BPC/LOAS",
    tags: ["BPC", "LOAS", "Idoso", "Baixa Renda", "2026"],
    readTime: "7 min",
    keyTakeaways: [
      "Idosos com 65 anos ou mais e renda per capita inferior a R$ 405,25 têm direito ao BPC",
      "O BPC para idoso não exige contribuição prévia ao INSS",
      "Inscrição no CadÚnico é obrigatória antes de solicitar",
      "O valor do BPC em 2026 é de R$ 1.621,00 (um salário mínimo)"
    ],
    image: bpcIdosoSolicitarImg,
    imageAlt: "Documentos de aposentadoria e óculos de leitura sobre mesa de escritório para solicitação de BPC idoso",
    content: [
      { type: "paragraph", text: "O BPC/LOAS para idoso é um benefício assistencial que garante um salário mínimo mensal para pessoas com 65 anos ou mais que não possuem meios de prover sua subsistência. Em 2026, com o salário mínimo de R$ 1.621,00, o critério de renda também foi atualizado." },
      { type: "heading", text: "Requisitos em 2026" },
      { type: "list", items: [
        "Idade mínima: 65 anos",
        "Renda familiar per capita inferior a 1/4 do salário mínimo (R$ 405,25)",
        "Inscrição atualizada no CadÚnico",
        "Residir no Brasil",
        "Não receber outro benefício previdenciário ou assistencial (exceto assistência médica e pensão especial)"
      ]},
      { type: "heading", text: "Como Calcular a Renda Per Capita" },
      { type: "paragraph", text: "A renda per capita é calculada somando todos os rendimentos dos membros da família que moram na mesma casa e dividindo pelo número de pessoas. Importante: o BPC recebido por outro idoso da família NÃO entra nesse cálculo." },
      { type: "highlight", text: "Dica: gastos com medicamentos, tratamentos médicos e despesas essenciais podem ser usados judicialmente para flexibilizar o critério de renda, quando a família demonstra miserabilidade mesmo com renda acima do limite." },
      { type: "heading", text: "Passo a Passo para Solicitar" },
      { type: "list", items: [
        "1. Faça a inscrição no CadÚnico no CRAS mais próximo",
        "2. Reúna documentos pessoais e comprovantes de renda de todos da família",
        "3. Agende o atendimento pelo telefone 135 ou pelo Meu INSS",
        "4. Compareça à perícia social se convocado",
        "5. Acompanhe o andamento pelo Meu INSS"
      ]},
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O BPC/LOAS para idoso é um direito constitucional que garante dignidade na terceira idade. Se você ou um familiar se enquadra nos requisitos, não deixe de solicitar. A Cantarelli Advocacia pode ajudar em todo o processo." }
    ],
    faq: [
      { question: "O BPC para idoso é vitalício?", answer: "O BPC é mantido enquanto as condições de elegibilidade forem atendidas. Revisões periódicas verificam se o beneficiário ainda se enquadra." },
      { question: "Idoso que mora com filho que trabalha perde o direito ao BPC?", answer: "Depende. Se a renda per capita familiar ultrapassar R$ 405,25, o BPC pode ser negado. Porém, a Justiça pode flexibilizar o critério." },
      { question: "O BPC gera 13º salário?", answer: "Não. O BPC não é aposentadoria e não gera 13º salário, embora haja projetos de lei para incluir esse direito." }
    ]
  },
  {
    slug: "revisao-da-vida-toda-2026-entenda",
    title: "Revisão da Vida Toda em 2026: O Que Mudou e Quem Ainda Tem Direito",
    excerpt: "A revisão da vida toda permite incluir contribuições anteriores a julho de 1994 no cálculo do benefício. Entenda o cenário atual e se você pode se beneficiar.",
    category: "Revisão",
    tags: ["Revisão", "Vida Toda", "STF", "INSS", "Cálculo"],
    readTime: "8 min",
    keyTakeaways: [
      "A revisão da vida toda inclui todas as contribuições no cálculo, inclusive as anteriores a julho/1994",
      "O STF julgou constitucional a tese, mas existem critérios de elegibilidade",
      "O prazo decadencial de 10 anos deve ser observado para cada beneficiário",
      "Nem todos os aposentados se beneficiam — é necessário fazer a simulação"
    ],
    image: revisaoVidaTodaImg,
    imageAlt: "Lupa sobre documentos financeiros e cálculos de revisão de aposentadoria do INSS",
    content: [
      { type: "paragraph", text: "A revisão da vida toda é uma das teses revisionais mais importantes do direito previdenciário brasileiro. Ela permite que o segurado inclua no cálculo do benefício todas as contribuições realizadas ao longo da vida, inclusive aquelas anteriores a julho de 1994 — que normalmente são descartadas pela regra de transição." },
      { type: "heading", text: "O Que é a Revisão da Vida Toda" },
      { type: "paragraph", text: "A Lei 9.876/1999 criou uma regra de transição que considera apenas as contribuições a partir de julho de 1994 para o cálculo dos benefícios. A revisão da vida toda questiona essa regra, permitindo o uso de TODAS as contribuições quando isso for mais vantajoso para o segurado." },
      { type: "heading", text: "Quem Pode se Beneficiar" },
      { type: "list", items: [
        "Aposentados que tinham salários altos antes de julho de 1994",
        "Segurados que tiveram redução salarial após 1994",
        "Benefícios concedidos após a Lei 9.876/1999 (novembro de 1999)",
        "Aposentados dentro do prazo decadencial de 10 anos da concessão"
      ]},
      { type: "highlight", text: "Atenção: nem sempre a revisão da vida toda é vantajosa. Se as contribuições anteriores a 1994 eram baixas, o recálculo pode reduzir o benefício. Sempre faça a simulação antes de entrar com o pedido." },
      { type: "heading", text: "Prazo para Solicitar" },
      { type: "paragraph", text: "O prazo decadencial para revisões é de 10 anos a contar da data de concessão do benefício (primeiro pagamento). Quem se aposentou há mais de 10 anos pode ter perdido o direito. Porém, há discussões jurídicas sobre o início da contagem desse prazo." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "A revisão da vida toda pode significar um aumento significativo no valor da aposentadoria. Mas é essencial fazer a simulação antes de ingressar com a ação. A Cantarelli Advocacia realiza o cálculo completo e orienta sobre a viabilidade da revisão para cada caso." }
    ],
    faq: [
      { question: "Pensionistas também podem pedir a revisão da vida toda?", answer: "Sim. Se o benefício originário (aposentadoria do falecido) pode ser revisado, a pensão derivada também será recalculada." },
      { question: "Quem recebe um salário mínimo pode se beneficiar?", answer: "Se as contribuições anteriores a 1994 eram maiores, sim. Se sempre contribuiu sobre o mínimo, provavelmente não haverá diferença." },
      { question: "A revisão é feita administrativamente ou na Justiça?", answer: "O INSS não faz essa revisão administrativamente. É necessário ingressar com ação judicial para obter o recálculo." }
    ]
  },
  {
    slug: "planejamento-previdenciario-quando-continuar-contribuindo",
    title: "Quando Vale a Pena Continuar Contribuindo ao INSS? Planejamento Estratégico",
    excerpt: "Descubra se vale a pena continuar pagando o INSS para aumentar o valor da aposentadoria ou se é melhor dar entrada agora. Análise estratégica para 2026.",
    category: "Planejamento",
    tags: ["Planejamento", "Contribuição", "INSS", "Estratégia", "2026"],
    readTime: "7 min",
    keyTakeaways: [
      "Cada ano adicional de contribuição pode aumentar o benefício em 2%",
      "O custo de oportunidade de contribuir mais deve ser comparado ao ganho no benefício",
      "Em alguns casos, contribuir por mais 2-3 anos pode mudar a regra de transição aplicável",
      "O planejamento previdenciário profissional evita decisões que custam milhares de reais"
    ],
    image: planejamentoContinuarImg,
    imageAlt: "Caderno de planejamento financeiro com gráficos de aposentadoria e calculadora",
    content: [
      { type: "paragraph", text: "Uma das decisões mais importantes na vida previdenciária é determinar o momento ideal para requerer a aposentadoria. Parar de contribuir cedo demais pode significar um benefício menor para o resto da vida, enquanto contribuir por tempo desnecessário representa dinheiro desperdiçado." },
      { type: "heading", text: "Como Funciona o Cálculo do Benefício" },
      { type: "paragraph", text: "Após a Reforma da Previdência, o cálculo da aposentadoria considera 60% da média salarial + 2% por ano que exceder 20 anos de contribuição (homens) ou 15 anos (mulheres). Isso significa que cada ano adicional pode aumentar significativamente o valor." },
      { type: "heading", text: "Cenários em Que Vale Continuar" },
      { type: "list", items: [
        "Quando faltam poucos meses para mudar de faixa percentual",
        "Quando contribuir mais permite usar uma regra de transição mais vantajosa",
        "Quando o valor do benefício atual está muito abaixo do desejado",
        "Quando há atividade especial que pode ser convertida"
      ]},
      { type: "heading", text: "Cenários em Que é Melhor Parar" },
      { type: "list", items: [
        "Quando já atingiu 100% da média salarial",
        "Quando o custo da contribuição é maior que o ganho proporcional no benefício",
        "Quando problemas de saúde comprometem a capacidade de trabalho",
        "Quando o benefício por outra regra já é mais vantajoso"
      ]},
      { type: "highlight", text: "Atenção: essa análise é individualizada e depende de múltiplos fatores como idade, tempo de contribuição, valores das contribuições e regras de transição aplicáveis. Jamais tome essa decisão sem uma simulação profissional." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "O momento certo de se aposentar é uma decisão estratégica que impacta toda a sua vida financeira. A Cantarelli Advocacia realiza simulações completas para identificar o cenário mais vantajoso para cada segurado." }
    ],
    faq: [
      { question: "Posso parar de contribuir e voltar depois?", answer: "Sim. Você pode interromper e retomar as contribuições a qualquer momento, mas pode perder a qualidade de segurado para outros benefícios durante o período sem contribuição." },
      { question: "Contribuir sobre valor maior no final aumenta o benefício?", answer: "Parcialmente. A média considera todas as contribuições desde 1994, então contribuições maiores nos últimos anos ajudam, mas o impacto depende do histórico completo." },
      { question: "O INSS avisa quando já posso me aposentar?", answer: "Não. É responsabilidade do segurado acompanhar seus requisitos. O Meu INSS oferece simulações, mas análise profissional é mais confiável." }
    ]
  },
  {
    slug: "contribuicoes-inss-em-atraso-como-regularizar",
    title: "Contribuições do INSS em Atraso: Como Regularizar e Garantir Sua Aposentadoria",
    excerpt: "Tem períodos sem contribuição ao INSS? Saiba como regularizar pagamentos em atraso, quais períodos podem ser recuperados e quanto isso pode impactar sua aposentadoria.",
    category: "Contribuição",
    tags: ["Contribuição", "Atraso", "Regularização", "INSS", "GPS"],
    readTime: "7 min",
    keyTakeaways: [
      "Contribuições em atraso podem ser pagas para completar o tempo de contribuição",
      "Atrasos superiores a 5 anos exigem comprovação de atividade no período",
      "O valor do recolhimento em atraso inclui juros e multa calculados pelo INSS",
      "MEI e autônomo são as categorias que mais precisam de regularização"
    ],
    image: contribuicoesAtrasoImg,
    imageAlt: "Guias de pagamento do INSS, calendário e caneta sobre mesa de escritório para regularização de contribuições",
    content: [
      { type: "paragraph", text: "Lacunas no histórico de contribuições ao INSS são extremamente comuns, especialmente entre trabalhadores autônomos, MEIs e profissionais liberais. Essas lacunas podem atrasar a aposentadoria em anos ou reduzir significativamente o valor do benefício." },
      { type: "heading", text: "Quem Pode Pagar em Atraso" },
      { type: "list", items: [
        "Contribuinte individual (autônomo) que exercia atividade mas não recolhia",
        "MEI com guias DAS em atraso",
        "Segurado facultativo com interrupção nas contribuições",
        "Empregado cujo empregador não recolheu as contribuições"
      ]},
      { type: "heading", text: "Regras para Regularização" },
      { type: "paragraph", text: "Para atrasos de até 5 anos, o pagamento pode ser feito diretamente, sem necessidade de comprovação. Acima de 5 anos, o INSS exige início de prova material de que a atividade era exercida no período." },
      { type: "highlight", text: "Importante: contribuições em atraso acima de 5 anos geram juros e multa elevados. Em alguns casos, pode ser mais vantajoso não recolher e buscar alternativas como reconhecimento de tempo rural ou especial." },
      { type: "heading", text: "Como Calcular o Valor" },
      { type: "paragraph", text: "O valor é calculado pelo sistema SAL (Sistema de Acréscimos Legais) do site da Receita Federal. Inclui a contribuição devida, juros SELIC acumulados e multa de 10% a 20%. Quanto mais antigo o período, maior o custo." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Regularizar contribuições em atraso pode ser a chave para antecipar sua aposentadoria ou aumentar o valor do benefício. A Cantarelli Advocacia pode analisar se o pagamento em atraso é financeiramente vantajoso para o seu caso." }
    ],
    faq: [
      { question: "Posso pagar contribuições em atraso de quando era empregado?", answer: "Se o empregador não recolheu, a responsabilidade é do empregador. O segurado pode pedir ao INSS a inclusão desses períodos com base na carteira de trabalho." },
      { question: "Contribuições em atraso contam para carência?", answer: "Depende. Contribuições em atraso pagas antes do requerimento do benefício contam para carência apenas se o segurado era filiado ao INSS à época." },
      { question: "MEI pode pagar guias DAS em atraso?", answer: "Sim. O MEI pode gerar guias em atraso pelo Portal do Simples Nacional. As contribuições atrasadas contam para aposentadoria por idade." }
    ]
  },
  {
    slug: "doenca-ocupacional-equiparada-acidente-trabalho",
    title: "Doença Ocupacional Equiparada a Acidente de Trabalho: Direitos e Benefícios",
    excerpt: "Doenças desenvolvidas em razão do trabalho são equiparadas a acidente de trabalho e geram direitos específicos. Entenda quais doenças se enquadram e como garantir seus benefícios.",
    category: "Acidente de Trabalho",
    tags: ["Doença Ocupacional", "Acidente de Trabalho", "CAT", "Estabilidade", "INSS"],
    readTime: "8 min",
    keyTakeaways: [
      "LER/DORT, perda auditiva e doenças respiratórias são as doenças ocupacionais mais comuns",
      "A emissão da CAT é obrigatória e garante direitos como estabilidade de 12 meses",
      "O nexo técnico epidemiológico (NTEP) pode reconhecer a doença ocupacional automaticamente",
      "O benefício acidentário (B91) tem vantagens sobre o benefício comum (B31)"
    ],
    image: doencaOcupacionalAcidenteImg,
    imageAlt: "Capacete de segurança do trabalho e estetoscópio sobre documentos de doença ocupacional",
    content: [
      { type: "paragraph", text: "Doenças ocupacionais são aquelas produzidas ou desencadeadas pelo exercício do trabalho. A legislação brasileira equipara essas doenças ao acidente de trabalho, garantindo ao trabalhador uma série de direitos e benefícios previdenciários diferenciados." },
      { type: "heading", text: "O Que São Doenças Ocupacionais" },
      { type: "list", items: [
        "Doenças profissionais: causadas diretamente pela atividade (ex: silicose em mineradores)",
        "Doenças do trabalho: desencadeadas pelas condições de trabalho (ex: LER/DORT em digitadores)",
        "Doenças por concausa: o trabalho não é a causa única, mas contribuiu significativamente"
      ]},
      { type: "heading", text: "Direitos do Trabalhador" },
      { type: "list", items: [
        "Estabilidade provisória de 12 meses após retorno ao trabalho",
        "Benefício acidentário (código B91) com depósito de FGTS durante o afastamento",
        "Direito a auxílio-acidente (indenização por sequelas permanentes)",
        "Possibilidade de indenização por danos morais e materiais na Justiça do Trabalho",
        "Aposentadoria especial quando comprovada a exposição contínua a agentes nocivos"
      ]},
      { type: "highlight", text: "A empresa é obrigada a emitir a CAT (Comunicação de Acidente de Trabalho). Se ela se recusar, o próprio trabalhador, o sindicato, o médico ou o INSS podem emitir." },
      { type: "heading", text: "Nexo Técnico Epidemiológico (NTEP)" },
      { type: "paragraph", text: "O NTEP é um mecanismo que estabelece automaticamente a relação entre a doença e a atividade econômica da empresa. Quando o CNAE da empresa é correlacionado à doença do trabalhador, presume-se que a doença é ocupacional, invertendo o ônus da prova." },
      { type: "heading", text: "Conclusão" },
      { type: "paragraph", text: "Se você desenvolveu uma doença em razão do trabalho, seus direitos vão muito além do afastamento temporário. A Cantarelli Advocacia pode avaliar seu caso e garantir todos os benefícios a que você tem direito." }
    ],
    faq: [
      { question: "Burnout é considerado doença ocupacional?", answer: "Sim. Desde a inclusão na CID-11 pela OMS, a síndrome de burnout é reconhecida como doença ocupacional quando vinculada ao trabalho." },
      { question: "A empresa pode demitir após doença ocupacional?", answer: "Não durante os 12 meses de estabilidade após o retorno. A demissão nesse período gera direito à reintegração ou indenização." },
      { question: "Doença degenerativa pode ser considerada ocupacional?", answer: "Sim, quando o trabalho acelerou ou agravou a doença. Hérnias de disco e artrose, por exemplo, podem ser reconhecidas como ocupacionais em trabalhadores com esforço físico." }
    ]
  }

];

