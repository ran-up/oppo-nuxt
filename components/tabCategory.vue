<template>
  <div class="tab-category wrapper">
    <template v-for="item in categorys" :key="item.id">
      <NuxtLink :to="`/category-detail?type=${item.type}`">
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

const porps = defineProps({
  categorys: {
    type: Array<ICategory>,
    default: () => []
  }
})
console.log('categorys', porps)
const handleItemClick = (item: ICategory) => {
  console.log(item)
}
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
