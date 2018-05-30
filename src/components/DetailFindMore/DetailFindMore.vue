<template>
<div>
  <div class="m-explorMore" v-if="detail.findMore">
    <div class="line-title">
      <div class="inner">更多精彩</div>
    </div>
    <div class="wrap">
      <div class="content" v-for="(item,index) in detail.findMore">
        <div class="imgContainer">
          <img :src="item.itemPicUrl" alt="">
          <!--<div class="right" v-if="item.picList">
            <div class="img" v-for="(item,index) in item.picList">
              <img :src="item" alt="">
            </div>
          </div>-->
        </div>
        <div class="desc">{{item.subTitle}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "DetailFindMore",
    props:{
      detail: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-explorMore{
    margin: 0 .4*75/@rem .4*75/@rem;
    .line-title{
      height: 1.86667*75/@rem;
      position: relative;
      width: 100%;
      .inner{
        font-size: .37333*75/@rem;
        color: #333;
        position: absolute;
        top: 50%;
        left: 43%;
        transform: translateX(-50%);
        transform: translateY(-50%);
      }
    }
    .wrap{
      .content{
        display: block;
        color: #333;
        margin-bottom: .4*75/@rem;
        .imgContainer{
          display: block;
          padding: .32*75/@rem;
          background-color: #fff;
          color: #333;
          text-decoration: none;
          outline: 0;
          cursor: pointer;
          img{
            width: 8.56*75/@rem;
            height: 4.8*75/@rem;
            background-color: #f4f4f4;
          }
          .right{
            float: right;
            width: 2.37333*75/@rem;
            .img{
              padding: 4px;
              img{
                width: 100%;
              }
            }
          }
        }
        .desc{
          background-color: #fff;
          font-size: .37333*75/@rem;
          padding-top: .38667*75/@rem;
          padding-bottom: .37333*75/@rem;
          line-height: 1.2;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: #333;
          font-family: PingFangSC-Light,helvetica,'Heiti SC';
          padding-left: .5*75/@rem;
        }
      }
    }
  }
</style>
