export default {
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
