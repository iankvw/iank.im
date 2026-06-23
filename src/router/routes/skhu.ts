import type { RouteRecordRaw } from 'vue-router';

const skhuRoutes: Array<RouteRecordRaw> = [
  {
    path: '/web',
    name: 'web',
    component: () => import('@/pages/skhu/ServerView.vue'),
    meta: { title: '웹개발입문 | Ian Kim' }
  },
  {
    path: '/server',
    name: 'server',
    component: () => import('@/pages/skhu/ServerView.vue'),
    meta: { title: 'server | Ian Kim' }
  },
  {
    path: '/frontend',
    name: 'frontend',
    component: () => import('@/pages/skhu/ServerView.vue'),
    meta: { title: '프론트엔드프로그래밍 | Ian Kim' }
  },
  {
    path: '/hybrid',
    name: 'hybrid',
    component: () => import('@/pages/skhu/ServerView.vue'),
    meta: { title: '하이브리드앱프로그래밍 | Ian Kim' }
  },
];

export default skhuRoutes;
