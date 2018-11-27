export default [
  {
    path: '/biz/first',
    name: 'first',
    meta: { parent: 'biz' },
    component: () => import('../../views/biz/first.vue')
  },
  {
    path: '/biz/two',
    name: 'two',
    meta: { parent: 'biz' },
    component: () => import('../../views/biz/two.vue')
  }
]
