import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  getStoredConsent,
  saveConsent,
  OPEN_PREFERENCES_EVENT,
} from "../utils/cookieConsent.js";
import { setMetaPixelMarketingConsent } from "../utils/metaPixel.js";

function Switch({ checked, onChange, disabled, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative h-5 w-9 shrink-0 rounded-full transition-colors duration-200 sm:h-6 sm:w-11 ${
        checked ? "bg-forest-700" : "bg-ink-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-paper shadow-sm transition-transform duration-200 sm:h-5 sm:w-5 ${
          checked ? "translate-x-4 sm:translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function Category({ title, tag, description, children }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink-200/70 py-2.5 last:border-0 sm:py-3.5">
      <div className="pr-1 sm:pr-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <h3 className="text-xs font-semibold text-forest-900 sm:text-sm">{title}</h3>
          {tag && (
            <span className="rounded-full bg-ink-100 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-ink-500 sm:text-[10px]">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs leading-snug text-ink-600 sm:mt-1 sm:text-sm sm:leading-relaxed">{description}</p>
      </div>
      <div className="pt-0.5 sm:pt-1">{children}</div>
    </div>
  );
}

export default function CookieConsentBanner() {
  const location = useLocation();
  const [consent, setConsent] = useState(() => getStoredConsent());
  const [view, setView] = useState(() => (getStoredConsent() ? "closed" : "banner"));
  const [marketingDraft, setMarketingDraft] = useState(consent?.marketing ?? false);

  useEffect(() => {
    function handleOpenPreferences() {
      setMarketingDraft(getStoredConsent()?.marketing ?? false);
      setView("details");
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  function decide(marketing) {
    const saved = saveConsent({ marketing });
    setMetaPixelMarketingConsent(marketing);
    setConsent(saved);
    setView("closed");
  }

  function openDetails() {
    setMarketingDraft(consent?.marketing ?? false);
    setView("details");
  }

  // Não exibe o banner na página /bioinsta
  if (location.pathname === "/bioinsta") {
    return null;
  }

  const hasExistingChoice = consent !== null;

  return (
    <AnimatePresence>
      {view !== "closed" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] flex justify-center p-3 sm:px-6 sm:pb-5"
        >
          <div className="w-full max-w-lg rounded-xl border border-ink-200 bg-paper/98 p-3.5 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] backdrop-blur sm:max-w-2xl sm:rounded-2xl sm:p-5">
            {view === "banner" && (
              <div>
                <h2 className="font-serif text-sm font-semibold text-forest-900 sm:text-base">
                  Cookies neste site
                </h2>
                <p className="mt-1 text-xs leading-snug text-ink-700 sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  Usamos apenas um cookie necessário, que guarda a sua escolha sobre esta
                  política. O Pixel da Meta (marketing) só é ativado com a sua autorização, e
                  nada vem marcado por padrão. Detalhes na{" "}
                  <Link to="/politica-de-cookies" className="link-underline text-forest-800">
                    política de cookies
                  </Link>
                  .
                </p>
                <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:items-center sm:gap-2.5">
                  <div className="flex gap-2 sm:contents">
                    <button
                      type="button"
                      onClick={() => decide(true)}
                      className="flex-1 rounded-full bg-forest-800 px-3 py-1.5 text-xs font-medium text-ink-50 shadow-sm transition-all duration-200 hover:bg-forest-700 hover:shadow active:scale-[0.98] sm:px-4 sm:py-2 sm:text-sm"
                    >
                      Aceitar todos
                    </button>
                    <button
                      type="button"
                      onClick={() => decide(false)}
                      className="flex-1 rounded-full border border-ink-300 px-3 py-1.5 text-xs font-medium text-ink-800 transition-all duration-200 hover:bg-ink-100 active:scale-[0.98] sm:px-4 sm:py-2 sm:text-sm"
                    >
                      <span className="sm:hidden">Recusar</span>
                      <span className="hidden sm:inline">Recusar não-essenciais</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={openDetails}
                    className="self-center py-0.5 text-xs font-medium text-ink-600 underline decoration-ink-300 underline-offset-2 transition hover:text-forest-800 sm:self-auto sm:px-2 sm:text-sm"
                  >
                    Preferências
                  </button>
                </div>
              </div>
            )}

            {view === "details" && (
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-sm font-semibold text-forest-900 sm:text-base">
                    Preferências de cookies
                  </h2>
                  {hasExistingChoice && (
                    <button
                      type="button"
                      aria-label="Fechar"
                      onClick={() => setView("closed")}
                      className="rounded-full p-1 text-ink-500 transition hover:bg-ink-100 hover:text-ink-800"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="mt-2.5 max-h-[45vh] overflow-y-auto pr-1 sm:max-h-[50vh]">
                  <Category
                    title="Necessários"
                    tag="Sempre ativos"
                    description="Guardam apenas a sua escolha sobre esta política de cookies, para não perguntar de novo a cada visita. Não são usados para rastreamento."
                  >
                    <Switch checked disabled label="Necessários (sempre ativos)" />
                  </Category>

                  <Category
                    title="Estatísticos"
                    tag="Inativo"
                    description="Mediriam, de forma agregada, o acesso às páginas. Nenhuma ferramenta desse tipo está em uso no momento, então nada é gravado nesta categoria."
                  >
                    <Switch checked={false} disabled label="Estatísticos (inativo)" />
                  </Category>

                  <Category
                    title="Marketing"
                    description="Pixel da Meta (Facebook/Instagram), usado para medir o resultado das nossas divulgações. Só é ativado com a sua autorização."
                  >
                    <Switch
                      checked={marketingDraft}
                      onChange={setMarketingDraft}
                      label="Marketing"
                    />
                  </Category>
                </div>

                <p className="mt-2 text-[11px] text-ink-500 sm:mt-3 sm:text-xs">
                  Detalhes na{" "}
                  <Link to="/politica-de-cookies" className="link-underline text-forest-800">
                    política de cookies
                  </Link>
                  .
                </p>

                <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:gap-3">
                  <button
                    type="button"
                    onClick={() => decide(marketingDraft)}
                    className="flex-1 rounded-full bg-forest-800 px-3 py-1.5 text-xs font-medium text-ink-50 shadow-sm transition hover:bg-forest-700 hover:shadow sm:px-4 sm:py-2 sm:text-sm"
                  >
                    Salvar preferências
                  </button>
                  <button
                    type="button"
                    onClick={() => decide(true)}
                    className="flex-1 rounded-full border border-ink-300 px-3 py-1.5 text-xs font-medium text-ink-800 transition hover:bg-ink-100 sm:px-4 sm:py-2 sm:text-sm"
                  >
                    Aceitar todos
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
