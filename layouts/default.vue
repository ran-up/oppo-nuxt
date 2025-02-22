<template>
  <div>
    <!-- 头部 -->
    <app-header />
    <!-- 导航 -->
    <navbar :navbars="homeInfoStore.navbars" />
    <slot></slot>
    <!-- 尾部 -->
    <app-footer />
  </div>
</template>

<script setup lang="ts">
import { getHomeInfoReq } from '~/service/home'
import { useHomeInfoStore } from '~/store/home'
import homeInfoSave from '~/service/saveData/homeInfo'

// 首页和默认布局中都获取了首页数据。
// 首页和其余页面的切换都需要重新获取首页数据
// 不同的是，默认布局只在详情页才进行获取首页数据。
const homeInfoStore = useHomeInfoStore() // pinia 仓库
// 在详情页刷新时请求首页数据
if (homeInfoStore.banners.length === 0) {
  const { data } = await getHomeInfoReq() // 请求首页数据
  reqUnite(homeInfoStore, data, homeInfoSave) // 统一处理请求数据
}
</script>
