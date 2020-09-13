import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    seller: {},
    customer: {}
  },
  mutations: {
    setSeller (state, payload) {
      state.seller = payload
      state.token = payload.token
    },
    setCustomer (state, payload) {
      state.customer = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
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
    loginSeller (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/loginseller', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setSeller', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/v1/users/login', payload)
          .then((res) => {
            console.log(res)
            setex.commit('setCustomer', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    }
  },
  modules: {
  }
})
