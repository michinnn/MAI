import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import 'dotenv/config'

// require('dotenv').config({
//   path: `./.env.${process.env.NODE_ENV || 'development'}`,
// });

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  // base: process.env.VITE_BASE_PATH,
  base: '/MAI/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
