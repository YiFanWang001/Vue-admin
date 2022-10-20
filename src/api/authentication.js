import router from '@/router'
import store from '@/store'

// 定义一个用户未登录情况下可以访问的白名单
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
    const token = store.getters.token
    if (token) {
        next()
    } else {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})