/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import NotFound from '@/pages/NotFound.vue'
import skhuRoutes from './routes/skhu';

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
      meta: { title: 'Navigation | Ian Kim' }
    },
    ...skhuRoutes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: 'Page Not Found' }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'iank.im | Ian Kim';
  document.title = (to.meta.title as string) || defaultTitle;
  next();
});

export default router
