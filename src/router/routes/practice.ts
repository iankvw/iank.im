import type { RouteRecordRaw } from 'vue-router';

const practiceRoutes: Array<RouteRecordRaw> = [
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/pages/practice/practice.vue'),
    meta: { title: '실습 | Ian Kim' },
  },
  {
    path: '/web',
    name: 'web',
    component: () => import('@/pages/practice/practice.vue'),
    meta: { title: '웹개발입문 | Ian Kim' },
  },
  {
    path: '/practice/server',
    name: 'server',
    component: () => import('@/pages/practice/ServerView.vue'),
    meta: { title: 'server | Ian Kim' },
  },
  {
    path: '/frontend',
    name: 'frontend',
    component: () => import('@/pages/practice/practice.vue'),
    meta: { title: '프론트엔드프로그래밍 | Ian Kim' },
  },
  {
    path: '/hybrid',
    name: 'hybrid',
    component: () => import('@/pages/practice/practice.vue'),
    meta: { title: '하이브리드앱프로그래밍 | Ian Kim' },
  },
];

export default practiceRoutes;
