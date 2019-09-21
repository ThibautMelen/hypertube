import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//VUE X
const store = new Vuex.Store({
    state: {
        user: null,
        loading: true
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        SET_LOADING (state, loading) {
            state.loading = loading
        },
        ADD_WATCHEDSHOW (state, showId) {
            if (!state.user.watchedShows) {
                state.user.watchedShows = []
            }
            state.user.watchedShows.push(showId)
        }
    }
})

export default store