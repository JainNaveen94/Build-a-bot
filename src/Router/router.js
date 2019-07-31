import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('../components/Home/HomePage.vue'),
    },
    {
      path: '/build-robot',
      name: 'RobotBuilder',
      component: () => import('../components/builds/RobotBuilder.vue'),
    },
  ],
});
