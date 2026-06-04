import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { courses } from "./src/data/courses.js";
import { posts } from "./src/data/posts.js";
import { ampliacoesIntro } from "./src/data/ampliacoes.js";

// Base path: custom domain (academiajunguiana.com) serves at root.
// Override with VITE_BASE=/aj-site/ if deploying to arthurbpinho.github.io/aj-site/.
const base = process.env.VITE_BASE ?? "/";

const SITE_URL = "https://academiajunguiana.com";

// Imagem padrão de preview (logo da marca), usada nas páginas que não têm
// uma imagem própria mais específica.
const DEFAULT_IMAGE = `${SITE_URL}/midias/logos/logoverdeescura.png`;

// Crawlers (WhatsApp/Facebook) não renderizam AVIF; quando a imagem original
// for .avif, apontamos para a versão .jpg gerada no build (mesmo nome).
const ogImage = (img) => `${SITE_URL}${img.replace(/\.avif$/i, ".jpg")}`;

// Escapa valores antes de injetá-los em atributos/HTML.
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Per-route OG metadata. GitHub Pages serves <route>/index.html when a
// crawler requests /<route>, so writing custom meta there lets WhatsApp,
// Facebook etc. show route-specific previews even though the app is a SPA.
const ROUTE_META = {
  cursos: {
    title: "Cursos e Grupos — Academia Junguiana",
    description:
      "Todos os cursos, grupos de estudo e a assinatura da Academia Junguiana em um só lugar.",
    image: DEFAULT_IMAGE,
    type: "website",
  },
  blog: {
    title: "Blog — Academia Junguiana",
    description:
      "Textos escritos pela equipe da Academia Junguiana sobre Jung, símbolos, clínica, mitologia e os fundamentos da Psicologia Analítica.",
    image: DEFAULT_IMAGE,
    type: "website",
  },
  ampliacoes: {
    title: "Ampliações — Academia Junguiana",
    description: ampliacoesIntro,
    image: DEFAULT_IMAGE,
    type: "website",
  },
  trilha: {
    title: "Trilha da Academia: por onde começar? — Academia Junguiana",
    description:
      "Muita gente chega à Psicologia Analítica sem saber por onde começar. Esta é a trilha da Academia.",
    image: `${SITE_URL}/midias/trilhapreview.png`,
    type: "website",
  },
  bioinsta: {
    title: "Academia Junguiana — Todos os nossos links",
    description:
      "Nessa página você encontra todos os nossos links, diretamente do seu Instagram para a Academia Junguiana.",
    image: `${SITE_URL}/midias/bioinstapreview.png`,
    type: "website",
  },
  // Uma rota por curso/grupo (/cursos/<id>), derivada do próprio catálogo.
  ...Object.fromEntries(
    courses.map((c) => [
      `cursos/${c.id}`,
      {
        title: `${c.title} — Academia Junguiana`,
        description: c.description,
        image: `${SITE_URL}${c.image}`,
        type: "article",
      },
    ]),
  ),
  // Uma rota por post do blog (/blog/<slug>), com a imagem de capa do post.
  ...Object.fromEntries(
    posts.map((p) => [
      `blog/${p.slug}`,
      {
        title: `${p.title} — Academia Junguiana`,
        description: p.excerpt,
        image: ogImage(p.image),
        type: "article",
      },
    ]),
  ),
};

function routeOgPlugin() {
  return {
    name: "route-og-html",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve("dist");
      const sourceHtml = fs.readFileSync(
        path.join(distDir, "index.html"),
        "utf-8",
      );
      for (const [route, meta] of Object.entries(ROUTE_META)) {
        const url = `${SITE_URL}/${route}`;
        const title = esc(meta.title);
        const description = esc(meta.description);
        const image = esc(meta.image);
        const tags = [
          `<title>${title}</title>`,
          `<meta name="description" content="${description}" />`,
          `<meta property="og:title" content="${title}" />`,
          `<meta property="og:description" content="${description}" />`,
          `<meta property="og:image" content="${image}" />`,
          `<meta property="og:url" content="${esc(url)}" />`,
          `<meta property="og:type" content="${esc(meta.type)}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${title}" />`,
          `<meta name="twitter:description" content="${description}" />`,
          `<meta name="twitter:image" content="${image}" />`,
        ].join("\n    ");
        // Remove os metadados padrão da base (title, description, og:*,
        // twitter:*) para então injetar os específicos da rota.
        const html = sourceHtml
          .replace(/<title>[\s\S]*?<\/title>/, "")
          .replace(/[ \t]*<meta\s+name="description"[^>]*>\s*/i, "")
          .replace(/[ \t]*<meta\s+property="og:[^"]*"[^>]*>\s*/gi, "")
          .replace(/[ \t]*<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, "")
          .replace("</head>", `    ${tags}\n  </head>`);
        const outDir = path.join(distDir, route);
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(outDir, "index.html"), html);
      }
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), routeOgPlugin()],
  build: {
    sourcemap: false,
  },
});
