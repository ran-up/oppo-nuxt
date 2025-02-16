<template>
  <div>
    <app-header />
    <navbar :navbars="homeInfoStore.navbars" />
    <slot></slot>
    <app-footer />
  </div>
</template>

<script setup>
import getHomeInfoReq from '~/service/home'
import { useHomeInfoStore } from '~/store/home'
import homeInfoSave from '~/service/saveData/homeInfo'

const homeInfoStore = useHomeInfoStore()
const { data } = await getHomeInfoReq()
const errorSolve = () => {
  // client 和 server 需要分开处理
  if (import.meta.client) {
    ElMessage.error('获取首页数据失败，使用备份数据')
  } else {
    console.log('获取首页数据失败，使用备份数据')
  }
  const homeInfo = ref(homeInfoSave.data)
  homeInfoStore.updateNavbar(homeInfo.value.navbars)
  homeInfoStore.updateBanner(homeInfo.value.banners)
  homeInfoStore.updateCategory(homeInfo.value.categorys)
}
if (!data.value) {
  errorSolve()
} else {
  const { code, data: curData } = data.value
  if (code === 200) {
    homeInfoStore.updateNavbar(curData.navbars)
    homeInfoStore.updateBanner(curData.banners)
    homeInfoStore.updateCategory(curData.categorys)
  } else {
    errorSolve()
  }
}
</script>
