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
import homeInfoSave from '~/service/saveData/homeInfo'
import { useHomeInfoStore } from '~/store/home'
// 首页和默认布局中都获取了首页数据。
// 首页和其余页面的切换都需要重新获取首页数据
// 不同的是，默认布局只在详情页才进行获取首页数据。
const homeInfoStore = useHomeInfoStore() // pinia 仓库
const { data } = await getHomeInfoReq() // 请求首页数据
reqUnite(homeInfoStore, data, homeInfoSave) // 统一处理请求数据
</script>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
