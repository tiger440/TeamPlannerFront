import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { SchedulePlugin} from '@syncfusion/ej2-vue-schedule'

Vue.use(SchedulePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
