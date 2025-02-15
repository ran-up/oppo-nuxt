<template>
  <div class="search">
    <input type="text" placeholder="Reno9 系列" />
    <img class="search-svg" src="@/assets/images/search.svg" alt="" />
  </div>
</template>

<style scoped lang="scss">
.search {
  @include normalFlex();
  align-items: center;
  padding: 8px 16px;
  width: 160px;
  height: 36px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  border-radius: 36px;
  cursor: pointer;
  input {
    opacity: 0.3;
    width: 112px;
    height: 21px;
    font-size: 14px;
    border: none;
    outline: none;
    background-color: transparent;
  }
  .search-svg {
    width: 14px;
    height: 14px;
  }
}
</style>
