import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/paginaReact_1/', // 👈 NOMBRE DE TU REPO
  plugins: [react()],
})