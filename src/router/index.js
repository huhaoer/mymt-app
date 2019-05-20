import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'// 默认模板页面
import blankPage from '@/layout/blank.vue'// 其他页面  空白
import indexPage from '@/page/index.vue'// 首页页面  将中间展示区域放在嵌套路由里面

Vue.use(Router)

export default new Router({
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
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: blankPage
    }
  ]
})
