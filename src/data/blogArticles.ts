import reformaImg from "@/assets/blog/reforma-previdenciaria-2026.jpg";
import auxilioImg from "@/assets/blog/auxilio-incapacidade-2026.jpg";
import pensaoImg from "@/assets/blog/pensao-morte-2026.jpg";
import ruralImg from "@/assets/blog/aposentadoria-rural-2026.jpg";
import especialImg from "@/assets/blog/aposentadoria-especial-2026.jpg";
import pcdImg from "@/assets/blog/aposentadoria-pcd-2026.jpg";
import ruidoImg from "@/assets/blog/aposentadoria-ruido-especial-2026.jpg";

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
  {
    slug: "aposentadoria-rural-2026-como-comprovar",
    title: "Aposentadoria Rural 2026: Como Comprovar Tempo de Trabalho no Campo",
    excerpt:
      "Trabalhadores rurais têm regras diferenciadas para aposentadoria. Saiba como comprovar atividade rural, quais documentos são aceitos e os requisitos atualizados para 2026.",
    date: "1 de Março, 2026",
    category: "Aposentadoria",
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
  },
  {
    slug: "aposentadoria-especial-insalubridade-2026",
    title: "Aposentadoria Especial por Insalubridade em 2026: Quem Tem Direito",
    excerpt:
      "Profissionais expostos a agentes nocivos podem se aposentar mais cedo. Conheça as regras da aposentadoria especial em 2026, os agentes reconhecidos e como comprovar a exposição.",
    date: "22 de Março, 2026",
    category: "Aposentadoria",
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
  },
  {
    slug: "aposentadoria-pcd-por-idade-tempo-contribuicao-2026",
    title: "Aposentadoria da Pessoa com Deficiência (PCD): Por Idade e Por Tempo de Contribuição em 2026",
    excerpt:
      "A aposentadoria da pessoa com deficiência tem regras próprias e mais favoráveis que a regra geral. Conheça os requisitos por idade e por tempo de contribuição, o diagnóstico previdenciário e como garantir esse direito.",
    date: "20 de Março, 2026",
    category: "Aposentadoria PCD",
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
  },
  {
    slug: "aposentadoria-especial-ruido-contribuinte-individual-2026",
    title: "Aposentadoria Especial por Exposição ao Ruído e Tempo Especial para Contribuintes Individuais em 2026",
    excerpt:
      "Trabalhadores expostos ao ruído acima de 85 dB podem ter direito à aposentadoria especial. Saiba também como contribuintes individuais podem conseguir o reconhecimento de tempo especial no INSS.",
    date: "15 de Fevereiro, 2026",
    category: "Aposentadoria Especial",
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
  },
];
