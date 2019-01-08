<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>      
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
  @import '~@style/varibles.less';
  @import '~@style/mixins.less';
  .header{
    .headerHeight;
    display: flex;
    background: @bg-color;
    color:#fff;
    .header-left{
      width: .64rem;
      float: left;
      padding-left: .2rem;
      .back-icon{
        text-align: center;
        font-size: .4rem;
      }
    }
    .header-input{
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin: .12rem .15rem ;
      padding-left: .2rem;
      color: #ccc;
      background-color: #fff;
      border-radius: .1rem;
    }
    .header-right{
      width: 1.24rem;
      float: right;
      color: #fff;
      .arrow-icon{
        margin-left: -.04rem;
        font-size: .24rem;
      }
    }
  }
</style>

