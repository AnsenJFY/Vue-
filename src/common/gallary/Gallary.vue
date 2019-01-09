<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide 
          v-for="item of imgList" 
          :key="item"
        >
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name:'CommonGallary',
  props:{
    imgList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swiperOptions:{
        pagination:{
          el:'.swiper-pagination',
          type:'fraction'
        },
        observeParents:true,
        observer:true
      }
    }
  },
  methods:{
    handleGallaryClick(){
      this.$emit('gallaryClick')
    }
  }
}
</script>
<style lang="less" scoped>
.container /deep/ .swiper-container{
  overflow: inherit;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  z-index: 99;
  .wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #fff;
    .gallary-img{
      width: 100%;
      height: 100vw;
      object-fit:cover;
    }
    .swiper-pagination{
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
