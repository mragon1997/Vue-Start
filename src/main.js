import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Viser
import Viser from 'viser-vue'
Vue.use(Viser)

// Style
import '@/assets/styles/index.sass'

// Animate
import Animate from 'animate.css'

// Element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// Lodash
import _ from 'lodash'

// Router
import router from './router'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
