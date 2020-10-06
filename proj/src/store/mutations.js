import * as types from './mutations-types'

const mutations = {
	[types.ADD_TO_CART](state, payload) {
		payload.checked = true
		state.cartList.push(payload)
	},
	[types.INCREMENT_COUNT](state, index) {
		state.cartList[index].count += 1
	},
	[types.CHECK](state, index) {
		state.cartList[index].checked = !state.cartList[index].checked
	},
	[types.CHECK_ALL](state, cur_checked) {
		state.cartList.map(item => {
			item.checked = !cur_checked
		})
	}
}


export default mutations
