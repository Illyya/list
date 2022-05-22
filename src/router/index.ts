import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store';
import List from '@/views/List.vue'
import Create from '@/views/Create.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'List',
    component: List,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    props: true,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authRequired: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta?.authRequired) {
    if (!store.getters.isAuthorized) {
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
