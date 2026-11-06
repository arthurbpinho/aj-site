import { useEffect, useState } from "react";
import { BLACK_FRIDAY_START } from "../data/promo.js";

function timeLeft() {
  const diff = Math.max(0, BLACK_FRIDAY_START.getTime() - Date.now());
  return {
    done: diff === 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

const pad = (n) => String(n).padStart(2, "0");

function Unit({ value, label }) {
  return (
    <div className="flex w-11 flex-col items-center rounded-lg bg-black/55 px-1 pb-1 pt-1.5 shadow-[inset_0_1px_0_rgba(241,233,210,0.08),0_6px_16px_-8px_rgba(0,0,0,0.8)] sm:w-14 sm:pt-2">
      <span className="bf-gold-text font-sans text-lg font-bold tabular-nums leading-none sm:text-2xl">
        {pad(value)}
      </span>
      <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.18em] text-ink-400 sm:text-[9px]">
        {label}
      </span>
    </div>
  );
}

const Sep = () => (
  <span aria-hidden className="pb-3 font-sans text-base font-bold text-gold-500/70 sm:text-lg">
    :
  </span>
);

// Faixa de contagem regressiva exibida no cabeçalho da página /blackfriday.
export default function BlackFridayCountdown() {
  const [t, setT] = useState(timeLeft);

  useEffect(() => {
    if (t.done) return;
    const id = setInterval(() => setT(timeLeft()), 1000);
    return () => clearInterval(id);
  }, [t.done]);

  return (
    <div className="relative bg-gradient-to-r from-ink-950 via-forest-950 to-ink-950">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-50/10 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/80 to-transparent"
      />
      <div className="container-wide flex flex-col items-center justify-center gap-2 py-2 sm:py-2.5 md:flex-row md:gap-8">
        {t.done ? (
          <p className="bf-gold-text py-1 text-center text-sm font-semibold uppercase tracking-[0.25em]">
            A Black Friday da Academia Junguiana começou!
          </p>
        ) : (
          <>
            <p className="flex items-center gap-2 text-center text-[10px] font-medium uppercase leading-snug tracking-[0.2em] text-ink-200 sm:text-xs">
              <span className="relative hidden h-2 w-2 shrink-0 sm:flex">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500" />
              </span>
              <span>
                Contagem regressiva para a{" "}
                <span className="font-semibold text-gold-400">Black Friday</span>{" "}
                da Academia Junguiana
              </span>
            </p>
            <div
              className="flex items-center gap-1 sm:gap-1.5"
              role="timer"
              aria-label={`Faltam ${t.days} dias, ${t.hours} horas e ${t.minutes} minutos para a Black Friday`}
            >
              <Unit value={t.days} label="dias" />
              <Sep />
              <Unit value={t.hours} label="horas" />
              <Sep />
              <Unit value={t.minutes} label="min" />
              <Sep />
              <Unit value={t.seconds} label="seg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
