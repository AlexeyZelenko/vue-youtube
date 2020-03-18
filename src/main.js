import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filters.js'
import messagePlugin from '@/utils/message.plugin.js'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyAAkBSJGUf8Bfkyz62M5U-haOzC5kn968U",
  authDomain: "vue-crm-19.firebaseapp.com",
  databaseURL: "https://vue-crm-19.firebaseio.com",
  projectId: "vue-crm-19",
  storageBucket: "vue-crm-19.appspot.com",
  messagingSenderId: "1015703558046",
  appId: "1:1015703558046:web:c0d7f7a1fc0a8c3c9ea88f",
  measurementId: "G-D8EKYPD2PS"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
