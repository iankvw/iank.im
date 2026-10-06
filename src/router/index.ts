/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import NotFound from '@/pages/NotFound.vue'
import designRoutes from './routes/design'
import archiveRoutes from './routes/archive'
import toolsRoutes from './routes/tools'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/timer',
      name: 'timer',
      component: () => import('@/pages/Timer.vue'),
      meta: { title: 'Timer & Counter | Ian Kim' },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/pages/test.vue'),
      meta: { title: 'Test | Ian Kim' },
    },
    ...designRoutes,
    ...archiveRoutes,
    ...toolsRoutes,
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
