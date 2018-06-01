/*与后台交互模块*/
import ajax from './ajax'
//获取data数组
export const reqData = () => ajax('/data')
//获取banner数组
export const reqBanner = () => ajax('/banner')
//获取home对象
export const reqHome = () => ajax('/home')
//获取home对象
export const reqDetail = () => ajax('/detail')
//获取home对象
export const reqNav = () => ajax('/nav')


// 获取图片验证码
export const reqCaptcha = () => ajax('/api/captcha')
// 账号密码登录
export const accountLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd/',{name, pwd, captcha},"POST")
// 获取短信验证码
export const mobileCode = (phone) => ajax('/api/sendcode', {phone})
// 手机号验证码登录
export const phoneLogin = ({phone, code}) => ajax('/api/login_sms/', {phone, code},"POST")
