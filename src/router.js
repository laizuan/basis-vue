import Vue from 'vue'
import Router from 'vue-router'
import store from "./store";

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: () => import('./views/Layout.vue'),
            children:[
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('./views/About.vue')
                },
                {
                    path: '/product',
                    name: 'product',
                    component: () => import('./views/Product.vue'),
                    children: [
                        {
                            path: 'list',
                            component: () => import('./views/product/list.vue'),
                            name: 'productList'
                        },
                        {
                            path: 'edit',
                            component: () => import('./views/product/edit.vue'),
                            name: 'productEdit'
                        }
                    ]
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue')
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

export default router
