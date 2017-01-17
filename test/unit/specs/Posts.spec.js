import Vue from 'vue'
import Posts from 'src/components/Posts.vue'

describe('Posts.vue', () => {
  const vm = new Vue(Posts).$mount()
  it('renders title of posts retreived from an api', (done) => {
    let data = vm.fetchPosts()
    console.log(data)
  })
})
