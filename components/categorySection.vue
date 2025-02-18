<template>
  <!-- 分类信息存在才展示这个页面，没有不展示 -->
  <div class="category-section" v-if="(category?.productDetailss ?? []).length > 0">
    <!-- 分类标题 -->
    <category-title :title="category?.title" />
    <!-- 分类item，包含大图介绍和小的item -->
    <category-grid :categoryUrl="category?.url" :productDetailss="category?.productDetailss" />
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from '~/store/home'

interface prop {
  category?: ICategory
}
const { category } = defineProps<prop>()
</script>
