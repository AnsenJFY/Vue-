<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg" >
      <div class="banner-info">
        <div class="banner-title">深圳野生动物园(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary 
      :imgList="gallaryList" 
      v-show="showGallary"
      @gallaryClick="handleBannerClick"
    />
  </div>
</template>
<script>
import CommonGallary from '@common/gallary/Gallary.vue'
export default {
  name:'DetailBanner',
  components:{
    CommonGallary
  },
  data(){
    return {
      gallaryList:[
          'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_r_800x800_25544683.jpg',
          'http://img1.qunarzz.com/sight/p0/201301/05/daf2f35b37f7c07693835fbb.png_r_800x800_caa083b3.png'
      ],
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
