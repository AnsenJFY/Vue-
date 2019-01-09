<template>
  <div>
    <detail-banner 
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
      :bannerImg="bannerImg"
    />
    <detail-header/>
    <div class="content">
      <detail-list :list="categoryList"/>
    </div>
  </div>
</template>
<script>
import {DetailApi} from '@/api'

import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      categoryList: [],
      gallaryImgs:[],
      bannerImg:'',
      sightName:''
    };
  },
  mounted(){
    DetailApi({
      id:this.$route.params.id
    }).then(res=>{
      if(res.data.ret && res.data.data){
        res = res.data.data;
        this.categoryList = res.categoryList;
        this.gallaryImgs = res.gallaryImgs;
        this.sightName = res.sightName;
        this.bannerImg = res.bannerImg;
      }
    })
  }
};
</script>
<style lang="less" scoped>
</style>
