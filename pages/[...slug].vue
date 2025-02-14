<template>
  <el-empty :image-size="200" description="暂无此页面" />
</template>

<script setup>
definePageMeta({
  name: 'emptyPage',
  layout: 'empty'
})
</script>
<style scoped lang="scss">
.el-empty {
  width: 100vw;
  height: 100vh;
  @include normalFlex(column, center);
  align-items: center;
}
::v-deep(.el-empty__description p) {
  font-size: 26px !important;
}
</style>
