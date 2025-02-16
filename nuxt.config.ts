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
  app: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！'
        },
        {
          name: 'keywords',
          content: 'OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  modules: ['@element-plus/nuxt', '@pinia/nuxt'],
  plugins: ['@/plugins/element-plus.client.js'],
  devServer: { port: 3001 }
})
