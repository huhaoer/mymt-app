import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    position: {},
    userName: ''//存储用户注册后的名称,登录后在导航条就不显示注册和登录
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName(state,val) {
      state.userName = val
    }
  },
  actions: {
    setPosition ({commit}, val) {
      // 异步请求后端获取当前位置
      commit('setPosition', val)
    }
  }
})
