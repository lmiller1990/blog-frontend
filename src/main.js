// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import About from './components/About'
import Posts from './components/Posts'
import Resume from './components/Resume'

Vue.use(VueRouter)

const routes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/resume', component: Resume }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})