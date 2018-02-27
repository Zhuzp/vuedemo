// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import vueResource from 'vue-resource'

//添加mockjs拦截请求，模拟返回服务器数据
import Mock from './mock/mock.js'

Vue.config.productionTip = false
Vue.use(vueResource)

const ERR_OK = 0

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
