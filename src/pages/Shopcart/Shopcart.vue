<template>
  <div class="wrap">
    <div class="m-hd">
      <div class="m-cartHd">购物车</div>
    </div>
    <div class="reactid">
      <div class="m-servicePolicy">
        <div class="item">
          <div class="servicePolicy"></div>
          <span>30天无忧退货</span>
        </div>
        <div class="item">
          <div class="servicePolicy"></div>
          <span>48小时快速退款</span>
        </div>
        <div class="item">
          <div class="servicePolicy"></div>
          <span>满88元免邮费</span>
        </div>
      </div>
      <div class="m-defaultPage">
        <div class="container">
          <div class="img"></div>
          <div class="txt">
            <div class="noCart-login">
              <div class="noCart-title">去添加点什么吧</div>
              <div class="noCart-btn">登录</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from '../../components/FooterGuide/FooterGuide'
  export default {
    name: "ShopCart",
    components:{
      FooterGuide
    }
  }
</script>

<style lang="less">
  @import '../../common/stylus/mixins';
  .wrap{
    .m-hd {
      position: fixed!important;
      left: 0;
      top: 0;
      z-index: 5;
      width: 100%;
      height: 88px;
      .m-cartHd{
        height: 1.17333rem;
        padding: 0 .4rem;
        line-height: 1.17333rem;
        text-align: center;
        background-color: #fff;
        position: relative;
        font-size: .48rem;
      }
    }
    .reactid{
      .m-servicePolicy{
        position: relative;
        z-index: 1;
        height: .93333rem;
        padding: 0 .4rem;
        background: #f4f4f4;
        display: -moz-flex;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        .item{
          margin-top: 162px;
          display: flex;
          align-items: center;
          font-size: .32rem;
          color: #666;
          .servicePolicy{
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png);
            background-repeat: no-repeat;
            width: .13333rem;
            height: .13333rem;
          }
          span{
            font-size: .32rem;
            color: #666;
          }
        }
      }
      .m-defaultPage{
        position: fixed;
        top: 1.17333rem;
        left: 0;
        bottom: 0;
        z-index: 0;
        width: 100%;
        background-color: #f4f4f4;
        text-align: center;
        .container{
          position: absolute;
          top: -.66667rem;
          right: 0;
          bottom: 0;
          left: 0;
          height: 4rem;
          margin: auto;
          .img{
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
            display: inline-block;
            vertical-align: middle;
            width: 3.30667rem;
            height: 3.30667rem;
            margin-bottom: .10667rem;
            background-size: 3.30667rem 3.30667rem;
            background-position: center center;
            background-repeat: no-repeat;
          }
          .txt{
            font-size: .37333rem;
            line-height: 1;
            color: #7f7f7f;
            .noCart-login{
              margin-top: -.26667rem;
              .noCart-title{
                margin-bottom: .66667rem;
                line-height: 1;
                font-size: .37333rem;
                color: #999;
              }
              .noCart-btn{
                margin: auto;
                width: 6.4rem;
                height: 1.22667rem;
                font-size: .4rem;
                line-height: 1.22667rem;
                color: #fff;
                background-color: #b4282d;
                border-radius: .04rem;
              }
            }
          }
        }
      }
    }
  }

</style>
