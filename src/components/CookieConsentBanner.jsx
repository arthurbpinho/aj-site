import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        checked ? "bg-forest-700" : "bg-ink-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-paper shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function Category({ title, tag, description, children }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-ink-200/70 py-4 last:border-0">
      <div className="pr-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-forest-900">{title}</h3>
          {tag && (
            <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] uppercase tracking-wide text-ink-500">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">{description}</p>
      </div>
      <div className="pt-1">{children}</div>
    </div>
  );
}

export default function CookieConsentBanner() {
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

  const hasExistingChoice = consent !== null;

  return (
    <AnimatePresence>
      {view !== "closed" && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:px-6"
        >
          <div className="w-full max-w-2xl rounded-2xl border border-ink-200 bg-paper/97 p-6 shadow-[0_-8px_40px_rgba(0,0,0,0.15)] backdrop-blur">
            {view === "banner" && (
              <div>
                <h2 className="font-serif text-lg text-forest-900">Cookies neste site</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  Usamos apenas um cookie necessário, que guarda a sua escolha sobre esta
                  política. O Pixel da Meta (marketing) só é ativado com a sua autorização, e
                  nada vem marcado por padrão. Detalhes na{" "}
                  <Link to="/politica-de-cookies" className="link-underline text-forest-800">
                    política de cookies
                  </Link>
                  .
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => decide(true)} className="btn-primary flex-1">
                    Aceitar todos
                  </button>
                  <button
                    type="button"
                    onClick={() => decide(false)}
                    className="btn-ghost flex-1"
                  >
                    Recusar não-essenciais
                  </button>
                  <button
                    type="button"
                    onClick={openDetails}
                    className="text-sm font-medium text-ink-600 underline decoration-ink-300 underline-offset-2 transition hover:text-forest-800 sm:px-3"
                  >
                    Escolher
                  </button>
                </div>
              </div>
            )}

            {view === "details" && (
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-lg text-forest-900">
                    Preferências de cookies
                  </h2>
                  {hasExistingChoice && (
                    <button
                      type="button"
                      aria-label="Fechar"
                      onClick={() => setView("closed")}
                      className="rounded-full p-1.5 text-ink-500 transition hover:bg-ink-100 hover:text-ink-800"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                <div className="mt-3 max-h-[50vh] overflow-y-auto pr-1">
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

                <p className="mt-4 text-xs text-ink-500">
                  Detalhes na{" "}
                  <Link to="/politica-de-cookies" className="link-underline text-forest-800">
                    política de cookies
                  </Link>
                  .
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => decide(marketingDraft)}
                    className="btn-primary flex-1"
                  >
                    Salvar preferências
                  </button>
                  <button type="button" onClick={() => decide(true)} className="btn-ghost flex-1">
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
