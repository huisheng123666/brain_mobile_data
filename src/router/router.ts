import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
