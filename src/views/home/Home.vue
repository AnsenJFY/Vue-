<template>
  <div class="home">
    <home-header />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <home-recommend :recommendList="recommendList" />
    <home-weekend :weekendList="weekendList" />
  </div>
</template>

<script>
import {IndexApi} from "@/api";

import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";

export default {
  name: "home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      iconList:[],
      recommendList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  methods: {
    async getIndexInfo(){
      await IndexApi().then((res)=>{
        let {data} = res.data;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList;
      })
    }
  },
  mounted() {
    this.getIndexInfo();
  }
};
</script>
