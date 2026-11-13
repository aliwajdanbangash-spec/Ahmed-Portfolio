import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the production build works on any host or subpath
  // (e.g. GitHub Pages project sites).
  base: './',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});