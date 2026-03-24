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
    date: "18 de Março, 2026",
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
  {
    slug: "bpc-loas-2026-quem-tem-direito-como-solicitar",
    title: "BPC LOAS em 2026: Quem Tem Direito e Como Solicitar o Benefício",
    excerpt:
      "O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal para idosos e pessoas com deficiência de baixa renda. Saiba quem tem direito e como dar entrada em 2026.",
    date: "24 de Março, 2026",
    category: "BPC/LOAS",
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
        text: "Como Solicitar o BPC/LOAS",
      },
      {
        type: "list",
        items: [
          "1. Inscreva-se ou atualize o CadÚnico no CRAS do seu município",
          "2. Agende o requerimento pelo Meu INSS ou ligando para o 135",
          "3. Reúna documentos: RG, CPF, comprovante de residência e NIS",
          "4. Para PCD: leve laudos médicos e exames que comprovem a deficiência",
          "5. Aguarde a análise — prazo médio é de 45 a 90 dias",
        ],
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
  },
  {
    slug: "revisao-beneficio-inss-2026-aumento-aposentadoria",
    title: "Revisão de Benefício do INSS em 2026: Como Aumentar Sua Aposentadoria",
    excerpt:
      "Milhares de aposentados têm direito a revisões que podem aumentar significativamente o valor da aposentadoria. Conheça as principais teses revisionais vigentes em 2026.",
    date: "23 de Março, 2026",
    category: "Revisão",
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
  },
  {
    slug: "auxilio-acidente-2026-quem-tem-direito-valor",
    title: "Auxílio-Acidente em 2026: Quem Tem Direito, Valor e Como Solicitar",
    excerpt:
      "O auxílio-acidente é um benefício pago ao trabalhador que sofre acidente e fica com sequelas permanentes. Entenda quem tem direito, quanto recebe e como pedir em 2026.",
    date: "21 de Março, 2026",
    category: "Benefícios",
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
        text: "Como Solicitar o Auxílio-Acidente",
      },
      {
        type: "list",
        items: [
          "Agende perícia médica no INSS pelo Meu INSS ou pelo telefone 135",
          "Leve laudos médicos, exames e relatórios que comprovem a sequela permanente",
          "A CAT (Comunicação de Acidente de Trabalho) fortalece o pedido, mas não é obrigatória",
          "Se negado, é possível recorrer administrativamente ou judicialmente",
        ],
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
  },
  {
    slug: "diagnostico-previdenciario-2026-planejamento-aposentadoria",
    title: "Diagnóstico Previdenciário em 2026: Planeje Sua Aposentadoria com Segurança",
    excerpt:
      "O diagnóstico previdenciário é a ferramenta essencial para quem quer se aposentar com o melhor benefício possível. Saiba como funciona e por que é indispensável em 2026.",
    date: "19 de Março, 2026",
    category: "Planejamento",
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
  },
  {
    slug: "aposentadoria-por-invalidez-2026-requisitos-valor",
    title: "Aposentadoria por Invalidez em 2026: Requisitos, Valor e Direitos do Segurado",
    excerpt:
      "A aposentadoria por incapacidade permanente (antiga invalidez) garante renda a quem não pode mais trabalhar. Conheça os requisitos, valores e como evitar o indeferimento em 2026.",
    date: "17 de Março, 2026",
    category: "Incapacidade",
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
  },
  {
    slug: "tempo-contribuicao-inss-2026-como-calcular",
    title: "Tempo de Contribuição ao INSS em 2026: Como Calcular e Contar Períodos",
    excerpt: "Saiba como calcular seu tempo de contribuição, incluir períodos especiais e evitar perdas que podem atrasar sua aposentadoria.",
    date: "22 de Março, 2026",
    category: "Aposentadoria",
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
  },
  {
    slug: "doenca-ocupacional-burnout-inss-2026",
    title: "Doença Ocupacional e Burnout: Direitos no INSS em 2026",
    excerpt: "Burnout, LER/DORT e doenças ocupacionais garantem benefícios específicos no INSS. Veja como comprovar e quais são seus direitos.",
    date: "20 de Março, 2026",
    category: "Benefícios",
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
  },
  {
    slug: "salario-maternidade-inss-2026-quem-tem-direito",
    title: "Salário-Maternidade em 2026: Quem Tem Direito e Como Funciona",
    excerpt: "Entenda quem pode receber o salário-maternidade em 2026, qual o valor, duração e como solicitar esse benefício do INSS.",
    date: "18 de Março, 2026",
    category: "Benefícios",
    readTime: "6 min",
    keyTakeaways: [
      "O salário-maternidade é pago por 120 dias em caso de parto ou adoção",
      "Seguradas especiais (rurais) não precisam de contribuição mínima",
      "O benefício também cobre casos de aborto espontâneo (14 dias) e natimorto (120 dias)",
      "O valor para empregadas CLT corresponde à remuneração integral",
    ],
    lastUpdated: "Março 2026",
    image: contribuinteIndividualImg,
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
        text: "O valor varia conforme a categoria: empregadas CLT recebem a remuneração integral; domésticas recebem o último salário de contribuição; contribuintes individuais e facultativas recebem a média dos 12 últimos salários; seguradas especiais recebem 1 salário mínimo (R$ 1.518,00 em 2026).",
      },
      {
        type: "highlight",
        text: "O salário-maternidade não pode ser inferior ao salário mínimo de R$ 1.518,00 e pode chegar ao teto do INSS de R$ 8.157,41.",
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
  },
  {
    slug: "contribuinte-individual-inss-2026-direitos-aposentadoria",
    title: "Contribuinte Individual (Autônomo) no INSS em 2026: Direitos e Aposentadoria",
    excerpt: "Trabalhador autônomo, MEI ou profissional liberal? Saiba como contribuir corretamente ao INSS e garantir sua aposentadoria.",
    date: "16 de Março, 2026",
    category: "Aposentadoria",
    readTime: "7 min",
    keyTakeaways: [
      "O contribuinte individual pode pagar 20% sobre a renda ou 11% sobre o mínimo",
      "Quem paga 11% (código 1163) não tem direito à aposentadoria por tempo de contribuição",
      "MEI contribui com 5% do salário mínimo e tem cobertura previdenciária básica",
      "É possível complementar contribuições passadas para melhorar o valor do benefício",
    ],
    lastUpdated: "Março 2026",
    image: contribuinteIndividualImg,
    imageAlt: "Mãe segurando bebê recém-nascido representando salário-maternidade e direitos previdenciários",
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
  },
  {
    slug: "aposentadoria-professor-2026-regras-requisitos",
    title: "Aposentadoria do Professor em 2026: Regras Especiais e Requisitos",
    excerpt: "Professores têm regras diferenciadas de aposentadoria. Conheça os requisitos atualizados para 2026 e como garantir seu direito.",
    date: "14 de Março, 2026",
    category: "Aposentadoria",
    readTime: "7 min",
    keyTakeaways: [
      "Professores da educação básica têm redução de 5 anos nos requisitos",
      "A regra de transição por pontos exige 87 pontos (mulheres) e 97 (homens) em 2026",
      "Apenas magistério em educação infantil, fundamental e médio conta como tempo especial",
      "Atividades de direção, coordenação e assessoramento pedagógico também contam",
    ],
    lastUpdated: "Março 2026",
    image: aposentadoriaProfessorImg,
    imageAlt: "Trabalhador autônomo revisando documentos de contribuição previdenciária do INSS",
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
  },
  {
    slug: "cnis-erros-correcao-2026-como-resolver",
    title: "CNIS com Erros em 2026: Como Identificar e Corrigir para Não Perder Benefícios",
    excerpt: "Seu CNIS pode conter erros que prejudicam sua aposentadoria. Saiba como identificar e corrigir vínculos, contribuições e pendências.",
    date: "12 de Março, 2026",
    category: "Planejamento",
    readTime: "6 min",
    keyTakeaways: [
      "O CNIS é o principal documento usado pelo INSS para conceder benefícios",
      "Erros como vínculos não registrados e contribuições ausentes são comuns",
      "A retificação pode ser feita administrativamente ou judicialmente",
      "Manter documentos como carteira de trabalho e holerites é fundamental para comprovar",
    ],
    lastUpdated: "Março 2026",
    image: cnisAnaliseImg,
    imageAlt: "Professor em sala de aula representando aposentadoria especial do magistério",
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
        text: "Dica importante: solicite seu CNIS detalhado (com indicadores) pelo Meu INSS ou por requerimento ao INSS. A versão resumida não mostra todas as pendências que podem impactar seu benefício.",
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
  },
];
