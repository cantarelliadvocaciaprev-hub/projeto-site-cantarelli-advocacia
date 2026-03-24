import reformaImg from "@/assets/blog/reforma-previdenciaria-2026.jpg";
import auxilioImg from "@/assets/blog/auxilio-incapacidade-2026.jpg";
import pensaoImg from "@/assets/blog/pensao-morte-2026.jpg";

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
    slug: "regras-transicao-aposentadoria-marco-2026",
    title: "Regras de Transição da Aposentadoria: O Que Muda em Março de 2026",
    excerpt:
      "Com o avanço progressivo das regras de transição, muitos segurados estão perdendo prazos importantes. Veja como calcular sua melhor data para se aposentar em 2026.",
    date: "15 de Março, 2026",
    category: "Aposentadoria",
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
  },
  {
    slug: "auxilio-incapacidade-temporaria-2026-como-solicitar",
    title: "Auxílio por Incapacidade Temporária em 2026: Como Solicitar e Evitar Indeferimento",
    excerpt:
      "O antigo auxílio-doença agora é chamado de auxílio por incapacidade temporária. Saiba como funciona o pedido, a perícia e o que fazer se seu benefício for negado.",
    date: "10 de Março, 2026",
    category: "Benefícios",
    readTime: "6 min",
    keyTakeaways: [
      "O pedido pode ser feito 100% online pelo Meu INSS com atestado médico digitalizado",
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
        text: "Como Solicitar pelo Meu INSS",
      },
      {
        type: "subheading",
        text: "Passo 1: Acesse o Meu INSS",
      },
      {
        type: "paragraph",
        text: "Acesse o aplicativo ou site meu.inss.gov.br e faça login com sua conta gov.br. Vá em 'Novo Pedido' e selecione 'Auxílio por Incapacidade Temporária'.",
      },
      {
        type: "subheading",
        text: "Passo 2: Envie o Atestado Médico",
      },
      {
        type: "paragraph",
        text: "Em 2026, o INSS ampliou o sistema de análise documental. Envie o atestado médico digitalizado com boa resolução, contendo: CID da doença, período de afastamento recomendado, data, assinatura e CRM do médico.",
      },
      {
        type: "subheading",
        text: "Passo 3: Perícia Médica",
      },
      {
        type: "paragraph",
        text: "A perícia pode ser presencial em uma agência do INSS ou por telemedicina (consulta por vídeo). Em 2026, a perícia por telemedicina foi ampliada para mais de 2.000 municípios brasileiros.",
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
        text: "O valor do auxílio por incapacidade temporária corresponde a 91% do salário de benefício, calculado com base na média de todas as contribuições desde julho de 1994. O piso é de R$ 1.518,00 (salário mínimo 2026) e o teto é de R$ 8.475,55.",
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
  },
  {
    slug: "pensao-por-morte-2026-novas-regras-duracao",
    title: "Pensão por Morte em 2026: Regras de Duração, Valor e Quem Tem Direito",
    excerpt:
      "A pensão por morte sofreu mudanças importantes após a Reforma. Entenda as regras de duração, quem são os dependentes e como calcular o valor do benefício em 2026.",
    date: "5 de Março, 2026",
    category: "Pensões",
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
        text: "Se o valor calculado for inferior a um salário mínimo (R$ 1.518,00 em 2026), o beneficiário receberá o mínimo. Quando o dependente que gerou a cota perde a condição (ex: filho completa 21 anos), a cota não é redistribuída.",
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
  },
];
