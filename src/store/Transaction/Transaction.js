import router from '../../router/index'
const state = {
  bags: []
}

const mutations = {
  addBag (state, payload) {
    const isBag = state.bags.find((item) => {
      return item.idProduct === payload.idProduct
    })
    if (!isBag) {
      router.push('Product')
      const item = payload
      state.bags.push({ ...item, qty: 1 })
    } else {
      router.push('Product')
      state.bags = state.bags.filter((item) => {
        return item.idProduct !== payload.idProduct
      })
    }
  }
}

const actions = {

}

const getters = {
  getBag (state) {
    console.log(state.bags)
    return state.bags
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
