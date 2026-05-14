# Academia Junguiana — site

Site institucional da Academia Junguiana, em React + Vite + Tailwind, com deploy automático no GitHub Pages.

## Stack

- **Vite + React (JS)**
- **Tailwind CSS** — paleta cream/parchment + verde floresta + dourado discreto
- **Framer Motion** — transições e reveal on scroll
- **React Router** — SPA com `BrowserRouter`, fallback `404.html` para GitHub Pages

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera ./dist
npm run preview  # serve ./dist localmente
```

## Estrutura

```
src/
├── components/   Header, Footer, Reveal, SectionTitle
├── pages/        Home, Ampliacoes, Blog, Post, Cursos, NotFound
├── data/         courses.js, ampliacoes.js, posts.js (conteúdo do site)
├── utils/        asset.js (helper de paths respeitando BASE_URL)
└── index.css     Tema + componentes utilitários (.btn, .prose-aj…)

public/midias/    Imagens (logos, cursos, blog, coordenadores)
```

## Deploy

Push para `main` dispara `.github/workflows/deploy.yml`, que builda e publica em GitHub Pages.

### Trocar base path (para domínio próprio via Cloudflare)

O Vite usa `base: "/aj-site/"` por padrão. Para deploy em domínio próprio (raiz), defina `VITE_BASE=/`:

```yaml
- name: Build
  env:
    VITE_BASE: /
  run: npm run build
```

E adicione um arquivo `public/CNAME` com o domínio.

## Conteúdo

- Posts do blog → `src/data/posts.js`
- Cursos → `src/data/courses.js`
- Ampliações → `src/data/ampliacoes.js`
- Vídeo CTA da Home → embed do YouTube (ID na constante `YOUTUBE_VIDEO_ID` em `src/pages/Home.jsx`)
