<template>
    <div>
        <div class="recommend_title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.url">
                <img class="item-img" :src="item.url" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    data(){
        return {
            recommendList:[
                {
                    url:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                    title:'深圳小梅沙海洋世界',
                    desc:'👍小伙伴们都收藏了，去看看吧~'
                },{
                    url:'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
                    title:'深圳野生动物园',
                    desc:'这里有优雅和呆萌并存的睫毛精'
                },{
                    url:'http://img1.qunarzz.com/sight/p0/1510/d0/d0610302e0ae770890.water.jpg_200x200_2ce068f1.jpg',
                    title:'东部华侨城茵特拉根温泉',
                    desc:'🔥好评如潮，小伙伴热推景点~'
                },{
                    url:'http://img1.qunarzz.com/sight/p0/1812/a7/a7783a2362ed222ba3.water.jpg_200x200_9411c96d.jpg',
                    title:'深圳欢乐谷',
                    desc:'狂欢无罪，够胆你就来！'
                },{
                    url:'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg',
                    title:'东部华侨城大侠谷',
                    desc:'行走峡湾栈道，倾听大自然的天籁之音'
                }

            ]
        }
    }
}
</script>
<style lang="less" scoped>
@import '~@style/mixins.less';
.recommend_title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
}
.item{
    display: flex;
    overflow: hidden;
    height: 1.9rem;
    .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info{
        flex:1;
        padding: .1rem;
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
        .item-btn{
            background: #ff9300;
            padding: 0 .2rem;
            border-radius: .06rem;
            line-height: .44rem;
            margin-top: .16rem;
            color: #fff;
        }
    }
}
</style>
