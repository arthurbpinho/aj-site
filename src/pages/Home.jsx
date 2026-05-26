import { useEffect, useState } from "react";
import { asset } from "../utils/asset.js";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  ShieldCheck,
  GraduationCap,
  Users,
  BookOpen,
  Check,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TrilhaBanner from "../components/TrilhaBanner.jsx";
import { posts } from "../data/posts.js";

const PLAN_MONTHLY = "https://pay.hotmart.com/E100577277S?off=3op85xl5";
const PLAN_SEMESTRAL = "https://pay.hotmart.com/E100577277S?off=1sc5zo29";
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
            Psicologia Analítica
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-3 text-sm text-ink-600"
          >
            Já é assinante?{" "}
            <a
              href="https://assinatura.academiajunguiana.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest-700 underline underline-offset-2 hover:text-forest-800"
            >
              clique aqui
            </a>
          </motion.p>
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

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8 md:items-stretch">
          <PlanCard
            badge="Plano Mensal"
            price="R$ 50"
            period="/mês"
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
            badge="Plano Semestral"
            price="R$ 270"
            period="/semestre"
            monthlyEquivalent="R$ 45/mês"
            description="R$ 30 de desconto sobre o valor acumulado. Renovação automática até o cancelamento."
            features={[
              "Tudo do plano mensal",
              "Economia de R$ 30 no semestre",
              "Compromisso de seis meses",
              "Pagamento à vista",
            ]}
            cta="Assinar semestral"
            href={PLAN_SEMESTRAL}
            variant="default"
          />
          <PlanCard
            badge="Plano Anual"
            price="R$ 500"
            period="/ano"
            monthlyEquivalent="R$ 42/mês"
            description="R$ 100 de desconto sobre o valor acumulado. Renovação automática até o cancelamento."
            features={[
              "Tudo do plano mensal",
              "Economia de R$ 100 no ano",
              "Compromisso com o estudo de longo prazo",
              "Pagamento à vista",
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
                className="text-gold-300 underline-offset-4 hover:underline"
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
                className="text-gold-300 underline-offset-4 hover:underline"
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
              cobrado. No <strong>semestral</strong> e no{" "}
              <strong>anual</strong>, vale o mesmo para o semestre ou para o
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

function PlanCard({ badge, price, period, monthlyEquivalent, description, features, cta, href, variant }) {
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
        {monthlyEquivalent && (
          <p
            className={`mt-1 text-xs ${
              featured ? "text-ink-500" : "text-ink-400"
            }`}
          >
            equivalente a{" "}
            <span
              className={`font-medium ${
                featured ? "text-forest-800" : "text-gold-300"
              }`}
            >
              {monthlyEquivalent}
            </span>
          </p>
        )}
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

function PlanDisclosure({ label, cta, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl bg-forest-900/50 ring-1 ring-ink-50/10 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm text-ink-100 transition hover:bg-forest-900/70 sm:px-6"
      >
        <span>
          <span className="text-ink-200">{label}</span>{" "}
          <span className="font-medium text-gold-300 underline-offset-4 hover:underline">
            {cta}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gold-300 transition-transform duration-300 ${
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

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Você assina",
      text: "Escolha o plano mensal, semestral ou anual e finalize o checkout pela Hotmart.",
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
const INSTAGRAM_URL = "https://www.instagram.com/academiajunguiana/";
const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DYfGGJKli4H/",
  "https://www.instagram.com/p/DXwr_1blrA1/",
  "https://www.instagram.com/p/DX69UzoFoZb/",
  "https://www.instagram.com/p/DJXd-Edv2R1/",
];

function FeaturedLives() {
  return (
    <section className="bg-ink-100/60 py-24">
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
            className="btn-ghost"
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
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
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
                  <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper/95 text-forest-900 shadow-lg transition group-hover:scale-110">
                    <Play size={22} className="ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600">
                    YouTube · Live
                  </p>
                  <h3 className="mt-2 text-sm leading-snug text-forest-900 line-clamp-3">
                    {v.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramEmbed({ url }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        margin: 0,
        maxWidth: "100%",
        padding: 0,
        width: "100%",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-8 text-center text-xs text-ink-500"
      >
        Ver post no Instagram
      </a>
    </blockquote>
  );
}

function FeaturedSocial() {
  useEffect(() => {
    const SCRIPT_ID = "instagram-embed-script";
    const processEmbeds = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      }
    };
    if (document.getElementById(SCRIPT_ID)) {
      processEmbeds();
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = processEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-50 via-paper to-forest-50 py-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(200,156,68,0.22), transparent 45%), radial-gradient(circle at 85% 85%, rgba(68,112,73,0.20), transparent 50%)",
        }}
      />
      <div className="container-wide relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Nos acompanhe nas redes"
            title="Últimos posts no Instagram"
            subtitle="Conteúdos gratuitos que publicamos toda semana — para você conhecer mais sobre o nosso trabalho antes de assinar."
          />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Seguir no Instagram <ArrowRight size={16} />
          </a>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSTAGRAM_POSTS.map((url, i) => (
            <Reveal key={url} delay={i * 0.06}>
              <div className="overflow-hidden rounded-2xl bg-paper shadow-lg ring-1 ring-forest-200/60 transition hover:-translate-y-1 hover:shadow-2xl">
                <InstagramEmbed url={url} />
              </div>
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
      link: "https://arthurbernardespsi.com.br/",
    },
    {
      name: "João de Bragança",
      role: "Psicólogo clínico e cofundador do projeto “Analítica Hoje”",
      image: "/midias/coordenadores/joao.png",
      bio: "Psicólogo graduado pela PUC Minas, mestrando em Psicologia pela UFJF, formado em Psicologia Analítica pelo Instituto Dédalus, cofundador do projeto Analítica Hoje, membro do Laboratório de Pesquisa Caminhos Junguianos, Secretário Geral na Associação Allos.",
      link: "https://www.instagram.com/joaodebraganca",
    },
    {
      name: "Henrique Barçante",
      role: "Psicólogo junguiano e cofundador do projeto “Analítica Hoje”",
      image: "/midias/coordenadores/henrique.png",
      bio: "Psicólogo formado pela PUC-MG, supervisor clínico, pesquisador do Caminhos Junguianos: Laboratório de Pesquisa e Pós-Graduação em Psicologia Analítica, professor na Academia Junguiana, pós-graduando do curso Teoria e Prática terapêutica de Nise da Silveira.",
      link: "https://www.instagram.com/prosa_psiquica/",
    },
  ];
  return (
    <section className="bg-ink-100/60 py-24">
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
            className="group inline-flex items-center gap-3 rounded-full border border-ink-200 bg-paper px-4 py-2 shadow-sm transition hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-md"
          >
            <img
              src={asset("/midias/analiticahoje.jpg")}
              alt="Analítica Hoje"
              loading="lazy"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-ink-200"
            />
            <span className="text-sm leading-tight text-ink-700">
              Somos parceiros do{" "}
              <span className="font-medium text-forest-800 group-hover:underline underline-offset-4">
                @analiticahoje
              </span>
            </span>
          </a>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {people.map((p, i) => {
            const firstName = p.name.split(" ")[0];
            return (
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
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 self-start text-xs uppercase tracking-[0.2em] text-forest-700 transition hover:text-gold-600"
                  >
                    Conheça mais sobre {firstName} <ArrowRight size={14} />
                  </a>
                </article>
              </Reveal>
            );
          })}
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
      <section className="container-wide pb-24">
        <TrilhaBanner />
      </section>
      <Team />
      <FeaturedPosts />
      <FeaturedLives />
      <FeaturedSocial />
    </>
  );
}
