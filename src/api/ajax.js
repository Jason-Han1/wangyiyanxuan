/*ajax请求模块*/
import axios from 'axios'
export default function (url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if(type === 'GET'){
    //准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
      }
      //发送GET请求
      promise = axios.get(url)
    } else {
      //发送POST请求
      promise = axios.post(url, data)
    }
    promise.then((response) => {
      resolve(response.data)
    })
      .catch((err) => {
      reject(err)
      })
  })
}
