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
import { getHomeIntelligentInfoReq } from '~/service/home'
import { useHomeInfoStore } from '~/store/home'
import homeIntelligentInfoSave from '~/service/saveData/homeIntelligentInfo'

const homeInfoStore = useHomeInfoStore() // pinia 仓库
const { data } = await getHomeIntelligentInfoReq() // 请求数据
reqUnite(homeInfoStore, data, homeIntelligentInfoSave) // 统一处理请求数据
</script>

<style scoped lang="scss">
.home {
  background-color: $bgGrayColor;
}
</style>
