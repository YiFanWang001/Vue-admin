import { createStore } from 'vuex'
import login from './modeules/login'
import layout from './modeules/layout'
export default createStore({
    modules: {
        login,
        layout
    }
})