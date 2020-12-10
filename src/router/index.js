import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Planning from '../views/Planning.vue'
import Planning2 from '../views/Planning2.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import adminlogin from '../components/admin/adminlogin.vue'
import adminhome from '../components/admin/adminhome.vue'
import team from '../components/Team.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'accueil',
        component: Accueil
    },
    {
        path: '/planning/:id',
        name: 'planning',
        component: Planning
    },
    {
        path: '/planning2',
        name: 'planning2',
        component: Planning2
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
            import ( /* webpackChunkName: "about" */
                '../views/About.vue')
    },
    {
        path: "/admin/login",
        name: "adminlogin",
        component: adminlogin
    },
    {
        path: "/admin/home",
        name: "adminhome",
        component: adminhome
    },
    {
        path: "/team/:id",
        name: "team",
        component: team
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router