import { createApp } from 'vue'
import App from './App.vue'

// 引入Arco Design
import ArcoVue from '@arco-design/web-vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'; // 额外引入图标库
import '@arco-design/web-vue/dist/arco.css'
import 'md-editor-v3/lib/style.css';
import 'md-editor-v3/lib/preview.css';

// 引入@vueuse/motion动画库
import { MotionPlugin } from '@vueuse/motion'


// 引入样式文件
import './tailwind.css'
import './assets/style/style.less'
import './assets/style/light.less'
import './assets/style/dark.less'
import './assets/style/mobile.less' 

// 引入路由
import router from './router'

// 引入状态管理
import { createPinia } from 'pinia'

// 创建应用实例和状态管理实例
const app = createApp(App)
const pinia = createPinia()

// 注册Arco Design组件库
app.use(ArcoVue)
app.use(ArcoVueIcon) // 额外注册图标库

// 注册动画库
app.use(MotionPlugin)

// 注册路由
app.use(router)

// 注册状态管理
app.use(pinia)

// 确保在挂载应用之前载入配置
import { useConfigStore, useThemeStore } from './store'
const configStore = useConfigStore()
configStore.loadConfig()

// 主题初始化
const themeStore = useThemeStore()
themeStore.initTheme()

// 挂载应用
app.mount('#app')
