import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/biz',
      name: 'biz',
      meta: { parent: ''},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/biz/index.vue')
    },
    {
      path: '/first',
      name: 'first',
      meta: { parent: 'biz'},
      component: () => import('./views/biz/first/index.vue')
    },
    {
      path: '/exp',
      name: 'exp',
      meta: { parent: ''},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/exp/index.vue')
    },
    {
      path: '/ele',
      name: 'ele',
      meta: { parent: ''},
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ele/index.vue')
    }
  ]
})
