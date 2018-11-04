import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Style
import '@/assets/styles/index.sass'

// Element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// Lodash
import _ from 'lodash'

// Router
import router from './router'
let SideBar = []
const Routes = router.options.routes

router.beforeEach((to, from, next) => {
  SideBar = _.filter(Routes, route => {
    // console.log(route.meta.parent == to.name)
    return route.meta.parent == to.name
  })
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
