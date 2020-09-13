import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Home/Homepage.vue'
import Category from '../views/Category/Category.vue'
import Login from '../views/Auth/Login.vue'
import Signup from '../views/Auth/Signup.vue'
import Mybag from '../views/Mybag/Mybag.vue'

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
    path: '/mybag',
    name: 'Mybag',
    component: Mybag
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
