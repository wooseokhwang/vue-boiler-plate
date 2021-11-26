import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { lazyLoadPage } from '@/helpers/router';
import { sampleGuard } from './guards/sampleGuard';
import Home from '@/views/Home.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import { mailRoutes } from './mail';
import { projectRoutes } from './project';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => lazyLoadPage('About'),
    beforeEnter: sampleGuard,
  },
  ...mailRoutes,
  ...projectRoutes,
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
