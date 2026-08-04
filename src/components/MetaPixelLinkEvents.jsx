import { useEffect } from "react";
import { trackMetaPixelEvent } from "../utils/metaPixel.js";

// Delegação de clique sitewide: cobre todo link de checkout do Hotmart
// (Header, Home, Trilha, Cursos, CursoDetalhe) e todo link de WhatsApp
// (WhatsAppFab), sem precisar de handler em cada botão.
export default function MetaPixelLinkEvents() {
  useEffect(() => {
    function handleClick(event) {
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.href;
      if (href.includes("pay.hotmart.com")) {
        trackMetaPixelEvent("InitiateCheckout");
      } else if (href.includes("wa.me/")) {
        trackMetaPixelEvent("Contact");
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
