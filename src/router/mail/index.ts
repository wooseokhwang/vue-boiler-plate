import { RouteRecordRaw } from 'vue-router';
import { lazyLoadPage } from '@/helpers/router';
import Home from '@/views/Home.vue';

export const mailRoutes: Array<RouteRecordRaw> = [
  {
    path: '/mail',
    name: 'mail',
    component: Home,
  },
  {
    path: '/mail/:id',
    name: 'mail-read',
    component: () => lazyLoadPage('Home'),
  },
];
