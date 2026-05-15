import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path: custom domain (academiajunguiana.com) serves at root.
// Override with VITE_BASE=/aj-site/ if deploying to arthurbpinho.github.io/aj-site/.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: false,
  },
});
