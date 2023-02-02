import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/run/run.vue')
      },
      {
        path: 'safe',
        component: () => import('../views/safe/safe.vue')
      },
      {
        path: 'govern',
        component: () => import('../views/govern/govern.vue')
      },
      {
        path: 'service',
        component: () => import('../views/service/service.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
