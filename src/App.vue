<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-if="$route.meta.isInterlayer"></FooterGuide>
  </div>
</template>

<script>
  import Vue from 'vue'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import '../static/css/swiper.css'
  import VueLazyload from 'vue-lazyload'
  import loading from './common/img/loading.gif'
  Vue.use(VueLazyload, {
    loading
  })
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
