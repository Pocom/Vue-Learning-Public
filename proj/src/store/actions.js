import * as types from './mutations-types'

const actions = {
	addToCart({state, commit}, info) {
		return new Promise((resolve) => {
			const oldInfo = state.cartList.find(item => item.iid === info.iid)
			if (oldInfo) {
				const index = state.cartList.indexOf(oldInfo)
				commit(types.INCREMENT_COUNT, index)
			} else {
				info.count = 1
				info.checked = true
				commit(types.ADD_TO_CART, info)
			}
			resolve("成功添加商品")
		})
	},
	check(context, payload) {
		return new Promise((resolve, reject) => {
			const cartList = context.state.cartList
			for (let i in cartList) {
				if (cartList[i].iid === payload.iid) {
					context.commit(types.CHECK, i)
				}
			}
			resolve()
		})
	},
	checkAll(context, payload) {
		context.commit(types.CHECK_ALL, payload)		
	}
}

export default actions