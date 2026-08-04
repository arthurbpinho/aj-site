// Aplica a escolha de consentimento ao Pixel da Meta já carregado via index.html.
// O pixel nasce em modo 'revoke' (sem gravar cookie nem enviar evento) até isto ser chamado com true.
export function setMetaPixelMarketingConsent(granted) {
  if (typeof window.fbq !== "function") return;
  window.fbq("consent", granted ? "grant" : "revoke");
  if (granted) {
    window.fbq("track", "PageView");
  }
}
