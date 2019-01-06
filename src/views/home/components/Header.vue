<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62d;</span>      
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  components: {
  }
}
</script>

<style lang="less" scoped>
  @import '~@style/varibles.less';
  .header{
    display: flex;
    line-height: .86rem;
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
      .arrow-icon{
        margin-left: -.04rem;
        font-size: .24rem;
      }
    }
  }
</style>

