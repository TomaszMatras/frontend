// router/index.ts

import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import IndexPage from '@/pages/IndexPage.vue'


// Definiowanie trasy login
const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
