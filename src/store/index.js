import { createStore } from 'vuex'
import login from './modeules/login'
import layout from './modeules/layout'
import tabs from './modeules/tabs'
export default createStore({
    modules: {
        login,
        layout,
        tabs
    }
})