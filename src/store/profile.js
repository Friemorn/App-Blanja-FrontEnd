import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

const state = {
  // profiles: [{
  //   id: '1',
  //   name: 'Johanes Mikael',
  //   email: 'johanes@gmail.com',
  //   phoneNumber: '08934243',
  //   gender: 'laki-laki',
  //   year: '1995',
  //   month: 'Januari',
  //   date: '9'
  // }],
  profiles: [],
  address: [{
    rumah: ' Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181',
    recipientsName: 'Andrea Jane',
    postalCode: '53181',
    provinsi: 'Jawa Tengah',
    kabupaten: 'Banyumas',
    kecamatan: 'Sokaraja'
  }],
  token: localStorage.getItem('token') || null,
  roleId: localStorage.getItem('roleId') || null
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
  getProfile (context) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/api/v1/updateuser/usercustomer/')
        .then(res => {
          console.log(res)
          context.commit('SET_PROFILE', res)
        })
    })
  },
  interceptorsRequest (setex) {
    console.log('interse')
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${setex.state.token}`
      console.log(config)
      return config
    }, function (error) {
      // Do something with request error
      return Promise.reject(error)
    })
  },
  interceptorsResponse () {
    axios.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log(error)
      return Promise.reject(error)
    })
  }
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
