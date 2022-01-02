import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstPageLoaded: false,
        isRequesting: false,
        song: {
            coverUrl: '',
            name: '',
            author: '',
            id: ''
        },
        isPlaying: false,
        trackQueue: JSON.parse(localStorage.getItem('track-queue')),
        curSongIdx: localStorage.getItem('cur-song-idx')
    },
    mutations: {
        changeFirstPageLoaded(state) {
            state.firstPageLoaded = true
        },
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
            state.trackQueue.forEach((item, index) => {
                if (item.id === state.song.id) {
                    state.curSongIdx = index
                    localStorage.setItem('cur-song-idx', index)
                }
            })
        },
        pause(state) {
            state.isPlaying = false
        },
        next(state, id) {
            state.song = state.songs[id]
        },
        initTrackQueue(state) {
            localStorage.setItem("track-queue", JSON.stringify([]));
            localStorage.setItem("cur-song-idx", JSON.stringify(0));
            state.trackQueue = []
            state.curSongIdx = 0
        },
        initCurrentSong(state) {
            state.song = state.trackQueue[localStorage.getItem('cur-song-idx')] == null ? {
                coverUrl: '',
                name: '',
                author: ''
            } : state.trackQueue[localStorage.getItem('cur-song-idx')]
        },
        addSong(state, data) {
            if (state.trackQueue.every(item => item.id !== data.id)) {
                state.trackQueue.push(data)
                localStorage.setItem('track-queue', JSON.stringify(state.trackQueue))
            }
        },

        removeSong(state, index) {
            state.trackQueue.splice(index, 1)
            localStorage.setItem('track-queue', JSON.stringify(state.trackQueue))
        },

        toNextSong(state) {
            let nextIndex = (state.curSongIdx + 1) % state.trackQueue.length
            this.commit('changeCurrentSong', nextIndex)
        },

        changeCurrentSong(state, index) {
            state.isPlaying = false
            state.curSongIdx = index
            localStorage.setItem('cur-song-idx', state.curSongIdx)
            state.song = state.trackQueue[state.curSongIdx]
        }


    },
    actions: {},
    modules: {

    }
})