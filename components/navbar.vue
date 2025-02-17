<template>
  <div class="navbar">
    <div class="wrapper content">
      <!-- logo -->
      <NuxtLink to="/" class="content-left">
        <!-- logo图片 -->
        <img src="/logo.png" class="logo" alt="" />
        <!-- logo title，设置有助于 SEO-->
        <!-- 设置 z-index 将其设置到页面外 -->
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
            <NuxtLink class="link" :to="getPathName(item.title as string)">
              {{ item.title }}
            </NuxtLink>
          </li>
        </template>
      </ul>
      <!-- 搜索框组件 -->
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
const route = useRoute()
const paths: any = reactive({
  OPPO专区: '/',
  OnePlus专区: '/one-plus',
  智能硬件: '/intelligent',
  服务: '/oppo-service'
})
const curTabName = ref<string>('OPPO专区')
// 切换tab
const changeTabHandler = (tabName: string) => {
  curTabName.value = tabName
}
// 获取路径
// 这里需要根据传递的title获取具体的路径，通过函数调用，所以返回的一个函数
const getPathName = computed(() => {
  return (title: string) => {
    return paths[title] || '/'
  }
})
// 页面加载完成后，根据当前路径激活当前 tab
onMounted(() => {
  const curPath = route.path
  // 遍历 paths，找到当前路径对应的 tabName
  for (const [key, value] of Object.entries(paths)) {
    if (value === curPath) {
      curTabName.value = key
      break
    }
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
