import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Checkout from '../views/Checkout/Checkout.vue'
import Mybag from '../views/Mybag/Mybag.vue'
import Profile from '../views/profile.vue'
import Seller from '../views/seller.vue'
=======
import Homepage from '../views/Home/Homepage.vue'
import Category from '../views/Category/Category.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
>>>>>>> c4c33ac93b0acc52c51d6a22376f7baca30a64f6

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
<<<<<<< HEAD
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
=======
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
>>>>>>> c4c33ac93b0acc52c51d6a22376f7baca30a64f6
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
