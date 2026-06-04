import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { asset } from "../utils/asset.js";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/trilha", label: "Por onde começar?" },
  { to: "/ampliacoes", label: "Ampliações" },
  { to: "/blog", label: "Blog" },
  { to: "/cursos", label: "Nossos grupos e cursos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink-200/70 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Academia Junguiana"
        >
          <motion.img
            src={asset("/midias/logos/logoverdeescura.png")}
            alt=""
            className="h-10 w-10 object-contain"
            whileHover={{ rotate: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl text-forest-900 group-hover:text-forest-700 transition-colors">
              Academia Junguiana
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-ink-500">
              Psicologia Analítica
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `link-underline text-sm font-medium transition-colors ${
                  isActive ? "text-forest-800" : "text-ink-700 hover:text-forest-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="https://pay.hotmart.com/E100577277S?off=3op85xl5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5"
          >
            Assinar
          </a>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-ink-800 hover:bg-ink-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-ink-200/70 bg-paper/95 backdrop-blur"
          >
            <nav className="container-wide flex flex-col gap-1 py-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block py-3 px-2 text-base font-medium border-b border-ink-200/60 last:border-0 transition-colors ${
                        isActive ? "text-forest-800" : "text-ink-800 hover:text-forest-700"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href="https://pay.hotmart.com/E100577277S?off=3op85xl5"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="btn-primary mt-3 w-full"
              >
                Assinar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
