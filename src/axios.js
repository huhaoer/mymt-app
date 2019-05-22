import axios from 'axios'// 引入axios请求数据

// 基础url  就是每次请求都会带上该url,不然的话就是本地localhost:8080发送的请求 和vue3的配置devServer服务代理一样
axios.defaults.baseURL = 'http://api.duyiedu.com'

// axios请求拦截器  就是将axios请求的一些参数配置在里面,不同每次请求都发送参数
axios.interceptors.request.use(function (config) {
  // 设置config的params属性  ES6解构赋值将原来的属性添加进来,然后在添加新属性appkey,每次发送axios请求的时候就不用添加params了
  config.params = {
    ...config.params,
    appkey: 'Layoung_1548596076612'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
