export default [
  {
    path: '/exp/three',
    name: 'three',
    meta: { parent: 'exp' },
    component: () => import('../../views/exp/three.vue')
  }
]
