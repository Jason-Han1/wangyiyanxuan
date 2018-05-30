<template>
  <div>
    <div class="m-exploreRcmds" v-if="detail.recommendOne">
      <div class="container">
        <div class="module-title">{{detail.recommendOne.nickname}}</div>
        <div class="m-mainPosItem">
          <div class="imgContainer">
            <div class="topicTag">
              <div class="m-exploreTag">{{detail.recommendOne.typeName}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="topicInfo">
        <div class="line1">
          <div class="title">{{detail.recommendOne.typeName}}</div>
          <div class="price">
            <div class="num">{{detail.recommendOne.priceInfo}}</div>
            <div class="unit">元起</div>
          </div>
        </div>
        <div class="line2">
          <div class="subTitle" v-if="detail.recommendOne">{{detail.recommendOne.subTitle}}</div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendTwo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendTwo.avatar">
              </div>
              <div class="nickname">{{detail.recommendTwo.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendTwo.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendTwo.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendTwo.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendTwo.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-minorPosItem">
        <div class="topicInfo" v-if="detail.recommendThree">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.recommendThree.avatar">
              </div>
              <div class="nickname">{{detail.recommendThree.nickname}}</div>
            </div>
            <div class="line1">
              <div class="title">{{detail.recommendThree.title}}</div>
            </div>
            <div class="line2">
              <div class="subTitle">{{detail.recommendThree.subTitle}}</div>
            </div>
          </div>
          <div class="minorPic">
            <div class="imgContainer">
              <img :src="detail.recommendThree.picUrl" alt="">
              <div class="topicTag">
                <div class="m-exploreTag">{{detail.recommendThree.typeName}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailItem",
    props:{
      detail: Object
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-exploreRcmds{
    padding: 0 .4*75/@rem .53333*75/@rem;
    margin-bottom: .26667*75/@rem;
    background-color: #fff;
    .container{
      .m-mainPosItem{
        margin-bottom: .4*75/@rem;
        display: block;
        position: relative;
        color: #333;
        border: 1px solid #d9d9d9;
        border-radius: .10667*75/@rem;
        overflow: hidden;
        .imgContainer{
          background-image: url(//yanxuan.nosdn.127.net/09d83c97c9963495e6518cfbec776b4c.jpg?imageView&quality=75);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          height: 5.14667*75/@rem;
          border-radius: .10667*75/@rem .10667*75/@rem 0 0;
          overflow: hidden;
          .topicTag{
            position: absolute;
            left: .26667*75/@rem;
            .m-exploreTag{
              display: inline-block;
              padding: 0 .21333*75/@rem;
              height: .48*75/@rem;
              line-height: .48*75/@rem;
              background-color: rgba(255,255,255,.9);
              border: 1px solid #d9d9d9;
              border-radius: .26667*75/@rem;
              color: #333;
              font-size: .42667*75/@rem;
            }
          }
        }
      }
    }
    .topicInfo{
      //padding-bottom: 0.8933333333333333*75/@rem;
      overflow: hidden;
      position: relative;
      padding: .32*75/@rem .26667*75/@rem 0;
      background-color: #fff;
      .line1{
        margin-bottom: .25333*75/@rem;
        display: flex;
        align-items: center;
        line-height: 1.2;
        justify-content: space-between;
        .title{
          margin-right: .3*75/@rem;
          font-size: .48*75/@rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .price{
          margin-right: .3*75/@rem;
          font-size: .48*75/@rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          .num{
            float: left;
            font-size: .48*75/@rem;
          }
          .unit{
            float: left;
            font-size: .48*75/@rem;
          }
        }
      }
      .line2{
        .subTitle{
          position: relative;
          font-size: .37333*75/@rem;
          line-height: 1.2;
          color: #7f7f7f;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
    .m-minorPosItem{
      display: flex;
      background-color: #fff;
      color: #333;
      border: 1px solid #d9d9d9;
      border-radius: .05333*75/@rem;
      margin-bottom: .4*75/@rem;
      .topicInfo{
        flex: 1;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
        padding-left: .26667*75/@rem;
        padding-right: .4*75/@rem;
        .author-container{
          margin-bottom: .33333*75/@rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          position: relative;
          padding-left: .26667*75/@rem;
          padding-right: .4*75/@rem;
          .author{
            height: 0.64*75/@rem;
            font-size: 0.26666666666666666*75/@rem;
            display: flex;
            align-items: center;
            .avatar{
              width: 0.64*75/@rem;
              height: 0.64*75/@rem;
              margin-right: 0.10666666666666667*75/@rem;
              border-radius: 50%;
              img{
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }
          .nickname{
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .line1{
          margin-bottom: .18667*75/@rem;
          line-height: 1.2;
          .title{
            margin-right: .4*75/@rem;
            font-size: .42667*75/@rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .line2{
          .subTitle{
            overflow: hidden;
            text-overflow: ellipsis;
            position: relative;
            font-size: .32*75/@rem;
            line-height: 1.5;
            color: #7f7f7f;
            white-space: normal;
            height: 182px;
          }
        }
        .minorPic{
          position: relative;
          width: 3.73333*75/@rem;
          height: 3.62667*75/@rem;
          .imgContainer{
            width: 100%;
            //background-image: url(//yanxuan.nosdn.127.net/7af712a….jpg?imageView&quality=75);
            img{
              width: 100%;
              background-position: center;
              background-repeat: no-repeat;
            }
            .topicTag{
              position: absolute;
              top: .03*75/@rem;
              left: .13333*75/@rem;
              margin-top: -.3*75/@rem;;
              .m-exploreTag{
                font-size: .32*75/@rem;
                display: inline-block;
                padding: 0 .21333*75/@rem;
                height: .48*75/@rem;
                line-height: .48*75/@rem;
                background-color: rgba(255,255,255,.9);
                border: 1px solid #d9d9d9;
                border-radius: .26667*75/@rem;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
</style>
