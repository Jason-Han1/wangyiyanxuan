<template>
  <div class="navbar-container">
    <div class="navbar">
      <div :class="{active: item.to === $route.path || $route.meta.highlight}" class="navbar-item" v-for="(item,index) in items" :key="index" @click="$router.replace(item.to)">
        <span class="iconfont" :class="item.class"></span>
        <span class="title">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: '首页', to: '/home', class:'icon-shouye' },
          { title: '识物', to: '/detail' , class:'icon-fangkuaidagou-weixuanzhong'},
          { title: '分类', to: '/List' , class:'icon-chouti'},
          { title: '购物车', to: '/Shopcart', class:'icon-gouwuche'},
          { title: '个人', to: '/Personal', class:'icon-renwu' }
        ]
      }
    },
    mounted(){

    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  @import '../../common/stylus/mixins';
  .navbar-container {
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: #f5f5f5;
    height: 98/@rem;
    width: 100%;

  }
  .navbar{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    &.active{
      color: #b4282d;
    }
  }
  .title{
    font-size: 24/@rem;
    margin-top: 4px;
  }
  .iconfont{
    font-size: .533*75/@rem;
  }
</style>

