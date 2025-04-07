<div align="center">

  <a href="https://vas.orence.net" target="_blank">
    <img alt="Logo" width="200" src="https://io.onenov.cn/file/202503060756982.png"/>
  </a>

</div>

<div align="center">
  <h1>Vue Arco Staging</h1>
</div>

<div align="center">

基于 Vue 3、TypeScript、Vite 和 Arco Design 组件库的现代化前端脚手架。该项目集成了当前流行的前端技术栈，提供了一个开箱即用的高效开发环境，帮助开发者快速构建企业级Web应用。

[![爱发电](https://afdian.moeci.com/13/badge.svg)](https://afdian.com/@orence)

</div>

![screenshot](https://io.onenov.cn/file/202504071900388.png)

## 主要特性

- **核心技术栈**：Vue 3.5 + TypeScript 5.8 + Vite 6.2
- **UI 组件库**：集成 Arco Design Vue 2.57，提供丰富的高质量企业级组件
- **样式解决方案**：Tailwind CSS 4.1 + Less 预处理器，实现现代化UI设计
- **状态管理**：Pinia 3.0 提供类型安全的状态管理
- **路由系统**：Vue Router 4 支持自动路由生成，平滑过渡动画
- **自动化工具**：unplugin-auto-import 和 unplugin-vue-components 减少样板代码
- **响应式设计**：多端适配，支持移动端和桌面端
- **主题系统**：内置亮色/暗色主题切换，支持自定义主题
- **动画效果**：集成 @vueuse/motion 实现高质量页面动画与过渡
- **图标支持**：内置多种图标库(IconPark、Iconify、Lucide)，满足各种图标需求
- **编辑器集成**：支持 Markdown编辑(md-editor-v3)和富文本编辑(AIEditor)
- **图表支持**：集成 ECharts 5.6 实现数据可视化
- **开发体验**：热更新、类型提示、自动引入组件
- **配置系统**：通过 public/config.js 实现灵活的应用配置
- **SEO 优化**：优化元数据和内容结构，提高搜索引擎可见性
- **API集成**：内置 OpenAI SDK，支持 AI 功能开发
- **工具库集成**：@vueuse/core、dayjs、axios 等实用工具

## 目录结构

```
├── public              # 静态资源目录
│   ├── config.js       # 应用配置文件
│   ├── data.json       # 静态数据文件
│   └── db.csv          # CSV数据文件
├── src                 # 源代码目录
│   ├── assets          # 项目资源文件
│   │   ├── css         # 样式文件
│   │   │   ├── variables.less      # Less变量定义
│   │   │   ├── dark.less       # 深色主题样式
│   │   │   ├── light.less      # 浅色主题样式
│   │   │   ├── main.css        # 主要样式
│   │   │   ├── mobile.less     # 移动端适配样式
│   │   │   └── style.less      # 通用样式
│   │   └── js          # JavaScript 资源
│   ├── components      # 公共组件
│   │   ├── animation   # 动画相关组件
│   │   ├── IconSelector.vue    # 图标选择器组件
│   │   └── ThemeSwitch.vue     # 主题切换组件
│   ├── layouts         # 页面布局模板
│   │   ├── components          # 布局相关子组件
│   │   │   ├── Footer.vue      # 页脚组件
│   │   │   ├── Header.vue      # 页头组件
│   │   │   └── Wavebg.vue      # 波浪背景组件
│   │   ├── DefaultLayout.vue   # 默认布局模板
│   │   └── GlobalLayout.vue    # 全局布局组件
│   ├── lib             # 工具库
│   │   └── utils.ts    # 通用工具函数
│   ├── router          # 路由配置
│   │   └── index.ts    # 路由定义
│   ├── store           # 状态管理
│   │   └── theme.ts    # 主题状态管理
│   ├── styles          # 全局样式
│   ├── types           # 类型定义
│   │   ├── arco.d.ts   # Arco组件类型定义
│   │   └── global.d.ts # 全局类型定义
│   ├── utils           # 工具函数
│   │   └── iconParser.ts       # 图标解析工具
│   ├── views           # 页面视图
│   │   ├── about.vue   # 关于页面
│   │   └── index.vue   # 首页
│   ├── App.vue         # 应用入口组件
│   ├── main.ts         # 应用入口文件
│   └── vite-env.d.ts   # Vite环境类型定义
├── index.html          # HTML 模板
├── package.json        # 项目依赖配置
├── pnpm-lock.yaml      # PNPM锁文件
├── postcss.config.js   # PostCSS配置
├── tailwind.config.js  # TailwindCSS配置
├── tsconfig.json       # TypeScript配置
├── tsconfig.node.json  # 节点TypeScript配置
└── vite.config.ts      # Vite配置
```

## 安装和使用

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 9.0.0 (推荐包管理工具)

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或者使用 npm
npm install
```

### 开发服务器

```bash
# 启动开发服务器，支持主机访问
pnpm dev
```

### 构建生产版本

```bash
# 先进行TypeScript类型检查，然后构建生产版本
pnpm build
```

### 预览生产构建

```bash
# 本地预览生产构建
pnpm preview
```

## 构建与优化

本项目使用Vite 6作为构建工具，提供极速的开发体验和高效的生产构建：

- **极速开发体验**：基于ESM的开发服务器，提供快速的热更新
- **优化的构建**：使用Rollup进行生产构建，提供更小的包体积
- **代码分割**：自动分割代码，优化首屏加载时间
- **CSS优化**：使用PostCSS和Less处理样式，支持CSS模块化
- **TypeScript支持**：完整的TypeScript支持，包括类型检查和类型推断
- **静态资源处理**：智能处理图片、字体等静态资源
- **路由自动生成**：通过vite-plugin-pages自动生成基于文件系统的路由

## 配置管理

项目通过`public/config.js`文件实现灵活的配置管理，支持应用名称、图标、描述、SEO信息等基本信息的配置：

```js
window.APP_CONFIG = {
  // 应用名称
  APP_NAME: "Vue Arco Staging - 现代化前端开发脚手架",
  // 应用图标
  APP_ICON: "https://io.onenov.cn/file/202503060743023.png",
  // SEO描述
  APP_DESCRIPTION: "Vue Arco Staging是基于Vue 3、TypeScript、Vite和Arco Design的现代化前端脚手架...",
  // SEO关键词
  APP_KEYWORDS: "Vue3脚手架,TypeScript,Vite,Arco Design,Tailwind CSS,...",
  // 其他配置项...
}
```

这种配置方式允许在不重新构建应用的情况下修改应用的基本信息，特别适合部署后的配置调整。

## 工具库与生态系统

本项目集成了多种先进的工具库和生态系统，提供强大的开发能力：

### 开发效率工具

- **Vue DevTools**：通过 vite-plugin-vue-devtools 提供增强的开发调试体验
- **自动导入**：通过 unplugin-auto-import 实现 API 自动导入
- **组件自动注册**：通过 unplugin-vue-components 实现组件自动注册
- **TypeScript**：提供严格的类型检查和智能代码提示

### VueUse 和 VueHooks Plus

集成了两个强大的组合式API库：

- **@vueuse/core**：提供 200+ 实用的组合式 API
  - 状态管理：useStorage, useState, useLocalStorage
  - DOM 交互：useMouse, useScroll, useIntersectionObserver
  - 动画效果：useTransition, useMotion
  - 主题切换：useColorMode, useDark

- **vue-hooks-plus**：提供企业级的数据请求和状态管理钩子
  - 数据请求：useRequest, useLoadMore, useInfiniteScroll
  - 状态同步：useReactive, useLatest
  - 生命周期：useMount, useUnmount

### 高级功能组件

- **md-editor-v3**：功能完备的Markdown编辑器
- **aieditor**：AI增强的富文本编辑器
- **echarts**：专业的数据可视化图表库
- **openai**：集成OpenAI SDK，支持AI功能开发

### UI与样式增强

- **Tailwind CSS 4**：最新版原子化CSS框架
- **class-variance-authority**：类型安全的UI变体管理
- **tailwind-merge**：智能合并Tailwind类名
- **FlyonUI**：提供额外的UI组件支持
- **Arco Design**：全面的企业级UI组件库

## Lighthouse

![Lighthouse性能评分截图](https://io.onenov.cn/file/202503060753605.png)

## 贡献指南

如果您想为此项目做出贡献，请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交您的更改 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 打开一个 Pull Request

## 许可证

本项目基于 MIT 许可证发布 - 查看 [LICENSE](./LICENSE) 文件了解更多细节。