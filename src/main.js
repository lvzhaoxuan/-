import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
