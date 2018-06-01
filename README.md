# 网易严选

## 底部组件实现，以及是否需要显示（meta）

## flex布局时如果父元素如果不能被子元素撑开，给父元素的父元素设置display：flex

## 存在多层表达式时出现错误 xxx of ‘undefinde’解决方法v-if判断

## better-scroll不能上下滑动

## better-scroll/Swiper对象的两个创建时机

## Swiper两翼留白效果实现

    new Swiper('.swiper-container', {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1.15,
                centeredSlides: true,
                onInit: function (swiper) {
                  swiper.slides[1].className = 'swiper-slide swiper-slide-active'
                },
                autoplay: {
                  autoplay:true,
                  delay: 3000
                },
              })

## @ipmort引入的混合如果页面上有对应的类名可以不用引用,但是如果页面没有对应的类名就需要在你的类里引用混合有参数传参数

## 实现按需打包,减少项目体积 npm install --save-dev babel-plugin-component

## 路由懒加载 const Shopcart = () => import('../pages/Shopcart/Shopcart.vue')

## 图片懒加载 npm install --save vue-loader
    import VueLazyload from 'vue-lazyload'
    import loading from './common/img/loading.gif'
    Vue.use(VueLazyload, {
      loading
    })
    <img v-lazy="food.image">

## 打包文件分析 npm run build --report

## 缓存路由对象

   `<keep-alive>
      <router-view />
    </keep-alive>
  `
## 书写vue transition组件时 v-if 要放在<transition>里面


