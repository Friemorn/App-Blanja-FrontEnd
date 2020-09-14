import axios from 'axios'

const state = {
  products: []
}

const mutations = {
  setAllProducts (state, payload) {
    console.log(payload)
    state.products = payload
  }
}

const actions = {
  getAllProducts (context, payload) {
    return new Promise((resolve, reject) => {
      // axios.get(`http://localhost:3000/api/v1/products/allproduct${payload || ''}`)
      axios.get('http://localhost:3000/api/v1/products/allproduct/', payload)
        .then((res) => {
          console.log(res)
          context.commit('setAllProducts', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  }
}

const getters = {
  allProducts (state) {
    return state.products
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
