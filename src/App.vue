<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import '../static/css/swiper.css'
  export default {
    name: "App",
    components: {
      FooterGuide,
    },
  }

</script>

<style lang="less">
/*html,body{
   width: 100%;
   height: 100%;
   overflow: hidden;
 }*/
  #app{
    width: 100%;
    height: 100%;
    background: #F4F4F4;
    position: relative;
  }
</style>
