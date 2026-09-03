# Diagnóstico: queda de leads no WhatsApp

## O que os dados mostram (verificado agora)

- **O site não caiu.** As visitas dos últimos dias estão iguais ou melhores que as semanas anteriores: 03/09 = 106, 02/09 = 119, 01/09 = 86, contra 40–70 na semana de 18–23/08.
- **O Google não puniu nem desindexou o site.** O Search Console reporta a página inicial como "Enviada e indexada", robots.txt liberado, último rastreamento em 28/08, sitemap ativo.
- **O problema real é conversão e atribuição, não tráfego.**
  - Em 4–31/08 foram **70.269 impressões para apenas 205 cliques** (CTR de 0,29%, posição média 8). Os artigos aparecem muito no Google, mas quase ninguém clica no título.
  - **Nenhum clique no WhatsApp é registrado hoje.** Não existe rastreamento nos botões de WhatsApp em nenhuma página, então não há como saber se os leads caíram de verdade.
  - As mensagens pré-preenchidas do WhatsApp são **idênticas em todo o site** ("Olá, estava no site da Cantarelli..."), sem indicar de qual página veio. Por isso a equipe não consegue identificar quem chegou pelo site.

Conclusão: a percepção de "ninguém veio pelo site" é, em grande parte, falta de medição e de identificação de origem — somada a um CTR muito baixo no Google.

## O que fazer

### 1. Medir os cliques no WhatsApp (prioridade)
- Criar registro de evento de clique em WhatsApp (página de origem, botão, origem de tráfego, dispositivo).
- Instrumentar todos os botões de WhatsApp do site: botão flutuante, Header, Hero, Contato, Contato (página), Footer, Planejamento, Bancário, artigos do blog e formulário de dúvidas.
- Adicionar os cliques ao painel `/admin/painel` com total por dia, por página e por origem de tráfego, para comparar semanas.

### 2. Identificar a origem dentro da própria mensagem
- Personalizar a mensagem pré-preenchida por página/seção, por exemplo:
  "Olá, vim pelo site (artigo: Tendinite e aposentadoria) e gostaria de um atendimento."
- Assim a equipe reconhece imediatamente quem chegou pelo site e por qual conteúdo.

### 3. Aumentar o CTR no Google (mais cliques com o mesmo tráfego)
Focar nas páginas com muitas impressões e CTR baixíssimo:

| Página | Impressões | CTR |
| --- | --- | --- |
| tendinite-ler-aposentadoria-invalidez | 12.984 | 0,22% |
| quanto-tempo-demora-processo-auxilio-acidente | 12.686 | 0,12% |
| deficiencia-auditiva-aposentadoria-pcd | 7.202 | 0,15% |
| aposentadoria-por-pontos-2026-regras | 6.613 | 0,09% |
| processo-auxilio-acidente-justica-prazos | 5.029 | 0,38% |

- Reescrever title e meta description desses artigos para responder à dúvida direto no resultado (linguagem do usuário, ano 2026, sem promessa de resultado — conforme o Provimento 205).
- Reforçar o CTA de WhatsApp no início do artigo, não só no fim.

### 4. Fechar o que ficou pendente da página /contato
- Registrar a rota `/contato` no `App.tsx`, incluir no menu do Header e no Footer, e adicionar a URL ao `sitemap.xml`. Hoje a página existe mas está inacessível — perde tráfego de busca local ("advogado previdenciário Recife" já traz impressões).

## Detalhes técnicos

- Nova tabela `public.whatsapp_click_events` (page_path, cta_location, source, medium, campaign, device, created_at) com RLS: insert liberado para `anon`, leitura só via função de admin, seguindo o padrão de `page_view_events` e `review_click_events`.
- Novo helper `src/lib/whatsappTracking.ts` com `trackWhatsAppClick(location, path)` reutilizando `detectTrafficSource` e `getDeviceType`.
- Um único util `buildWhatsAppUrl(context)` centraliza número e mensagem, substituindo as URLs duplicadas nos 13 arquivos que hoje repetem `wa.me/5581983421727`.
- Painel: nova aba/cartões em `src/pages/Dashboard.tsx` alimentados pela função `dashboard-stats` estendida.
- SEO: ajustes de title/description em `src/data/blogArticles.ts` (e nos posts equivalentes no banco), sem mudar o conteúdo dos artigos.

## Observação importante

Os primeiros números confiáveis de clique em WhatsApp só aparecem depois da publicação. Em ~7 dias já dá para comparar com as visitas e saber se o problema é o site ou o volume de contatos em geral.
