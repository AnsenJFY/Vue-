<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary 
        :imgList="gallaryImgs" 
        v-show="showGallary"
        @gallaryClick="handleBannerClick"
      />
    </fade-animation>
  </div>
</template>
<script>
import FadeAnimation from '@common/fade/FadeAnimation';
import CommonGallary from '@common/gallary/Gallary';
export default {
  name:'DetailBanner',
  components:{
    CommonGallary,
    FadeAnimation
  },
  props:{
    gallaryImgs:Array,
    sightName:String,
    bannerImg:String
  },
  data(){
    return {
      showGallary:false
    }
  },
  methods:{
    handleBannerClick(){
      this.showGallary = !this.showGallary;
    }
  }
}
</script>
<style lang="less" scoped>
.banner{
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 55%;
  .banner-img{
    width: 100%;
  }
  .banner-info{
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #ffffff;
    background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
    .banner-title{
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    .banner-number{
      height: .32rem;
      line-height: .32rem;
      margin: .14rem;
      padding: 0 .4rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .6);
      font-size: .24rem;
      .banner-icon{
        font-size: .24rem;
        margin: .14rem .1rem 0 0;
      }
    }
  }
}
</style>
