import Vue from 'vue'
import Router from 'vue-router'
import Lifts from '@/components/Lifts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lift',
      component: Lifts
    }
  ]
})
