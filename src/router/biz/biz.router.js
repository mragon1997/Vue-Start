export default [
  {
    path: '/biz/first',
    name: '图表',
    meta: { parent: 'biz' },
    component: () => import('../../views/biz/union_chart')
  },
  {
    path: '/biz/two',
    name: 'two',
    meta: { parent: 'biz' },
    component: () => import('../../views/biz/two')
  }
]
