import Vue from "vue";
import VueRouter from "vue-router";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

//定义路由组件
const seller = require('../components/seller/seller.vue')
const goods = require('../components/goods/goods.vue')
const ratings = require('../components/ratings/ratings.vue')

const routes = [
  { path: '/seller', components: seller },
  { path: '/goods', components: goods },
  { path: '/ratings', components: ratings }
]

var router =  new VueRouter({
  routes
})

export default router;
