<template>
  <div class="home">
    <!-- 页面统一管理组件 -->
    <base-content
      :banners="homeInfoStore.banners"
      :categorys="homeInfoStore.categorys"
      class="wrapper"
    />
  </div>
</template>

<script setup lang="ts">
import { getHomeOnePlusInfoReq } from '~/service/home'
import { useHomeInfoStore } from '~/store/home'
import type { Categorys, Navbars } from '~/store/home'
import homeOnePlusInfoSave from '~/service/saveData/onePlusInfo'

const homeInfoStore = useHomeInfoStore() // pinia 仓库
const { data } = await getHomeOnePlusInfoReq() // 请求数据
// 错误处理
const errorSolve = () => {
  // client 和 server 需要分开处理
  if (import.meta.client) {
    ElMessage.error('获取OnePlus专区数据失败，使用备份数据')
  } else {
    console.log('获取OnePlus专区数据失败，使用备份数据')
  }
  // 使用备份数据
  const homeOnePlusInfo = ref(homeOnePlusInfoSave.data)
  // 更新pinia仓库数据
  homeInfoStore.updateNavbar(homeOnePlusInfo.value.navbars as Navbars)
  homeInfoStore.updateBanner(homeOnePlusInfo.value.banners)
  homeInfoStore.updateCategory(homeOnePlusInfo.value.categorys as unknown as Categorys)
}
// 接口请求失败则使用备份数据
if (!data.value) {
  errorSolve()
} else {
  const { code, data: curData } = data.value
  if (code === 200) {
    // 更新pinia仓库数据
    homeInfoStore.updateNavbar(curData.navbars)
    homeInfoStore.updateBanner(curData.banners)
    homeInfoStore.updateCategory(curData.categorys)
  } else {
    // 返回数据失败则使用备份数据
    errorSolve()
  }
}
</script>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
