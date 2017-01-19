import Vue from 'vue'
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
    const expectedContent = 'This is the content of the post.' 
    const vm = mountWithMockedProps(Post, { post: { id: 1, title: 'Mock title' }})

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

function mountWithMockedProps (Component, propsData) {
  const Ctor = Vue.extend(Component)
  return new Ctor({ propsData }).$mount()
}
