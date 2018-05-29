/*入口js*/
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import filter from './filters'
import {Button} from 'mint-ui'
import  './mock/mockServer'
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button>
new Vue({
  el: '#app',
  // render: h => h(App),
  components:{App},
  template:'<App/>',
  store,
  router
})
