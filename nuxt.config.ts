// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['normalize.css', 'element-plus/dist/index.css'],
  modules: ['@element-plus/nuxt'],
  plugins: ['@/plugins/element-plus.client.js']
})
