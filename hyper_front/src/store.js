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
        ADD_WATCHEDSHOW (state, show) {
            if (!state.user.watchedShows) {
                state.user.watchedShows = []
            }
            if (state.user.watchedShows.findIndex(v => v.id === show.id) < 0) {
                state.user.watchedShows.push(show)
            }
        }
    }
})

export default store