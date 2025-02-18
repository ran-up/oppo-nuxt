<template>
  <div class="tab-category wrapper">
    <template v-for="item in categorys" :key="item.id">
      <!-- 这里跳转详情页只在 OPPO专区（首页）的分类中进行跳转，其他页面不需要跳转 -->
      <NuxtLink :to="$route.path === '/' ? `/category-detail?type=${item.type}` : ''">
        <div class="category-item">
          <img class="pic-str" :src="item.picStr" alt="OPPO" />
          <div class="title">{{ item.title }}</div>
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ICategory } from '~/store/home'

defineProps({
  categorys: {
    type: Array<ICategory>,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.tab-category {
  margin-top: 40px;
  @include normalFlex();
  align-items: center;
  .category-item {
    @include normalFlex(column, center);
    align-items: center;
    cursor: pointer;
    .pic-str {
      width: 80px;
      height: 80px;
    }
    .title {
      margin-top: 16px;
      max-width: 120px;
      text-align: center;
      font-size: 16px;
      color: #000;
      /* @include border(); */
    }
  }
}
</style>
