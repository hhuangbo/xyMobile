// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./common/css/px2rem.scss";
import './common/css/global.scss'
import 'animate.css'

import "./common/js/rem.js";



import axios from 'axios'
import wxShareFun from './common/js/wxShare';
// baseURL配置
axios.defaults.baseURL = window.location.origin;//测试地址"http://test_www.shinyutech.com";
axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";
Vue.prototype.$http = axios

wxShareFun();//调用微信分享

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
