import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore - 忽略类型检查，vite-plugin-pages会在构建时生成这个模块
import routes from '~pages'

// 导入NProgress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 声明全局APP_CONFIG类型
declare global {
  interface Window {
    APP_CONFIG: {
      APP_NAME: string;
      APP_ICON: string;
      APP_DESCRIPTION: string;
      APP_KEYWORDS: string;
      APP_VERSION: string;
    };
  }
}

// 创建路由实例
const router = createRouter({
  // 使用HTML5 History API，没有#号
  history: createWebHistory(),
  // 自动生成的路由配置
  routes: [...routes],
  // 滚动行为控制
  scrollBehavior(_to, _from, savedPosition) {
    // 如果有保存的位置则滚动到该位置
    if (savedPosition) {
      return savedPosition
    } else {
      // 否则滚动到顶部
      return { top: 0 }
    }
  },
})

// 配置NProgress
NProgress.configure({ 
  easing: 'ease',  // 动画方式
  speed: 500,      // 速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3,      // 初始化时的最小百分比
});

// 全局前置守卫
router.beforeEach((to, _from, next) => {
  // 开启进度条
  NProgress.start()

  // 设置页面标题
  if (to.meta.title) {
    // 使用APP_CONFIG中的APP_NAME作为网站名称
    const appName = window.APP_CONFIG?.APP_NAME
    document.title = `${to.meta.title} - ${appName}`
  }
  
  // 这里可以添加登录验证、权限控制等逻辑
  
  next()
})

// 全局后置守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})

export default router
