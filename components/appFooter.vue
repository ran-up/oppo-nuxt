<template>
  <div class="app-footer">
    <div class="wrapper content">
      <div class="content-top">
        <a href="#" class="top-item" v-for="item in footerIcons" :key="item.id">
          <img :src="item.picStr" :alt="item.title" />
          <div>{{ item.title }}</div>
        </a>
      </div>
      <div class="content-center">
        <div class="center-item">
          <ul>
            <li><a class="first" href="">OPPO</a></li>
            <li><a href="">Find N 全新折叠旗舰</a></li>
            <li><a href="">OPPO Find X5 Pro</a></li>
            <li><a href="">OPPO Find X5</a></li>
            <li><a href="">OPPO Reno9 Pro+</a></li>
            <li><a href="">OPPO Reno9 Pro</a></li>
            <li><a href="">OPPO Reno9</a></li>
            <li><a href="">OPPO Reno8</a></li>
            <li><a href="">OPPO K10x</a></li>
            <li><a href="">OPPO K10</a></li>
          </ul>
        </div>
        <div class="center-item">
          <ul>
            <li><a class="first" href="">一加</a></li>
            <li><a href="">一加 Ace Pro</a></li>
            <li><a href="">一加 Ace</a></li>
            <li><a href="">一加 Ace 竞速版</a></li>
            <li><a href="">一加 10 Pro</a></li>
            <li><a href="">一加手表</a></li>
            <li><a href="">一加 Buds Pro</a></li>
            <li><a href="">一加 Buds Z2</a></li>
          </ul>
        </div>
        <div class="center-item">
          <ul>
            <li><a class="first" href="">智能硬件</a></li>
            <li><a href="">OPPO Watch 3</a></li>
            <li><a href="">OPPO 手环 2</a></li>
            <li><a href="">OPPO Watch 2</a></li>
            <li><a href="">OPPO Pad</a></li>
            <li><a href="">OPPO Pad Air</a></li>
            <li><a href="">OPPO Enco X2</a></li>
            <li><a href="">OPPO Enco Air2 Pro</a></li>
            <li><a href="">OPPO Enco Air2</a></li>
          </ul>
        </div>
        <div class="connect">
          <img src="@/assets/images/phone.svg" alt="phone" />
          <span>在线客服</span>
        </div>
      </div>
      <div class="content-bottom">
        <div class="bottom-item">
          <a href=""> © 2004-2022 OPPO 版权所有粤ICP备14056724号</a>
          <span>|</span><a href="">隐私政策</a><span>|</span><a href="">用户使用协议</a>
          <span>|</span><a href="">资质证照</a><span>|</span><a href="">知识产权</a>
        </div>
        <div class="bottom-item">
          <img class="police" src="@/assets/images/police.png" alt="police" />
          <a href="#">粤公安网备 44190002001939号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IFooterIcon {
  id: number
  picStr: string
  title: string
}

defineProps({
  footerIcons: {
    type: Array<IFooterIcon>,
    default: () => [
      {
        id: 100,
        picStr: '/images/f-icon1.svg', // 需要将图片放在public目录
        title: '全国联保'
      },
      {
        id: 100,
        picStr: '/images/f-icon2.svg',
        title: '7天无理由退货'
      },
      {
        id: 100,
        picStr: '/images/f-icon3.svg',
        title: '官方换货保障'
      },
      {
        id: 100,
        picStr: '/images/f-icon4.svg',
        title: '满69元包邮'
      },
      {
        id: 100,
        picStr: '/images/f-icon5.svg',
        title: '900+ 家售后网点'
      }
    ]
  }
})
defineOptions({ name: 'AppFooter' })
</script>

<style scoped lang="scss">
.app-footer {
  padding-top: 42px;
  .content-top {
    padding-bottom: 40px;
    @include normalFlex();
    height: $appFooterTop;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    .top-item {
      @include normalFlex(column, center);
      align-items: center;
      gap: 8px 0;
      font-size: 17px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .content-center {
    position: relative;
    margin: 42px 0;
    @include normalFlex(row, flex-start);
    height: $appFooterCenter;
    border-bottom: 1px sold rgba(0, 0, 0, 0.12);
    .center-item {
      margin-right: 30px;
      a {
        margin-bottom: 12px;
        line-height: 35px;
        white-space: nowrap;
        font-size: 17px;
        color: #535353;
        opacity: 0.8;
      }
      .first {
        opacity: 1;
        color: rgba(0, 0, 0, 0.87);
      }
    }
    .connect {
      position: absolute;
      top: 0;
      right: 0;
      width: 173px;
      height: 51px;
      @include normalFlex(row, center);
      align-items: center;
      gap: 0 10px;
      font-size: 15px;
      color: #fff;
      background-color: #000;
      border-radius: 26px;
      cursor: pointer;
    }
  }
  .content-bottom {
    margin-bottom: 30px;
    height: $appFooterBottom;
    .bottom-item {
      margin-top: 14px;
      margin-right: 3px;
      font-size: 12px;
      color: #acabb0;
      a {
        margin: 0 6px;
        color: #acabb0;
      }
      .police {
        /* position: relative;
        top: 4px; */
        vertical-align: middle;
      }
    }
  }
}
</style>
