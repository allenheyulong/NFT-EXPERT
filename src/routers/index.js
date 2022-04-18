/**
 * @description: 路由
 * @author: nowThen
 */

import Vue from 'vue';
import Router from 'vue-router';

const Main = () => import(/* webpackChunkName: "main" */ '@/views/main');
const Invite = () => import(/* webpackChunkName: "invite" */ '@/views/invite');
const Wallet = () => import(/* webpackChunkName: "wallet" */ '@/views/wallet');
const PledgeRecord = () => import(/* webpackChunkName: "PledgeRecord" */ '@/views/pledge-record');

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
    path: '/invite',
    name: 'Invite',
    component: Invite,
    meta: {
      title: '邀请'
    }
  },
  {
    path: '/pledge-record',
    name: 'PledgeRecord',
    component: PledgeRecord,
    meta: {
      title: '质押记录'
    }
  },
  
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      title: '我的钱包'
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
