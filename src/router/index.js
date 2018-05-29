import Vue from 'vue'
import Router from 'vue-router'
/*const Detail = () => import('../pages/Detail/Detail.vue')
const Home = () => import('../pages/Home/Home.vue')
const List = () => import('../pages/List/List.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Shopcart = () => import('../pages/Shopcart/Shopcart.vue')*/
import Detail from '../pages/Detail/Detail.vue'
import Home from '../pages/Home/Home.vue'
import List from '../pages/List/List.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
