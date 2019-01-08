<template>
  <ul class="list">
    <li v-for="(item,key) of cities" :key="key" class="item">{{key}}</li>
  </ul>
</template>
<script>
export default {
  name:'CityAlpahbet',
  props:{
    cities:Object
  }
}
</script>
<style lang="less" scoped>
  @import "~@style/varibles.less";
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: .4rem;
    .item{
      line-height: .4rem;
      color: @bg-color;
    }
  }
</style>
