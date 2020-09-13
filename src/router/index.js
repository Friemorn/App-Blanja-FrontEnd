import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Checkout from '../views/Checkout/Checkout.vue'
import Mybag from '../views/Mybag/Mybag.vue'
import Profile from '../views/profile.vue'
import Seller from '../views/seller.vue'
import LandingHome from '../views/Home/LandingHome.vue'
import Homepage from '../views/Home/Homepage.vue'
import Category from '../views/Category/Category.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Product from '../views/Product/Product.vue'
import store from '../store/index'
=======
import Password from '../views/Auth/Password.vue'
>>>>>>> password

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'LandingHome',
    component: LandingHome,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresVisitor: true }
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
    path: '/password',
    name: 'Password',
    component: Password
>>>>>>> password
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/homepage'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
