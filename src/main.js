// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import http from '@/http/httpRequest.js'
import http from '@/http/http'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from '@/i18n/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = http

// 非生产环境, 适配mockjs模拟数据
if (process.env.NODE_ENV !== 'production') {
  require('@/mock')
}



/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
