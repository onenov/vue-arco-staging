import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import NProgress from '@/utils/nprogress';

// 预加载组件
const Home = () => import('@/views/Home.vue');
const About = () => import('@/views/About.vue');
const Error = () => import('@/views/Error.vue');

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      keepAlive: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About',
      keepAlive: false,
    },
  },
  // 将来可以添加更多路由
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
    meta: {
      title: '错误',
      keepAlive: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// 路由开始钩子
router.beforeEach((to, from, next) => {
  // 启动进度条
  NProgress.start();
  
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${import.meta.env.VITE_APP_NAME || 'Vue Arco Project'}`;
  }
  
  next();
});

// 路由结束钩子
router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

export default router;
