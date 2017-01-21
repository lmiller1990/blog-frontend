import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from 'src/components/Post.vue'
import moxios from 'moxios'

describe('Post.vue', () => {
  beforeEach(() => {
    moxios.install() 
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('renders the title and content of the post retreived from an api', (done) => {
    Vue.use(VueRouter)
    const router = new VueRouter({
      routes: [
        { path: '/posts/:id', name: 'post', Component: Post }
      ]
    })
    
    const expectedContent = 'This is the content of the post.' 
    const vm = mountWithMockedProps(Post, { post: { id: 1, title: 'Mock title' }}, router)
    
    router.push({name: 'post', params: { id: 1 }})
    console.log('Now to fetch posts')
    vm.fetchPostContent().then(() => {
      expect(vm.$el.querySelector('h2').textContent).to.equal('Mock title')
      expect(vm.$el.querySelector('.content').textContent.trim()).to.equal(expectedContent)
    }).then(done, done)

    moxios.wait(() => {
      moxios.requests.mostRecent().respondWith({
        status: 200,
        response: expectedContent
      })
    })
  })
})

function mountWithMockedProps (Component, propsData, router) {
  const Ctor = Vue.extend(Component)
  return new Ctor(router, { propsData }).$mount()
}
