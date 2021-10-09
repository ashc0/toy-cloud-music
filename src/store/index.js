import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRequesting: false,
    song: {
      url: '',
      coverUrl: '',
      name: '',
      author: ''
    },
    isPlaying: false,
  },
  mutations: {
    startRequesting(state) {
      state.isRequesting = true;
    },
    endRequesting(state) {
      state.isRequesting = false
    },
    setSong(state, song) {
      state.song = song;
    },
    play(state) {
      state.isPlaying = true
    },
    pause(state) {
      state.isPlaying = false
    }
  },
  actions: {
  },
  modules: {

  }
})
