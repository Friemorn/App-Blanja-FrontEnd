import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '../views/Checkout/Checkout.vue'
import Mybag from '../views/Mybag/Mybag.vue'
import Profile from '../views/profile.vue'
import Seller from '../views/seller.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingHome',
    component: LandingHome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
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
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
