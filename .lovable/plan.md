## Problema

O formulário em **Trabalhe Conosco** mostra "Candidatura enviada com sucesso!", mas nada é realmente enviado. A função `handleSubmit` (`src/pages/TrabalheConosco.tsx`, linhas 90-117) apenas simula o envio com um `setTimeout` e nunca chama a edge function `send-application` — que já está pronta e funcionando para mandar o e-mail com o PDF em anexo para `trabalheconosco@cantarelliadvocacia.com.br`.

## Solução

Substituir a simulação por uma chamada real à edge function, anexando o currículo em PDF.

### 1. `src/pages/TrabalheConosco.tsx` — reescrever `handleSubmit`
- Converter o PDF selecionado (`selectedFile`) para base64 usando `FileReader`, removendo o prefixo `data:...;base64,` (a função/Resend espera só o base64).
- Chamar `supabase.functions.invoke("send-application", { body: {...} })` com os campos do formulário + `fileName` e `fileBase64`.
- Tratar erro: se a chamada falhar, exibir toast de erro (`variant: "destructive"`) e **não** limpar o formulário.
- Em caso de sucesso, manter o toast de sucesso atual e limpar o formulário/arquivo.
- Importar o client: `import { supabase } from "@/integrations/supabase/client";`.

### 2. Validações leves (front-end)
- Garantir que `selectedFile` existe antes de enviar (botão já desabilita sem arquivo, mas reforçar no handler).
- Limite de tamanho do PDF (ex.: máx. 5MB) com toast de erro, evitando payloads grandes na edge function.

## Detalhes técnicos
- O `fileBase64` deve ser apenas a parte base64 (sem o prefixo data URL), pois o anexo do Resend é montado como `{ filename, content: fileBase64 }`.
- A edge function `send-application` já trata CORS, validação de campos obrigatórios e anexo — nenhuma mudança nela é necessária.
- `RESEND_API_KEY` já está configurada nos secrets.

## Verificação
- Preencher o formulário no preview, anexar um PDF e enviar.
- Conferir os logs da edge function `send-application` para confirmar "Email sent successfully" e ausência de erros.
