import Vue from 'vue'
import Posts from 'src/components/Posts.vue'
import moxios from 'moxios'

describe('Posts.vue', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('renders title of posts retreived from an api', (done) => {
    const vm = new Vue(Posts).$mount()

    vm.fetchPosts().then(() => {
      console.log(vm.$el)
      let posts = vm.$el.querySelectorAll('router-link')
      expect(posts.length).to.equal(2)
      for (let i = 0; i < posts.length; i++) {
        expect(posts[i].textContent.trim()).to.equal(`Mock post ${i}`)
      }
    }).then(done,done)

    moxios.wait(() => {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        response: [ 
          { title: 'Mock post 0' }, { title: 'Mock post 1' }
        ]
      })
    })
  })
})
