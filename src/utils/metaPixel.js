import { getStoredConsent } from "./cookieConsent.js";

// Aplica a escolha de consentimento ao Pixel da Meta já carregado via index.html.
// O pixel nasce em modo 'revoke' (sem gravar cookie nem enviar evento) até isto ser chamado com true.
export function setMetaPixelMarketingConsent(granted) {
  if (typeof window.fbq !== "function") return;
  window.fbq("consent", granted ? "grant" : "revoke");
  if (granted) {
    window.fbq("track", "PageView");
  }
}

// Dispara um evento padrão do Pixel — só sai se marketing foi autorizado
// (checagem própria, além do 'consent' do fbq, na mesma linha do resto do gate de cookies).
export function trackMetaPixelEvent(eventName, params) {
  if (typeof window.fbq !== "function") return;
  if (!getStoredConsent()?.marketing) return;
  if (params) {
    window.fbq("track", eventName, params);
  } else {
    window.fbq("track", eventName);
  }
}
