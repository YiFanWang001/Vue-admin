import { aside, userlist } from '@/api/layout'
// import router from '@/router'
export default {
    namespaced: true,
    state: () => ({
        nav: [],
        name: []
    }),
    getters: {},
    mutations: {
        menubar(state, data) {
            state.nav = data
        },
        userinfo(state, data) {
            state.name = data
        }
    },
    actions: {
        async menunav({ commit }) {
            const { data } = await aside()
            commit('menubar', data.nav)
            console.log(data)
        },
        async avatar({ commit }) {
            const { data } = await userlist()
            commit('userinfo', data)
            console.log(data)
        }
    }
}