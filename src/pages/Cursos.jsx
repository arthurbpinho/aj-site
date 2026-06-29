import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../utils/asset.js";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Filter } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TrilhaBanner from "../components/TrilhaBanner.jsx";
import CoordinatorCard from "../components/CoordinatorCard.jsx";
import { courses } from "../data/courses.js";
import { coordinatorList } from "../data/coordinators.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";
const PLAN_ANNUAL = "https://pay.hotmart.com/E100577277S?off=e2lx8j1u";

function SubscriptionBanner() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(214,179,101,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(95,142,99,0.4), transparent 45%)",
        }}
      />
      <div className="container-wide relative grid gap-12 py-20 md:py-28 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-400"
          >
            Assinatura da Academia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]"
          >
            Acesse <span className="italic text-gold-400">todos</span> os cursos
            e grupos por um valor mensal acessível.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-ink-200 leading-relaxed"
          >
            Com a assinatura você não precisa comprar curso por curso. Cada
            material listado abaixo está incluído — somando aulas síncronas,
            grupos de discussão, gravações vitalícias e a comunidade.
          </motion.p>

          <ul className="mt-8 grid max-w-md gap-3 text-sm text-ink-200">
            {[
              "Acesso a todos os cursos e grupos",
              "Encontros síncronos com a equipe",
              "Comunidade exclusiva no WhatsApp",
              "Novos lançamentos incluídos automaticamente",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-0.5 inline-grid h-4 w-4 place-items-center rounded-full bg-gold-500 text-ink-950">
                  <Check size={10} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <div className="flex flex-wrap gap-3">
              <a href={PLAN_MONTHLY} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Assinar mensal · R$ 50/mês <ArrowRight size={16} />
              </a>
              <a
                href={PLAN_ANNUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-forest-900/60 ring-1 ring-ink-50/20 text-ink-50 hover:bg-forest-800"
              >
                Plano anual · R$ 500/ano
              </a>
            </div>
            <p className="mt-3 text-xs text-ink-300">
              Plano anual à vista, com R$ 100 de desconto, ou em até 9x
              conforme as condições de parcelamento.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold-500/20 via-forest-700/10 to-transparent blur-2xl" />
          <div className="relative rounded-3xl bg-paper/5 p-8 ring-1 ring-ink-50/10 backdrop-blur">
            <div className="grid grid-cols-3 gap-3">
              {courses.slice(0, 9).map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                  className="aspect-square overflow-hidden rounded-xl bg-ink-200/10 ring-1 ring-ink-50/10"
                >
                  <img
                    src={asset(c.image)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs uppercase tracking-[0.25em] text-ink-300">
              + de {courses.length} cursos inclusos · acesso completo
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CourseCard({ course, index }) {
  return (
    <Reveal delay={(index % 3) * 0.06}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-200">
          <img
            src={asset(course.image)}
            alt={course.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-ink-50 backdrop-blur">
            {course.tag}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl text-forest-900 leading-snug">
            {course.title}
          </h3>
          {course.subtitle && (
            <p className="mt-1 text-sm italic text-ink-500">{course.subtitle}</p>
          )}
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-600">
            <Clock size={12} /> {course.format} · {course.duration}
          </p>
          <p className="mt-3 text-sm text-ink-600 leading-relaxed">
            {course.description}
          </p>
          <Link to={`/cursos/${course.id}`} className="btn-primary mt-6">
            Conheça mais <ArrowRight size={16} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

const TAGS = ["Todos", "Curso", "Minicurso", "Grupo"];

export default function Cursos() {
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () => (filter === "Todos" ? courses : courses.filter((c) => c.tag === filter)),
    [filter]
  );

  return (
    <>
      <section className="container-wide py-20">
        <TrilhaBanner className="mb-14" />

        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
              Catálogo completo
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-forest-900 leading-tight">
              Conheça nossos cursos e grupos.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-ink-600 leading-relaxed">
              Cada um dos cursos abaixo pode ser adquirido individualmente — ou
              acessado por inteiro com a assinatura da Academia, logo abaixo.
            </p>
          </Reveal>

          <div className="flex items-center gap-2 rounded-full bg-ink-100 p-1">
            <Filter size={14} className="ml-3 text-ink-500" />
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  filter === t
                    ? "bg-forest-800 text-ink-50 shadow-sm"
                    : "text-ink-700 hover:text-forest-800"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>
      </section>

      <SubscriptionBanner />

      <section className="bg-ink-100/60 py-20">
        <div className="container-wide">
          <SectionTitle
            align="center"
            eyebrow="Quem coordena"
            title="Os coordenadores dos nossos grupos e cursos."
            subtitle="Clínicos e pesquisadores que conduzem os estudos da Academia. Em cada página de curso você encontra a coordenação específica daquele grupo."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
            {coordinatorList.map((person, i) => (
              <Reveal key={person.id} delay={i * 0.08}>
                <CoordinatorCard person={person} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide pb-24">
        <Reveal>
          <div className="grid items-center gap-8 rounded-3xl bg-forest-900 px-8 py-12 text-ink-50 md:grid-cols-[1.2fr_1fr] md:px-16 md:py-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                Vale a pena
              </p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
                Por R$ 50/mês você acessa tudo isso.
              </h3>
              <p className="mt-4 text-ink-300 leading-relaxed max-w-xl">
                A assinatura é mais barata do que comprar um único curso avulso —
                e dá acesso a todos os cursos, grupos e encontros síncronos da
                Academia.
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
    </>
  );
}
