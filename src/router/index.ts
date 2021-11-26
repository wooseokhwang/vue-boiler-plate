import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { lazyLoadPage } from '@/helpers/router';
import Home from '@/views/Home.vue';
import PageNotFoundPage from '@/views/PageNotFoundPage.vue';

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
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
