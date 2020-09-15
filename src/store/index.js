import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import profile from './profile'
import seller from './seller'
import product from './Product/Product'
import transaction from './Transaction/Transaction'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    // seller: {},
    // customer: {},
    user: {}
    // products: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    // setSeller (state, payload) {
    //   state.seller = payload
    //   state.token = payload.token
    // },
    // setCustomer (state, payload) {
    //   state.customer = payload
    //   state.token = payload.token
    // },
    setToken (state, payload) {
      state.token = payload
    // },
    // setProduct (state, payload) {
    //   state.products = payload
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response)
        if (error.response.status === 401 && error.response.data.result.message === 'Token is Invalid') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          // swal('Error!', "Don't Edit Token", 'error')
          router.push('/')
        } else if (error.response.status === 401 && error.response.data.result.message === 'Token is Expired') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          // swal('Error!', 'Session is Ended', 'error')
          alert('Session is Ended')
          router.push('/')
        } else if (error.response.status === 403 && error.response.data.result.message === 'Email Not Found!') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          // swal('Error!', 'Email Address is Wrong!', 'error')
          alert('Email Address is Wrong!')
          router.push('/')
        } else if (error.response.status === 403 && error.response.data.result.message === 'Password is Wrong!') {
          localStorage.removeItem('token')
          setex.commit('setToken', null)
          // swal('Error!', 'Password is Wrong!', 'error')
          alert('Password is Wrong!')
          router.push('/')
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v1/users/login/', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
        }
      })
    }
    // getProduct (setex, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios.get('http://localhost:3000/api/v1/products/allproduct/')
    //       .then((res) => {
    //         setex.commit('setProduct', res.data.result)
    //         setex.commit('setPagination', res.data.resultPage)
    //         resolve(res.data.result)
    //       })
    //       .reject((err) => {
    //         console.log(err)
    //         reject(err)
    //       })
    //   })
    // }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    getUsers (state) {
      return state.user
    }
  },
  modules: {
    profile,
    seller,
    product,
    transaction
  }
})
