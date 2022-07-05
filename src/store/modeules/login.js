import { Verification, login } from '@/api/login'
import router from '@/router'
import { getItem, setItem } from '@/utils/storage'

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
            setItem('token', data.token)
        }
    },
    actions: {
        async getlogin({ commit }) {
            const data = await Verification()
            commit('code', data.data)
        },

        async login({ commit }, string) {
            const list = await login(string)
            console.log('99999999999999', list)
            if (list.code === 200) {
                router.push('/')
            }
        }
    }
}