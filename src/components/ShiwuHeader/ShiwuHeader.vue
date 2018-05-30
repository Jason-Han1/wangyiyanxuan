<template>
  <div>
    <div class="m-topBar">
      <div class="bd">
        <div class="row">
          <i class="shouye" @click="$router.replace('/home')"></i>
          <i class="logo"></i>
          <div class="right">
            <div class="search" @click="$router.replace('/home')">
              <i class="search1"></i>
            </div>
            <div class="cart" @click="$router.replace('/Shopcart')">
              <i class="cart1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShiwuHeader"
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .m-topBar{
    position: fixed;
    top: 0;
    z-index: 99;
    .bd{
      height: 1.16*75/@rem;
      background-color: #fafafa;
      position: relative;
      .row{
        background-color: #fafafa;
        z-index: 1;
        width: 10*75/@rem;
        margin: auto;
        overflow: hidden;
        padding: 0 .21333*75/@rem 0 .32*75/@rem;
        height: 1.17333*75/@rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        position: relative;
        .shouye{
          width: .64*75/@rem;
          height: .58667*75/@rem;
          background-position: 0 -.98667*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
          background-repeat: no-repeat;
          background-size: 2.29333*75/@rem 5.30667*75/@rem;
          cursor: pointer;
        }
        .logo{
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          width: 2.29333*75/@rem;
          height: .72*75/@rem;
          background-position: 0 -1.70667*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
          background-repeat: no-repeat;
          background-size: 2.29333*75/@rem 5.30667*75/@rem;
          font-style: normal;
        }
        .right{
          width: 20%;
          margin-left: auto;
          margin-right: .6*75/@rem;
          margin-top: -.2*75/@rem;
          .search{
            margin-right: .26667*75/@rem;
            text-decoration: none;
            outline: 0;
            cursor: pointer;
            float: left;
            .search1{
              position: relative;
              bottom: 0;
              width: .85333*75/@rem;
              height: .85333*75/@rem;
              background-position: 0 -4.45333*75/@rem;
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
              background-repeat: no-repeat;
              background-size: 2.29333*75/@rem 5.30667*75/@rem;
              font-style: normal;
              cursor: pointer;
            }
          }
          .cart{
            .cart1{
              cursor: pointer;
              position: relative;
              width: .85333*75/@rem;
              height: .85333*75/@rem;
              background-position: 0 0;
              display: inline-block;
              vertical-align: middle;
              background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
              background-repeat: no-repeat;
              background-size: 2.29333*75/@rem 5.30667*75/@rem;
              font-style: normal;
            }
          }
        }
      }
    }
  }
</style>
