import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import RouterPrefetch from 'vue-router-prefetch'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SchedulePlugin)
Vue.use(VueAxios, axios)

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";

Vue.use(BlackDashboard)
Vue.use(VueRouter)
Vue.use(RouterPrefetch)

Vue.prototype.$apiurl = "https://teamplanner.fr:3000/"

Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')