const state = {
  profiles: [{
    id: '1',
    name: 'Geralt of Rivia',
    email: 'geralt@gmail.com',
    phoneNumber: '08934243',
    gender: 'laki-laki',
    year: '1995',
    month: 'Januari',
    date: '9'
  }],
  address: [{
    rumah: ' Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181',
    recipientsName: 'Andrea Jane',
    postalCode: '53181',
    provinsi: 'Jawa Tengah',
    kabupaten: 'Banyumas',
    kecamatan: 'Sokaraja'
  }]
}

const mutations = {
  SET_PROFILE (state, payload) {
    state.profiles = payload
  },
  SET_ADDRESS (state, payload) {
    state.address = payload
  }
}

const actions = {
}

const getters = {
  get_profiles (state) {
    return state.profiles
  },
  get_address (state) {
    return state.address
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
