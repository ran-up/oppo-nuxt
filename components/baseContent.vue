<template>
  <div>
    <!-- 轮播图 -->
    <swiper :banners="banners" />
    <!-- 分类导航 -->
    <tab-category :categorys="categorys" />
    <!-- 分类详情 -->
    <template v-for="category in categorys" :key="category.id">
      <!-- 单个分类详情 -->
      <category-section :category="category" />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { IBanner, ICategory } from '~/store/home'

defineProps({
  banners: {
    type: Array<IBanner>,
    default: () => []
  },
  categorys: {
    type: Array<ICategory>,
    default: () => []
  }
})
</script>
