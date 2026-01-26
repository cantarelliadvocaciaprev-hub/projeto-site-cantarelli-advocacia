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

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const data: ApplicationData = await req.json();

    // Validate required fields
    if (!data.nome || !data.email || !data.telefone || !data.area) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const areaLabel = areaLabels[data.area] || data.area;

    // Build email HTML content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #b89b5e; border-bottom: 2px solid #b89b5e; padding-bottom: 10px;">
          Nova Candidatura - Trabalhe Conosco
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Nome:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.nome}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-mail:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="mailto:${data.email}">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="tel:${data.telefone}">${data.telefone}</a>
            </td>
          </tr>
          ${data.linkedin ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">LinkedIn:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <a href="${data.linkedin}" target="_blank">${data.linkedin}</a>
            </td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Área de Interesse:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${areaLabel}</td>
          </tr>
          ${data.pretensaoSalarial ? `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Pretensão Salarial:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.pretensaoSalarial}</td>
          </tr>
          ` : ''}
        </table>
        
        ${data.mensagem ? `
        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Mensagem:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.mensagem}</p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px; color: #666; font-size: 12px;">
          Esta candidatura foi enviada através do site Cantarelli Advocacia.
        </p>
      </div>
    `;

    // Prepare attachments if file is provided
    const attachments = data.fileBase64 && data.fileName ? [
      {
        filename: data.fileName,
        content: data.fileBase64,
      }
    ] : [];

    // Send email via Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Cantarelli Advocacia <noreply@cantarelliadvocacia.com.br>",
        to: ["trabalheconosco@cantarelliadvocacia.com.br"],
        subject: `Nova Candidatura: ${data.nome} - ${areaLabel}`,
        html: emailHtml,
        attachments,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend error:", resendData);
      throw new Error(resendData.message || "Failed to send email");
    }

    console.log("Email sent successfully:", resendData);

    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    console.error("Error sending application:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro ao enviar candidatura";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
