import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'xxx',
    age: 11
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + 'i'
    },
    fullName2(state, getters) {
      return getters.fullName + 'j'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context) {
      // setTimeout(() => {
      //   context.commit('updateName', 'bupt')
      // }, 1000);
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(context);
          context.commit('updateName', 'china')
          resolve('异步操作已结束。')
        }, 1000)
      })
    }
  }
}

// 创建的是 Vuex 中的 Store 实例
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [types.INCREMENT](state) {
      state.counter++
    //   setTimeout(() => {
    
    //   }, 1000);
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, count) {
      state.counter += count
    },
    updateInfo(state) {
      state.info.name = 'y'
    }
  },
  actions: {
    aUpdateInfo(context, payload) {
      // setTimeout(() => {
      //   // context.commit('updateInfo')

      //   // // 传入函数，加小括号直接调用
      //   // context.commit('updateInfo')
      //   // payload()

      //   // // 传入复杂对象
      //   context.commit('updateInfo')
      //   console.log(payload.message);
      //   payload.success()
      // }, 1000);

      // 当传入的数据复杂，且需要返回响应
      // 使用 Promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          resolve('-----')
        }, 1000);
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    // greaterAgesCount: state => {
    //   return state.students.filter(s => s.age >= 18).length
    // },

    greaterAgesStu: (state) => {
      return state.students.filter(s => s.age >= 18)
    },
    greaterAgesCount(state, getters) {
      return getters.greaterAgesStu.length
    },

    greaterAge(state) {
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

export default store;