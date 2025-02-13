// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // css: ['normalize.css', 'element-plus/dist/index.css'], // assets/css/global.scss 中导入了
  css: ['@/assets/css/global.scss', '@/assets/cus-font/iconfont.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/variables.scss" as *;'
        }
      }
    }
  },
  modules: ['@element-plus/nuxt'],
  plugins: ['@/plugins/element-plus.client.js'],
  devServer: {
    port: 3001
  }
})
