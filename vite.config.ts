import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<owner>.github.io/BoraSurfar/ in production, so
// assets must be resolved under the /BoraSurfar/ base path when built.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/BoraSurfar/' : '/',
  build: {
    rollupOptions: {
      // Deux pages indépendantes : la marketplace surf et la page du
      // restaurant Maison Aurèle (/maison-aurele.html).
      input: {
        main: 'index.html',
        maisonAurele: 'maison-aurele.html',
      },
    },
  },
  server: {
    host: true,
    port: 5173,
  },
}))
