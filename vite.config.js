import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_API_URL': process.env.VITE_API_URL
  },
  plugins: [react()],
})
