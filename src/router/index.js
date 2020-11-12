import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Planning from '../views/Planning.vue'
import Planning2 from '../views/Planning2.vue'
import DayScheduler from '../components/DaySchedule.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'accueil',
        component: Accueil
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
        path: '/dayscheduler/:id',
        name: 'dayscheduler',
        component: DayScheduler
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router