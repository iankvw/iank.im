import type { RouteRecordRaw } from 'vue-router';

const toolsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/tools',
    name: 'tools',
    component: () => import('@/pages/Timer.vue'),
    meta: { title: '도구 | Ian Kim' },
  },
  {
    path: '/password-generator',
    name: 'password-generator',
    component: () => import('@/pages/Timer.vue'),
    meta: { title: '랜덤 비밀번호 생성기 | Ian Kim' },
  },
  {
    path: '/wol',
    name: 'wol',
    component: () => import('@/pages/Timer.vue'),
    meta: { title: 'WOL Controller | Ian Kim' },
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('@/pages/Timer.vue'),
    meta: { title: 'Timer & Counter | Ian Kim' },
  },
];

export default toolsRoutes;
