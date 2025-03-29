import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      proxy: {
        '/api': env.VITE_API_URL
      }
    },
    plugins: [react()],
  }
})
