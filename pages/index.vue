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
import { getHomeInfoReq } from '~/service/home'
import { useHomeInfoStore } from '~/store/home'
import type { Categorys, Navbars } from '~/store/home'
import homeInfoSave from '~/service/saveData/homeInfo'

// 首页和默认布局中都获取了首页数据。
// 首页和其余页面的切换都需要重新获取首页数据
// 不同的是，默认布局只在详情页才进行获取首页数据。
const homeInfoStore = useHomeInfoStore() // pinia 仓库
const { data } = await getHomeInfoReq() // 请求首页数据
// 错误处理
const errorSolve = () => {
  // client 和 server 需要分开处理
  if (import.meta.client) {
    ElMessage.error('获取首页数据失败，使用备份数据')
  } else {
    console.log('获取首页数据失败，使用备份数据')
  }
  // 使用备份数据
  const homeInfo = ref(homeInfoSave.data)
  // 更新pinia仓库数据
  homeInfoStore.updateNavbar(homeInfo.value.navbars as Navbars)
  homeInfoStore.updateBanner(homeInfo.value.banners)
  homeInfoStore.updateCategory(homeInfo.value.categorys as unknown as Categorys)
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
