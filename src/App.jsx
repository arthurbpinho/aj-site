import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import CookieConsentBanner from "./components/CookieConsentBanner.jsx";
import MetaPixelLinkEvents from "./components/MetaPixelLinkEvents.jsx";
import Home from "./pages/Home.jsx";
import BlackFriday from "./pages/BlackFriday.jsx";
import Ampliacoes from "./pages/Ampliacoes.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import Cursos from "./pages/Cursos.jsx";
import CursoDetalhe from "./pages/CursoDetalhe.jsx";
import Trilha from "./pages/Trilha.jsx";
import Bioinsta from "./pages/Bioinsta.jsx";
import PoliticaCookies from "./pages/PoliticaCookies.jsx";
import NotFound from "./pages/NotFound.jsx";
import { getStoredConsent } from "./utils/cookieConsent.js";
import {
  BLACK_FRIDAY_ACTIVE,
  BLACK_FRIDAY_PATH,
  isBlackFridayPath,
} from "./data/promo.js";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function isBioinsta(pathname) {
  return pathname.toLowerCase().replace(/\/+$/, "") === "/bioinsta";
}

// Durante a Black Friday, a página inicial redireciona para a promocional,
// preservando query string (UTMs) e âncora (ex.: /#planos).
function HomeRedirect() {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: BLACK_FRIDAY_PATH, search, hash }} replace />;
}

// Dispara PageView do Meta Pixel a cada troca de rota do SPA.
// O PageView inicial já sai no index.html; aqui pulamos o primeiro mount pra não contar duas vezes.
function MetaPixelPageView() {
  const { pathname } = useLocation();
  const firstLoad = useRef(true);
  const prevPath = useRef(pathname);
  useEffect(() => {
    const from = prevPath.current;
    prevPath.current = pathname;
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    if (isBioinsta(pathname)) return;
    // O redirecionamento / → /blackfriday não conta como nova visualização.
    if (BLACK_FRIDAY_ACTIVE && from === "/" && isBlackFridayPath(pathname)) return;
    if (typeof window.fbq === "function" && getStoredConsent()?.marketing) {
      window.fbq("track", "PageView");
    }
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isStandalone = isBioinsta(location.pathname);
  const isDark = isBlackFridayPath(location.pathname);
  return (
    <div className={`flex min-h-screen flex-col ${isDark ? "bg-forest-950" : "bg-ink-50"}`}>
      <ScrollToTop />
      <MetaPixelPageView />
      {!isStandalone && <MetaPixelLinkEvents />}
      {!isStandalone && <Header dark={isDark} />}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={BLACK_FRIDAY_ACTIVE ? <HomeRedirect /> : <Home />}
              />
              <Route path={BLACK_FRIDAY_PATH} element={<BlackFriday />} />
              <Route path="/ampliacoes" element={<Ampliacoes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Post />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/cursos/:slug" element={<CursoDetalhe />} />
              <Route path="/trilha" element={<Trilha />} />
              <Route path="/bioinsta" element={<Bioinsta />} />
              <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      {!isStandalone && <Footer />}
      {!isStandalone && <WhatsAppFab />}
      {!isStandalone && <CookieConsentBanner />}
    </div>
  );
}
