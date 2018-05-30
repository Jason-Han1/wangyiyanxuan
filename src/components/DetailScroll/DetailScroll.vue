<template>
  <div>
    <div class="m-exploreChannels">
      <div class="scroll-wrap">
        <div class="scroll-item" v-for="(item,index) in scroll">
          <div class="imgContainer">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="rbGradient">
            <div class="topNum">{{item.articleCount}}</div>
          </div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "DetailScroll",
    props:{
      scroll: Array,
      createScroll: Function
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.m-exploreChannels', {
          click: true,
          scrollX: true
        })
      })
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-exploreChannels{
    overflow: hidden;
    padding: .42667*75/@rem .4*75/@rem .37333*75/@rem;
    height: 2.81333*75/@rem;
    background-color: #fff;
    margin-bottom: .26667*75/@rem;
    display: flex;
    .scroll-wrap{
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
      transform: translate3d(0px, 0px, 0px);
      transition-duration: 0ms;
      display: flex;
      flex-wrap: nowrap;
      .scroll-item{
        position: relative;
        width: 2.18667*75/@rem;
        height: 2.8*75/@rem;
        margin-right: .32*75/@rem;
        .imgContainer{
          img{
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            -moz-background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 2.18667*75/@rem;
            height: 2.18667*75/@rem;
            margin-bottom: .29333*75/@rem;
            border-radius: .05333*75/@rem;
          }
        }
        .title{
          color: #333;
          font-size: .32*75/@rem;
          line-height: 1;
          text-align: center;
          width: 2.45333*75/@rem;
          margin-left: -.13333*75/@rem;
          margin-top: -.2*75/@rem;
        }
        .rbGradient{
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          width: 1.54667*75/@rem;
          height: .42667*75/@rem;
          border-radius: 0 .05333*75/@rem 0 0;
          background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat;
          background-size: 100%;
          display: inline-block;
          vertical-align: middle;
        }
        .topNum{
          font-size: .32*75/@rem;
          position: absolute;
          top: 0;
          right: .10667*75/@rem;
          width: 2*75/@rem;
          height: .42667*75/@rem;
          line-height: .42667*75/@rem;
          text-align: right;
        }
      }
    }
  }
</style>
