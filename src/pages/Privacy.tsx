import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Privacy() {
  return <div className="bg-background min-h-screen">
    <SEO title="Política de Privacidade | Cantarelli Advocacia" description="Informações sobre dados de contato, dúvidas do blog, medição de acessos e escolhas de cookies na Cantarelli Advocacia." canonical="https://cantarelliadvocacia.com.br/politica-de-privacidade" />
    <Header />
    <main id="main-content" className="container mx-auto px-4 pt-28 pb-16 max-w-4xl space-y-6">
      <Breadcrumb items={[{ label: "Política de Privacidade", href: "/politica-de-privacidade" }]} />
      <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
      <p>Thiago Cantarelli Sociedade Individual de Advocacia, CNPJ 26.191.013/0001-89, é responsável pelo tratamento de dados no site da Cantarelli Advocacia. Nosso endereço é Estrada dos Remédios, 2115, Madalena, Recife – PE, CEP 50720-715.</p>
      <h2 className="text-2xl font-bold">Contato e atendimento</h2>
      <p>Os formulários de contato abrem o WhatsApp com as informações que você preencheu. O envio da mensagem depende da sua confirmação no WhatsApp. Utilizamos essas informações para responder à solicitação e avaliar o atendimento solicitado. Não informe dados de terceiros sem autorização nem envie documentos sensíveis no primeiro contato.</p>
      <h2 className="text-2xl font-bold">Dúvidas enviadas ao assistente do blog</h2>
      <p>O assistente utiliza inteligência artificial para resumir e indicar artigos. As dúvidas, resumos e artigos indicados são armazenados para acompanhamento interno e identificação de temas de conteúdo. Também são registrados tipo de aparelho, data e identificador derivado do endereço de rede. Não informe CPF, documentos, informações de saúde identificáveis ou detalhes sigilosos. As respostas são informativas e não substituem análise jurídica individual.</p>
      <h2 className="text-2xl font-bold">Medição e cookies</h2>
      <p>O site registra páginas visitadas, origem, campanha, tipo de aparelho e cliques nos canais de contato para acompanhar seu uso. Informações de origem podem ser mantidas durante a sessão para relacionar a entrada ao contato. Google Analytics e Meta Pixel são carregados somente após aceitar cookies. Esses serviços e conteúdos incorporados, como mapas e vídeos, podem tratar informações conforme suas próprias políticas. Recusar cookies não impede a leitura do site.</p>
      <Button variant="outline" onClick={() => { localStorage.removeItem("cookie-consent"); window.location.reload(); }}>Rever escolha de cookies</Button>
      <h2 className="text-2xl font-bold">Compartilhamento e conservação</h2>
      <p>Utilizamos serviços de hospedagem, armazenamento, inteligência artificial e comunicação necessários ao funcionamento e atendimento. O uso de serviços externos pode envolver processamento fora do Brasil. Dados devem ser conservados conforme a finalidade, obrigações legais e exercício regular de direitos. Você pode solicitar esclarecimentos sobre o tratamento e a conservação aplicáveis ao seu atendimento.</p>
      <h2 className="text-2xl font-bold">Seus direitos e canal de privacidade</h2>
      <p>Você pode solicitar confirmação de tratamento, acesso, correção e, quando cabível, eliminação, informações sobre compartilhamento ou revogação de consentimento. A resposta pode exigir confirmação de identidade e consideração de obrigações legais. Para exercer seus direitos ou esclarecer esta política, escreva para <a className="text-primary underline" href="mailto:contato@cantarelliadvocacia.com.br">contato@cantarelliadvocacia.com.br</a>.</p>
      <Link className="text-primary underline" to="/contato">Canais oficiais do escritório</Link>
    </main><Footer /><WhatsAppButton />
  </div>;
}