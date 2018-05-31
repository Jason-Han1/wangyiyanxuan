<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
      <div class="download-app"></div>
      <router-link to="/home" class="backWapBtn">继续使用触屏版浏览 ></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Interlayer"
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .backWapBtn{
    width: 3.38667rem;
    height: .4rem;
    left: 3.14667rem;
    top: 3.08rem;
    position: absolute;
    display: block;
    font-size: 24px;
    line-height: 1.5;
  }
  .g-bd{
    max-width: 10rem;
    margin: 0 auto;
    background: #eee;
    line-height: 1.5;
    color: #333;
    height: 100%;

    .g-row{
      position: relative;
      width: 10rem;
      margin-right: auto;
      margin-left: auto;
      padding-top: 186px;
      &:nth-child(2){
        padding-top: 0;
      }
      img{
        vertical-align: top;
        width: 100%;
      }
      .download-app{
        width: 5.76rem;
        height: 1.30667rem;
        left: 1.92rem;
        top: 1.29333rem;
        position: absolute;
        display: block;
      }
    }
  }
</style>
