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
      let posts = vm.$el.querySelectorAll('div')
      for (let i = 0; i < posts.length; i++) {
        expect(posts[i].textContent).to.equal(`Mock post ${i}`)
      }
    }).then(done,done)

    moxios.wait(() => {
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
