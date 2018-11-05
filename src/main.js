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
// let SideBar = []
// const Routes = router.options.routes

// router.beforeEach((to, from, next) => {
//   SideBar = _.filter(Routes, route => {
//     // console.log(route.meta.parent == to.name)
//     return route.meta.parent == to.name
//   })
//   next()
// })


// FireBase
import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBudmmBeLunNykLYQa__W917iKdMhrmJEg",
  authDomain: "hello-firebase-4513a.firebaseapp.com",
  databaseURL: "https://hello-firebase-4513a.firebaseio.com",
  projectId: "hello-firebase-4513a",
  storageBucket: "hello-firebase-4513a.appspot.com",
  messagingSenderId: "796535321415"
}
firebase.initializeApp(config)
const database = firebase.database()



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
