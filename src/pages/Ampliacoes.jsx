import { motion } from "framer-motion";
import { ArrowRight, Headphones, Infinity as InfinityIcon } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { ampliacoes, ampliacoesIntro } from "../data/ampliacoes.js";
import { asset } from "../utils/asset.js";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(214,179,101,0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(95,142,99,0.3), transparent 45%)",
        }}
      />
      <div className="container-wide relative py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-gold-400"
        >
          Ampliações
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl leading-tight"
        >
          Encontros únicos,<br /><span className="italic text-gold-400">gravações avulsas</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed"
        >
          {ampliacoesIntro}
        </motion.p>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-300">
          <span className="inline-flex items-center gap-2">
            <Headphones size={16} className="text-gold-400" /> Acesso vitalício
          </span>
          <span className="inline-flex items-center gap-2">
            <InfinityIcon size={16} className="text-gold-400" /> Conteúdo único de cada encontro
          </span>
        </div>
      </div>
    </section>
  );
}

function AmpliacaoCard({ item, index }) {
  return (
    <Reveal delay={index * 0.06}>
      <article className="group relative grid gap-6 overflow-hidden rounded-3xl bg-paper p-6 ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[300px_1fr] md:gap-8 md:p-8">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink-200">
          <img
            src={asset(item.image)}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/45 via-ink-950/0 to-transparent"
          />
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-ink-950/55 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink-50 backdrop-blur">
              Ampliação · {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-600">
            {item.author}
          </p>
          <h2 className="mt-2 font-serif text-3xl text-forest-900 leading-tight">
            {item.title}
          </h2>
          <p className="mt-4 text-base text-ink-700 leading-relaxed">
            {item.description}
          </p>
          <div className="mt-6">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Adquirir a gravação <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Ampliacoes() {
  return (
    <>
      <Hero />
      <section className="container-wide py-20">
        <div className="grid gap-8">
          {ampliacoes.map((a, i) => (
            <AmpliacaoCard key={a.id} item={a} index={i} />
          ))}
        </div>
      </section>

      <section className="container-wide pb-24">
        <Reveal>
          <div className="rounded-3xl bg-forest-900 px-8 py-12 text-center text-ink-50 md:px-16 md:py-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
              Sobre as Ampliações
            </p>
            <h3 className="mx-auto mt-3 max-w-2xl font-serif text-3xl md:text-4xl leading-tight">
              Encontros vivos que continuam disponíveis para sempre.
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-ink-300 leading-relaxed">
              Cada Ampliação é um seminário curto, profundo e independente.
              Você adquire a gravação e tem acesso vitalício para revisitar o
              conteúdo quando precisar.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
