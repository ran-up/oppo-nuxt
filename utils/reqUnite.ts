import type { IResponseResult } from '~/service'
import type { Banners, Categorys, IHomeInfo, Navbars } from '~/store/home'

// dataSave 类型为 any 是不想去重新调整数据的类型
export default function reqUnite(
  homeInfoStore: {
    updateNavbar: (navbars: Navbars) => void
    updateBanner: (banners: Banners) => void
    updateCategory: (categorys: Categorys) => void
  },
  data: Ref<IResponseResult<IHomeInfo>>,
  dataSave: any
) {
  // 错误处理
  const errorSolve = () => {
    // client 和 server 需要分开处理
    if (import.meta.client) {
      ElMessage.error('获取首页数据失败，使用备份数据')
    } else {
      console.log('获取首页数据失败，使用备份数据')
    }
    // 使用备份数据
    const save = ref(dataSave.data)
    // 更新pinia仓库数据
    homeInfoStore.updateNavbar(save.value.navbars as Navbars)
    homeInfoStore.updateBanner(save.value.banners)
    homeInfoStore.updateCategory(save.value.categorys as unknown as Categorys)
  }
  // 接口请求失败则使用备份数据
  if (!data.value) {
    errorSolve()
  } else {
    const { code, data: curData } = data.value
    if (code === 200) {
      // 更新pinia仓库数据
      homeInfoStore.updateNavbar(curData.navbars)
      homeInfoStore.updateBanner(curData.banners)
      homeInfoStore.updateCategory(curData.categorys)
    } else {
      // 返回数据失败则使用备份数据
      errorSolve()
    }
  }
}
