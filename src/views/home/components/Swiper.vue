<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img swiper-lazy" :data-src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:true, // 自动播放
        loop:true, // 无限循环
        lazy:true //懒加载，配合一个'swiper-lazy'类和'data-src'属性
      }
    };
  },
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active{
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background-color: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
