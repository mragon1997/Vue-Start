import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/biz/first',
      name: 'first',
      meta: { parent: 'biz' },
      component: () => import('./views/biz/first.vue')
    },
    {
      path: '/biz/two',
      name: 'two',
      meta: { parent: 'biz' },
      component: () => import('./views/biz/two.vue')
    },
    {
      path: '/exp/three',
      name: 'three',
      meta: { parent: 'exp' },
      component: () => import('./views/exp/three.vue')
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
