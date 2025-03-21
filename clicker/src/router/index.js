// router/index.ts

import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/pages/LoginPage.vue'
import IndexPage from '@/pages/IndexPage.vue'
import RankingPage from '@/pages/RankingPage.vue'

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
    path: '/ranking',
    name: 'Ranking',
    component: RankingPage,
    meta: {title: 'Ranking'}
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
