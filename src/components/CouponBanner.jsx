import { Ticket } from "lucide-react";
import Reveal from "./Reveal.jsx";

// Banner comemorativo de 1 ano da Academia. O banner inteiro é clicável,
// levando à seção de Assinatura para conferir o cupom especial.
export default function CouponBanner({ className = "" }) {
  return (
    <Reveal className={className}>
      <a
        href="#planos"
        className="group relative flex flex-col items-center gap-4 overflow-hidden bg-gold-500 px-6 py-4 text-center text-ink-950 transition hover:bg-gold-400 sm:flex-row sm:justify-center sm:gap-4 sm:text-left"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink-950 text-gold-400 shadow-sm transition group-hover:scale-105">
          <Ticket size={20} />
        </span>
        <p className="text-sm leading-snug sm:text-base">
          <strong className="font-semibold">
            Obrigado por 1 ano de Academia e 1000 inscritos!
          </strong>{" "}
          O cupom especial <strong className="font-semibold">academia1ano</strong>{" "}
          foi prorrogado — agora exclusivo para o plano anual, até o dia
          15 de agosto.
        </p>
      </a>
    </Reveal>
  );
}
