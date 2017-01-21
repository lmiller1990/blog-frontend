// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import About from './components/About'
import Posts from './components/Posts'
import Post from './components/Post'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import Resume from './components/Resume'
import NewUserForm from './components/NewUserForm'

Vue.use(VueRouter)

const routes = [
  { path: '/about', component: About },
  { path: '/posts/new', component: NewPost },
  { path: '/posts/edit/:id', component: EditPost },
  { path: '/posts/:id', name: 'post', component: Post },
  { path: '/posts', component: Posts },
  { path: '/resume', component: Resume },
  { path: '/signup', component: NewUserForm }
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
