<template>
  <div id="scrollWrap">
    <div class="homeContainer">
      <div class="headerWrap">
        <div class="homeHd">
          <span>网易严选</span>
          <div class="search">
            <div class="sContent">
              <i class="iconfont icon-xingtaiduICON_sousuo--"></i>
              <span>搜索商品, 共9771款好物</span>
            </div>
          </div>
        </div>
        <div class="hdScorllX" >
          <div class="hdScorllItem" ref="hdScorllItem">
            <span class="active" v-for="(item,index) in data" :key="index" ref="hdScorll">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-container" v-if="banner.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
            <img :src="item.picUrl">
          </div>
        </div>
      </div>
      <div class="g-grow">
        <div class="item" v-for="(item,index) in home.policyDescList">
          <!--<i class="iconfont icon-anonymous-iconfont"></i>-->
          <img :src="item.icon">
          <span>{{item.desc}}</span>
        </div>
      </div>
      <div class="m-indexFloor">
        <div class="hd">
          <div class="hd-Wrap">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </div>
        </div>
        <div class="hd-itemWrap">
          <div class="hd-item">
            <h4>CK制造商</h4>
            <div class="title">
              25元起
            </div>
          </div>
          <div class="hd-item">
            <h4>Nine West制造商</h4>
            <div class="title">
              199元起
            </div>
          </div>
          <div class="hd-item">
            <h4>新秀丽制造商</h4>
            <div class="title">
              49元起
            </div>
          </div>
          <div class="hd-item">
            <h4>Birkenstock集团制造商</h4>
            <div class="title">
              89.9元起
            </div>
          </div>
        </div>
      </div>
      <div class="m-newItems">
        <header class="newItemsWrap">
          <span>新品首发</span>
          <div id="all">查看全部 ></div>
        </header>
        <div class="m-goodGrid">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl" alt="">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-sale">
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
      </div>
      <div class="m-indexFloor">
        <div class="hd">
          <div class="hd-Wrap">
            <span>专题精选</span>
            <i class="iconfont icon-yuanjiantou1"></i>
          </div>
        </div>
      </div>
      <div class="imgWrap">
        <div class="img-scroll">
          <div class="imgItem" v-for="(item,index) in home.topicList" :key="index">
            <img :src="item.itemPicUrl" alt="">
            <div class="line1">
              <h4>{{item.title}}</h4>
              <span>{{item.priceInfo}}元起</span>
            </div>
            <div class="desc">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
    </div>
    <goTop/>
    <GoodThing :cateList="home.cateList" />
    <HomeFooter/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import goTop from '../../components/goTop/goTop'
  import GoodThing from '../../components/GoodThing/GoodThing'
  import HomeFooter from '../../components/HomeFooter/HomeFooter'
  export default {
    name: "Home",
    data(){
      return{
        isSelected: false
      }
    },
    mounted(){
      this.$store.dispatch('getData',()=> {
        this.$nextTick(() => { // 列表数据更新显示后执行
          this._initScroll()
        })
      })
      this.$store.dispatch('getBanner')
      new Swiper('.swiper-container', {
        effect: "fade",
        loop: true,
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
      this.$store.dispatch('getHome')
    },
    computed:{
      ...mapState(['data','banner','home']),

    },
    methods: {
      /*      hdScorll(index){
              console.log(this.$refs.hdScorll)
              if(this.$refs.hdScorll[index].innerHTML === this.data[index].name){
                this.isSelected = true
              }
            }*/
      // 初始化滚动
      _initScroll() {
        new BScroll('.hdScorllX', {
          click: true,
          scrollX: true
        })
        new BScroll('.m-goodGrid', {
          click: true,
          scrollX: true
        })
        new BScroll('.imgWrap', {
          click: true,
          scrollX: true
        })
      }
    },
    watch: {
      banner(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            effect: "fade",
            loop: true,
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
          /*new BScroll('#scrollWrap', {
            click: true,
            scrollY: true
          })*/
        })
      }
    },
    components:{
      goTop,
      GoodThing,
      HomeFooter
    }
  }
</script>

<style lang="less">
  @import '../../common/stylus/mixins';
  #scrollWrap{
    width: 100%;
    overflow: hidden;
  }
  .homeContainer{
    background: #F4F4F4;
    overflow: hidden;
    .headerWrap{
      background: #F4F4F4;
      overflow: hidden;
      position: fixed;
      z-index: 100;
      top: 0;
      width: 100%;
    }
    .homeHd {
      background: #ffffff;
      padding: 16px;
      width: 100%;
      height: 75/@rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        width: 24%;
        font-size:34/@rem;
        font-weight: bold;
      }
      .search{
        width: 70%;
        height: 60/@rem;
        font-size: .37333/@rem;
        background-color: #ededed;
        border-radius: .10667/@rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 34px;
        .sContent{
          .icon-xingtaiduICON_sousuo--{
            font-size: .37333*75/@rem;
          }
          span{
            color: #666666;
            font-size: .37333*75/@rem;
          }
        }
      }
    }
    .hdScorllX{
      width: 100%;
      overflow: hidden;
      background: #ffffff;
      display: flex;
      .hdScorllItem{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          width: 60px;
          text-align: center;
          flex-shrink:0;
          flex-wrap:nowrap;
          margin: 0 .5*75/@rem;
          font-size: .37333*75/@rem;
          &.active{
            padding: 0 0 12px 0;
            border-bottom: 3px solid #b4282d;
            color: #b4282d;
          }
        }
      }
    }
    .swiper-container{
      margin-top: 152px;
      .swiper-wrapper{
        .swiper-slide{
          img{
            width: 100%;
          }
        }
      }
    }
    .g-grow{
      margin-bottom: 12/@rem;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: -18/@rem;
      .item{
        width: 33%;
        height: .96*75/@rem;
        //background: deeppink;
        margin-left: 15/@rem;
        img{
          width: .42667*75/@rem;
          vertical-align: middle;
        }
        span{
          font-size: .32*75/@rem;
          color: #333;
          line-height: .42667*75/@rem;
          vertical-align: middle;
          margin-left: -15/@rem;
        }
      }
    }
    .m-indexFloor{
      margin-bottom: .26667*75/@rem;
      background-color: #ffffff;
      .hd{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        height: 1.46667*75/@rem;
        font-size: .42667*75/@rem;
        .icon-yuanjiantou1{
          font-size: 30px;
        }
      }
      .hd-itemWrap{
        .hd-item{
          display: inline-block;
          margin-bottom: .10667*75/@rem;
          width: 42%;
          height: 3.14667*75/@rem;
          overflow: hidden;
          background-color: #f4f4f4;
          padding: 18px;
          border: 1px solid #999;
          &:nth-child(1),&:nth-child(3){
            margin-left: 8px;
          }
          &:nth-child(1){
            background: url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png");
            background-size: 100%;
          }
          &:nth-child(2){
            background: url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png");
            background-size: 100%;
          }
          &:nth-child(3){
            background: url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png");
            background-size: 100%;
          }
          &:nth-child(4){
            background: url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png");
            background-size: 100%;
          }
          h4{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #333;
            font-size: .37333*75/@rem;
            line-height: .45333*75/@rem;
            margin-bottom: .08*75/@rem;
          }
        }

      }
    }
    .m-newItems{
      margin-top: -8px;
      margin-bottom: .26667*75/@rem;
      background-color: #fff;
      .newItemsWrap{
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png);
        background-size: 10*75/@rem 3.46667*75/@rem;
        height: 3.46667*75/@rem;
        position: relative;
        span{
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          font-size: .48*75/@rem;
          color: #8BA0B6;
        }
        #all{
          text-align: center;
          margin: .21333*75/@rem auto 0;
          width: 3.2*75/@rem;
          height: .74667*75/@rem;
          font-size: .37333*75/@rem;
          line-height: .74667*75/@rem;
          background: #D8E5F1;
          color: #8BA0B6;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .m-goodGrid{
        padding-bottom: .3*75/@rem;
        margin-top: .3*75/@rem;
        height: 6.4*75/@rem;
        background-color: #fff;
        display: flex;
        .list{
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          .goodGrid-item{
            margin-left: .4*75/@rem;
            width: 3.73333*75/@rem;
            .wraper{
              width: 3.73333*75/@rem;
              background-color: #f4f4f4;
              img{
                width: 100%;
                background-size: 100% 100%;
              }
            }
            .title{
              z-index: 1;
              margin-top: -.2*75/@rem;
              margin-left: .2*75/@rem;
              height: .4*75/@rem;
              overflow: hidden;
              background-color: #f48f18;
              padding: .06667*75/@rem .21333*75/@rem;
              line-height: .26667*75/@rem;
              text-align: center;
              color: #fff;
              font-size: .26667*75/@rem;
              border-radius: .02667*75/@rem;
              display: inline-block;
              vertical-align: middle;
            }
            .name{
              margin-bottom: .13333*75/@rem;
              padding: 0 .13333*75/@rem;
              font-size: .37333*75/@rem;
              line-height: .45333*75/@rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              color: #333;
              text-align: left;
            }
            .newItemDesc{
              display: block;
              margin-bottom: .18667*75/@rem;
              font-size: .32*75/@rem;
              color: #7f7f7f;
              line-height: .4*75/@rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0 .13333*75/@rem;
            }
            .price{
              padding: 0 .13333*75/@rem;
              font-size: .37333*75/@rem;
              text-align: left;
              color: #b4282d;
              line-height: 1;
            }
          }
        }
      }
    }
    .m-sale{
      margin-top: .2*75/@rem;
      img{
        width: 100%;
      }
    }
    .imgWrap{
      display: flex;
      //margin-bottom: .3*75/@rem;
      .img-scroll{
        margin-left: .3*75/@rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .imgItem{
          margin-right: 20.8444px;
          width: 7.66667*75/@rem;
          margin-bottom: .21333*75/@rem;
          border-radius: 8px;
          overflow: hidden;
          float: left;
          img{
            width: 100%;
            margin-bottom: .1*75/@rem;
          }
          .line1{
            height: .5.9*75/@rem;
            margin-bottom: .1*75/@rem;
            overflow: hidden;
            h4{
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 5.46667*75/@rem;
              float: left;
              font-size: .37333*75/@rem;
            }
            span{
              float: right;
              font-size: .37333*75/@rem;
              color: #b4282d;
            }
          }
          .desc{
            white-space: nowrap;
            overflow: hidden;
            -ms-text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            width: 7.66667*75/@rem;
            font-size: .32*75/@rem;
            color: #7F7F7F;
          }
        }
      }


    }
  }
</style>
