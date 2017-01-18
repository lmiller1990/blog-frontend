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

  it('renders title of posts retreived from an api', (done) => {
    const vm = new Vue(Posts,{
      el: document.createElement('div'),
      render: (h) => h(Posts)
    }).$mount()

    let data = vm.fetchPosts().then(function() {
      let posts = vm.$el.querySelectorAll('div')
      for (let i = 0; i < posts.length; i++) {
        expect(posts[i].textContent).to.equal(`Mock post ${i}`)
      }
    }).then(done,done)

    moxios.wait(function () {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        response: {
          result: [
            { title: 'Mock post 0' }, { title: 'Mock post 1' }
          ]
        } 
      })
    })
  })
})
