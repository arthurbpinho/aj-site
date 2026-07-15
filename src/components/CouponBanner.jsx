import { Ticket } from "lucide-react";
import Reveal from "./Reveal.jsx";

const COUPON_LINK = "https://www.youtube.com/watch?v=lxuYsou9L1g";

// Banner comemorativo de 1 ano da Academia. O banner inteiro é clicável,
// redirecionando para o cupom especial.
export default function CouponBanner({ className = "" }) {
  return (
    <Reveal className={className}>
      <a
        href={COUPON_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center gap-4 overflow-hidden bg-gold-500 px-6 py-4 text-center text-ink-950 transition hover:bg-gold-400 sm:flex-row sm:justify-center sm:gap-4 sm:text-left"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink-950 text-gold-400 shadow-sm transition group-hover:scale-105">
          <Ticket size={20} />
        </span>
        <p className="text-sm leading-snug sm:text-base">
          <strong className="font-semibold">
            Obrigado por 1 ano de Academia e 1000 inscritos!
          </strong>{" "}
          Fizemos um cupom especial para todos os nossos planos, clique no
          cupom para conferir.{" "}
          <span className="text-xs font-normal opacity-80">
            (Válido até 1 de agosto)
          </span>
        </p>
      </a>
    </Reveal>
  );
}
