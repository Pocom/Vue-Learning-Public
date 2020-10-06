import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component: () => import("../views/home/Home")
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/shopcart',
    component: () => import('../views/shopcart/Shopcart')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;