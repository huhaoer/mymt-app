import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    position: '成都'
  },
  mutation: {
    setPosition (state, val) {
      state.position = val
    }
  },
  actions: {
    setPosition ({commit}, val) {
      // 异步请求后端获取当前位置
      commit('setPosition', val)
    }
  }
})
