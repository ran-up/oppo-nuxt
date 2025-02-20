<template>
  <div class="oppo-detail">
    <div class="wrapper">
      <el-tabs class="oppo-tabs" v-model="activeName">
        <template v-for="item in detailData" :key="item?.id">
          <el-tab-pane :label="item?.title" :name="item?.title">
            <category-grid :categoryUrl="''" :product-detailss="item?.productDetailss" />
          </el-tab-pane>
        </template>
      </el-tabs>
      <el-divider>
        <span class="no-more">没有更多</span>
      </el-divider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getDetailReq } from '~/service/detail'
import detailInfoSave from '~/service/saveData/detailInfo'
import type { oppoType } from '~/service/detail'
import type { IProductDetailss } from '~/store/detail'

const route = useRoute()
const { data } = await getDetailReq(route.query.type as oppoType)
const detailData = reactive<IProductDetailss>({}) // 详情数据
const activeName = ref('')
// 错误处理
const errorSolve = () => {
  // client 和 server 需要分开处理
  if (import.meta.client) {
    ElMessage.error('获取详情数据失败，使用备份数据')
  } else {
    console.log('获取详情数据失败，使用备份数据')
  }
  // 使用备份数据
  const detailInfo = ref(detailInfoSave.data)
  Object.assign(detailData, detailInfo.value)
  activeName.value = detailInfo.value[0].title as string
}
if (!data.value) {
  errorSolve()
} else {
  const { code, data: curData } = data.value
  if (code === 200) {
    Object.assign(detailData, curData)
    activeName.value = curData[0].title as string
  } else {
    errorSolve()
  }
}
</script>

<style scoped lang="scss">
.oppo-detail {
  padding: 8px 0 60px 0;
  background-color: $bgGrayColor;
  .oppo-tabs {
    :deep(.el-tabs__header) {
      background-color: #fff;
    }
    :deep(.el-tabs__nav-wrap) {
      padding: 0 52px;
      height: 48px;
      /* 底部线 */
      &::after {
        background-color: #fff;
      }
      /* 按钮 */
      .el-tabs__nav-prev,
      .el-tabs__nav-next {
        width: 48px;
        .el-icon,
        svg {
          width: 25px;
          height: 25px;
        }
        svg {
          position: relative;
          top: 10px;
        }
      }
      .el-tabs__active-bar {
        background-color: $priceColor;
      }
    }

    :deep(.el-tabs__item) {
      position: relative;
      padding-top: 5px;
      opacity: 0.6;
      height: 48px;
      font-weight: 400;
      &:hover,
      &.is-active {
        color: $priceColor;
      }
    }
  }
  .no-more {
    opacity: 0.5;
    font-size: 18px;
    color: #343a40;
  }
}
</style>
