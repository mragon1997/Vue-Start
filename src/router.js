import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/biz/first',
      name: 'first',
      meta: { parent: 'biz' }
    },
    {
      path: '/biz/two',
      name: 'two',
      meta: { parent: 'biz' }
    },
    {
      path: '/exp/three',
      name: 'three',
      meta: { parent: 'exp' }
    },
    {
      path: '/ele/four',
      name: 'four',
      meta: { parent: 'ele' }
    },
    {
      path: '/ele/five',
      name: 'five',
      meta: { parent: 'ele' }
    },
    {
      path: '/ele/six',
      name: 'six',
      meta: { parent: 'ele' }
    },
  ]
})
