<template>
  <div>
    <div class="m-exploreLook" v-if="detail.yxLook">
      <div class="module-title">严选LOOK</div>
      <div class="content">
        <img :src="detail.yxLook.picUrl" alt="">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <div class="avatar">
                <img :src="detail.yxLook.avatar" alt="">
              </div>
              <div class="nickname">{{detail.yxLook.nickname}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailLoolk",
    props:{
      detail: Object
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .content{
    position: relative;
    display: block;
    color: #333;
    img{
      width: 100%;
    }
    .topicInfo{
      overflow: hidden;
      position: relative;
      padding: .32*75/@rem .4*75/@rem .61333*75/@rem;
      background-color: #fff;
      .author-container{
        margin-bottom: .32*75/@rem;
        .author{
          height: 0.64*75/@rem;
          font-size: 0.32*75/@rem;
          display: flex;
          align-items: center;
          .avatar{
            width: 0.64*75/@rem;
            height: 0.64*75/@rem;
            margin-right: 0.10666666666666667*75/@rem;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #d9d9d9;
            img{
              display: block;
              width: 100%;
            }
          }
          .nickname{
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
