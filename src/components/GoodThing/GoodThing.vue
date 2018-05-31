<template>
  <div>
    <div class="m-indexFloor" v-for="(item, index) in cateList" :key="index">
    <div class="m-titleGoodGrid">
      <h3 class="title">{{item.name}}好物</h3>
      <div class="m-goodGrid">
        <div class="wraper" v-for="(itemGoodGrid, indexGoodGrid) in item.itemList" :key="indexGoodGrid">
          <img :src="itemGoodGrid.listPicUrl" alt="">
          <div class="desc">{{itemGoodGrid.simpleDesc}}</div>
          <div class="name">{{itemGoodGrid.name}}</div>
          <span class="price">{{itemGoodGrid.couponPrice}}￥</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    name: "GoodThing",
    props:{
      cateList: Array
    },
    data(){
      return{
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-indexFloor{
    margin-bottom: .26667*75/@rem;
    background-color: #fff;
    .m-titleGoodGrid{
      background-color: #ffffff;
      .title{
        .top-border-1px;
        line-height: 1.6*75/@rem;
        text-align: center;
        font-size: .37333*75/@rem;
        color: #333;
        background-color: #fff;
      }
      .m-goodGrid{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .wraper{
          background: #ffffff;
          width: 46%;
          margin-bottom: .2*75/@rem;
          padding-bottom: .2*75/@rem;;
          &:nth-of-type(odd){
            margin-right: .3*75/@rem;
            margin-left: .2*75/@rem;
          }
          &:nth-of-type(even){
            margin-right: .2*75/@rem;
          }
          img{
            display: block;
            width: 100%;
            height: 4.6*75/@rem;
            border-radius: .05333*75/@rem .05333*75/@rem 0 0;
            background-color: #f4f4f4;
          }
          .desc{
            bottom: 0;
            width: 95%;
            background: #F1ECE2;
            border-radius: 0 0 .05333*75/@rem .05333*75/@rem;
            font-size: .32*75/@rem;
            color: #9F8A60;
            letter-spacing: 0;
            line-height: .38667*75/@rem;
            padding: .26667*75/@rem .13333*75/@rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .name{
            margin-top: .13333*75/@rem;
            padding: 0 .13333*75/@rem;
            line-height: .64*75/@rem;
            text-align: left;
            font-size: .37333*75/@rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #333;
          }
          .price{
            line-height: 1;
            font-size: .42667*75/@rem;
            text-align: left;
            color: #b4282d;
            padding: 0 .13333*75/@rem;
          }
        }
      }
    }
  }
</style>
