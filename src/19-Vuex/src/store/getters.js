export default {
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
}