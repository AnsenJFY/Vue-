<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name:'CityHeader'
}
</script>
<style lang="less" scoped>
 @import "~@style/varibles.less";
 @import "~@style/mixins.less";
  .header{
    position: relative;
    overflow: hidden;
    .headerHeight;
    color: #FFF;
    text-align: center;
    background: @bg-color;
    font-size: .32rem;
    .header-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #FFF;
      padding-left: .1rem;
    }
  }
</style>
