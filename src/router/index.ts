/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import NotFound from '@/pages/NotFound.vue'
import designRoutes from './routes/design'
import skhuRoutes from './routes/skhu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: () => import('@/pages/NavView.vue'),
      meta: { title: 'Navigation | Ian Kim', usePlain: true },
    },
    ...designRoutes,
    ...skhuRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: 'Page Not Found' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'iank.im | Ian Kim'
  document.title = (to.meta.title as string) || defaultTitle
  next()
});

export default router
