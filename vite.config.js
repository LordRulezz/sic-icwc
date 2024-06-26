import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "/sic-icwc",
  css: {
    sourceMap: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/sic-icwc/' : '/',
  productionSourceMap: false,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
