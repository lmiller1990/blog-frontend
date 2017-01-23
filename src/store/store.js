import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loggedIn: false
}

const mutations = {
  SET_LOGGED_IN (state) {
    state.loggedIn = true
  }
}

export default new Vuex.Store({
  state,
  mutations
})
