import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: () => import('@/pages/About.vue') },
    { path: '/resurce', name: 'resurce', component: () => import('@/pages/Resurce.vue') },
    { path: '/publications', name: 'publications', component: () => import('@/pages/Publications.vue') },
    { path: '/media', name: 'media', component: () => import('@/pages/Media.vue') },
    { path: '/project', name: 'project', component: () => import('@/pages/Project.vue') },
    { path: '/search', name: 'search', component: () => import('@/pages/Search.vue') },
  ]
})

export default router
