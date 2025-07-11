import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['96.30.199.117']
  },
  preview: {
    host: '0.0.0.0',
    port: 3000
  }
})
