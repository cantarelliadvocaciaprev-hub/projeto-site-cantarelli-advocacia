import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  nome: string;
  email: string;
  telefone: string;
  linkedin?: string;
  area: string;
  pretensaoSalarial?: string;
  mensagem?: string;
  fileName?: string;
  fileBase64?: string;
}

const areaLabels: Record<string, string> = {
  juridico: "Jurídico",
  advogado: "Advogado(a)",
  estagiario: "Estagiário(a) de Direito",
  administrativo: "Administrativo",
  marketing: "Marketing",
  ti: "Tecnologia da Informação (TI)",
  rh: "Recursos Humanos (RH)",
  financeiro: "Financeiro",
  atendimento: "Atendimento ao Cliente",
  outro: "Outro",
};

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;')
   .replace(/</g, '&lt;')
   .replace(/>/g, '&gt;')
   .replace(/"/g, '&quot;')
   .replace(/'/g, '&#039;');

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Erro ao processar candidatura. Tente novamente." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data: ApplicationData = await req.json();

    // Validate required fields
    if (!data.nome || !data.email || !data.telefone || !data.area) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const areaLabel = areaLabels[data.area] || escapeHtml(data.area);

    // Escape all user-supplied values
    const safeNome = escapeHtml(data.nome);
    const safeEmail = escapeHtml(data.email);
    const safeTelefone = escapeHtml(data.telefone);
    const safeLinkedin = data.linkedin ? escapeHtml(data.linkedin) : null;
    const safePretensao = data.pretensaoSalarial ? escapeHtml(data.pretensaoSalarial) : null;
    const safeMensagem = data.mensagem ? escapeHtml(data.mensagem) : null;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #b89b5e; border-bottom: 2px solid #b89b5e; padding-bottom: 10px;">
          Nova Candidatura - Trabalhe Conosco
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Nome:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeNome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${safeEmail}">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="tel:${safeTelefone}">${safeTelefone}</a>
            </td>
          </tr>
          ${safeLinkedin ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">LinkedIn:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="${safeLinkedin}" target="_blank">${safeLinkedin}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Área de Interesse:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${areaLabel}</td>
          </tr>
          ${safePretensao ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Pretensão Salarial:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${safePretensao}</td>
          </tr>
          ` : ''}
        </table>
        
        ${safeMensagem ? `
        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Mensagem:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safeMensagem}</p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          Esta candidatura foi enviada através do site Cantarelli Advocacia.
        </p>
      </div>
    `;

    const attachments = data.fileBase64 && data.fileName ? [
      {
        filename: data.fileName,
        content: data.fileBase64,
      }
    ] : [];

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cantarelli Advocacia <noreply@cantarelliadvocacia.com.br>",
        to: ["trabalheconosco@cantarelliadvocacia.com.br"],
        subject: `Nova Candidatura: ${safeNome} - ${areaLabel}`,
        html: emailHtml,
        attachments,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);
      return new Response(
        JSON.stringify({ error: "Erro ao enviar candidatura. Tente novamente." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Email sent successfully:", resendData);

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    console.error("Error sending application:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao processar candidatura. Tente novamente." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
