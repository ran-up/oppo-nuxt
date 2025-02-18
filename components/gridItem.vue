<template>
  <div class="grid-item">
    <div class="item-img"><img class="img" :src="productDetail.url" alt="" /></div>
    <div class="item-title">{{ productDetail.title }}</div>
    <div class="item-labels">
      <!-- 没有活动内容的显示'敬请期待' -->
      <template v-if="(productDetail.activityList ?? []).length > 0">
        <span class="label" v-for="item in productDetail.activityList" :key="item.type">
          {{ item.activityInfo }}
        </span>
      </template>
      <span class="label" v-else>敬请期待</span>
    </div>
    <div class="item-price">
      <span class="prefix">
        {{ productDetail.priceInfo?.prefix }}{{ productDetail.priceInfo?.currencyTag }}
      </span>
      <!-- 没有提供价格则显示'暂无报价' -->
      <span class="price">{{ productDetail.priceInfo?.buyPrice || '暂无报价' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProductDetailss } from '~/store/home'

interface prop {
  productDetail: IProductDetailss
}
const { productDetail } = defineProps<prop>()
</script>

<style scoped lang="scss">
.grid-item {
  background-color: #fff;
  text-align: center;
  border-radius: 8px;
  transition: all 0.2s linear;
  &:hover {
    @include hoverEffect();
  }
  .item-img .img {
    margin-top: 14px;
    margin-bottom: 7px;
    width: $imgWidth;
    height: $imgHeight;
  }
  .item-title {
    margin-top: 2px;
    padding: 0 20px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    @include textEllipsis();
  }
  .item-labels {
    @include normalFlex(row, center);
    align-items: center;
    height: 45px;
    /* @include border(); */
    .label {
      display: inline-block;
      margin: 0 4px 4px 0;
      padding: 1px 2px;
      color: $priceColor;
      font-size: 13px;
      border: 1px solid $priceColor;
    }
  }
  .item-price {
    padding-bottom: 40px;
    .prefix {
      color: $priceColor;
      font-size: 13px;
    }
    .price {
      line-height: 1;
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
