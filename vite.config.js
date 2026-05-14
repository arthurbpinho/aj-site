import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path: project-level GitHub Pages serves at /<repo>/.
// Override with VITE_BASE=/  when deploying to a custom domain (CNAME).
const base = process.env.VITE_BASE ?? "/aj-site/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
