import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'index',
  //     component: () => import('@/views/Home.vue'),
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('@/views/About.vue'),
  //   },
  // ],
});

// export const asyncRouterMap = [
//   routes,
// ]
