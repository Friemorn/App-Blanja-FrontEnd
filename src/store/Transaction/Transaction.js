import router from '../../router/index'
const state = {
  bags: []
}

const mutations = {
  addBag (state, payload) {
    const isBag = state.bags.find((item) => {
      return item.id === payload.id
    })
    if (!isBag) {
      router.push('Product')
      const item = payload
      state.bags.push({ ...item, qty: 1 })
    } else {
      router.push('Mybag')
      state.bags = state.bags.filter((item) => {
        return item.id !== payload.id
      })
    }
  },
  addQty (state, payload) {
    const isBag = state.bags.find((item) => {
      return item.id === payload.id
    })
    isBag.qty++
  },
  removeFromCart (state, payload) {
    state.bags = state.bags.filter((item) => { return item.id !== payload.id })
  },
  reduceQty (state, payload) {
    const isBag = state.bags.find((item) => {
      return item.id === payload.id
    })
    if (isBag.qty > 1) {
      isBag.qty--
    } else {
      state.bags = state.bags.filter((item) => { return item.id !== payload.id })
    }
  },
  emptyCart (state) {
    state.bags = []
  }
}

const actions = {

}

const getters = {
  getBag (state) {
    console.log(state.bags)
    return state.bags
  },
  getPricing (state) {
    return state.bags.reduce((a, b) => a + b.qty * b.price, 0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
