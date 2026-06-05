import { useEffect, useMemo } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Clock,
  GraduationCap,
  ShieldCheck,
  Check,
  BookOpen,
  Users,
  Mail,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CoordinatorCard from "../components/CoordinatorCard.jsx";
import { asset } from "../utils/asset.js";
import { getCourseBySlug } from "../data/courses.js";
import { resolveCoordinators } from "../data/coordinators.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";

// Botão secundário, presente no topo e no rodapé: leva à assinatura mensal.
function SubscriptionHint({ tone = "light" }) {
  const base =
    tone === "dark"
      ? "text-ink-300 hover:text-ink-100"
      : "text-ink-600 hover:text-ink-800";
  return (
    <a
      href={PLAN_MONTHLY}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block max-w-sm text-sm leading-relaxed transition ${base}`}
    >
      Quer ter acesso a todos os grupos? Assine mensalmente clicando{" "}
      <span className="font-semibold text-gold-500 underline decoration-gold-500/50 underline-offset-2 group-hover:decoration-gold-400">
        aqui
      </span>
      .
    </a>
  );
}

function Paragraphs({ items, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function CursoDetalhe() {
  const { slug } = useParams();
  const course = useMemo(() => getCourseBySlug(slug), [slug]);

  useEffect(() => {
    if (!course) return;
    const previous = document.title;
    document.title = `${course.title} — Academia Junguiana`;
    return () => {
      document.title = previous;
    };
  }, [course]);

  if (!course) return <Navigate to="/cursos" replace />;

  const coords = resolveCoordinators(course.coordinators);
  const aboutHeading =
    course.format === "Minicurso"
      ? "Sobre o minicurso"
      : course.format === "Curso"
        ? "Sobre o curso"
        : "Sobre o grupo de estudos";

  const facts = [
    { icon: Clock, label: "Carga horária", value: course.duration },
    { icon: GraduationCap, label: "Certificado", value: "Incluso" },
    { icon: ShieldCheck, label: "Acesso", value: "Avulso e vitalício" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-950 text-ink-50">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 15%, rgba(214,179,101,0.3), transparent 45%), radial-gradient(circle at 10% 85%, rgba(95,142,99,0.32), transparent 45%)",
          }}
        />
        <div className="container-wide relative grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-24">
          <div>
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink-300 transition hover:text-gold-400"
            >
              <ArrowLeft size={14} /> Nossos grupos e cursos
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-paper/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-ink-100 ring-1 ring-ink-50/15">
                {course.format}
              </span>
              {course.ongoing ? (
                <span className="rounded-full bg-gold-500/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold-300 ring-1 ring-gold-500/30">
                  Em andamento
                </span>
              ) : (
                <span className="rounded-full bg-forest-800/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-ink-200 ring-1 ring-ink-50/10">
                  Gravações
                </span>
              )}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-5 font-serif text-4xl leading-[1.08] md:text-5xl"
            >
              {course.title}
            </motion.h1>
            {course.subtitle && (
              <p className="mt-3 font-serif text-xl italic text-gold-400">
                {course.subtitle}
              </p>
            )}
            {course.book && (
              <p className="mt-4 max-w-xl text-sm text-ink-300">
                A partir da obra{" "}
                <span className="text-ink-100">{course.book.title}</span>, de{" "}
                <span className="text-ink-100">{course.book.author}</span>.
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {facts.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-2 text-sm text-ink-200"
                >
                  <f.icon size={16} className="text-gold-400" />
                  <span className="text-ink-400">{f.label}:</span> {f.value}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-start gap-4">
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-base"
              >
                <ShoppingCart size={18} /> Comprar as gravações
              </a>
              <SubscriptionHint tone="dark" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-gold-500/25 via-forest-700/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl bg-ink-900 shadow-2xl ring-1 ring-ink-50/10">
              <div className="aspect-[4/5] w-full">
                <img
                  src={asset(course.image)}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aviso de grupo em andamento */}
      {course.ongoing && (
        <section className="border-b border-ink-200 bg-gold-500/10">
          <div className="container-wide flex items-start gap-3 py-4 text-sm text-ink-700">
            <Users size={18} className="mt-0.5 shrink-0 text-gold-600" />
            <p>
              Este grupo ainda está <strong>em andamento</strong>, com encontros
              síncronos exclusivos para assinantes. Na compra avulsa, você garante
              o acesso vitalício às gravações já disponíveis e também às próximas
              gravações deste curso, mas não terá acesso às aulas síncronas, que
              são reservadas aos assinantes.
            </p>
          </div>
        </section>
      )}

      {/* CONTEÚDO */}
      <article className="container-prose py-16 md:py-20">
        {/* A obra */}
        {course.synopsis && (
          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
              A obra
            </p>
            {course.book && (
              <h2 className="mt-3 font-serif text-3xl text-forest-900 leading-tight">
                {course.book.title}
              </h2>
            )}
            <Paragraphs
              items={course.synopsis}
              className="mt-5 text-base text-ink-700"
            />
          </Reveal>
        )}

        {/* Vida do autor */}
        {course.authorBio && (
          <Reveal className="mb-14">
            <div className="rounded-2xl border border-ink-200 bg-paper p-7 md:p-9">
              <div className="flex items-center gap-2 text-gold-600">
                <BookOpen size={16} />
                <p className="text-xs uppercase tracking-[0.3em]">Sobre o autor</p>
              </div>
              <h3 className="mt-3 font-serif text-2xl text-forest-900">
                {course.authorName}
                {course.authorDates && (
                  <span className="ml-2 align-middle text-base font-normal text-ink-500">
                    {course.authorDates}
                  </span>
                )}
              </h3>
              <Paragraphs
                items={course.authorBio}
                className="mt-4 text-sm text-ink-700"
              />
            </div>
          </Reveal>
        )}

        {/* Descrição do grupo/curso */}
        <Reveal className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            {aboutHeading}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-forest-900 leading-tight">
            {course.title}
          </h2>
          <Paragraphs
            items={course.about}
            className="mt-5 text-base text-ink-700"
          />
        </Reveal>

        {/* Conteúdo / módulos */}
        {course.modules && (
          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
              O que você vai aprender
            </p>
            <ul className="mt-5 space-y-3">
              {course.modules.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-ink-200 bg-paper px-4 py-3 text-sm text-ink-700"
                >
                  <span className="mt-0.5 inline-grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-800 text-ink-50">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            {course.modulesNote && (
              <Paragraphs
                items={course.modulesNote}
                className="mt-6 text-base text-ink-700"
              />
            )}
          </Reveal>
        )}
      </article>

      {/* COORDENAÇÃO */}
      {coords.length > 0 && (
        <section className="bg-ink-100/60 py-20">
          <div className="container-wide">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
                Coordenação
              </p>
              <h2 className="mt-3 font-serif text-3xl text-forest-900 md:text-4xl">
                {coords.length > 1
                  ? "Quem conduz este grupo"
                  : "Quem conduz este curso"}
              </h2>
            </Reveal>
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-6">
              {coords.map((person) => (
                <Reveal key={person.id} className="w-full sm:w-[330px]">
                  <CoordinatorCard person={person} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CERTIFICADO E ACESSO */}
      <section className="container-wide py-16">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-ink-200 bg-paper p-8 md:grid-cols-3 md:p-10">
            <div className="flex flex-col">
              <GraduationCap className="text-forest-700" size={24} />
              <h3 className="mt-4 font-serif text-xl text-forest-900">
                Certificado
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                O curso vale certificado, que pode ser solicitado na própria
                plataforma ou pelo e-mail{" "}
                <a
                  href="mailto:academiajunguiana@gmail.com"
                  className="inline-flex items-center gap-1 text-forest-700 underline-offset-2 hover:underline"
                >
                  <Mail size={13} /> academiajunguiana@gmail.com
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col">
              <ShieldCheck className="text-forest-700" size={24} />
              <h3 className="mt-4 font-serif text-xl text-forest-900">
                Acesso vitalício
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                A compra é avulsa e o acesso é vitalício: você adquire uma vez e
                assiste às gravações quando e quantas vezes quiser.
              </p>
            </div>
            <div className="flex flex-col">
              <BookOpen className="text-forest-700" size={24} />
              <h3 className="mt-4 font-serif text-xl text-forest-900">
                Ou assine tudo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Se preferir, há a opção de assinatura, com todos os conteúdos da
                Academia inclusos. Escolha o que fizer mais sentido para você.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="container-wide pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-forest-900 px-8 py-12 text-ink-50 md:px-16 md:py-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 20%, rgba(214,179,101,0.3), transparent 45%), radial-gradient(circle at 85% 80%, rgba(95,142,99,0.35), transparent 45%)",
              }}
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-400">
                  {course.format} · {course.duration}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  Leve as gravações de {course.title}.
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-300">
                  Acesso avulso e vitalício, com certificado. Compre apenas este
                  conteúdo — ou assine a Academia e tenha todos os grupos e cursos
                  inclusos.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-base"
                >
                  <ShoppingCart size={18} /> Comprar as gravações
                </a>
                <SubscriptionHint tone="dark" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
