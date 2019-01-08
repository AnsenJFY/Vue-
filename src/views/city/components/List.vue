<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="subItem of item"
            :key="subItem.id"
            @click="handleCityClick(subItem.name)"
          >{{subItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CityList",
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  methods: {
    handleCityClick(cityName) {
      // this.$store.commit('changeCity',cityName);
      this.changeCity(cityName);
      this.$router.push("/");
    },
    //将mutations中的方法映射到本地的methods的同名方法中
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
  }
};
</script>
<style lang="less" scoped>
@import "~@style/varibles.less";
.border-topbottom &:before {
  border-color: #ccc;
}
&:after {
  border-color: #ccc;
}
.border-bottom &:before {
  border-color: #ccc;
}
&:after {
  border-color: #ccc;
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    text-indent: 0.26rem;
    color: #666;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
