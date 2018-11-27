import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function importAll(r) {
  const result = []
  return r.keys().map(key => r(key))
}

const routes = _.flatten(
  _.map(importAll(require.context('./', true, /\.router.js$/)), 'default')
)
console.log(routes)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
