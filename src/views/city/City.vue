<template>
  <div>
    <city-header/>
    <city-search/>
    <city-list :cities="cities" :hot="hotCities" />
    <city-alphabet :cities="cities"/>
  </div>
</template>
<script>
import { CityApi } from "@/api";

import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";

export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
    return {
      cities:{},
      hotCities:[]
    }
  },
  mounted(){
    CityApi().then(res=>{
      res = res.data;
      if(res.ret && res.data){
        let data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    })
  }
};
</script>
<style lang="less" scoped>
</style>
