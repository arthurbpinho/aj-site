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
const VIDEO_TITLE = "Black November - Academia Junguiana - 2026";

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

const TITLE_SIZE =
  "text-[clamp(3.4rem,15vw,7rem)] lg:text-[5.25rem] xl:text-[6.5rem]";

function OffSticker({ className = "" }) {
  return (
    <span
      className={`relative inline-grid h-[4.5rem] w-[4.5rem] shrink-0 rotate-12 place-items-center rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-center font-sans text-ink-950 shadow-[0_10px_30px_-8px_rgba(200,156,68,0.8)] ring-2 ring-ink-950/40 ring-offset-2 ring-offset-forest-950 sm:h-24 sm:w-24 ${className}`}
    >
      <span className="leading-none">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] sm:text-[11px]">
          até
        </span>
        <span className="block text-2xl font-extrabold tracking-tight sm:text-[2rem]">
          20%
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">
          off
        </span>
      </span>
    </span>
  );
}

function PriceTeaser({ label, from, to }) {
  return (
    <span className="inline-flex items-baseline gap-2 rounded-full bg-black/40 px-4 py-2 text-sm ring-1 ring-gold-500/30">
      <span className="text-[10px] uppercase tracking-[0.2em] text-ink-300">{label}</span>
      <span className="text-ink-400 line-through decoration-gold-500/80">{from}</span>
      <span className="font-semibold text-gold-400">{to}</span>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-ink-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 10%, rgba(214,179,101,0.20), transparent 45%), radial-gradient(ellipse at 90% 85%, rgba(95,142,99,0.30), transparent 50%), linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      {/* marca d'água */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[22rem] font-bold leading-none text-ink-50/[0.025] lg:block"
      >
        BN
      </span>

      <div className="container-wide relative grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-black/35 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-gold-400 ring-1 ring-gold-500/40 sm:text-[11px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
            </span>
            Esquenta Black Friday
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-serif font-bold uppercase"
            aria-label="Black November"
          >
            <span className="flex items-center gap-4 sm:gap-6">
              <span
                className={`${TITLE_SIZE} leading-[0.85] tracking-[0.04em] text-ink-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]`}
              >
                Black
              </span>
              <OffSticker />
            </span>
            <span
              className={`bf-gold-text block ${TITLE_SIZE} leading-[0.95] tracking-[0.02em] drop-shadow-[0_6px_30px_rgba(200,156,68,0.35)]`}
            >
              November
            </span>
          </motion.h1>
          <div
            aria-hidden
            className="mt-4 h-px w-40 bg-gradient-to-r from-gold-500 to-transparent sm:w-64"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-ink-200 leading-relaxed sm:text-lg"
          >
            O esquenta da Black Friday da Academia Junguiana começou. Assine com
            desconto e tenha acesso a todos os cursos, grupos e à nossa
            comunidade — uma formação séria e acessível em Psicologia
            Junguiana, diretamente da sua casa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            <PriceTeaser label="Mensal" from="R$ 50" to="R$ 44,90" />
            <PriceTeaser label="Anual" from="R$ 500" to="R$ 399,90" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href="#planos"
              className="btn bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 !px-7 !py-3.5 font-semibold text-ink-950 shadow-[0_12px_32px_-10px_rgba(214,179,101,0.8)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(214,179,101,0.95)]"
            >
              Garantir meu desconto <ArrowRight size={16} />
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
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <VideoCTA />
        </motion.div>
      </div>
    </section>
  );
}

// Miniaturas do YouTube: a HD (maxresdefault) pode ainda não existir em vídeos
// recentes — nesse caso o YouTube devolve um placeholder cinza de 120×90 sem
// disparar erro no <img>. Detectamos pelo tamanho e caímos para a hqdefault.
const THUMB_HD = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
const THUMB_FALLBACK = `https://i.ytimg.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;

function VideoCTA() {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(THUMB_HD);
  const fallback = () => setThumb((t) => (t === THUMB_HD ? THUMB_FALLBACK : t));

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-500/30 via-gold-500/5 to-forest-500/20 blur-2xl"
      />
      <div className="relative rounded-[1.4rem] bg-gradient-to-br from-gold-400 via-gold-600/40 to-gold-400/90 p-[1.5px] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)]">
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.33rem] bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={VIDEO_TITLE}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 grid place-items-center overflow-hidden"
              aria-label={`Reproduzir vídeo: ${VIDEO_TITLE}`}
            >
              <img
                src={thumb}
                alt=""
                referrerPolicy="no-referrer"
                onLoad={(e) => {
                  if (e.currentTarget.naturalWidth <= 120) fallback();
                }}
                onError={fallback}
                className="absolute inset-0 h-full w-full scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 transition duration-500 group-hover:from-black/60" />

              <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400 ring-1 ring-gold-500/40 backdrop-blur sm:left-5 sm:top-5">
                <Sparkles size={11} /> Black November
              </span>

              {/* A arte da miniatura tem conteúdo no centro: o play fica embaixo. */}
              <span className="absolute inset-x-4 bottom-4 flex items-center gap-3 text-left sm:inset-x-5 sm:bottom-5">
                <span className="bf-ping relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-[0_10px_30px_-6px_rgba(214,179,101,0.9)] transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Play size={20} className="ml-0.5" fill="currentColor" />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                    Assistir ao vídeo
                  </span>
                  <span className="mt-0.5 block font-serif text-base leading-tight text-ink-50 sm:text-xl">
                    Black November · Academia Junguiana
                  </span>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Faixa rolante entre o hero e os planos.
function Ticker() {
  const items = [
    "Black November",
    "Até 20% off na assinatura",
    `Cupom ${BLACK_FRIDAY_COUPON}`,
    "Esquenta Black Friday",
  ];
  const half = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-gold-500/40 bg-black py-3"
      aria-label={items.join(" · ")}
    >
      <div className="bf-marquee flex w-max" aria-hidden>
        {[...half, ...half].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-6 whitespace-nowrap pr-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400 sm:text-sm"
          >
            {t}
            <Sparkles size={12} className="text-gold-500/70" />
          </span>
        ))}
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
    <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold-500/60 bg-black/40 px-5 py-4 sm:flex-row sm:gap-4">
      <span className="inline-flex items-center gap-2 text-sm text-ink-200">
        <Tag size={16} className="text-gold-400" />
        Use o cupom no checkout:
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-4 py-1.5 font-mono text-sm font-bold tracking-wider text-ink-950 transition hover:brightness-110"
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
    <section id="planos" className="relative scroll-mt-48 bg-forest-900 text-ink-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 15%, rgba(214,179,101,0.35), transparent 45%), radial-gradient(circle at 10% 85%, rgba(95,142,99,0.35), transparent 45%)",
        }}
      />
      <div className="container-wide relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-400">
            Assinatura
          </p>
          <h2 className="font-serif text-[2rem] leading-tight sm:text-4xl md:text-5xl">
            Aproveite o desconto do{" "}
            <span className="bf-gold-text font-bold">Black November</span> para
            acessar todos os nossos conteúdos por um valor promocional.
          </h2>
          <p className="mt-5 text-ink-300 leading-relaxed">
            A assinatura libera todos os cursos e grupos da Academia,
            encontros síncronos e o acesso à nossa comunidade. Sem precisar
            comprar curso por curso.
          </p>
        </div>

        <CouponBox />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2 md:items-stretch md:gap-10">
          <PlanCard
            badge="Plano Mensal"
            off="-10%"
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
          />
          <PlanCard
            featured
            badge="Plano Anual"
            off="-20%"
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
            cta="Assinar anual com desconto"
            href={PLAN_ANNUAL}
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

// Os dois planos têm fundo preto; o anual ganha moldura dourada, brilho e
// preço em dourado para ser o destaque do Black November.
function PlanCard({ featured = false, badge, off, price, originalPrice, period, monthlyEquivalent, highlight, description, features, cta, href }) {
  const body = (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 ${
        featured
          ? "bg-gradient-to-b from-[#0b0a07] to-black aj-shine"
          : "bg-black/85 ring-1 ring-ink-50/10"
      }`}
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-950 sm:right-6 sm:top-6">
          Mais vantajoso
        </span>
      )}
      <div className="flex items-center gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400">{badge}</p>
        {!featured && (
          <span className="rounded-full bg-gold-500/15 px-2 py-0.5 font-sans text-[11px] font-bold text-gold-400 ring-1 ring-gold-500/40">
            {off}
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="mb-1.5 text-xl text-ink-500 line-through decoration-gold-500 decoration-2 sm:text-2xl md:text-3xl">
          {originalPrice}
        </span>
        <span
          className={`font-serif text-[2.75rem] font-semibold leading-none sm:text-5xl md:text-6xl ${
            featured ? "bf-gold-text" : "text-ink-50"
          }`}
        >
          {price}
        </span>
        <span className="mb-1 text-sm text-ink-300">{period}</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {featured && (
          <span className="rounded-full bg-gradient-to-r from-gold-400 to-gold-500 px-2.5 py-1 font-sans text-xs font-extrabold text-ink-950">
            {off}
          </span>
        )}
        {monthlyEquivalent && (
          <p className="text-xs text-ink-400">
            equivalente a{" "}
            <span className="font-semibold text-gold-400">{monthlyEquivalent}</span>
          </p>
        )}
      </div>

      {highlight && (
        <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-gold-500/10 px-3.5 py-1.5 text-sm font-semibold text-gold-400 ring-1 ring-gold-500/40 aj-pop">
          <Sparkles size={15} strokeWidth={2.25} className="text-gold-500" />
          {highlight}
        </div>
      )}
      <p className="mt-4 text-sm text-ink-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span
              className={`mt-0.5 inline-grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                featured ? "bg-gold-500 text-ink-950" : "bg-ink-50/15 text-gold-400"
              }`}
            >
              <Check size={10} strokeWidth={3} />
            </span>
            <span className="text-ink-200">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
          featured
            ? "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 text-ink-950 shadow-[0_12px_30px_-10px_rgba(214,179,101,0.8)] hover:brightness-110"
            : "border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-ink-950"
        }`}
        style={{ marginTop: "2rem" }}
      >
        {cta} <ArrowRight size={16} />
      </a>
    </div>
  );

  return (
    <Reveal className="h-full">
      {featured ? (
        <div className="h-full rounded-3xl bg-gradient-to-br from-gold-400 via-gold-600/50 to-gold-400 p-[2px] aj-card-glow md:-translate-y-3">
          {body}
        </div>
      ) : (
        body
      )}
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
      <Ticker />
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
