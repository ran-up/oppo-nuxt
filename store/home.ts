import { defineStore } from 'pinia'

// navbar 接口
export interface INavbar {
  id?: string | number
  title?: string
  type?: string | number
  showName?: number
  url?: string
  jsonUrl?: string
  clickUrl?: string
  jsonClickUrl?: string
  beginAt?: null
  endAt?: null
  seq?: number
  labelDetailss?: []
  link?: string
  isLogin?: number
  moduleCode?: string
  rows?: number
  cols?: number
  maxProductNum?: number
}
// banner 接口
export interface IBanner {
  id?: string | number
  picStr?: string
  link?: string
}
// activityList 接口
export interface IActivityList {
  type?: string | number
  activityInfo?: string
}
// activityList 类型
export type activityList = IActivityList[]
// productDetailss 接口
export interface IProductDetailss {
  id?: string | number
  skuId?: number
  title?: string
  secondTitle?: string
  thirdTitle?: string
  url?: string
  jsonUrl?: string
  video?: string
  seq?: number
  configKeyLattice?: number
  latticeIndex?: number
  configProductType?: number
  goodsSpuId?: number
  goodsSpuName?: string
  isShowIcon?: number
  topIcon?: string
  cardType?: number
  backColor?: string
  liveInfoJson?: null
  businessInfoJson?: null
  priceInfo?: {
    originalPrice?: string
    price?: string
    marketPrice?: string
    buyPrice?: string
    prefix?: string
    suffix?: string
    currencyTag?: string
  }
  price?: number
  originalPrice?: null
  categoryId?: number
  link?: string
  isLogin?: number
  marketPrice?: string
  nameLabel?: null
  imageLabel?: null
  extendList?: null
  heytapInfo?: null
  activityList?: activityList
  placeholderLabel?: {
    type?: number | string
    activityInfo?: string
  }
  vipDiscounts?: null
  nameLabelWidth?: null
  nameLabelHeight?: null
  pricePrefix?: string
  priceSuffix?: null
  goodsTopCategoryId?: number
  goodsTopCategoryName?: string
  goodsCategoryId?: number
  goodsCategoryName?: string
  skuName?: string
  cardInfoType?: null
  liveUrl?: null
  storage?: null
  seckill?: null
  rankInfo?: null
  businessLink?: string
  sellPoints?: null
  commentCount?: null
  commentRate?: null
  interenve?: boolean
  productDetailLabelss?: []
}
// productDetailss 类型
export type ProductDetailss = IProductDetailss[]
// category 接口
export interface ICategory {
  id?: string | number
  picStr?: string
  title?: string
  type?: string | number
  url?: string
  moduleCode?: string
  productDetailss?: ProductDetailss
  link?: string
}
export type Navbars = INavbar[] // navbars 类型
export type Banners = IBanner[] // banners 类型
export type Categorys = ICategory[] // categorys 类型
// homeInfo 接口
export interface IHomeInfo {
  navbars: Navbars
  banners: Banners
  categorys: Categorys
}

export const useHomeInfoStore = defineStore('homeInfo', {
  state: (): IHomeInfo => ({
    navbars: [],
    banners: [],
    categorys: []
  }),
  actions: {
    updateNavbar(payload: Navbars) {
      this.navbars = payload
    },
    updateBanner(payload: Banners) {
      this.banners = payload
    },
    updateCategory(payload: Categorys) {
      this.categorys = payload
    }
  }
})
