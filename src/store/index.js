import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRequesting: false,
  },
  mutations: {
    startRequesting(state) {
      state.isRequesting = true ;
    },
    endRequesting(state) {
      state.isRequesting = false
    }
  },
  actions: {
  },
  modules: {
  }
})
