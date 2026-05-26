import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import Reveal from "./Reveal.jsx";

// Banner de entrada para a Trilha da Academia. Usado na Home (após os três
// passos) e na página de cursos/grupos avulsos.
export default function TrilhaBanner({ className = "" }) {
  return (
    <Reveal className={className}>
      <Link
        to="/trilha"
        className="group relative block overflow-hidden rounded-3xl bg-forest-900 text-ink-50 ring-1 ring-forest-800 transition hover:-translate-y-0.5 hover:shadow-2xl"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 20%, rgba(214,179,101,0.3), transparent 45%), radial-gradient(circle at 88% 80%, rgba(95,142,99,0.35), transparent 45%)",
          }}
        />
        <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="flex items-start gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-500 text-ink-950 shadow-sm">
              <Compass size={26} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Trilha da Academia
              </p>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl leading-tight">
                Não sabe por onde começar?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-ink-300 leading-relaxed">
                Montamos um caminho do introdutório ao mais profundo — do
                primeiro contato com Jung aos estudos mais densos.
              </p>
            </div>
          </div>
          <span className="btn-gold shrink-0 self-start md:self-auto">
            Veja por onde começar
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
