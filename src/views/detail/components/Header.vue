<template>
  <div>
    <router-link 
      class="header-abs"
      tag="div" 
      to="/" 
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div 
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'DetailHeader',
  data(){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      const top = document.documentElement.scrollTop;
      if(top > 60){
        let opacity = top /140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false;
      }else{
        this.showAbs = true;
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
  @import "~@style/varibles.less";
  @import "~@style/mixins.less";
.header-abs{
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  text-align: center;
  line-height: .8rem;
  background: rgba(0, 0, 0, .8);
  .header-abs-back{
    color: #fff;
    font-size: .4rem;
  }
}
.header-fixed{
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .headerHeight;
  color: #FFF;
  text-align: center;
  background: @bg-color;
  font-size: .32rem;
  .header-fixed-back{
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
