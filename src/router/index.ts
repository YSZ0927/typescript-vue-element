import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes/index';
import store from '@/store';

Vue.use(Router);

const router: Router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin: any = store.state;
  if (isLogin.user.userInfo !== null || to.name === 'login') {
    next();
  } else {
    next({
      path: '/login',
    });
  }
});

export default router;
