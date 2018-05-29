/*vue的actions模块*/
import {
  reqData,
  reqBanner,
  reqHome
} from '../api'
import {
  Data,
  Banner,
  Home
} from './mutation-types'
export default {
  //获取首页data信息
  async getData({commit},cb){
    const result = await reqData()
    commit(Data,{data:result.data})
    cb && cb()
  },
  //获取首页banner信息
  async getBanner({commit},cb){
    const result = await reqBanner()
    commit(Banner,{banner:result.focusList})
    cb && cb()
  },
  //获取home信息
  async getHome({commit},cb){
    const result = await reqHome()
    commit(Home,{result})
    cb && cb()
  }
}
