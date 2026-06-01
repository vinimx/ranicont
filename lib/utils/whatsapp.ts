import { SITE } from "@/lib/data/site";

export interface WhatsAppPayload {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export function gerarLinkWhatsApp(payload: WhatsAppPayload): string {
  const texto = `Olá! Meu nome é ${payload.nome}.
Email: ${payload.email}
Telefone: ${payload.telefone}
Mensagem: ${payload.mensagem}`;

  const encoded = encodeURIComponent(texto);
  return `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encoded}`;
}

export function gerarLinkWhatsAppSimples(mensagem: string): string {
  const encoded = encodeURIComponent(mensagem);
  return `https://api.whatsapp.com/send?phone=${SITE.whatsapp}&text=${encoded}`;
}

export function gerarLinkWhatsAppCTA(servico?: string): string {
  const texto = servico
    ? `Olá! Gostaria de saber mais sobre o serviço de ${servico}.`
    : "Olá! Gostaria de mais informações sobre os serviços do Escritório Ranicont.";
  return gerarLinkWhatsAppSimples(texto);
}
