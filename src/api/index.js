import axios from '@/axios.js'

// 将axios请求封装成函数 请求数据的时候调用该api对象就行,确保了文件夹位置改变了而发生错误
var api = {
  // 获取热门搜索列表和推荐列表
  getSearchHot (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 获取关键字搜索列表 并进行过滤
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  //  获取左边导航栏的数据
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  // 获取有格调下面展示的数据
  getYouGeDiao () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  // 获取搜索框输入然后点击进入产品展示列表
  getProductsShow () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  // 获取分类列表数据
  getClassicList () {
    return axios.get('/api/meituan/list/classify.json')
  },
  // 获取区域列表数据
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  // 获取省份列表数据
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  // 获取热门城市列表数据
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  // 获取最近访问城市列表
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  // 获取当前位置信息
  getCurrentPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  // 获取城市列表
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  // 用户登陆接口
  getLogin (params) {
    return axios.get('/api/meituan/login', params)
  },
  // 用户注册接口
  getRegister(params) {
    return axios.get('/api/meituan/register', params)
  }
}
// 导出api对象 数据请求时引入该文件,然后api.XXX()执行上面的数据请求
export default api
