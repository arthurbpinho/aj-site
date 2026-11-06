import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { asset } from "../utils/asset.js";

// Tela de abertura da página /blackfriday: fundo verde escuro, logo e o nome
// da campanha. Aparece uma vez por carregamento do site (não repete ao navegar
// entre páginas dentro do app) e some sozinha em ~1,3s.
const DURATION_MS = 1300;
let shown = false;

export default function BlackFridayIntro() {
  const [visible, setVisible] = useState(() => !shown);

  useEffect(() => {
    if (!visible) return;
    shown = true;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const id = setTimeout(() => setVisible(false), DURATION_MS);
    return () => {
      clearTimeout(id);
      document.body.style.overflow = prevOverflow;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="bf-intro"
          role="presentation"
          onClick={() => setVisible(false)}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-forest-950 px-6"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 45%, rgba(214,179,101,0.18), transparent 50%)",
            }}
          />
          <div className="relative flex flex-col items-center text-center">
            <motion.img
              src={asset("/midias/logos/logobranca.png")}
              alt="Academia Junguiana"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 font-serif text-4xl font-bold uppercase tracking-[0.06em] sm:text-5xl"
            >
              <span className="bf-gold-text">Black November</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-2 text-xs uppercase tracking-[0.35em] text-ink-200 sm:text-sm"
            >
              da Academia Junguiana
            </motion.p>
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: DURATION_MS / 1000 - 0.2, ease: "easeInOut" }}
              className="mt-8 h-px w-48 origin-left bg-gradient-to-r from-transparent via-gold-500 to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
