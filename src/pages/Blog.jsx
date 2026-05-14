import { Link } from "react-router-dom";
import { asset } from "../utils/asset.js";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { posts } from "../data/posts.js";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-100 to-ink-50">
      <div className="container-wide py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-gold-600"
        >
          Blog
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 max-w-3xl font-serif text-5xl md:text-6xl leading-[1.05] text-forest-950"
        >
          Estudos, ensaios e<br />
          <span className="italic text-forest-800">reflexões da Academia.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-xl text-lg text-ink-700 leading-relaxed"
        >
          Textos escritos pela equipe da Academia Junguiana sobre Jung,
          símbolos, clínica, mitologia e os fundamentos da Psicologia Analítica.
        </motion.p>
      </div>
    </section>
  );
}

function FeaturedPost({ post }) {
  return (
    <Reveal>
      <Link
        to={`/blog/${post.slug}`}
        className="group grid gap-8 overflow-hidden rounded-3xl bg-paper ring-1 ring-ink-200 transition hover:shadow-2xl md:grid-cols-2"
      >
        <div className="aspect-[4/3] overflow-hidden bg-ink-200 md:aspect-auto">
          <img
            src={asset(post.image)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-600">
            Em destaque · {post.date} · {post.readingTime}
          </p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-forest-900 leading-tight">
            {post.title}
          </h2>
          <p className="mt-4 text-base text-ink-700 leading-relaxed line-clamp-5">
            {post.excerpt}
          </p>
          <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-forest-700">
            Ler artigo completo <ArrowRight size={14} />
          </span>
          <p className="mt-6 text-xs text-ink-500">por {post.author}</p>
        </div>
      </Link>
    </Reveal>
  );
}

function PostCard({ post, index }) {
  return (
    <Reveal delay={(index % 3) * 0.06}>
      <Link
        to={`/blog/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-ink-200 transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="aspect-[4/3] overflow-hidden bg-ink-200">
          <img
            src={asset(post.image)}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold-600">
            {post.date} · {post.readingTime}
          </p>
          <h3 className="mt-2 font-serif text-xl text-forest-900 leading-snug">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-ink-600 leading-relaxed line-clamp-4">
            {post.excerpt}
          </p>
          <p className="mt-auto pt-4 text-xs text-ink-500">por {post.author}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <Hero />
      <section className="container-wide pb-12">
        <FeaturedPost post={featured} />
      </section>

      {rest.length > 0 && (
        <section className="container-wide py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((p, i) => (
              <PostCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
