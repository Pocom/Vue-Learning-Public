import {INCREMENT}  from './mutations-types'

export default {
  [INCREMENT](state) {
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
}
