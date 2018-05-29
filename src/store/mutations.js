/*vuex的mutations模块*/
import {
  Data,
  Banner,
  Home
} from './mutation-types'
export default {
  [Data](state,{data}) {
    state.data = data
  },
  [Banner](state,{banner}) {
    state.banner = banner
  },
  [Home](state,{result}) {
    const {home} = result
    state.home = home
  },
}
