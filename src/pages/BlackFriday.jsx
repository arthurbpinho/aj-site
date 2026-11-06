// Página promocional de Black Friday ("Black November").
//
// Versão escura e independente da Home: verde escuro de fundo com detalhes em
// bege claro. A Home (pages/Home.jsx) segue intacta; o redirecionamento de /
// para cá é controlado por BLACK_FRIDAY_ACTIVE em data/promo.js.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  ShieldCheck,
  GraduationCap,
  Users,
  BookOpen,
  Check,
  Copy,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Tag,
} from "lucide-react";
import { asset } from "../utils/asset.js";
import Reveal from "../components/Reveal.jsx";
import TrilhaBanner from "../components/TrilhaBanner.jsx";
import { posts } from "../data/posts.js";
import { coordinatorList } from "../data/coordinators.js";
import { BLACK_FRIDAY_COUPON } from "../data/promo.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";
const PLAN_ANNUAL = "https://pay.hotmart.com/E100577277S?off=e2lx8j1u";
const YOUTUBE_VIDEO_ID = "kcBU78cZqfk";

function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-ink-50 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(214,179,101,0.22), transparent 42%), radial-gradient(circle at 85% 75%, rgba(95,142,99,0.35), transparent 45%)",
        }}
      />
      <div className="container-wide relative grid gap-12 py-16 md:grid-cols-2 md:py-24 md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold-500/15 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.3em] text-gold-400 ring-1 ring-gold-500/40"
          >
            <Sparkles size={13} /> Esquenta Black Friday
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-wide text-ink-50"
          >
            BLACK
            <br />
            <span className="text-gold-400">NOVEMBER</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-ink-200 leading-relaxed"
          >
            Estudo sério, acesso facilitado — agora com desconto. Uma formação
            séria e acessível em Psicologia Junguiana, diretamente da sua casa,
            numa comunidade de estudo contínuo, crítico e intelectualmente
            honesto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#planos" className="btn-gold">
              Aproveitar o desconto <ArrowRight size={16} />
            </a>
            <Link
              to="/cursos"
              className="btn border border-ink-50/25 text-ink-100 hover:bg-forest-900 hover:border-ink-50/40"
            >
              Ver cursos e grupos
            </Link>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-sm text-ink-300"
          >
            Já é assinante?{" "}
            <a
              href="https://assinatura.academiajunguiana.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-400 underline underline-offset-2 hover:text-ink-50"
            >
              clique aqui
            </a>
          </motion.p>
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

function VideoCTA() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold-500/25 via-forest-700/20 to-transparent blur-2xl" />
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink-950 shadow-2xl ring-1 ring-gold-500/30">
        {playing ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Conheça a Academia Junguiana"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
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
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-ink-50/95 text-forest-900 shadow-xl transition group-hover:scale-110">
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

function CouponBox() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BLACK_FRIDAY_COUPON);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* sem acesso à área de transferência: o cupom continua visível */
    }
  };
  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 rounded-2xl bg-gold-500/10 px-5 py-4 ring-1 ring-gold-500/40 sm:flex-row sm:gap-4">
      <span className="inline-flex items-center gap-2 text-sm text-ink-200">
        <Tag size={16} className="text-gold-400" />
        Use o cupom no checkout:
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full bg-ink-50 px-4 py-1.5 font-mono text-sm font-semibold tracking-wider text-forest-950 transition hover:bg-paper"
        aria-label={`Copiar cupom ${BLACK_FRIDAY_COUPON}`}
      >
        {BLACK_FRIDAY_COUPON}
        {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} />}
      </button>
      <span className="text-xs text-ink-400" aria-live="polite">
        {copied ? "Copiado!" : "Clique para copiar"}
      </span>
    </div>
  );
}

function Plans() {
  return (
    <section id="planos" className="relative scroll-mt-40 border-y border-gold-500/15 bg-forest-900 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(214,179,101,0.35), transparent 45%), radial-gradient(circle at 10% 80%, rgba(95,142,99,0.35), transparent 45%)",
        }}
      />
      <div className="container-wide relative py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-400">
            Assinatura
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Aproveite o desconto do Black November para acessar todos os nossos
            conteúdos por um valor promocional.
          </h2>
          <p className="mt-5 text-ink-300 leading-relaxed">
            A assinatura libera todos os cursos e grupos da Academia,
            encontros síncronos e o acesso à nossa comunidade. Sem precisar
            comprar curso por curso.
          </p>
        </div>

        <CouponBox />

        <div className="mt-12 mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-10 md:items-stretch">
          <PlanCard
            badge="Plano Mensal"
            originalPrice="R$ 50"
            price="R$ 44,90"
            period="/mês"
            highlight={`Com o cupom ${BLACK_FRIDAY_COUPON}`}
            description="Acesso completo enquanto a assinatura estiver ativa. Renovação automática até o cancelamento."
            features={[
              "Todos os cursos e grupos",
              "Encontros síncronos",
              "Comunidade exclusiva no WhatsApp",
              "Cancele quando quiser",
            ]}
            cta="Assinar mensal"
            href={PLAN_MONTHLY}
            variant="default"
          />
          <PlanCard
            badge="Plano Anual"
            originalPrice="R$ 500"
            price="R$ 399,90"
            period="/ano"
            monthlyEquivalent="R$ 33,33/mês"
            highlight={`Com o cupom ${BLACK_FRIDAY_COUPON}`}
            description="Parcele em até 9x conforme as condições de parcelamento. Renovação automática até o cancelamento."
            features={[
              "Tudo do plano mensal",
              "R$ 399,90 à vista com o cupom",
              "Ou em até 9x, conforme condições de parcelamento",
              "Compromisso com o estudo de longo prazo",
            ]}
            cta="Assinar anual"
            href={PLAN_ANNUAL}
            variant="featured"
          />
        </div>

        <div className="mt-10 mx-auto max-w-2xl space-y-4">
          <PlanDisclosure
            label="É estudante de graduação?"
            cta="Clique aqui para saber mais"
            title="Desconto para Estudantes de Graduação"
          >
            <p>
              Com preço especial para estudantes de graduação, a Assinatura
              da Academia Junguiana oferece acesso completo a todos os nossos
              conteúdos por <strong>R$ 40,00 / mês</strong>. A renovação é
              automática até que ocorra o cancelamento.
            </p>
            <p className="mt-4">
              <strong>Como solicitar seu preço promocional:</strong> envie seu
              comprovante de matrícula ativo para o e-mail{" "}
              <a
                href="mailto:academiajunguiana@gmail.com"
                className="text-gold-400 underline-offset-4 hover:underline"
              >
                academiajunguiana@gmail.com
              </a>
              . Após a validação dos dados pela nossa equipe, você receberá o
              link exclusivo para assinar com o valor reduzido.
            </p>
          </PlanDisclosure>

          <PlanDisclosure
            label="Dúvidas administrativas?"
            cta="Sobre certificados e cancelamento"
            title="Sobre certificados e cancelamento"
          >
            <p>
              Você pode solicitar certificados de cursos concluídos em{" "}
              <a
                href="mailto:academiajunguiana@gmail.com"
                className="text-gold-400 underline-offset-4 hover:underline"
              >
                academiajunguiana@gmail.com
              </a>
              .
            </p>
            <p className="mt-4">
              O cancelamento da assinatura também pode ser solicitado no mesmo
              e-mail. Sua assinatura será cancelada em até 48h pela nossa
              equipe, e a próxima mensalidade recorrente não será mais
              cobrada.
            </p>
            <p className="mt-4">
              O compromisso segue o plano escolhido: no <strong>mensal</strong>,
              você pode cancelar em qualquer mês e o próximo mês não será
              cobrado. No <strong>anual</strong>, vale o mesmo para o
              ano em curso.
            </p>
          </PlanDisclosure>
        </div>

        <p className="mt-10 text-center text-xs text-ink-400">
          <ShieldCheck className="inline -mt-0.5 mr-1" size={14} />
          Pagamento processado com segurança pela Hotmart.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ badge, price, originalPrice, period, monthlyEquivalent, highlight, description, features, cta, href, variant }) {
  const featured = variant === "featured";
  return (
    <Reveal>
      <div
        className={`relative h-full overflow-hidden rounded-3xl p-8 md:p-10 transition ${
          featured
            ? "bg-ink-50 text-forest-950 shadow-2xl ring-1 ring-gold-500/50 aj-card-glow aj-shine"
            : "bg-forest-950/70 backdrop-blur ring-1 ring-ink-50/10 text-ink-50"
        }`}
      >
        {featured && (
          <span className="absolute right-6 top-6 rounded-full bg-forest-900 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold-400">
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
        <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
          {originalPrice && (
            <span
              className={`mb-1 text-2xl md:text-3xl line-through decoration-2 ${
                featured ? "text-ink-400 decoration-gold-600" : "text-ink-400 decoration-gold-500"
              }`}
            >
              {originalPrice}
            </span>
          )}
          <span className="font-serif text-5xl md:text-6xl">{price}</span>
          <span className={`mb-2 text-sm ${featured ? "text-ink-600" : "text-ink-300"}`}>
            {period}
          </span>
        </div>
        {monthlyEquivalent && (
          <p className={`mt-1 text-xs ${featured ? "text-ink-600" : "text-ink-400"}`}>
            equivalente a{" "}
            <span className={`font-medium ${featured ? "text-forest-800" : "text-gold-400"}`}>
              {monthlyEquivalent}
            </span>
          </p>
        )}
        {highlight && (
          <div
            className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1 aj-pop ${
              featured
                ? "bg-gold-500/15 text-gold-600 ring-gold-500/40"
                : "bg-gold-500/15 text-gold-400 ring-gold-500/40"
            }`}
          >
            <Sparkles size={15} strokeWidth={2.25} className="text-gold-500" />
            {highlight}
          </div>
        )}
        <p className={`mt-3 text-sm ${featured ? "text-ink-700" : "text-ink-300"}`}>
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
              <span className={featured ? "text-ink-800" : "text-ink-200"}>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
            featured
              ? "bg-forest-900 text-ink-50 hover:bg-forest-800 hover:-translate-y-0.5"
              : "bg-gold-500 text-ink-950 hover:bg-gold-400 hover:-translate-y-0.5"
          }`}
        >
          {cta} <ArrowRight size={16} />
        </a>
      </div>
    </Reveal>
  );
}

function PlanDisclosure({ label, cta, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-forest-950/60 ring-1 ring-ink-50/10 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm text-ink-100 transition hover:bg-forest-950/80 sm:px-6"
      >
        <span>
          <span className="text-ink-200">{label}</span>{" "}
          <span className="font-medium text-gold-400 underline-offset-4 hover:underline">
            {cta}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-ink-50/10 px-5 py-5 text-sm leading-relaxed text-ink-200 sm:px-6">
              <h4 className="mb-3 font-serif text-lg text-ink-50">{title}</h4>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <div className="group h-full rounded-2xl bg-forest-900/60 p-7 ring-1 ring-ink-50/10 transition hover:-translate-y-1 hover:ring-gold-500/40 hover:shadow-xl">
              <p.icon className="text-gold-400" size={26} />
              <h3 className="mt-5 text-xl text-ink-50">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
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
    <section className="container-wide py-20">
      <SectionTitle eyebrow="Como participar" title="Três passos para começar." />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative rounded-2xl bg-forest-900/60 p-8 ring-1 ring-ink-50/10">
              <span className="absolute -top-4 left-7 rounded-full bg-gold-500 px-3 py-1 font-serif text-xs tracking-[0.2em] text-ink-950">
                {s.n}
              </span>
              <h3 className="mt-2 text-xl text-ink-50">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TeamCard({ person }) {
  const firstName = person.name.split(" ")[0];
  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-forest-950/70 p-8 ring-1 ring-ink-50/10 transition hover:-translate-y-1 hover:ring-gold-500/40 hover:shadow-xl">
      <img
        src={asset(person.image)}
        alt={person.name}
        loading="lazy"
        className="mx-auto h-28 w-28 rounded-full object-cover ring-2 ring-gold-500/50 ring-offset-2 ring-offset-forest-950 shadow-md"
      />
      <h3 className="mt-6 text-center font-serif text-2xl text-ink-50">{person.name}</h3>
      <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-gold-400">
        {person.role}
      </p>
      <div className="my-5 h-px bg-gradient-to-r from-transparent via-ink-50/20 to-transparent" />
      <p className="text-sm leading-relaxed text-ink-200">{person.bio}</p>
      <a
        href={person.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 self-start text-xs uppercase tracking-[0.2em] text-gold-400 transition hover:text-ink-50"
      >
        Conheça mais sobre {firstName} <ArrowRight size={14} />
      </a>
    </article>
  );
}

function Team() {
  return (
    <section className="bg-forest-900/60 py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex-1 min-w-[260px]">
            <SectionTitle
              eyebrow="Quem está por trás"
              title="A equipe da Academia."
              subtitle="Clínicos e pesquisadores comprometidos com o estudo continuado da Psicologia Analítica."
            />
          </div>
          <a
            href="https://www.instagram.com/analiticahoje/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-forest-950/70 px-4 py-2 ring-1 ring-ink-50/15 transition hover:-translate-y-0.5 hover:ring-gold-500/40"
          >
            <img
              src={asset("/midias/analiticahoje.jpg")}
              alt="Analítica Hoje"
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-ink-50/20"
            />
            <span className="text-sm leading-tight text-ink-200">
              Somos parceiros do{" "}
              <span className="font-medium text-gold-400 group-hover:underline underline-offset-4">
                @analiticahoje
              </span>
            </span>
          </a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {coordinatorList.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <TeamCard person={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedPosts() {
  return (
    <section className="container-wide py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle
          eyebrow="Do blog"
          title="Leituras recentes"
          subtitle="Reflexões e estudos publicados pela equipe da Academia."
        />
        <Link
          to="/blog"
          className="btn border border-ink-50/25 text-ink-100 hover:bg-forest-900 hover:border-ink-50/40"
        >
          Ver o blog <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {posts.slice(0, 2).map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link
              to={`/blog/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-forest-900/60 ring-1 ring-ink-50/10 transition hover:-translate-y-1 hover:ring-gold-500/40 hover:shadow-xl md:flex-row"
            >
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden bg-forest-900">
                <img
                  src={asset(p.image)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400">
                  {p.date} · {p.readingTime}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-ink-50 leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-ink-300 leading-relaxed line-clamp-4">{p.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs uppercase tracking-[0.2em] text-gold-400">
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

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@academiajunguiana";
const YOUTUBE_VIDEOS = [
  {
    id: "gtF7avgJZHk",
    title: "O Alienista e a Psique — Machado de Assis e Nise da Silveira",
  },
  {
    id: "tDwLkomOtw8",
    title: "O Homem e Seus Símbolos — C. G. Jung e Von Franz · 1º Encontro",
  },
  {
    id: "ieyco6ow9sY",
    title: "O Numinoso e a Religião na Psicologia Analítica · 1ª Aula",
  },
  {
    id: "4rtZh0ICa0s",
    title: "A Voz e o Tempo — Reflexões para Jovens Terapeutas · 1º Encontro",
  },
];

function FeaturedLives() {
  return (
    <section className="bg-forest-900/60 py-20">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Conteúdo gratuito"
            title="Últimas lives no YouTube"
            subtitle="Uma amostra do nosso trabalho — encontros abertos e gratuitos publicados no canal da Academia."
          />
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border border-ink-50/25 text-ink-100 hover:bg-forest-900 hover:border-ink-50/40"
          >
            Ver o canal <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {YOUTUBE_VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.06}>
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-forest-950/70 ring-1 ring-ink-50/10 transition hover:-translate-y-1 hover:ring-gold-500/40 hover:shadow-xl"
              >
                <div className="relative aspect-video overflow-hidden bg-ink-950">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent transition group-hover:from-ink-950/40" />
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-50/95 text-forest-900 shadow-lg transition group-hover:scale-110">
                    <Play size={22} className="ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-400">
                    YouTube · Live
                  </p>
                  <h3 className="mt-2 text-sm leading-snug text-ink-50 line-clamp-3">{v.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlackFriday() {
  useEffect(() => {
    if (window.location.hash === "#planos") {
      const el = document.getElementById("planos");
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, []);

  return (
    <div className="bg-forest-950 text-ink-50">
      <Hero />
      <Plans />
      <Pillars />
      <HowItWorks />
      <section className="container-wide pb-20">
        <TrilhaBanner />
      </section>
      <Team />
      <FeaturedPosts />
      <FeaturedLives />
    </div>
  );
}
