import { ArrowRight } from "lucide-react";
import { asset } from "../utils/asset.js";

// Cartão de um coordenador (foto, nome, papel, bio e link).
// Fonte única reutilizada na Home, na página de cursos e nas páginas de venda.
export default function CoordinatorCard({ person }) {
  const firstName = person.name.split(" ")[0];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-paper p-8 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mx-auto h-28 w-28 shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-500/40 via-forest-700/30 to-transparent blur-md opacity-0 transition group-hover:opacity-100" />
        <img
          src={asset(person.image)}
          alt={person.name}
          loading="lazy"
          className="relative h-28 w-28 rounded-full object-cover ring-2 ring-paper shadow-md ring-offset-2 ring-offset-ink-100"
        />
      </div>
      <h3 className="mt-6 text-center font-serif text-2xl text-forest-900">
        {person.name}
      </h3>
      <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-gold-600">
        {person.role}
      </p>
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />
      <p className="text-sm leading-relaxed text-ink-700">{person.bio}</p>
      <a
        href={person.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 self-start text-xs uppercase tracking-[0.2em] text-forest-700 transition hover:text-gold-600"
      >
        Conheça mais sobre {firstName} <ArrowRight size={14} />
      </a>
    </article>
  );
}
