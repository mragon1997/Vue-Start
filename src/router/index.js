import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 导入各个模块的路由配置
function importAll(r) {
  let result = []
  result = r.keys().map(key => r(key))
  return _.flatten(_.map(result, 'default'))
}

const routes = importAll(require.context('./', true, /\.router.js$/))
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
