import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, GraduationCap, Lock, MessageCircle, Music, Play, X } from "lucide-react";
import { asset } from "../utils/asset.js";

function InstagramIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
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
const SUBSCRIBERS_URL = "https://assinatura.academiajunguiana.com.br/";
const LIVE_URL = "https://www.youtube.com/watch?v=F-tHMkAxEuo";
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

function LinkCard({ icon: Icon, title, subtitle, onClick, href }) {
  const inner = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-400 ring-1 ring-forest-700">
        <Icon size={18} />
      </span>
      <span className="flex flex-1 flex-col text-left">
        <span className="text-base font-medium text-forest-950 leading-tight">
          {title}
        </span>
        {subtitle && (
          <span className="text-xs text-ink-600 leading-snug mt-0.5">
            {subtitle}
          </span>
        )}
      </span>
      <ArrowRight
        size={16}
        className="shrink-0 text-ink-500 transition-transform group-hover:translate-x-1 group-hover:text-forest-800"
      />
    </>
  );
  const base =
    "group flex w-full items-center gap-4 rounded-2xl bg-paper px-5 py-4 shadow-md ring-1 ring-forest-200/60 transition hover:-translate-y-0.5 hover:shadow-xl hover:ring-forest-300";
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/70 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-paper p-7 shadow-2xl ring-1 ring-forest-200"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-ink-500 transition hover:bg-ink-100 hover:text-forest-900"
            >
              <X size={18} />
            </button>
            {title && (
              <h3 className="pr-8 font-serif text-2xl leading-snug text-forest-950">
                {title}
              </h3>
            )}
            <div className="mt-4 text-sm leading-relaxed text-ink-700">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Bioinsta() {
  const [animusOpen, setAnimusOpen] = useState(false);
  const [podcastOpen, setPodcastOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(200,156,68,0.30), transparent 45%), radial-gradient(circle at 85% 80%, rgba(95,142,99,0.35), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-5 pt-12 pb-10">
        <div className="flex flex-col items-center text-center">
          <a href={SITE_URL} aria-label="Academia Junguiana">
            <img
              src={asset("/midias/logos/logoverdeescura.png")}
              alt="Academia Junguiana"
              className="h-20 w-20 rounded-full bg-paper p-2 shadow-xl ring-2 ring-gold-400/40"
            />
          </a>
          <h1 className="mt-5 font-serif text-3xl leading-tight">
            Academia Junguiana
          </h1>
          <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            Psicologia Analítica
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-200">
            Nessa página você encontra todos os nossos links, diretamente do
            seu Instagram para a Academia Junguiana.
          </p>
        </div>

        <a
          href={SITE_URL}
          className="group relative mt-9 block overflow-hidden rounded-2xl bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 p-[1.5px] shadow-2xl transition hover:-translate-y-0.5"
        >
          <span className="relative flex flex-col gap-1 rounded-[14px] bg-forest-900 px-6 py-5 ring-1 ring-gold-400/30">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400">
              Destaque
            </span>
            <span className="font-serif text-xl leading-snug text-ink-50">
              Assine a Academia Junguiana
            </span>
            <span className="text-sm text-ink-300">
              Acesso completo aos nossos grupos e cursos.
            </span>
            <span className="mt-3 inline-flex items-center gap-1 self-start rounded-full bg-gold-500 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-ink-950 transition group-hover:bg-gold-400">
              Assinar agora <ArrowRight size={14} />
            </span>
          </span>
        </a>

        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex items-center gap-3 rounded-2xl bg-paper/10 px-5 py-3.5 ring-1 ring-ink-50/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-paper/15"
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
            icon={Lock}
            title="Animus e Anima"
            subtitle="Exclusivo para assinantes"
            onClick={() => setAnimusOpen(true)}
          />
          <LinkCard
            icon={MessageCircle}
            title="O Homem e Seus Símbolos"
            subtitle="Grupo de WhatsApp"
            href="https://chat.whatsapp.com/CKyssu3cwTGKjEf8FNcc4r"
          />
          <LinkCard
            icon={MessageCircle}
            title="O Alienista e a Psique"
            subtitle="Grupo gratuito · WhatsApp"
            href="https://chat.whatsapp.com/Ff2C5hvhbBq6kMnE7ZF2Lx"
          />
          <LinkCard
            icon={MessageCircle}
            title="Tipos Psicológicos"
            subtitle="Grupo gratuito · WhatsApp"
            href="https://chat.whatsapp.com/GqwEgUue1SkIByZgegi3zP"
          />
          <LinkCard
            icon={MessageCircle}
            title="Psicologia e Marketing"
            subtitle="Grupo gratuito · WhatsApp"
            href="https://chat.whatsapp.com/ICRPMjNWfS729PkmpIKI2w"
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
            className="grid h-12 w-12 place-items-center rounded-full bg-paper/10 text-ink-50 ring-1 ring-ink-50/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-paper hover:text-forest-900"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="grid h-12 w-12 place-items-center rounded-full bg-paper/10 text-ink-50 ring-1 ring-ink-50/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-paper hover:text-forest-900"
          >
            <YoutubeIcon size={20} />
          </a>
        </div>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.25em] text-ink-400">
          academiajunguiana.com
        </p>
      </div>

      <Modal
        open={animusOpen}
        onClose={() => setAnimusOpen(false)}
        title="Animus e Anima"
      >
        <p>
          Esse é um grupo <strong>exclusivo para assinantes</strong> da
          Academia Junguiana.
        </p>
        <p className="mt-3">
          Você pode assistir à <strong>primeira aula gratuitamente</strong> em
          nossa plataforma em{" "}
          <a
            href={SUBSCRIBERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest-800 underline-offset-4 hover:underline"
          >
            assinatura.academiajunguiana.com
          </a>{" "}
          e, caso goste, basta assinar para ter acesso ao curso completo e a
          todos os demais grupos e cursos da Academia.
        </p>
        <a
          href={SITE_URL}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-ink-50 transition hover:bg-forest-700"
        >
          Assine aqui <ArrowRight size={14} />
        </a>
      </Modal>

      <Modal
        open={podcastOpen}
        onClose={() => setPodcastOpen(false)}
        title="Experiências Junguianas"
      >
        <p className="text-ink-600">
          Escolha onde prefere ouvir o nosso podcast:
        </p>
        <div className="mt-5 space-y-3">
          {PODCAST_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl bg-forest-900 px-5 py-3.5 text-ink-50 transition hover:-translate-y-0.5 hover:bg-forest-800"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-paper/10 text-gold-400 ring-1 ring-paper/15">
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
