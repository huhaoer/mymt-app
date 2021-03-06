import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'// 默认模板页面
import blankPage from '@/layout/blank.vue'// 其他页面  空白
import indexPage from '@/page/index.vue'// 首页页面  将中间展示区域放在嵌套路由里面
import changeCity from '@/page/changeCity.vue'// 首页页面  将点击切换城市组件区域放在嵌套路由里面
import goodsList from '@/page/goodsList.vue'// 首页页面  将商品列表组件区域放在嵌套路由里面
import Login from '@/page/login.vue'// 首页页面  将登陆页面引入到blank里面
import Register from '@/page/register.vue'// 首页页面  将注册页面引入到blank里面

Vue.use(Router)

export default new Router({
  mode: 'history', // 配置跳转时没有#,刷新页面
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index', // 进入localhost:8080 默认进入到首页页面 page下面的index.vue组件页面
      children: [
        {
          path: '/index',
          name: 'index',
          component: indexPage
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        },
        {
          path: 's/:name',
          name: 'goods',
          component: goodsList
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        }
      ]
    }
  ]
})
