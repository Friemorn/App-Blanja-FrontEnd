import Vue from 'vue'
import Vuex from 'vuex'
import profile from './profile'
import seller from './seller'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile,
    seller
  }
})
