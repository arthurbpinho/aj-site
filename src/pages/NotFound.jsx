import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-prose grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold-600">404</p>
        <h1 className="mt-4 font-serif text-5xl text-forest-900">
          Página não encontrada
        </h1>
        <p className="mt-4 text-ink-600">
          A página que você buscou não existe ou foi movida.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft size={16} /> Voltar ao início
        </Link>
      </div>
    </section>
  );
}
