import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // Exposes the server to the local network
    port: 5173,      // Standard Vite port
    strictPort: true // Prevents Vite from jumping to another port if 5173 is busy
  }
})
