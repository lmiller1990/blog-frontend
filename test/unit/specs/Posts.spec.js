import Vue from 'vue'
import Posts from 'src/components/Posts.vue'
import moxios from 'moxios'

describe('Posts.vue', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function ()  {
    moxios.uninstall()
  })

  const vm = new Vue(Posts).$mount()
  it('renders title of posts retreived from an api', (done) => {
    let data = vm.fetchPosts().then(function () {
      console.log('stuff', data)
    }).then(done,done)
    //console.log(data)

    moxios.wait(function () {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        responseText: 'Post 1, Post 2, Post 3!!!!!!!!!!!!!'
      }).then(function () {
        console.log('moxios responded')
      })
    })
  })
})
