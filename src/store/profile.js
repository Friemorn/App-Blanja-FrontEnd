const state = {
  profiles: [{
    name: 'Geralt of Rivia',
    email: 'geralt@gmail.com',
    phoneNumber: '08934243',
    gender: 'laki-laki'
  }]
}

const mutations = {
  SET_PROFILE (state, payload) {
    state.profiles = payload
  }
}

const actions = {
}

const getters = {
  get_profiles (state) {
    return state.profiles
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
