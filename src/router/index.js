import Vue from 'vue'
import VueRouter from 'vue-router'
// import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: () =>
            import ( /*webpackChunkName: 'main'*/ '../views/Main.vue'),
        // component: Main,
        meta: {
            x: 0,
            y: 0
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ( /*webpackChunkName: 'search'*/ '../views/Search.vue')
    },
    {
        path: '/playlist',
        name: 'Playlist',
        component: () =>
            import ( /*webpackChunkName: 'plalist'*/ '../views/Playlist.vue'),
        props: route => ({ id: route.query.id })
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to) {

        if (to.name === "Playlist") return { x: 0, y: 0 }

        return to.meta
    }
})

export default router