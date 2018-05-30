<template>
  <div>
    <ShiwuHeader/>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block">
            <i class="loginPhone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed">
            <i class="loginMail"></i>
            <span>邮箱帐号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册</span>
            <i class="right3"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ShiwuHeader from '../../components/ShiwuHeader/ShiwuHeader'

  export default {
    name: "Personal",
    components: {
      ShiwuHeader
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  @import '../../common/stylus/mixins';
  .loginTypesWrap {
    margin-top: 88px;
    height: 624px;
    .cont {
      position: relative;
      height: 100%;
      background: #F2F5F4;
      .logoWrap {
        text-align: center;
        padding-top: 2.13333*75/@rem;
        padding-bottom: 2.13333*75/@rem;
        img {
          width: 3.57333*75/@rem;
          height: 1.2*75/@rem;
        }
      }
      .btnWrap {
        margin-bottom: .42667*75/@rem;
        padding: 0 .53333*75/@rem;
        .loginPhone {
          margin-right: .21333*75/@rem;
          position: relative;
          top: -.02667*75/@rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333*75/@rem 3.86667*75/@rem;
          width: .53333*75/@rem;
          height: .53333*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          .name {
            line-height: 1.25333*75/@rem;
            font-size: .37333*75/@rem;
            color: #fff;
          }
        }
      }
      .ghostRed {
        margin-bottom: .42667*75/@rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333*75/@rem;
        line-height: 1.25333*75/@rem;
        color: #b4282d;
        vertical-align: middle;
        text-align: center;
        border: 1px solid #b4282d;
        overflow: hidden;
        .loginMail {
          margin-right: .21333*75/@rem;
          position: relative;
          top: -.02667*75/@rem;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333*75/@rem 3.86667*75/@rem;
          width: .53333*75/@rem;
          height: .53333*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          line-height: 1.25333*75/@rem;
          color: #b4282d;
          text-align: center;
          font-size: .37333*75/@rem;
          .name {
            line-height: 1.25333*75/@rem;
            color: #b4282d;
            text-align: center;
            font-size: .37333*75/@rem;
          }
        }
      }
      .btn {
        color: #333;
        font-size: .37333*75/@rem;
        text-align: center;
        width: 100%;
        line-height: 1.5;
        .right3 {
          color: #333;
          font-size: .37333*75/@rem;
          text-align: center;
          line-height: 1.5;
          .name {
            margin-right: .21333*75/@rem;
            position: relative;
            top: -.02667*75/@rem;
            margin-left: .05333*75/@rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: .37333*75/@rem;
            height: .37333*75/@rem;
            color: #333;
            font-size: .37333*75/@rem;
            text-align: center;
            line-height: 1.5;
          }
        }
      }
    }
    .btnWrap{
      padding: 0 .53333*75/@rem;
      margin-bottom: 2.73333*75/@rem;
      .button-block{
        margin-bottom: .42667*75/@rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333*75/@rem;
        line-height: 1.25333*75/@rem;
        vertical-align: middle;
        text-align: center;    font-size: .37333*75/@rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        overflow: hidden;
        .loginPhone{
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333*75/@rem 3.86667*75/@rem;
          width: .53333*75/@rem;
          height: .53333*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          color: #fff;
          font-size: .37333*75/@rem;
        }
        span{
          line-height: 1.25333*75/@rem;
          text-align: center;
          font-size: .37333*75/@rem;
          color: #fff;
        }
      }
      .button-ghostRed{
        margin-bottom: .42667*75/@rem;
        border-radius: 2px;
        display: block;
        width: 100%;
        height: 1.25333*75/@rem;
        line-height: 1.25333*75/@rem;
        color: #b4282d;
        vertical-align: middle;
        text-align: center;
        font-size: .37333*75/@rem;
        border: 1px solid #b4282d;
        overflow: hidden;
        .loginMail{
          margin-right: .21333*75/@rem;
          position: relative;
          top: -.02667*75/@rem;
          background-position: 0 0;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
          background-size: .53333*75/@rem 3.86667*75/@rem;
          width: .53333*75/@rem;
          height: .53333*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-repeat: no-repeat;
          span{
            line-height: 1.25333*75/@rem;
            color: #b4282d;
            text-align: center;
            font-size: .37333*75/@rem;
          }
        }
      }
      .btn{
        color: #333;
        font-size: .37333*75/@rem;
        text-align: center;
        width: 100%;
        line-height: 1.5;
        span{
          color: #333;
          font-size: .37333*75/@rem;
          text-align: center;
          line-height: 1.5;
        }
        .right3{
          margin-right: .21333*75/@rem;
          position: relative;
          top: -.02667*75/@rem;
          margin-left: .05333*75/@rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333*75/@rem;
          height: .37333*75/@rem;
          color: #333;
          font-size: .37333*75/@rem;
          text-align: center;
        }
      }
    }

  }
</style>
