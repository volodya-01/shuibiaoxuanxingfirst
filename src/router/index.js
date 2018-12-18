import Vue from 'vue'
import Router from 'vue-router'
import Tool from '@/tool/Tool'
import Login from '@/login/Login'
import Home from '@/layout/Home'
import Common from '@/views/Common'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Tool',
      component:Tool
    },
    {
      path:'/tool',
      name:'Tool',
      component:Tool,
    },

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  
    {
      path: '/Home',
      name:'Home',
      component:Home
    },
    {
      path:'/Common',
      name:'Common',
      component:Common
    }
  ]
})
