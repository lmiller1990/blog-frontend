import Vue from 'vue'
import App from 'src/App'

describe('App.vue', () => {
  it('should render a h2 title and three links', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(App)
    })
    expect(vm.$el.querySelector('h2').textContent).to.match(/Welcome/)
    expect(vm.$el.querySelectorAll('router-link').length).to.equal(3)
  })
})
