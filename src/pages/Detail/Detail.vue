<template>
  <div class="wrap">
    <ShiwuHeader/>
    <div class="swiper">
      <div class="swiper-container" v-if="detail.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">{{item.subTitle}}</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DetailScroll :scroll="detail.column"/>
    <DetailItem :detail="detail"/>
    <QuarterPastTen :detail="detail"/>
    <DetailLoolk :detail="detail"/>
    <DetailFindMore :detail="detail"/>
    <goTop/>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader.vue'
  import DetailScroll from '../../components/DetailScroll/DetailScroll.vue'
  import DetailItem from '../../components/DetailItem/DetailItem.vue'
  import QuarterPastTen from '../../components/QuarterPastTen/QuarterPastTen.vue'
  import DetailLoolk from '../../components/DetailLoolk/DetailLoolk.vue'
  import DetailFindMore from '../../components/DetailFindMore/DetailFindMore.vue'
  import goTop from '../../components/goTop/goTop.vue'
  export default {
    name: "Detail",
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['detail'])
    },
    mounted () {
      this.$store.dispatch('getDetail')
      new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1.15,
        centeredSlides: true,
        onInit: function (swiper) {
          swiper.slides[1].className = 'swiper-slide swiper-slide-active'
        },
        autoplay: {
          autoplay:true,
          delay: 3000
        },
      })
    },
    watch: {
      detail(val) {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1.15,
            centeredSlides: true,
            onInit: function (swiper) {
              swiper.slides[1].className = 'swiper-slide swiper-slide-active'
            },
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
        })
      }
    },
    methods:{

    },
    components:{
      ShiwuHeader,
      DetailScroll,
      goTop,
      DetailItem,
      QuarterPastTen,
      DetailLoolk,
      DetailFindMore
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .wrap{
    background: #F4F4F4;
    padding-bottom: 90/@rem;
  }
  .swiper-container{
    .swiper-wrapper{
      margin-top: 1.4*75/@rem;
      .swiper-slide{
        img{
          width: 100%;
          position: relative;
        }
        .content{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 6.21333*75/@rem;
          height: 2.64*75/@rem;
          background-color: rgba(255,255,255,.9);
          .subTitle{
            position: relative;
            font-size: .26667*75/@rem;
            color: #7f7f7f;
            line-height: .4*75/@rem;
            padding: 0 .10667*75/@rem;
          }
          .title{
            font-size: .42667*75/@rem;
            line-height: .64*75/@rem;
            color: #333;
            margin-top: .21333*75/@rem;
            font-weight: 700;
          }
        }
        .desc{
          font-size: .32*75/@rem;
          color: #333;
          line-height: .48*75/@rem;
          margin-top: .05333*75/@rem;
        }
      }
    }
  }

</style>
