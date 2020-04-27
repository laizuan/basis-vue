import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const page = [{
  path: '/',
  name: 'layout',
  redirect: '/home',
  component: () => import('@/views/Layout.vue'),
  children: [{
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/index.vue'),
    children: [{
      path: 'list',
      component: () => import('@/views/product/List.vue'),
      name: 'productList'
    },
    {
      path: 'edit',
      component: () => import('@/views/product/Edit.vue'),
      name: 'productEdit'
    }
    ]
  }
  ]
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue')
},
{
  path: '/register',
  name: 'register',
  component: () => import('@/views/Register.vue')
},
{
  path: '*',
  redirect: '/home'
}
]

const router = new VueRouter({
  routes: page,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
/**
 * 重写路由的push方法， 解决重复点击菜单控制台异常问题
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

export default router
