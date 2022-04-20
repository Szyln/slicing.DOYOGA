import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/slicing.DOYOGA/',
  // publicDir: 'public',
  plugins: [react()]
})
