import { aside } from '@/api/layout'
// import router from '@/router'
export default {
    namespaced: true,
    state: () => ({
        nav: []
    }),
    getters: {},
    mutations: {
        menubar(state, data) {
            state.nav = data
        }
    },
    actions: {
        async menunav({ commit }) {
            const { data } = await aside()
            commit('menubar', data.nav)
            console.log(data)
        }
    }
}