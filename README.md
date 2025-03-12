<div align="center">

  <a href="https://vas.orence.net" target="_blank">
    <img alt="Logo" width="200" src="https://io.onenov.cn/file/202503060756982.png"/>
  </a>

</div>

<div align="center">
  <h1>Vue Arco Project</h1>
</div>

<div align="center">

一个基于 Vue 3、TypeScript、Vite 和 Arco Design 组件库的现代化前端项目模板。该项目集成了当前流行的前端技术栈，提供了一个开箱即用的开发环境，帮助您快速构建高质量的Web应用。

[![爱发电](https://afdian.moeci.com/13/badge.svg)](https://afdian.com/@orence)

<a href="./README.md"><img alt="简体中文版自述文件" src="https://img.shields.io/badge/简体中文-d9d9d9"></a>
<a href="./README_EN.md"><img alt="README in English" src="https://img.shields.io/badge/English-d9d9d9"></a>

</div>

![screenshot](https://io.onenov.cn/file/202503060754949.png)

## 主要特性

- **现代化技术栈**：Vue 3 + TypeScript + Vite
- **UI 组件库**：集成 Arco Design Vue，提供丰富的高质量组件
- **CSS 框架**：TailwindCSS 与 Arco Design 完美结合，实现快速样式开发
- **状态管理**：使用 Pinia 进行状态管理
- **路由管理**：Vue Router 负责视图导航并支持平滑过渡动画
- **样式解决方案**：支持 Less 预处理器和 TailwindCSS 工具类
- **自动导入**：配置 unplugin-auto-import 减少手动导入代码
- **响应式设计**：适配各种屏幕尺寸的设备
- **主题切换**：支持亮色/暗色主题模式
- **配置管理**：通过 public/config.js 实现灵活的应用配置管理
- **平滑动画效果**：集成 @vueuse/motion 实现高质量页面过渡动画
- **国际化支持**：内置 Google Translate 实现快速多语言切换
- **开发体验**：热更新、类型提示、智能导入
- **静态构建优化**：纯静态打包，优化资源加载速度和体积
- **SEO 友好**：优化搜索引擎收录
- **组合式 API 增强**：集成 @vueuse/core 提供丰富的组合式函数
- **代码规范**：集成 ESLint 和 Prettier 确保代码质量和一致性

## 目录结构

```
├── dist                # 构建输出目录
├── public              # 静态资源目录
│   └── config.js       # 应用配置文件
├── src                 # 源代码目录
│   ├── assets          # 项目资源文件
│   │   ├── js          # JavaScript 资源
│   │   └── style       # 样式文件
│   ├── components      # 公共组件
│   │   └── layout      # 布局相关组件
│   ├── layouts         # 页面布局模板
│   ├── router          # 路由配置
│   ├── store           # 状态管理
│   ├── utils           # 工具函数
│   ├── views           # 页面视图
│   ├── App.vue         # 应用入口组件
│   ├── main.ts         # 应用入口文件
│   └── tailwind.css    # TailwindCSS 样式
├── index.html          # HTML 模板
├── package.json        # 项目依赖配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── tailwind.config.js  # TailwindCSS 配置
```

## 安装和使用

### 环境要求

- Node.js >= 16.0.0
- npm 或 pnpm

### 安装依赖

```bash
# 推荐使用 pnpm
pnpm install

# 或者使用 npm
npm install
```

### 开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 构建优化

项目配置了高效的静态资源构建优化，具体包括：

- **代码分割**：自动将第三方库（如Vue、Arco Design等）分离打包，优化首屏加载时间
- **资源压缩**：使用ESBuild进行代码压缩，减小最终打包体积
- **静态资源优化**：自动处理图片、字体等静态资源，按类型分目录存放
- **构建分析**：支持通过`pnpm build:analyze`命令分析构建产物的体积构成
- **Gzip 压缩**：通过 vite-plugin-compression 自动生成静态资源的 gzip 压缩版本
- **打包分析**：集成 rollup-plugin-visualizer 提供详细的构建产物分析报告

## 国际化支持

项目集成了Google Translate提供的翻译功能，支持多达15种语言：

- 简体中文
- 英语
- 日语
- 韩语
- 法语
- 德语
- 西班牙语
- 意大利语
- 葡萄牙语
- 俄语
- 阿拉伯语
- 荷兰语
- 瑞典语
- 泰语
- 越南语

用户可以通过网页右下角的语言选择器快速切换语言，无需刷新页面即可实时翻译内容。

## 配置管理

项目通过`public/config.js`文件实现灵活的配置管理，支持应用名称、图标、描述等基本信息的配置：

```js
window.APP_CONFIG = {
  APP_NAME: 'Vue Arco Project',
  APP_LOGO: 'https://example.com/logo.png',
  // 更多配置项...
}
```

## 开发工具集成

项目集成了丰富的开发工具提升开发体验：

### Vue DevTools

通过 vite-plugin-vue-devtools 提供增强的 Vue 开发工具，可直接在浏览器中进行组件检查、状态管理等操作。

### VueUse

集成 @vueuse/core，提供 100+ 即用型的组合式 API，包括：

- 状态管理：useStorage, useState, useLocalStorage
- DOM 操作：useMouse, useScroll, useWindowSize
- 传感器：useDeviceOrientation, useGeolocation
- 动画与时间：useTransition, useTimeAgo
- UI 相关：useColorMode, useDark
- 网络：useFetch, useWebSocket

### 代码质量工具

- **ESLint**：代码规范检查，确保代码质量
- **Prettier**：代码格式化，保持代码风格一致性
- **TypeScript**：类型检查，提供更好的代码提示和错误预防

### Markdown 支持

集成 md-editor-v3，提供 Markdown 编辑和预览功能，适合文档编写和内容管理。

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
