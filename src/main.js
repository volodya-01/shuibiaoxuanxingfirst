// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//在main.js里引入axios和apiServer.js
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
/* import ProtoTypeAPI from './network/apiServer'
import axios from 'axios' */
new Vue({
  el: '#app',
  router,
 /*  store,
  axios, */
  template: '<App/>',
  components: { App },
  methods: {
    setSessionStorage:function(data) { 
      for(let key in data){
        sessionStorage[key] = data[key];
      }
    },
    setLocalStorage: function(data) { 
      for(let key in data){
        localStorage[key] = data[key];
      }
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */

