import { Verification } from '@/api/login'

export default {
    namespaced: true,
    state: () => ({
        img: '',
        token: ''
    }),
    getters: {},
    mutations: {
        code(state, data) {
            state.img = data.captchaImg
            state.token = data.token
        }
    },
    actions: {
        async getlogin({ commit }) {
            const { data } = await Verification()
            commit('code', data)
            console.log(data)
        }
    }
}