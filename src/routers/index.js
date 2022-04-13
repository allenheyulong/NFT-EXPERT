/**
 * @description: 路由
 * @author: nowThen
 */

import Vue from 'vue';
import Router from 'vue-router';

const Main = () => import(/* webpackChunkName: "apply" */ '@/views/main');
const Error = () => import(/* webpackChunkName: "error" */ '@/views/error');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      title: '404页'
    }
  },
  {
    path: '*',
    redirect: 'error',
  },
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

export default router;
