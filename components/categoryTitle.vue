<template>
  <div class="category-title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps({ title: String })
</script>

<style scoped lang="scss">
.category-title {
  h2 {
    margin: 0 0 24px 0;
    padding-top: 60px;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
