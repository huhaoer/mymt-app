// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'// 引入element-ui框架
import 'element-ui/lib/theme-chalk/index.css'
import store from './store.js'// 引入vuex状态管理(可以共用同一个数据)

import '@/assets/css/main.css'
Vue.directive('document-click', {
  bind (el, bindings, vnode) {
    document.addEventListener('click', bindings.value)
  },
  update () {

  },
  inserted () {

  }
})
Vue.config.productionTip = false
Vue.use(ElementUI)// 使用element-ui框架
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
