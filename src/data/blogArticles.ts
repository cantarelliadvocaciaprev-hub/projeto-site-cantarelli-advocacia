import aposentadoriaImg from "@/assets/blog/aposentadoria-tempo-contribuicao.jpg";
import bpcLoasImg from "@/assets/blog/bpc-loas-beneficio.jpg";
import revisaoImg from "@/assets/blog/revisao-aposentadoria.jpg";

export interface BlogArticleContent {
  type: "paragraph" | "heading" | "subheading" | "list" | "highlight";
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  keyTakeaways: string[];
  lastUpdated: string;
  image: string;
  imageAlt: string;
  author: string;
  content: BlogArticleContent[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "novas-regras-aposentadoria-2026",
    title: "Novas Regras de Aposentadoria em 2026: O Que Mudou no INSS",
    excerpt:
      "A partir de janeiro de 2026, novas exigências entraram em vigor para quem quer se aposentar. Idade mínima aumentou e pontuação subiu. Veja como se preparar.",
    date: "20 de Janeiro, 2026",
    category: "Aposentadoria",
    readTime: "7 min",
    keyTakeaways: [
      "Idade mínima subiu para 59 anos (mulheres) e 64 anos (homens) na regra de transição",
      "Pontuação exigida agora é 92 pontos para mulheres e 102 para homens",
      "Quem não cumpriu requisitos até 31/12/2025 precisa se adequar às novas regras",
    ],
    lastUpdated: "Janeiro 2026",
    image: aposentadoriaImg,
    imageAlt: "Casal de idosos analisando documentos de aposentadoria com advogado especialista em direito previdenciário",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O ano de 2026 trouxe mudanças significativas para quem planeja se aposentar pelo INSS. As regras de transição da Reforma da Previdência continuam avançando, exigindo mais tempo de contribuição e idade mínima maior. Entender essas alterações é fundamental para planejar sua aposentadoria da melhor forma possível.",
      },
      {
        type: "heading",
        text: "O Que Mudou nas Regras de Transição em 2026?",
      },
      {
        type: "paragraph",
        text: "A Reforma da Previdência de 2019 estabeleceu regras de transição que são progressivas, ou seja, ficam mais rigorosas a cada ano. Em 2026, as principais mudanças afetam três aspectos: idade mínima, tempo de contribuição e sistema de pontos.",
      },
      {
        type: "subheading",
        text: "Idade Mínima Progressiva",
      },
      {
        type: "paragraph",
        text: "Na regra de transição por idade mínima progressiva, as mulheres agora precisam ter 59 anos de idade (aumento de 6 meses em relação a 2025), enquanto os homens precisam de 64 anos. Essa idade continuará subindo até atingir 62 anos para mulheres e 65 anos para homens.",
      },
      {
        type: "subheading",
        text: "Sistema de Pontos",
      },
      {
        type: "paragraph",
        text: "O sistema de pontos soma a idade do trabalhador com o tempo de contribuição. Em 2026, as mulheres precisam atingir 92 pontos, e os homens, 102 pontos. Por exemplo, uma mulher com 57 anos de idade e 35 anos de contribuição soma exatamente 92 pontos e pode se aposentar.",
      },
      {
        type: "highlight",
        text: "Importante: O tempo mínimo de contribuição permanece em 30 anos para mulheres e 35 anos para homens em todas as regras de transição.",
      },
      {
        type: "heading",
        text: "Quem Foi Afetado pelas Novas Regras?",
      },
      {
        type: "paragraph",
        text: "Todos os trabalhadores que não completaram os requisitos para aposentadoria até 31 de dezembro de 2025 precisam se adequar às novas exigências de 2026. Isso significa que muitos segurados que estavam próximos de se aposentar tiveram que esperar mais alguns meses.",
      },
      {
        type: "list",
        items: [
          "Trabalhadores que completariam 91 pontos (mulheres) ou 101 pontos (homens) em 2025 e não se aposentaram",
          "Segurados que atingiriam a idade mínima de 58,5 anos (mulheres) ou 63,5 anos (homens) em 2025",
          "Profissionais que ainda estão contribuindo e planejam se aposentar nos próximos anos",
        ],
      },
      {
        type: "heading",
        text: "Como Calcular Sua Aposentadoria em 2026",
      },
      {
        type: "paragraph",
        text: "O cálculo do benefício continua seguindo a regra estabelecida pela Reforma: considera-se 100% da média de todos os salários desde julho de 1994 (ou desde o início das contribuições, se posterior). O valor do benefício será de 60% dessa média, mais 2% para cada ano de contribuição acima de 20 anos (homens) ou 15 anos (mulheres).",
      },
      {
        type: "subheading",
        text: "Exemplo Prático",
      },
      {
        type: "paragraph",
        text: "Uma mulher com 35 anos de contribuição terá direito a 60% + (20 x 2%) = 100% da média salarial. Já uma mulher com 30 anos de contribuição receberá 60% + (15 x 2%) = 90% da média.",
      },
      {
        type: "heading",
        text: "Dicas para Maximizar Seu Benefício",
      },
      {
        type: "list",
        items: [
          "Faça um planejamento previdenciário completo para identificar a melhor data de aposentadoria",
          "Verifique se há períodos de contribuição não reconhecidos pelo INSS (trabalho rural, militar, etc.)",
          "Analise se vale a pena contribuir por mais tempo para aumentar o coeficiente",
          "Consulte um advogado especialista para avaliar direito a regras mais vantajosas",
          "Mantenha toda a documentação trabalhista organizada",
        ],
      },
      {
        type: "highlight",
        text: "O planejamento previdenciário adequado pode aumentar o valor do seu benefício em até 40%. Não deixe de consultar um especialista antes de dar entrada no pedido.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "As mudanças nas regras de aposentadoria em 2026 reforçam a importância de estar bem informado e contar com orientação especializada. Se você está próximo de se aposentar ou quer começar a planejar seu futuro, o momento de agir é agora. Um planejamento previdenciário bem feito pode fazer toda a diferença no valor do seu benefício.",
      },
    ],
  },
  {
    slug: "reajuste-inss-2026-novo-teto",
    title: "Reajuste do INSS 2026: Novo Teto de R$ 8.475,55",
    excerpt:
      "O teto do INSS foi reajustado em 3,9% e agora é de R$ 8.475,55. Saiba como o reajuste afeta sua aposentadoria e benefícios.",
    date: "15 de Janeiro, 2026",
    category: "Benefícios",
    readTime: "5 min",
    keyTakeaways: [
      "Novo salário mínimo de R$ 1.518,00 serve de base para benefícios",
      "Teto do INSS passou para R$ 8.475,55 com reajuste de 3,9%",
      "Aposentados que ganham acima do mínimo tiveram reajuste pelo INPC",
    ],
    lastUpdated: "Janeiro 2026",
    image: revisaoImg,
    imageAlt: "Advogado analisando documentos financeiros e calculando reajuste de aposentadoria INSS 2026",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "Janeiro de 2026 trouxe o reajuste anual dos benefícios do INSS, impactando milhões de aposentados e pensionistas em todo o Brasil. O novo teto previdenciário passou para R$ 8.475,55, enquanto o piso acompanhou o salário mínimo, fixado em R$ 1.518,00.",
      },
      {
        type: "heading",
        text: "Como Funciona o Reajuste do INSS",
      },
      {
        type: "paragraph",
        text: "O reajuste dos benefícios previdenciários segue regras diferentes dependendo do valor recebido. Benefícios de um salário mínimo são corrigidos pela variação do próprio mínimo, enquanto os demais seguem o Índice Nacional de Preços ao Consumidor (INPC).",
      },
      {
        type: "subheading",
        text: "Benefícios de Um Salário Mínimo",
      },
      {
        type: "paragraph",
        text: "Quem recebe exatamente um salário mínimo teve reajuste de 7,5%, passando de R$ 1.412,00 para R$ 1.518,00. Isso inclui aposentadorias, pensões, BPC/LOAS e auxílios vinculados ao piso.",
      },
      {
        type: "subheading",
        text: "Benefícios Acima do Mínimo",
      },
      {
        type: "paragraph",
        text: "Já os benefícios com valor superior a um salário mínimo foram reajustados em 3,9%, conforme o INPC acumulado de 2025. Isso significa que um aposentado que recebia R$ 3.000,00 passou a receber R$ 3.117,00.",
      },
      {
        type: "highlight",
        text: "Atenção: O reajuste é aplicado automaticamente pelo INSS. Você não precisa fazer nenhum requerimento para receber o valor atualizado.",
      },
      {
        type: "heading",
        text: "Novo Teto do INSS: R$ 8.475,55",
      },
      {
        type: "paragraph",
        text: "O teto do INSS é o valor máximo que um segurado pode receber como benefício previdenciário. Em 2026, esse limite passou para R$ 8.475,55, um aumento de R$ 318,62 em relação ao ano anterior.",
      },
      {
        type: "list",
        items: [
          "Teto 2025: R$ 8.157,41",
          "Teto 2026: R$ 8.475,55",
          "Reajuste: 3,9% (INPC)",
        ],
      },
      {
        type: "paragraph",
        text: "Esse valor também serve de referência para o cálculo de contribuições de segurados facultativos e contribuintes individuais que optam por recolher sobre o teto.",
      },
      {
        type: "heading",
        text: "Tabela de Contribuição 2026",
      },
      {
        type: "paragraph",
        text: "As alíquotas de contribuição para empregados, empregados domésticos e trabalhadores avulsos também foram atualizadas com as novas faixas salariais:",
      },
      {
        type: "list",
        items: [
          "Até R$ 1.518,00: alíquota de 7,5%",
          "De R$ 1.518,01 até R$ 2.793,88: alíquota de 9%",
          "De R$ 2.793,89 até R$ 4.190,83: alíquota de 12%",
          "De R$ 4.190,84 até R$ 8.475,55: alíquota de 14%",
        ],
      },
      {
        type: "heading",
        text: "Impacto nos Diferentes Benefícios",
      },
      {
        type: "subheading",
        text: "Aposentadorias e Pensões",
      },
      {
        type: "paragraph",
        text: "Todos os aposentados e pensionistas já receberam o valor reajustado a partir do pagamento de janeiro de 2026. O calendário de pagamentos segue o número final do benefício, sem o dígito verificador.",
      },
      {
        type: "subheading",
        text: "BPC/LOAS",
      },
      {
        type: "paragraph",
        text: "O Benefício de Prestação Continuada também foi reajustado para R$ 1.518,00. Importante lembrar que o limite de renda per capita para ter direito ao BPC agora é de R$ 379,50 (1/4 do salário mínimo).",
      },
      {
        type: "subheading",
        text: "Auxílio-Doença e Auxílio-Acidente",
      },
      {
        type: "paragraph",
        text: "Esses benefícios também seguem as mesmas regras de reajuste, com o piso em um salário mínimo e o teto em R$ 8.475,55.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "O reajuste do INSS em 2026 garante a manutenção do poder de compra dos beneficiários, ainda que de forma limitada. Para quem está planejando se aposentar, é importante considerar esses valores atualizados nos cálculos de projeção do benefício.",
      },
    ],
  },
  {
    slug: "bpc-loas-2026-quem-tem-direito",
    title: "BPC/LOAS 2026: Quem Tem Direito e Como Solicitar",
    excerpt:
      "O Benefício de Prestação Continuada (BPC) garante um salário mínimo para idosos e pessoas com deficiência. Veja os requisitos atualizados.",
    date: "10 de Janeiro, 2026",
    category: "Assistencial",
    readTime: "6 min",
    keyTakeaways: [
      "Renda per capita familiar deve ser inferior a 1/4 do salário mínimo (R$ 379,50)",
      "Idosos a partir de 65 anos e PCDs de qualquer idade podem solicitar",
      "Não é necessário ter contribuído ao INSS para ter direito ao BPC",
    ],
    lastUpdated: "Janeiro 2026",
    image: bpcLoasImg,
    imageAlt: "Idosa recebendo apoio e cuidados assistenciais relacionados ao benefício BPC LOAS 2026",
    author: "Thiago Cantarelli",
    content: [
      {
        type: "paragraph",
        text: "O Benefício de Prestação Continuada (BPC), também conhecido como LOAS, é um direito assistencial garantido pela Constituição Federal. Diferente da aposentadoria, não exige contribuição prévia ao INSS, sendo destinado a idosos e pessoas com deficiência em situação de vulnerabilidade.",
      },
      {
        type: "heading",
        text: "O Que é o BPC/LOAS?",
      },
      {
        type: "paragraph",
        text: "O BPC é um benefício assistencial no valor de um salário mínimo (R$ 1.518,00 em 2026) pago mensalmente a idosos com 65 anos ou mais e a pessoas com deficiência de qualquer idade que comprovem não possuir meios de prover a própria subsistência.",
      },
      {
        type: "highlight",
        text: "Diferentemente da aposentadoria, o BPC não paga 13º salário e não gera pensão por morte para os dependentes.",
      },
      {
        type: "heading",
        text: "Quem Tem Direito ao BPC em 2026?",
      },
      {
        type: "subheading",
        text: "Requisitos para Idosos",
      },
      {
        type: "list",
        items: [
          "Ter 65 anos de idade ou mais",
          "Renda familiar per capita inferior a 1/4 do salário mínimo (R$ 379,50)",
          "Não receber outro benefício da Seguridade Social (exceto assistência médica)",
          "Estar inscrito no Cadastro Único (CadÚnico)",
        ],
      },
      {
        type: "subheading",
        text: "Requisitos para Pessoas com Deficiência",
      },
      {
        type: "list",
        items: [
          "Possuir deficiência física, mental, intelectual ou sensorial de longo prazo (mínimo 2 anos)",
          "A deficiência deve impedir a participação plena na sociedade em igualdade com as demais pessoas",
          "Renda familiar per capita inferior a 1/4 do salário mínimo (R$ 379,50)",
          "Estar inscrito no Cadastro Único (CadÚnico)",
        ],
      },
      {
        type: "heading",
        text: "Como Calcular a Renda Per Capita",
      },
      {
        type: "paragraph",
        text: "O cálculo da renda per capita considera todos os rendimentos do grupo familiar dividido pelo número de pessoas. Em 2026, o limite é de R$ 379,50 por pessoa (1/4 do salário mínimo de R$ 1.518,00).",
      },
      {
        type: "subheading",
        text: "Exemplo de Cálculo",
      },
      {
        type: "paragraph",
        text: "Uma família composta por 4 pessoas (idoso requerente, cônjuge e 2 filhos) com renda total de R$ 1.400,00: Renda per capita = R$ 1.400,00 ÷ 4 = R$ 350,00. Como R$ 350,00 é menor que R$ 379,50, a família atende ao requisito de renda.",
      },
      {
        type: "highlight",
        text: "Importante: O BPC já recebido por outro membro da família NÃO entra no cálculo da renda para fins de novo BPC. A Lei 14.176/2021 estabeleceu essa exclusão.",
      },
      {
        type: "heading",
        text: "Como Solicitar o BPC",
      },
      {
        type: "paragraph",
        text: "O processo de solicitação do BPC envolve algumas etapas importantes que devem ser seguidas corretamente para evitar indeferimentos:",
      },
      {
        type: "subheading",
        text: "Passo 1: Inscrição no CadÚnico",
      },
      {
        type: "paragraph",
        text: "Antes de solicitar o BPC, a família precisa estar inscrita no Cadastro Único para Programas Sociais. A inscrição é feita no CRAS (Centro de Referência de Assistência Social) do município.",
      },
      {
        type: "subheading",
        text: "Passo 2: Agendamento no INSS",
      },
      {
        type: "paragraph",
        text: "Após a inscrição no CadÚnico (aguardar pelo menos 45 dias para processamento), agende o requerimento do BPC pelo telefone 135 ou pelo site/aplicativo Meu INSS.",
      },
      {
        type: "subheading",
        text: "Passo 3: Perícia Médica (PCD)",
      },
      {
        type: "paragraph",
        text: "Para pessoas com deficiência, será agendada uma avaliação médica e social no INSS. É importante levar todos os laudos, exames e relatórios médicos que comprovem a deficiência.",
      },
      {
        type: "subheading",
        text: "Passo 4: Avaliação Social",
      },
      {
        type: "paragraph",
        text: "Tanto idosos quanto PCDs passam por avaliação social, que pode incluir visita domiciliar. É verificada a situação socioeconômica da família.",
      },
      {
        type: "heading",
        text: "Documentos Necessários",
      },
      {
        type: "list",
        items: [
          "Documento de identificação com foto (RG, CNH ou CTPS)",
          "CPF do requerente e de todos os membros da família",
          "Comprovante de residência atualizado",
          "Comprovante de inscrição no CadÚnico",
          "Laudos e relatórios médicos (para PCD)",
          "Comprovantes de renda de todos os membros da família",
        ],
      },
      {
        type: "heading",
        text: "O Que Fazer em Caso de Indeferimento",
      },
      {
        type: "paragraph",
        text: "Se o pedido for negado, o segurado pode apresentar recurso administrativo no prazo de 30 dias ou ingressar com ação judicial. Muitos casos são revertidos na Justiça, especialmente quando há erro na avaliação da deficiência ou no cálculo da renda.",
      },
      {
        type: "highlight",
        text: "Dica: Consulte um advogado especializado antes de desistir. Muitos benefícios são concedidos judicialmente após análise mais detalhada do caso.",
      },
      {
        type: "heading",
        text: "Conclusão",
      },
      {
        type: "paragraph",
        text: "O BPC/LOAS é um direito fundamental que garante dignidade a milhões de brasileiros em situação de vulnerabilidade. Se você ou alguém da sua família pode ter direito ao benefício, não deixe de buscar orientação especializada para garantir o acesso a esse importante amparo social.",
      },
    ],
  },
];
