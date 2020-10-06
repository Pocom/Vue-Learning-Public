import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'x', age: 16},
    {id: 111, name: 'y', age: 18},
    {id: 112, name: 'z', age: 20},
  ],
  info: {
    name: 'x',
    age: 18
  }
}

// 创建的是 Vuex 中的 Store 实例
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})

export default store;