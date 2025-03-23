// router/index.ts

import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import GamePage from '@/pages/GamePage.vue'

// Definiowanie trasy login
const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage,
    meta: { title: 'Strona Główna' }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { title: 'Strona Logowania' } 
  },
  {
    path: '/game',
    name: 'UBBClicker',
    component: GamePage,
    meta: { title: 'UBBClicker' } 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
