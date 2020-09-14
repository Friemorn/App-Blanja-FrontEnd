const state = {
  seller: [{
    name: 'Johanes Mikael',
    email: 'johanes@gmail.com',
    phoneNumber: '08934243',
    gender: 'laki-laki',
    year: '1995',
    description: ''
  }],
  products: []
}

const mutations = {
  SET_SELLER (state, payload) {
    state.seller = payload
  },
  SET_PRODUCTS (state, payload) {
    state.products = payload
  }
}

const actions = {
}

const getters = {
  get_seller (state) {
    return state.seller
  },
  get_products (state) {
    return state.products
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
