import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'

// .env.development の VITE_API_URL を `/qkjudge/api` のままにしているのは、
// vite dev server の proxy を経由させて CORS / Origin 検証を回避するため
// (ブラウザは localhost 上の同一オリジン扱いで Cookie を送れる)。
// 直接 https://qkjudge-api-stg.kisen.one を叩くと staging の CORS_ALLOW_ORIGIN
// が qkjudge-stg.kisen.one 固定なので localhost からは弾かれる。
export default defineConfig({
  base: '/',
  plugins: [react(), WindiCSS()],
  server: {
    proxy: {
      '^/qkjudge/api/.*': {
        target: 'https://qkjudge-api-stg.kisen.one',
        changeOrigin: true,
        rewrite(path) {
          return path.replace(/^\/qkjudge\/api/, '')
        }
      }
    }
  }
})
