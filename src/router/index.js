import Vue from 'vue'
import VueRouter from 'vue-router'
import Password from '../components/_base/Password.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/password',
    name: 'Password',
    component: Password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
