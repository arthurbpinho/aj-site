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
    <div className="flex flex-col items-center">
      <span className="min-w-[2.6rem] rounded-lg bg-ink-50/10 px-2 py-1 text-center font-serif text-xl tabular-nums leading-none text-ink-50 ring-1 ring-gold-400/30 sm:min-w-[3rem] sm:text-2xl">
        {pad(value)}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-ink-300">
        {label}
      </span>
    </div>
  );
}

// Faixa de contagem regressiva exibida no cabeçalho da página /blackfriday.
export default function BlackFridayCountdown() {
  const [t, setT] = useState(timeLeft);

  useEffect(() => {
    if (t.done) return;
    const id = setInterval(() => setT(timeLeft()), 1000);
    return () => clearInterval(id);
  }, [t.done]);

  return (
    <div className="border-t border-gold-400/20 bg-forest-900/80">
      <div className="container-wide flex flex-col items-center justify-center gap-2 py-2.5 sm:flex-row sm:gap-6">
        {t.done ? (
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
            A Black Friday da Academia Junguiana começou!
          </p>
        ) : (
          <>
            <p className="text-center text-[10px] uppercase tracking-[0.25em] text-gold-400 sm:text-xs">
              Contagem regressiva para a Black Friday da Academia Junguiana
            </p>
            <div className="flex items-start gap-2" aria-live="off">
              <Unit value={t.days} label="dias" />
              <Unit value={t.hours} label="horas" />
              <Unit value={t.minutes} label="min" />
              <Unit value={t.seconds} label="seg" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
