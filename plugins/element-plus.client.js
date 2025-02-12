import ElementPLus from 'element-plus'
import { zhCn } from 'element-plus/es/locale/index.mjs'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineNuxtPlugin(nuxtApp => {
  return nuxtApp.vueApp.use(ElementPLus, {
    locale: zhCn
  })
})
