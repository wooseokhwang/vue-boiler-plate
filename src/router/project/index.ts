import { RouteRecordRaw } from 'vue-router';
import { lazyLoadPage } from '@/helpers/router';

export const projectRoutes: Array<RouteRecordRaw> = [
  {
    path: '/project',
    name: 'project',
    component: lazyLoadPage('Home'),
  },
  {
    path: '/project/:id',
    name: 'project-read',
    component: () => lazyLoadPage('Home'),
  },
];
