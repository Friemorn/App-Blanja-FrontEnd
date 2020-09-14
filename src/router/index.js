import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Home/Homepage.vue'
import Category from '../views/Category/Category.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Product from '../views/Product/Product.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
