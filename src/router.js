import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/biz/first',
      meta: { parent: 'biz'}
    },
    // {
    //   path: '/biz',
    //   name: 'biz',
    //   meta: { parent: '' }
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    // },
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
