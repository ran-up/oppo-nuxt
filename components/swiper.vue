<template>
  <div class="swiper">
    <el-carousel
      height="480px"
      trigger="click"
      indicator-position="none"
      @change="changeHandler"
      :active-index="activeIndex"
    >
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img class="pic-str" :src="item.picStr" alt="OPPO" />
      </el-carousel-item>
    </el-carousel>
    <!-- 指示器 -->
    <ul class="dots">
      <!-- @click="clickHandler(index)" -->
      <li
        class="dot"
        v-for="(item, index) in banners"
        :key="item.id"
        :class="{ active: index === activeIndex }"
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IBanner } from '~/store/home'

defineProps({
  banners: {
    type: Array<IBanner>,
    default: () => []
  }
})
const activeIndex = ref<number>(0)
const changeHandler = (index: number) => {
  activeIndex.value = index
}
// const clickHandler = (index: number) => {
//   activeIndex.value = index
// }
</script>

<style scoped lang="scss">
.swiper {
  position: relative;
  padding-top: 36px;
  .pic-str {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    @include normalFlex(row, center);
    align-items: center;
    gap: 0 10px;
    width: 100%;
    height: 40px;
    .dot {
      opacity: 0.8;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    .active {
      opacity: 1;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border: 1px solid #fff;
    }
  }
}
</style>
