import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Sprout,
  Layers,
  Mountain,
  Headphones,
  BookMarked,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { asset } from "../utils/asset.js";
import {
  trilhaIntro,
  trilhaStages,
  trilhaAdicionais,
} from "../data/trilha.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";
const PLAN_ANNUAL = "https://pay.hotmart.com/E100577277S?off=e2lx8j1u";

const ADICIONAIS_STATION = {
  id: "adicionais",
  step: "+",
  level: "Sem ordem fixa",
  title: "Adicionais",
  description:
    "Cursos e grupos que você encaixa em qualquer ponto da trilha — escolha conforme o seu interesse e o seu momento.",
};

const STATIONS = [...trilhaStages, ADICIONAIS_STATION];

const STAGE_ICONS = {
  "comece-por-aqui": Sprout,
  aprofundando: Layers,
  desafio: Mountain,
  adicionais: BookMarked,
};

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
          Trilha da Academia
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl leading-tight"
        >
          Por onde
          <br />
          <span className="italic text-gold-400">começar?</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed"
        >
          {trilhaIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          {STATIONS.map((s, i) => (
            <div key={s.id} className="flex items-center gap-3">
              <a
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full bg-paper/5 px-4 py-2 text-sm text-ink-200 ring-1 ring-ink-50/15 backdrop-blur transition hover:bg-paper/10 hover:text-ink-50"
              >
                <span className="font-serif text-gold-400">{s.step}</span>
                {s.title}
              </a>
              {i < STATIONS.length - 1 && (
                <ArrowRight size={14} className="hidden text-ink-500 sm:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrailCourseCard({ course }) {
  return (
    <article className="group flex gap-4 rounded-2xl bg-paper p-3 ring-1 ring-ink-200 transition hover:-translate-y-0.5 hover:shadow-lg">
      {/* Miniatura pequena, recortada pelo topo (onde fica o título da arte) */}
      <div className="aspect-[16/11] w-28 shrink-0 overflow-hidden rounded-xl bg-ink-200 sm:w-32">
        <img
          src={asset(course.image)}
          alt={course.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-serif text-base text-forest-900 leading-snug">
          {course.title}
        </h3>
        {course.subtitle && (
          <p className="text-xs italic text-ink-500">{course.subtitle}</p>
        )}
        <p className="mt-1 text-xs text-ink-600 leading-relaxed line-clamp-2">
          {course.description}
        </p>
        <div className="mt-3 flex flex-col gap-2 pt-1 sm:flex-row">
          <Link
            to={`/cursos/${course.id}`}
            className="inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-forest-800 px-3 py-2 text-[11px] font-medium text-ink-50 transition hover:bg-forest-700 sm:w-auto sm:flex-1"
          >
            Conheça mais <ArrowRight size={12} />
          </Link>
          <a
            href={PLAN_MONTHLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-full bg-gold-500 px-3 py-2 text-[11px] font-medium text-ink-950 transition hover:bg-gold-400 sm:w-auto sm:flex-1"
          >
            Assinar
          </a>
        </div>
      </div>
    </article>
  );
}

function AmpliacoesCard() {
  return (
    <Link
      to="/ampliacoes"
      className="group flex items-center gap-4 rounded-2xl bg-forest-900 p-3 text-ink-50 ring-1 ring-forest-800 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="grid aspect-[16/11] w-28 shrink-0 place-items-center rounded-xl bg-forest-800 sm:w-32">
        <Headphones size={26} className="text-gold-400" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="font-serif text-base leading-snug">Ampliações</h3>
        <p className="mt-1 text-xs text-ink-300 leading-relaxed line-clamp-2">
          Seminários curtos e independentes, em gravações avulsas e vitalícias.
        </p>
        <span className="mt-3 inline-flex items-center gap-1 pt-1 text-[11px] uppercase tracking-[0.2em] text-gold-400">
          Ver Ampliações
          <ArrowRight size={13} className="transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function Station({ station, children }) {
  const Icon = STAGE_ICONS[station.id];
  return (
    <div id={station.id} className="relative flex scroll-mt-28 gap-4 md:gap-8">
      {/* Nó da trilha, centralizado sobre a linha */}
      <div className="relative z-10 flex w-12 shrink-0 justify-center md:w-16">
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring", stiffness: 220, damping: 15 }}
          className="mt-1 grid h-12 w-12 place-items-center rounded-full bg-forest-800 font-serif text-base text-ink-50 shadow-md ring-4 ring-ink-50 md:h-14 md:w-14 md:text-lg"
        >
          {station.step}
        </motion.span>
      </div>

      {/* Conteúdo da estação */}
      <div className="min-w-0 flex-1 pt-1">
        <Reveal>
          <div className="flex items-center gap-2 text-gold-600">
            {Icon && <Icon size={16} />}
            <p className="text-xs uppercase tracking-[0.3em]">{station.level}</p>
          </div>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-forest-900 leading-tight">
            {station.title}
          </h2>
          {station.description && (
            <p className="mt-3 max-w-2xl text-base text-ink-600 leading-relaxed">
              {station.description}
            </p>
          )}
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

function CourseGrid({ courses, extra }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {courses.map((c, i) => (
        <Reveal key={c.id} delay={(i % 2) * 0.08}>
          <TrailCourseCard course={c} />
        </Reveal>
      ))}
      {extra && (
        <Reveal delay={(courses.length % 2) * 0.08}>{extra}</Reveal>
      )}
    </div>
  );
}

function Trail() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 30%", "end 70%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.4,
  });

  return (
    <section className="container-wide py-16 md:py-20">
      <div ref={ref} className="relative">
        {/* Linha de fundo da trilha */}
        <span
          aria-hidden
          className="absolute left-6 top-3 bottom-3 w-px -translate-x-1/2 bg-ink-200 md:left-8"
        />
        {/* Linha que se preenche conforme a rolagem, ligando os pontos */}
        <motion.span
          aria-hidden
          style={{ scaleY: fill }}
          className="absolute left-6 top-3 bottom-3 w-[3px] -translate-x-1/2 origin-top rounded-full bg-gradient-to-b from-forest-500 via-forest-600 to-gold-500 md:left-8"
        />

        <div className="space-y-16 md:space-y-24">
          {trilhaStages.map((stage) => (
            <Station key={stage.id} station={stage}>
              <CourseGrid courses={stage.courses} />
            </Station>
          ))}
          <Station station={ADICIONAIS_STATION}>
            <CourseGrid courses={trilhaAdicionais} extra={<AmpliacoesCard />} />
          </Station>
        </div>
      </div>
    </section>
  );
}

function SubscriptionCTA() {
  return (
    <section className="container-wide pb-24 pt-4">
      <Reveal>
        <div className="grid items-center gap-8 rounded-3xl bg-forest-900 px-8 py-12 text-ink-50 md:grid-cols-[1.2fr_1fr] md:px-16 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
              A trilha inteira, num só lugar
            </p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
              Toda a trilha está inclusa na assinatura.
            </h3>
            <p className="mt-4 max-w-xl text-ink-300 leading-relaxed">
              Em vez de comprar curso por curso, a assinatura libera todos os
              cursos e grupos da Academia — do introdutório ao mais avançado —
              além dos encontros síncronos e da comunidade.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={PLAN_MONTHLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Assinar mensal
              </a>
              <a
                href={PLAN_ANNUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-paper text-forest-950 hover:bg-ink-100 hover:-translate-y-0.5"
              >
                Plano anual · R$ 500
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-400 md:text-right">
              Plano anual à vista, com R$ 100 de desconto, ou em até 9x
              conforme as condições de parcelamento.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Trilha() {
  return (
    <>
      <Hero />
      <Trail />
      <SubscriptionCTA />
    </>
  );
}
