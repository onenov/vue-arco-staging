import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import svgLoader from 'vite-svg-loader'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // 配置插件
  plugins: [
    vue(),
    // 添加JSX/TSX支持
    vueJsx(),
    // 添加SVG加载器
    svgLoader({
      defaultImport: 'component' // 默认以组件方式导入
    }),
    vueDevTools(),
    // 自动路由配置
    Pages({
      dirs: 'src/views', // 页面目录
      extensions: ['vue', 'tsx', 'jsx'], // 支持的文件扩展名
      exclude: ['**/components/**'], // 排除的目录
      routeStyle: 'next', // 路由风格 (nuxt/next)
      extendRoute(route) {
        // 扩展路由配置，可以设置中文标题和keepAlive属性
        const customRoutes = {
        };
        
        // 如果是自定义路由，添加额外配置
        if (route.path in customRoutes) {
          return {
            ...route,
            meta: {
              ...route.meta,
              ...customRoutes[route.path]
            }
          };
        }
        
        return route;
      }
    }),
    // 自动导入Vue API
    AutoImport({
      // 自动导入的API来源
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
      ],
      // 生成类型声明文件
      dts: 'src/auto-imports.d.ts',
    }),
    // 自动导入组件
    Components({
      // 指定组件所在目录，默认为src/components
      dirs: ['src/components', 'src/layouts', 'src/views'],
      // 组件的有效扩展名
      extensions: ['vue'],
      // 生成类型声明文件
      dts: 'src/components.d.ts',
      // 添加Arco Design组件的解析器
      resolvers: [
        ArcoResolver({
          sideEffect: true,  // 启用副作用导入以自动导入相关样式
          resolveIcons: true, // 解析图标组件
        }),
      ],
    }),
  ],
  // 解析配置
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // CSS预处理器配置
  css: {
    preprocessorOptions: {
      less: {
        // 全局Less变量文件
        additionalData: `@import "@/assets/css/variables.less";`,
      },
    },
  },
})
