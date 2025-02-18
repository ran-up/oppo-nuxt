<template>
  <div class="category-grid wrapper">
    <!-- 详情页不展示分类介绍图片 -->
    <!-- 可以在详情页传入空置或者使用布尔类型直接判断 -->
    <div class="category-grid-item first" v-if="categoryUrl.length > 0">
      <img :src="categoryUrl" alt="OPPO" />
    </div>
    <div
      class="category-grid-item"
      v-for="productDetail in productDetailss"
      :key="productDetail.id"
    >
      <!-- 单个item信息 -->
      <grid-item :productDetail />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductDetailss } from '~/store/home'

defineProps({
  productDetailss: {
    type: Array<IProductDetailss>,
    default: () => []
  },
  // 大图片，占两个位置，40%的宽度
  categoryUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.category-grid {
  @include normalFlex(row, flex-start);
  flex-wrap: wrap;
  /* 使其与上面的内容对齐 */
  width: $contentWidth + 18px;
  .category-grid-item {
    margin-bottom: 18px;
    padding-right: 18px;
    width: 20%;
    height: $gridItemHeight;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }
  .first {
    width: 40%;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
