import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Ampliacoes from "./pages/Ampliacoes.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import Cursos from "./pages/Cursos.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-ink-50">
      <ScrollToTop />
      <Header />
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
              <Route path="/" element={<Home />} />
              <Route path="/ampliacoes" element={<Ampliacoes />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<Post />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
