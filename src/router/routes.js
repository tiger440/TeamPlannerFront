import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

import Accueil from '../views/Accueil.vue'
import Planning from '../views/Planning.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import adminlogin from '../components/admin/adminlogin.vue'
import adminhome from '../components/admin/adminhome.vue'
import team from '../components/Team.vue'


// Admin pages
const Dashboard = () =>
    import ( /* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Profile = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Notifications.vue");
const Icons = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [{
        path: '/',
        name: 'accueil',
        component: Accueil
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
        path: "/dashboard",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [{
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: '/planning/:id',
                name: 'planning',
                component: Planning
            },
            {
                path: "/team/:id",
                name: "team",
                component: team
            },
            {
                path: "profile",
                name: "profile",
                component: Profile
            },
            {
                path: "notifications",
                name: "notifications",
                component: Notifications
            },
            {
                path: "icons",
                name: "icons",
                component: Icons
            },
            {
                path: "maps",
                name: "maps",
                component: Maps
            },
            {
                path: "typography",
                name: "typography",
                component: Typography
            },
            {
                path: "table-list",
                name: "table-list",
                component: TableList
            }
        ]
    },
    { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;