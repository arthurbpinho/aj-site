import { useEffect, useState } from "react";
import { asset } from "../utils/asset.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Play,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Users,
  BookOpen,
  Check,
  ArrowRight,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { posts } from "../data/posts.js";
import { courses } from "../data/courses.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";
const PLAN_ANNUAL = "https://pay.hotmart.com/E100577277S?off=ev0tv4qt";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-ink-50 to-ink-100">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(36,57,39,0.25), transparent 40%), radial-gradient(circle at 85% 70%, rgba(200,156,68,0.28), transparent 45%)",
        }}
      />
      <div className="container-wide relative grid gap-12 py-20 md:grid-cols-2 md:py-28 md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-600"
          >
            <Sparkles size={14} /> Psicologia Analítica
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-5xl md:text-6xl leading-[1.05] text-forest-950"
          >
            Estudo sério,
            <br />
            <span className="italic text-forest-800">acesso facilitado.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-ink-700 leading-relaxed"
          >
            Uma formação séria e acessível em Psicologia Junguiana, diretamente
            da sua casa. Uma comunidade de estudo contínuo, crítico e
            intelectualmente honesto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#planos" className="btn-primary">
              Assinar a Academia <ArrowRight size={16} />
            </a>
            <Link to="/cursos" className="btn-ghost">
              Ver cursos e grupos
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-10 grid max-w-md gap-3 text-sm text-ink-700"
          >
            {[
              "Acesso a todos os cursos e grupos da Academia",
              "Encontros síncronos e gravações vitalícias",
              "Comunidade exclusiva no WhatsApp",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1 inline-grid h-4 w-4 place-items-center rounded-full bg-forest-700 text-ink-50">
                  <Check size={10} strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <VideoCTA />
        </motion.div>
      </div>
    </section>
  );
}

const YOUTUBE_VIDEO_ID = "UI59eJokGbU";

function VideoCTA() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-forest-800/20 via-gold-500/10 to-transparent blur-2xl" />
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-900 shadow-2xl ring-1 ring-ink-200/60">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Conheça a Academia Junguiana"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 grid place-items-center overflow-hidden"
            aria-label="Reproduzir vídeo"
          >
            <img
              src={`https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
              alt=""
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/25 to-ink-950/40 transition group-hover:from-ink-950/55" />
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-paper/95 text-forest-900 shadow-xl transition group-hover:scale-110">
              <Play size={28} className="ml-1" fill="currentColor" />
            </span>
            <span className="absolute bottom-5 left-5 right-5 text-left text-sm uppercase tracking-[0.25em] text-ink-50/90">
              Conheça a Academia
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function Pillars() {
  const items = [
    {
      icon: BookOpen,
      title: "Diversos cursos online",
      text: "Conteúdo em constante expansão, com abordagem profunda e acessível.",
    },
    {
      icon: GraduationCap,
      title: "Rigor teórico",
      text: "Aprofundamento alinhado à aplicação prática, sem perder o lastro técnico.",
    },
    {
      icon: Users,
      title: "Comunidade ativa",
      text: "Grupos síncronos, discussões e troca contínua com alunos de todo o Brasil.",
    },
  ];
  return (
    <section className="container-wide py-20">
      <SectionTitle
        eyebrow="Por que aprofundar seu estudo"
        title="Mais do que um curso — uma comunidade de estudo."
        subtitle="Comprometemo-nos a difundir o conhecimento científico sobre a Psicologia Analítica no Brasil com rigor, honestidade intelectual e acolhimento."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-ink-200 bg-paper p-7 transition hover:-translate-y-1 hover:border-forest-300 hover:shadow-xl">
              <p.icon className="text-forest-700" size={26} />
              <h3 className="mt-5 text-xl text-forest-900">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="planos" className="relative scroll-mt-24 bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(214,179,101,0.35), transparent 45%), radial-gradient(circle at 10% 80%, rgba(95,142,99,0.35), transparent 45%)",
        }}
      />
      <div className="container-wide relative py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-400">
            Assinatura
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Tenha acesso a tudo, por um valor acessível.
          </h2>
          <p className="mt-5 text-ink-300 leading-relaxed">
            A assinatura libera todos os cursos e grupos da Academia,
            encontros síncronos e o acesso à nossa comunidade. Sem precisar
            comprar curso por curso.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          <PlanCard
            badge="Plano Mensal"
            price="R$ 50"
            period="/mês"
            description="Acesso completo enquanto a assinatura estiver ativa. Cancele quando quiser."
            features={[
              "Todos os cursos e grupos",
              "Encontros síncronos",
              "Comunidade exclusiva no WhatsApp",
              "Novas turmas e conteúdos liberados continuamente",
            ]}
            cta="Assinar mensal"
            href={PLAN_MONTHLY}
            variant="default"
          />
          <PlanCard
            badge="Plano Anual"
            price="R$ 500"
            period="/ano"
            description="Pague 10 e leve 12 — equivale a aproximadamente R$ 42/mês."
            features={[
              "Tudo do plano mensal",
              "R$ 100 de economia sobre o anual cheio",
              "Compromisso com o estudo de longo prazo",
              "Prioridade em conteúdos exclusivos",
            ]}
            cta="Assinar anual"
            href={PLAN_ANNUAL}
            variant="featured"
          />
        </div>

        <p className="mt-10 text-center text-xs text-ink-400">
          <ShieldCheck className="inline -mt-0.5 mr-1" size={14} />
          Pagamento processado com segurança pela Hotmart.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ badge, price, period, description, features, cta, href, variant }) {
  const featured = variant === "featured";
  return (
    <Reveal>
      <div
        className={`relative h-full overflow-hidden rounded-3xl p-8 md:p-10 transition ${
          featured
            ? "bg-paper text-ink-900 shadow-2xl ring-1 ring-gold-500/40"
            : "bg-forest-900/60 backdrop-blur ring-1 ring-ink-50/10 text-ink-50"
        }`}
      >
        {featured && (
          <span className="absolute right-6 top-6 rounded-full bg-gold-500 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-950">
            Mais vantajoso
          </span>
        )}
        <p
          className={`text-xs uppercase tracking-[0.3em] ${
            featured ? "text-gold-600" : "text-gold-400"
          }`}
        >
          {badge}
        </p>
        <div className="mt-5 flex items-end gap-1">
          <span className="font-serif text-5xl md:text-6xl">{price}</span>
          <span className={`mb-2 text-sm ${featured ? "text-ink-500" : "text-ink-300"}`}>
            {period}
          </span>
        </div>
        <p className={`mt-3 text-sm ${featured ? "text-ink-600" : "text-ink-300"}`}>
          {description}
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span
                className={`mt-0.5 inline-grid h-4 w-4 place-items-center rounded-full ${
                  featured ? "bg-forest-800 text-ink-50" : "bg-gold-500 text-ink-950"
                }`}
              >
                <Check size={10} strokeWidth={3} />
              </span>
              <span className={featured ? "text-ink-700" : "text-ink-200"}>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
            featured
              ? "bg-forest-800 text-ink-50 hover:bg-forest-700 hover:-translate-y-0.5"
              : "bg-gold-500 text-ink-950 hover:bg-gold-400 hover:-translate-y-0.5"
          }`}
        >
          {cta} <ArrowRight size={16} />
        </a>
      </div>
    </Reveal>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Você assina",
      text: "Escolha o plano mensal ou anual e finalize o checkout pela Hotmart.",
    },
    {
      n: "02",
      title: "Recebe contato",
      text: "Em até 24h entramos em contato por WhatsApp com os próximos passos.",
    },
    {
      n: "03",
      title: "Acessa tudo",
      text: "Entra no grupo exclusivo, nos encontros síncronos e em toda a biblioteca.",
    },
  ];
  return (
    <section className="container-wide py-24">
      <SectionTitle
        eyebrow="Como participar"
        title="Três passos para começar."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative rounded-2xl border border-ink-200 bg-paper p-8">
              <span className="absolute -top-4 left-7 rounded-full bg-forest-800 px-3 py-1 font-serif text-xs tracking-[0.2em] text-ink-50">
                {s.n}
              </span>
              <h3 className="mt-2 text-xl text-forest-900">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedCourses() {
  const featured = courses.slice(0, 3);
  return (
    <section className="bg-ink-100/60 py-24">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Em destaque"
            title="Cursos para começar"
            subtitle="Uma amostra do que está incluso na assinatura — ou disponível para compra avulsa."
          />
          <Link to="/cursos" className="btn-ghost">
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.08}>
              <Link
                to="/cursos"
                className="group block overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-ink-200">
                  <img
                    src={asset(c.image)}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600">
                    {c.tag}
                  </p>
                  <h3 className="mt-2 text-lg text-forest-900">{c.title}</h3>
                  <p className="mt-1 text-xs text-ink-500">{c.author}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPosts() {
  return (
    <section className="container-wide py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle
          eyebrow="Do blog"
          title="Leituras recentes"
          subtitle="Reflexões e estudos publicados pela equipe da Academia."
        />
        <Link to="/blog" className="btn-ghost">
          Ver o blog <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {posts.slice(0, 2).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              to={`/blog/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl md:flex-row"
            >
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-ink-200">
                <img
                  src={asset(p.image)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600">
                  {p.date} · {p.readingTime}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-forest-900 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed line-clamp-4">
                  {p.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs uppercase tracking-[0.2em] text-forest-700">
                  Ler artigo <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Team() {
  const people = [
    {
      name: "Arthur Bernardes",
      role: "Divulgador Científico e idealizador da Academia Junguiana",
      image: "/midias/coordenadores/arthur.jpg",
      bio: "Psicólogo Clínico e Supervisor graduado na PUC Minas. Co-fundador da Associação Allos e criador da Academia Junguiana. Coordenação de grupos de estudo, cursos, eventos e workshops online e presenciais em Psicologia Analítica há 5+ anos.",
    },
    {
      name: "João de Bragança",
      role: "Psicólogo clínico e cofundador do projeto “Analítica Hoje”",
      image: "/midias/coordenadores/joao.png",
      bio: "Psicólogo graduado pela PUC Minas, mestrando em Psicologia pela UFJF, formado em Psicologia Analítica pelo Instituto Dédalus, cofundador do projeto Analítica Hoje, membro do Laboratório de Pesquisa Caminhos Junguianos, Secretário Geral na Associação Allos.",
    },
    {
      name: "Henrique Barçante",
      role: "Psicólogo junguiano e cofundador do projeto “Analítica Hoje”",
      image: "/midias/coordenadores/henrique.png",
      bio: "Psicólogo formado pela PUC-MG, supervisor clínico, pesquisador do Caminhos Junguianos: Laboratório de Pesquisa e Pós-Graduação em Psicologia Analítica, professor na Academia Junguiana, pós-graduando do curso Teoria e Prática terapêutica de Nise da Silveira.",
    },
  ];
  return (
    <section className="bg-ink-100/60 py-24">
      <div className="container-wide">
        <SectionTitle
          eyebrow="Quem está por trás"
          title="A equipe da Academia."
          subtitle="Clínicos e pesquisadores comprometidos com o estudo continuado da Psicologia Analítica."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-paper p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative mx-auto h-28 w-28 shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-500/40 via-forest-700/30 to-transparent blur-md opacity-0 transition group-hover:opacity-100" />
                  <img
                    src={asset(p.image)}
                    alt={p.name}
                    loading="lazy"
                    className="relative h-28 w-28 rounded-full object-cover ring-2 ring-paper shadow-md ring-offset-2 ring-offset-ink-100"
                  />
                </div>
                <h3 className="mt-6 text-center font-serif text-2xl text-forest-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-gold-600">
                  {p.role}
                </p>
                <div className="my-5 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />
                <p className="text-sm leading-relaxed text-ink-700">
                  {p.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#planos") {
      const el = document.getElementById("planos");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, []);

  return (
    <>
      <Hero />
      <Pillars />
      <Plans />
      <HowItWorks />
      <FeaturedCourses />
      <FeaturedPosts />
      <Team />
    </>
  );
}
