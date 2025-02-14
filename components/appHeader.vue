<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="content-left">
        <nuxt-link class="link" to="/">
          <span>OPPO官网</span>
        </nuxt-link>
        <nuxt-link class="link" to="/">
          <span>一加官网</span>
        </nuxt-link>
      </div>
      <div class="content-right">
        <a href="#" class="link download">
          <span>下载 OPPO 商城APP</span>
          <div class="app">
            <img class="ecode" src="@/assets/images/ecode.png" alt="OPPO" />
            <div class="name">扫码下载 OPPO 商城 App</div>
          </div>
        </a>
        <NuxtLink to="/login" class="link">
          <i class="iconfont icon-user"></i>
          <span>登录</span>
        </NuxtLink>
        <NuxtLink to="/register" class="link">
          <span>注册</span>
        </NuxtLink>
        <a href="#" class="link">
          <i class="iconfont icon-shoppingcart"></i>
          <span>购物车 </span>
          <span>(0)</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'AppHeader' })
</script>

<style scoped lang="scss">
.app-header {
  height: $appHeaderHeight;
  background-color: #000;
  @include elementSticky(0, 110);
  .link span {
    opacity: 0.8; // 字体变暗
  }
  .content {
    /* @include border(); */
    height: 100%;
    @include normalFlex();
    &-left {
      @include normalFlex(row, flex-start);
      align-items: center;
      .link {
        margin-right: 24px;
        color: #fff;
        cursor: pointer;
      }
    }
    &-right {
      @include normalFlex(row, flex-end);
      align-items: center;
      .link {
        padding: 0 14px;
        border-right: 1px solid #fff;
        color: #fff;
      }
      .link:last-child {
        border-right: none;
      }
      i {
        margin-right: 6px;
      }
      .icon {
        &-user {
          font-size: 12px;
        }
        &-shoppingcart {
          font-size: 15px;
        }
      }
      .download {
        position: relative;
        &:hover .app {
          display: block;
        }
        .app {
          display: none;
          position: absolute;
          top: 25px;
          left: 0;
          padding: 8px;
          min-width: 146px;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
          z-index: 10000;
        }
        .ecode {
          width: 140px;
          height: 140px;
          margin-bottom: 4px;
        }
        .name {
          color: #000;
        }
      }
    }
  }
}
</style>
