import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Planning from '../views/Planning.vue'
import Planning2 from '../views/Planning2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/planning',
    name: 'planning',
    component: Planning
  },
  {
    path: '/planning2',
    name: 'planning2',
    component: Planning2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
