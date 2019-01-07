<template>
    <div>
        <div class="recommend_title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.url">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.url" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeWeekend',
    data(){
        return {
            recommendList:[
                {
                    url:'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                    title:'深圳必打卡',
                    desc:'来到深圳，你需要来这里签到'
                },{
                    url:'http://img1.qunarzz.com/sight/source/1505/b9/f9d8ace21c06.jpg_r_640x214_1f239a81.jpg',
                    title:'粤东泡汤好去处',
                    desc:'全时四季的温泉，度假的天堂，这里独特的矿物质温泉是您养生、养颜疗神的宝地'
                },{
                    url:'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                    title:'欢乐长隆',
                    desc:'世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import '~@style/mixins.less';
.recommend_title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
    .item-img{
        width: 100%;
    }
}
.item-info{
    flex:1;
    padding: .15rem;
    min-width: 0;
    .item-title{
        line-height: .54rem;
        font-size: .32rem;
        .ellipsis
    }
    .item-desc{
        line-height: .4rem;
        color: #cecece;
        .ellipsis
    }
}

</style>
