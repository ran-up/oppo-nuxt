<template>
  <div class="navbar">
    <div class="wrapper content">
      <NuxtLink to="/" class="content-left">
        <img src="/logo.png" class="logo" alt="" />
        <h1 class="title">OPPO官网</h1>
      </NuxtLink>
      <ul class="content-center">
        <template v-if="navbars.length > 0">
          <li
            :class="{ active: item.title === curTabName }"
            @click="changeTabHandler(item.title as string)"
            v-for="item in navbars"
            :key="item.id"
          >
            <NuxtLink class="link" :to="getPathName(item.title as string)">{{
              item.title
            }}</NuxtLink>
          </li>
        </template>
      </ul>
      <search class="content-right"></search>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INavbar } from '~/store/home'

defineProps({
  navbars: {
    type: Array<INavbar>,
    default: () => []
  }
})
const curTabName = ref<string>('OPPO专区')
// 切换tab
const changeTabHandler = (tabName: string) => {
  curTabName.value = tabName
}
// 获取路径
const getPathName = computed(() => {
  // 通过函数调用的，所以需要返回一个函数
  return (title: string) => {
    const paths: any = {
      OPPO专区: '/',
      OnePlus专区: '/one-plus',
      智能硬件: '/intelligent',
      服务: '/oppo-service'
    }
    return paths[title] || '/'
  }
})
</script>

<style scoped lang="scss">
.navbar {
  @include elementSticky(36px);
  height: $navBarHeight;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background-color: #fff;
  z-index: 99;
  .content {
    @include normalFlex(row, flex-start);
    align-items: center;
    height: 100%;
    &-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        margin: 0;
        height: 0;
        text-indent: -999px;
      }
    }
    &-center {
      @include normalFlex();
      margin-left: 60px;
      width: 530px;
      .link {
        opacity: 0.55;
        font-size: 14px;
        color: #000;
        &:hover {
          opacity: 1;
        }
      }
      .active .link {
        opacity: 1;
      }
    }
    &-right {
      margin-left: 50px;
    }
  }
}
</style>
