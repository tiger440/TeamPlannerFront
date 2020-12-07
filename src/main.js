import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(SchedulePlugin)
Vue.use(VueAxios, axios)

Vue.prototype.$apiurl = "https://teamplanner.fr:3000/"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')