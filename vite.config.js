import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { courses } from "./src/data/courses.js";

// Base path: custom domain (academiajunguiana.com) serves at root.
// Override with VITE_BASE=/aj-site/ if deploying to arthurbpinho.github.io/aj-site/.
const base = process.env.VITE_BASE ?? "/";

const SITE_URL = "https://academiajunguiana.com";

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
        const html = sourceHtml
          .replace(/<title>[\s\S]*?<\/title>/, "")
          .replace(/<meta\s+name="description"[^>]*>\s*/i, "")
          .replace(/<meta\s+property="og:title"[^>]*>\s*/i, "")
          .replace(/<meta\s+property="og:description"[^>]*>\s*/i, "")
          .replace(/<meta\s+property="og:type"[^>]*>\s*/i, "")
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
