import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Official contacts stored server-side only
const officialContacts: Record<string, { name: string; role: string }> = {
  "8130493799": { name: "Cantarelli Advocacia", role: "Escritório Principal" },
  "81995441368": { name: "Equipe Comercial", role: "Atendimento Comercial" },
  "8186113970": { name: "Equipe Comercial", role: "Atendimento Comercial" },
  "81986113970": { name: "Equipe Comercial", role: "Atendimento Comercial" },
  "81987718606": { name: "Setor Financeiro", role: "Atendimento Financeiro" },
  "81983421727": { name: "WhatsApp Oficial", role: "Atendimento WhatsApp" },
  "81986348775": { name: "Setor Administrativo", role: "Atendimento Administrativo" },
  "81997264914": { name: "Dr. Thiago Cantarelli", role: "Advogado" },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone } = await req.json();

    if (!phone || typeof phone !== "string") {
      return new Response(
        JSON.stringify({ error: "Número de telefone inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const cleanNumber = phone.replace(/\D/g, "");

    if (cleanNumber.length < 10 || cleanNumber.length > 11) {
      return new Response(
        JSON.stringify({ error: "Número de telefone inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const contact = officialContacts[cleanNumber];

    if (contact) {
      return new Response(
        JSON.stringify({
          status: "safe",
          name: contact.name,
          role: contact.role,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ status: "danger" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Validate contact error:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao validar contato. Tente novamente." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
