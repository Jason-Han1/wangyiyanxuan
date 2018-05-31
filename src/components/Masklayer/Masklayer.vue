<template>
  <div >
    <transition name="fade" >
      <div class="m-newWapUserGiftModal" v-if="isMask">
        <div class="mask"></div>
        <i class="close" @click="isMask = false"></i>
        <div class="wrap">
          <div class="modle">
            <div class="title">
              <i class="titleContent">- 新人专享礼 -</i>
            </div>
            <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
            <div class="m-newUserItem">
              <div class="img">
                <img src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&amp;quality=85&amp;thumbnail=232y232" alt="">
              </div>
              <div class="content">
                <div class="itemName">花样年华女士小白鞋</div>
                <div class="manu">
                  <i class="manuTag">舒适透气，时尚经典</i>
                </div>
                <div class="price">
                  <div class="retailPrice">
                    <span>¥</span>
                    <span>259.00</span>
                  </div>
                  <div class="comparePrice">
                    <span>¥</span>
                    <span>899.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="actCouponBtn">
            <span>
              <span>领券立减¥</span>
              <span>60.00</span>
            </span>
              <div class="linkBtn">查看更多特惠商品</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isMask: true
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-newWapUserGiftModal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    &.fade-enter-active,&.fade-leave-active{
      transition: opacity 1s;
    }
    &.fade-enter,&.fade-leave-to{
      opacity: 0;
    }
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.5);
    }
    .close{
      position: fixed;
      right: .4*75/@rem;
      top: .8*75/@rem;
      z-index: 2;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png);
      width: .85333*75/@rem;
      height: .85333*75/@rem;
      display: inline-block;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .wrap{
      transform: translate(-50%,-50%);
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      .modle{
        width: 8.4*75/@rem;
        height: 9.22667*75/@rem;
        background-color: #fff;
        border-radius: .21333*75/@rem;
        padding: .4*75/@rem .32*75/@rem;
        .title{
          font-size: .53333*75/@rem;
          text-align: center;
          .titleContent{
            display: inline-block;
            position: relative;
            font-weight: 700;
            font-size: .53333*75/@rem;
            text-align: center;
          }
        }
        .subTitle{
          margin-top: 1.05333*75/@rem;
          font-size: .32*75/@rem;
          text-align: center;
        }
        .m-newUserItem{
          margin-top: .66667*75/@rem;
          background-color: #f4f4f4;
          border-radius: .05333*75/@rem;
          height: 3.09333*75/@rem;
          width: 100%;
          display: flex;
          .img{
            img{
              width: 3.09333*75/@rem;
              height: 3.09333*75/@rem;
            }
          }
          .content{
            flex: 1;
            padding: .57333*75/@rem 0;
            margin-left: .10667*75/@rem;
            line-height: 1.5;
            color: #333;
            font-size: .75*75/@rem;
            .itemName{
              font-size: .37333*75/@rem;
              width: 3.73333*75/@rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              line-height: 1.5;
              color: #333;
            }
            .manu{
              margin-top: .2*75/@rem;
              line-height: 1.5;
              color: #333;
              display: block;
              font-size: 24px;
              .manuTag{
                border: 1px solid #7f7f7f;
                border-radius: .05333*75/@rem;
                padding: 0 .10667*75/@rem;
                height: .48*75/@rem;
                line-height: .48*75/@rem;
                color: #333;
              }
            }
            .price{
              line-height: 1.5;
              color: #333;
              display: block;
              margin-top: .26667*75/@rem;
              font-size: .37333*75/@rem;
              .retailPrice{
                color: #b4282d;
                font-size: .37333*75/@rem;
                line-height: 1.5;
                span{
                  float: left;
                  color: #b4282d;
                  font-size: .37333*75/@rem;
                  line-height: 1.5;
                }
              }
              .comparePrice{
                color: #999;
                display: inline-block;
                margin-left: .10667*75/@rem;
                text-decoration: line-through;
                font-size: .37333*75/@rem;
                line-height: 1.5;
                span{
                  color: #999;
                  display: inline-block;
                  margin-left: .10667*75/@rem;
                  text-decoration: line-through;
                  font-size: .37333*75/@rem;
                  line-height: 1.5;
                }
              }
            }
          }
        }
        .actCouponBtn{
          height: 1.17333*75/@rem;
          background-color: #b4282d;
          color: #fff;
          font-size: .37333*75/@rem;
          margin-top: .53333*75/@rem;
          border-radius: .05333*75/@rem;
          text-align: center;
          line-height: 1.17333*75/@rem;
          span{
            color: #fff;
            font-size: .37333*75/@rem;
            text-align: center;
            line-height: 1.17333*75/@rem;
            span{
              height: 1.17333*75/@rem;
              background-color: #b4282d;
              color: #fff;
              font-size: .37333*75/@rem;
              margin-top: .53333*75/@rem;
              border-radius: .05333*75/@rem;
              text-align: center;
              line-height: 1.17333*75/@rem;
            }
          }
          .linkBtn{
            height: 1.17333*75/@rem;
            border: 1px solid #7F7F7F;
            border-radius: .05333*75/@rem;
            text-align: center;
            line-height: 1.17333*75/@rem;
            font-size: .37333*75/@rem;
            margin-top: .32*75/@rem;
            display: block;
            color: #333;
          }
        }
      }
    }
  }

</style>

