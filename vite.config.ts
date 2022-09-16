import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), WindiCSS()],
  server: {
    proxy: {
      '^/qkjudge/api/.*': {
        // target: 'https://tqk.trap.show/qkjudge/',
        target: 'https://dev_tqk_qkjudge.trap.games/',
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/qkjudge\/api/, '')
        }
      }
    }
  }
})
