import type { RouteRecordRaw } from 'vue-router';

const designRoutes: Array<RouteRecordRaw> = [
  {
    path: '/design',
    name: 'design',
    component: () => import('@/pages/design/DesignGuideLayout.vue'),
    meta: { title: 'Design | Ian Kim' },
    children: [
      {
        path: '',
        component: () => import('@/pages/design/Overview.vue'),
      },
      {
        path: 'colors',
        component: () => import('@/pages/design/Colors.vue'),
        meta: { title: 'Colors | Ian Kim' },
      },
      {
        path: 'typography',
        component: () => import('@/pages/design/Typography.vue'),
        meta: { title: 'Typography | Ian Kim' },
      },
      {
        path: 'elevation',
        component: () => import('@/pages/design/Elevation.vue'),
        meta: { title: 'Elevation | Ian Kim' },
      },
      {
        path: 'buttons',
        component: () => import('@/pages/design/Buttons.vue'),
        meta: { title: 'Buttons | Ian Kim' },
      },
      {
        path: 'forms',
        component: () => import('@/pages/design/Forms.vue'),
        meta: { title: 'Forms | Ian Kim' },
      },
      {
        path: 'cards',
        component: () => import('@/pages/design/Cards.vue'),
        meta: { title: 'Cards | Ian Kim' },
      },
      {
        path: 'dialogs',
        component: () => import('@/pages/design/Dialogs.vue'),
        meta: { title: 'Dialogs | Ian Kim' },
      },
      {
        path: 'navigation',
        component: () => import('@/pages/design/Navigation.vue'),
        meta: { title: 'Navigation | Ian Kim' },
      },
      {
        path: 'tables',
        component: () => import('@/pages/design/Tables.vue'),
        meta: { title: 'Tables | Ian Kim' },
      },
    ],
  },
];

export default designRoutes;
