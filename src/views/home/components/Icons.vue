<template>
    <div class="icons">
        <div class="icon" v-for="item in iconList" :key="item">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.url"/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>    
        </div> 
    </div>
</template>
<script>
export default {
   name:'HomeIcons',
   data(){
       return {
           iconList:[
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                   desc:'热门景点'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                   desc:'深圳必玩'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                   desc:'游乐场'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                   desc:'海洋馆'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                   desc:'动植物园'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                   desc:'泡温泉'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
                   desc:'年终大促'
               },
               {
                   url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                   desc:'一日游'
               }
           ]
       }
   }
}
</script>
<style lang="less" scoped>
@import '~@style/varibles.less';
@import '~@style/mixins.less';
.icons{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #fff;
    .icon{
        position: relative;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        .icon-img{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: .44rem;
            box-sizing: border-box;
            padding: .1rem;
            .icon-img-content{
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: .44rem;
            line-height: .44rem;
            text-align: center;
            color: @darkTextColor;
            .ellipsis;
        }
    }
}
</style>

