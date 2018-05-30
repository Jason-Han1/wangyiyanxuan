<template>
  <div>
    <div class="wrap">
      <div class="m-itemCateListHd">
        <div class="m-topSearchIpt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共9714款好物</span>
        </div>
      </div>
      <div class="m-cateNavVertWrap">
        <div class="j-cateNavWrap">
          <div class="j-cateNav">
            <div  class="item" v-for="(item1,index1) in nav.categoryL1List" :key="index1" @click="getIndex(index1)" :class="{active:index === index1 }">{{item1.name}}</div>
          </div>
        </div>
      </div>
      <ListItem :nav="nav" :index="index"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import ListItem from '../../components/ListItem/ListItem'
  export default {
    name: "List",
    data(){
      return {
        index: 3
      }
    },
    computed:{
      ...mapState(['nav'])
    },
    mounted () {
      this.$store.dispatch('getNav')
    },
    methods:{
      getIndex(index1){
        this.index = index1
      }
    },
    components:{
      ListItem
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
    .wrap{
      background: #F4F4F4;
      padding-bottom: 90/@rem;
    .m-itemCateListHd{
      border-bottom: 1px solid #999;
      display: flex;
      height: 88px;
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      align-items: center;
      padding: 0 .4*75/@rem;
      background-color: #fff;
      .m-topSearchIpt{
        padding: .16*75/@rem .26667*75/@rem .16*75/@rem .2*75/@rem;
        overflow: hidden;
        position: relative;
        width: 8.7*75/@rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        font-size: .37333*75/@rem;
        background-color: #ededed;
        border-radius: .10667*75/@rem;
        .icon{
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333*75/@rem;
          height: .37333*75/@rem;
          margin-right: .13333*75/@rem;
        }
        .placeholder{
          color: #666;
          font-size: .37333*75/@rem;
        }
      }
    }
    .m-cateNavVertWrap{
      border-right: 1px solid #999;
      position: fixed;
      top: 1.17333*75/@rem;
      left: 0;
      bottom: 0;
      z-index: 4;
      width: 2.16*75/@rem;
      background-color: #fff;
      .j-cateNavWrap{
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .j-cateNav{
          height: 91%;
          padding-bottom: 1.84*75/@rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .item{
            width: 100%;
            height: .66667*75/@rem;
            text-align: center;
            border: none;
            display: block;
            color: #333;
            font-size: .37333*75/@rem;
            line-height: .66667*75/@rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            &.active{
              font-size: .48*75/@rem;
              color: #ab2b2b;
              line-height: .66667rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              border-left: 4px solid #ab2b2b;
            }
          }
        }
      }
    }
  }
</style>
