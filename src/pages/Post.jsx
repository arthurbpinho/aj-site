import { useMemo } from "react";
import { asset } from "../utils/asset.js";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { posts, getPostBySlug } from "../data/posts.js";

const MD_INLINE = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;

function renderInline(text) {
  // Renderiza **bold** e *italic* simples sem dependência externa.
  const parts = [];
  let last = 0;
  let m;
  while ((m = MD_INLINE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[2] !== undefined) parts.push(<strong key={parts.length}>{m[2]}</strong>);
    else if (m[3] !== undefined) parts.push(<em key={parts.length}>{m[3]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-50 h-0.5 origin-left bg-gold-500"
    />
  );
}

export default function Post() {
  const { slug } = useParams();
  const post = useMemo(() => getPostBySlug(slug), [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const idx = posts.findIndex((p) => p.slug === slug);
  const next = posts[idx + 1];
  const prev = posts[idx - 1];

  return (
    <>
      <ReadingProgress />

      <article>
        <header className="relative overflow-hidden bg-forest-950 text-ink-50">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 20%, rgba(214,179,101,0.3), transparent 45%), radial-gradient(circle at 10% 80%, rgba(95,142,99,0.3), transparent 45%)`,
            }}
          />
          <div className="container-prose relative py-20 md:py-28">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-ink-300 hover:text-gold-400 transition"
            >
              <ArrowLeft size={14} /> Voltar ao blog
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 font-serif text-4xl md:text-5xl leading-tight"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 flex flex-wrap items-center gap-6 text-sm text-ink-300"
            >
              <span className="inline-flex items-center gap-2">
                <User size={14} className="text-gold-400" /> {post.author}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar size={14} className="text-gold-400" /> {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={14} className="text-gold-400" /> {post.readingTime}
              </span>
            </motion.div>
          </div>
        </header>

        {post.image && (
          <div className="container-prose -mt-12 md:-mt-16 relative z-10">
            <Reveal>
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-ink-200 shadow-2xl ring-1 ring-ink-200">
                <img
                  src={asset(post.image)}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        )}

        <div className="container-prose py-16">
          <div className="prose-aj">
            {post.excerpt && (
              <p className="mb-10 font-serif text-2xl italic leading-snug text-forest-800">
                {post.excerpt}
              </p>
            )}
            {post.sections.map((section, i) => (
              <Reveal key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.body.map((p, j) => (
                  <p key={j}>{renderInline(p)}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      <nav className="container-wide grid gap-4 border-t border-ink-200 py-12 md:grid-cols-2">
        {prev ? (
          <Link
            to={`/blog/${prev.slug}`}
            className="group flex flex-col rounded-2xl border border-ink-200 p-6 transition hover:border-forest-400 hover:bg-ink-100"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-600">
              <ArrowLeft size={14} /> Anterior
            </span>
            <span className="mt-3 font-serif text-xl text-forest-900 group-hover:text-forest-700">
              {prev.title}
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={`/blog/${next.slug}`}
            className="group flex flex-col items-end rounded-2xl border border-ink-200 p-6 text-right transition hover:border-forest-400 hover:bg-ink-100"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-600">
              Próximo <ArrowRight size={14} />
            </span>
            <span className="mt-3 font-serif text-xl text-forest-900 group-hover:text-forest-700">
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </nav>
    </>
  );
}
