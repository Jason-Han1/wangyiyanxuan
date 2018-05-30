/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'
import data_nav from './data_nav.json'
import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'

// 返回data的接口
Mock.mock('/data', {code:0, data: data})
//返回首页轮播图片的接口
Mock.mock('/banner', {code:0, focusList: home_data.focusList})
//返回home页数据的接口
Mock.mock('/home', {code:0, home: home_data})
//返回detail页数据的接口
Mock.mock('/detail', {code:0, detail: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, nav: data_nav})

