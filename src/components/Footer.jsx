import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { asset } from "../utils/asset.js";

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-ink-100 mt-24">
      <div className="container-wide grid gap-10 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={asset("/midias/logos/logobranca.png")}
              alt=""
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="font-serif text-xl">Academia Junguiana</p>
              <p className="text-xs uppercase tracking-[0.25em] text-ink-300">
                Psicologia Analítica
              </p>
            </div>
          </div>
          <p className="text-sm text-ink-300 max-w-sm leading-relaxed">
            Estudo sério, acesso facilitado. Uma comunidade de estudo contínuo,
            crítico e intelectualmente honesto sobre Psicologia Analítica.
          </p>
        </div>

        <nav className="space-y-3">
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold-400">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="link-underline" to="/">Início</Link></li>
            <li><Link className="link-underline" to="/ampliacoes">Ampliações</Link></li>
            <li><Link className="link-underline" to="/blog">Blog</Link></li>
            <li><Link className="link-underline" to="/cursos">Nossos grupos e cursos</Link></li>
          </ul>
        </nav>

        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold-400">
            Encontre-nos
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@academiajunguiana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-100/20 transition hover:bg-ink-100 hover:text-forest-950 hover:-translate-y-0.5"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/academiajunguiana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-100/20 transition hover:bg-ink-100 hover:text-forest-950 hover:-translate-y-0.5"
            >
              <InstagramIcon />
            </a>
            <a
              href="mailto:academiajunguiana@gmail.com"
              aria-label="E-mail"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-100/20 transition hover:bg-ink-100 hover:text-forest-950 hover:-translate-y-0.5"
            >
              <Mail size={18} />
            </a>
          </div>
          <p className="text-xs text-ink-400">
            academiajunguiana@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-ink-100/10">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Academia Junguiana. Todos os direitos reservados.</p>
          <p>Feito com cuidado por um estudo que segue.</p>
        </div>
      </div>
    </footer>
  );
}
