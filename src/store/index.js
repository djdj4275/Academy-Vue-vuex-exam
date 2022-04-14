import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board : [
      {id : "", title : "", count : ""},
    ],
    memolist : [
      {memo : ""},
    ],
    count : 0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
