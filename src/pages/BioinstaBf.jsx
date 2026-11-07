// Versão promocional de Black Friday ("Black November") da página /bioinsta.
//
// A página original (pages/Bioinsta.jsx) segue intacta; o redirecionamento de
// /bioinsta para /bioinstabf é controlado por BLACK_FRIDAY_ACTIVE em data/promo.js.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  LayoutGrid,
  MessageCircle,
  Music,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { asset } from "../utils/asset.js";
import BlackFridayCountdown from "../components/BlackFridayCountdown.jsx";
import { BLACK_FRIDAY_COUPON } from "../data/promo.js";

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}

const SITE_URL = "https://academiajunguiana.com/";
const LIVE_URL = "https://www.youtube.com/@academiajunguiana/streams";
const INSTAGRAM_URL = "https://www.instagram.com/academiajunguiana/";
const YOUTUBE_URL = "https://www.youtube.com/@academiajunguiana";

const PODCAST_LINKS = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/4VhXMbs6EmxngOhwoY0Jm9?utm_medium=share&utm_source=instabio",
    icon: Music,
  },
  {
    label: "YouTube Music",
    href: "https://music.youtube.com/playlist?list=PLcM9ArOJH64n4vHwCS8jM3NkQ7iw2DJGw",
    icon: Music,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=OjhDZOX31lg&list=PLcM9ArOJH64n4vHwCS8jM3NkQ7iw2DJGw",
    icon: YoutubeIcon,
  },
];

function LinkCard({ icon: Icon, image, title, subtitle, onClick, href }) {
  const inner = (
    <>
      {image ? (
        <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full ring-1 ring-gold-500/40">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </span>
      ) : (
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/70 text-gold-400 ring-1 ring-gold-500/35">
          <Icon size={18} />
        </span>
      )}
      <span className="flex flex-1 flex-col text-left">
        <span className="text-base font-medium leading-tight text-ink-50 transition-colors group-hover:text-gold-400">
          {title}
        </span>
        {subtitle && (
          <span className="mt-0.5 text-xs leading-snug text-ink-300">
            {subtitle}
          </span>
        )}
      </span>
      <ArrowRight
        size={16}
        className="shrink-0 text-gold-400/75 transition-transform group-hover:translate-x-1 group-hover:text-gold-400"
      />
    </>
  );
  const base =
    "group flex w-full items-center gap-4 rounded-2xl bg-forest-900/75 px-5 py-4 shadow-md ring-1 ring-ink-50/12 backdrop-blur transition hover:-translate-y-0.5 hover:bg-forest-900 hover:shadow-xl hover:ring-gold-500/45";
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={base}>
      {inner}
    </button>
  );
}

function Modal({ open, onClose, children, title }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-forest-950 p-7 text-ink-50 shadow-2xl ring-1 ring-gold-500/35"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-300 transition hover:bg-forest-900 hover:text-gold-400"
            >
              <X size={18} />
            </button>
            {title && (
              <h3 className="pr-8 font-serif text-2xl leading-snug text-ink-50">
                {title}
              </h3>
            )}
            <div className="mt-4 text-sm leading-relaxed text-ink-200">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BioinstaBf() {
  const [podcastOpen, setPodcastOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 10%, rgba(214,179,101,0.22), transparent 45%), radial-gradient(ellipse at 90% 85%, rgba(95,142,99,0.32), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <BlackFridayCountdown />

      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-9 pb-10">
        <div className="flex flex-col items-center text-center">
          <a href={SITE_URL} aria-label="Academia Junguiana">
            <img
              src={asset("/midias/logos/logobranca.png")}
              alt="Academia Junguiana"
              className="h-20 w-20 rounded-full bg-black/60 p-2.5 shadow-[0_12px_32px_-8px_rgba(200,156,68,0.45)] ring-2 ring-gold-400/60"
            />
          </a>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.26em] text-gold-400 ring-1 ring-gold-500/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            Esquenta Black Friday
          </p>

          <h1 className="mt-3 font-serif text-3xl leading-tight text-ink-50">
            Academia Junguiana
          </h1>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            Psicologia Analítica
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-200">
            Nessa página você encontra todos os nossos links, diretamente do
            seu Instagram para a Academia Junguiana.
          </p>
        </div>

        <a
          href={SITE_URL}
          className="group relative mt-8 block overflow-hidden rounded-2xl bg-gradient-to-br from-gold-400 via-gold-600/50 to-gold-400 p-[2px] shadow-2xl transition hover:-translate-y-0.5 aj-card-glow"
        >
          <span className="relative flex flex-col gap-1.5 overflow-hidden rounded-[14px] bg-gradient-to-b from-[#0b0a07] to-black px-6 py-5 aj-shine">
            <span className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.26em] bf-gold-text">
                <Sparkles size={13} className="text-gold-400" />
                BLACK NOVEMBER
              </span>
              <span className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-2.5 py-0.5 font-sans text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-950">
                Até 20% OFF
              </span>
            </span>
            <span className="mt-1 font-serif text-xl leading-snug text-ink-50">
              Aproveite o cupom{" "}
              <span className="font-mono text-base font-bold text-gold-400">
                {BLACK_FRIDAY_COUPON}
              </span>{" "}
              para assinar a Academia Junguiana
            </span>
            <span className="text-sm text-ink-300">
              Acesso completo aos nossos grupos e cursos.
            </span>
            <span className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-[0_8px_22px_-6px_rgba(214,179,101,0.8)] transition group-hover:brightness-110">
              Assinar agora <ArrowRight size={14} />
            </span>
          </span>
        </a>

        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex items-center gap-3 rounded-2xl bg-black/55 px-5 py-3.5 ring-1 ring-gold-500/25 backdrop-blur transition hover:-translate-y-0.5 hover:bg-black/75 hover:ring-gold-500/50"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#ff0000] text-paper">
            <YoutubeIcon size={18} />
          </span>
          <span className="flex-1 text-sm font-medium text-ink-50">
            Participe da nossa live todas as terças!
          </span>
          <ArrowRight
            size={16}
            className="shrink-0 text-gold-400 transition-transform group-hover:translate-x-1"
          />
        </a>

        <div className="mt-6 space-y-3">
          <LinkCard
            image={asset("/midias/grupobio.jpeg")}
            title="A prática da psicoterapia"
            subtitle="Grupo de WhatsApp para interessados em participar"
            href="https://chat.whatsapp.com/DdLYkKwXJRxDKctRKatVy5"
          />
          <LinkCard
            icon={MessageCircle}
            title="Tipos Psicológicos"
            subtitle="Grupo gratuito · WhatsApp"
            href="https://chat.whatsapp.com/GqwEgUue1SkIByZgegi3zP"
          />
          <LinkCard
            icon={BookOpen}
            title="Ampliações"
            subtitle="Seminários avulsos sobre temas diversos para adquirir e ter o primeiro contato com a Academia"
            href="https://academiajunguiana.com/ampliacoes/"
          />
          <LinkCard
            icon={LayoutGrid}
            title="Cursos e Grupos"
            subtitle="Conheça todos os cursos e grupos da Academia"
            href="https://academiajunguiana.com/cursos"
          />
          <LinkCard
            icon={GraduationCap}
            title="Assine a Academia Junguiana"
            subtitle="Acesse todos os grupos e cursos"
            href={SITE_URL}
          />
          <LinkCard
            icon={Play}
            title="Experiências Junguianas"
            subtitle="Ouça nosso podcast"
            onClick={() => setPodcastOpen(true)}
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-12 w-12 place-items-center rounded-full bg-black/50 text-gold-400 ring-1 ring-gold-500/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gold-500 hover:text-ink-950"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="grid h-12 w-12 place-items-center rounded-full bg-black/50 text-gold-400 ring-1 ring-gold-500/30 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gold-500 hover:text-ink-950"
          >
            <YoutubeIcon size={20} />
          </a>
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.25em] text-ink-400">
          academiajunguiana.com
        </p>
      </div>

      <Modal
        open={podcastOpen}
        onClose={() => setPodcastOpen(false)}
        title="Experiências Junguianas"
      >
        <p className="text-ink-300">
          Escolha onde prefere ouvir o nosso podcast:
        </p>
        <div className="mt-5 space-y-3">
          {PODCAST_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-black/70 px-5 py-3.5 text-ink-50 ring-1 ring-gold-500/25 transition hover:-translate-y-0.5 hover:bg-forest-900 hover:ring-gold-500/50"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-500/15 text-gold-400 ring-1 ring-gold-500/35">
                <Icon size={16} />
              </span>
              <span className="flex-1 text-sm font-medium">{label}</span>
              <ArrowRight
                size={14}
                className="text-gold-400 transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </Modal>
    </div>
  );
}
