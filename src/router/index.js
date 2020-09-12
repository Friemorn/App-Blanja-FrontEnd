import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import Mybag from '../views/Mybag/Mybag.vue'
import Profile from '../views/profile.vue'
import Seller from '../views/seller.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/mybag',
    name: 'Mybag',
    component: Mybag
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
