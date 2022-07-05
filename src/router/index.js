import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [{
                path: '/sys/users',
                name: 'users',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/sys/users'),
                meta: {
                    title: '用户管理'
                }
            },
            {
                path: '/sys/menus',
                name: 'menus',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/sys/menus'),
                meta: {
                    title: '菜单管理'
                }
            },
            {
                path: '/sys/roles',
                name: 'roles',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/sys/roles'),
                meta: {
                    title: '角色管理'
                }
            },
            {
                path: '/sys/dicts',
                name: 'dicts',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/sys/dicts'),
                meta: {
                    title: '数字字典'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Login')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router