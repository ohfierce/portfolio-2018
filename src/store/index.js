import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'guest',
    isGit: false
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    },
    toggleGit(state) {
      state.isGit = !state.isGit
    }
  }
})

export default store