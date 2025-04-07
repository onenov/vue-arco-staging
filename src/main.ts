import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { install as IconParkInstall } from '@icon-park/vue-next/es/all';
import { MotionPlugin } from '@vueuse/motion'

import router from './router'

// 导入样式文件
import './assets/css/main.css'
import './assets/css/light.less'
import './assets/css/dark.less'
import '@arco-design/web-vue/dist/arco.css'
import './assets/css/style.less'
import './assets/css/mobile.less'

import App from './App.vue'

const app = createApp(App)

// 使用插件
app.use(createPinia())
app.use(router)
app.use(ArcoVue as any);
app.use(ArcoVueIcon as any);
// 安装IconPark图标
IconParkInstall(app, 'i');
// 安装Motion动画插件
app.use(MotionPlugin)

app.mount('#app')
