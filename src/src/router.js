import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: () => import('./layout/template.vue'),
    children: [{
      path: '/',
      component: () => import('./pages/index/index.vue'),
      meta: {
        module: 'index'
      }
    }]
  },
  {
    path: '*',
    component: () => import('./layout/template.vue'),
    children: [{
      path: '/',
      component: () => import('./pages/not-found.vue'),
      meta: {
        module: 'not-found'
      }
    }]
  }
]

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes
})
