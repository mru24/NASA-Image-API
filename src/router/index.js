import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nasa from '@/components/Nasa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Nasa',
      name: 'Nasa',
      component: Nasa
    }
  ]
})
