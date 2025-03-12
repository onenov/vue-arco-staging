<div align="center">

  <a href="https://vas.orence.net" target="_blank">
    <img alt="Logo" width="200" src="https://io.onenov.cn/file/202503060756982.png"/>
  </a>

</div>

<div align="center">
  <h1>Vue Arco Project</h1>
</div>

<div align="center">

A modern front-end project template based on Vue 3, TypeScript, Vite, and Arco Design component library. This project integrates popular front-end technology stacks, providing an out-of-the-box development environment to help you quickly build high-quality web applications.

[![Afdian](https://afdian.moeci.com/13/badge.svg)](https://afdian.com/@orence)

<a href="./README.md"><img alt="README in Chinese" src="https://img.shields.io/badge/u7b80u4f53u4e2du6587-d9d9d9"></a>
<a href="./README_EN.md"><img alt="English" src="https://img.shields.io/badge/English-d9d9d9"></a>


</div>

![screenshot](https://io.onenov.cn/file/202503060754949.png)

## Key Features

- **Modern Technology Stack**: Vue 3 + TypeScript + Vite
- **UI Component Library**: Integrated Arco Design Vue, providing a rich set of high-quality components
- **CSS Framework**: Perfect combination of TailwindCSS and Arco Design for rapid style development
- **State Management**: Using Pinia for state management
- **Routing**: Vue Router for view navigation with smooth transition animations
- **Style Solutions**: Support for Less preprocessor and TailwindCSS utility classes
- **Auto Import**: Configured unplugin-auto-import to reduce manual imports
- **Responsive Design**: Adapts to devices with various screen sizes
- **Theme Switching**: Support for light/dark theme modes
- **Configuration Management**: Flexible application configuration management via public/config.js
- **Smooth Animation Effects**: Integrated @vueuse/motion for high-quality page transition animations
- **Internationalization**: Built-in Google Translate for quick multi-language switching
- **Development Experience**: Hot updates, type hints, intelligent imports
- **Static Build Optimization**: Pure static packaging, optimizing resource loading speed and volume
- **SEO Friendly**: Optimized for search engine indexing
- **Composition API Enhancement**: Integrated @vueuse/core providing rich composable functions
- **Code Standards**: Integrated ESLint and Prettier to ensure code quality and consistency

## Directory Structure

```
u251cu2500u2500 dist                # Build output directory
u251cu2500u2500 public              # Static resource directory
u2502   u2514u2500u2500 config.js       # Application configuration file
u251cu2500u2500 src                 # Source code directory
u2502   u251cu2500u2500 assets          # Project resource files
u2502   u2502   u251cu2500u2500 js          # JavaScript resources
u2502   u2502   u2514u2500u2500 style       # Style files
u2502   u251cu2500u2500 components      # Public components
u2502   u2502   u2514u2500u2500 layout      # Layout-related components
u2502   u251cu2500u2500 layouts         # Page layout templates
u2502   u251cu2500u2500 router          # Routing configuration
u2502   u251cu2500u2500 store           # State management
u2502   u251cu2500u2500 utils           # Utility functions
u2502   u251cu2500u2500 views           # Page views
u2502   u251cu2500u2500 App.vue         # Application entry component
u2502   u251cu2500u2500 main.ts         # Application entry file
u2502   u2514u2500u2500 tailwind.css    # TailwindCSS styles
u251cu2500u2500 index.html          # HTML template
u251cu2500u2500 package.json        # Project dependency configuration
u251cu2500u2500 tsconfig.json       # TypeScript configuration
u251cu2500u2500 vite.config.ts      # Vite configuration
u2514u2500u2500 tailwind.config.js  # TailwindCSS configuration
```

## Installation and Usage

### Environment Requirements

- Node.js >= 16.0.0
- npm or pnpm

### Installing Dependencies

```bash
# Recommended to use pnpm
pnpm install

# Or using npm
npm install
```

### Development Server

```bash
pnpm dev
```

### Building for Production

```bash
pnpm build
```

### Previewing Production Build

```bash
pnpm preview
```

## Build Optimization

The project is configured with efficient static resource build optimizations, including:

- **Code Splitting**: Automatically separates third-party libraries (such as Vue, Arco Design, etc.) for optimized first-screen loading time
- **Resource Compression**: Uses ESBuild for code compression, reducing the final package size
- **Static Resource Optimization**: Automatically processes images, fonts, and other static resources, organizing them by type
- **Build Analysis**: Supports analyzing the build product volume composition via the `pnpm build:analyze` command
- **Gzip Compression**: Automatically generates gzip compressed versions of static resources via vite-plugin-compression
- **Bundle Analysis**: Integrated rollup-plugin-visualizer providing detailed build output analysis reports

## Internationalization Support

The project integrates Google Translate to provide translation functionality for up to 15 languages:

- Simplified Chinese
- English
- Japanese
- Korean
- French
- German
- Spanish
- Italian
- Portuguese
- Russian
- Arabic
- Dutch
- Swedish
- Thai
- Vietnamese

Users can quickly switch languages through the language selector in the bottom right corner of the page, with real-time translation of content without refreshing the page.

## Configuration Management

The project implements flexible configuration management through the `public/config.js` file, supporting configuration of basic information such as application name, icon, and description:

```js
window.APP_CONFIG = {
  APP_NAME: 'Vue Arco Project',
  APP_LOGO: 'https://example.com/logo.png',
  // More configuration items...
}
```

## Development Tools Integration

The project integrates rich development tools to enhance the development experience:

### Vue DevTools

Enhanced Vue development tools via vite-plugin-vue-devtools, allowing component inspection, state management, and more directly in the browser.

### VueUse

Integrated @vueuse/core, providing 100+ ready-to-use composition API functions, including:

- State management: useStorage, useState, useLocalStorage
- DOM operations: useMouse, useScroll, useWindowSize
- Sensors: useDeviceOrientation, useGeolocation
- Animation and time: useTransition, useTimeAgo
- UI related: useColorMode, useDark
- Network: useFetch, useWebSocket

### Code Quality Tools

- **ESLint**: Code standard checking to ensure code quality
- **Prettier**: Code formatting to maintain consistent code style
- **TypeScript**: Type checking, providing better code hints and error prevention

### Markdown Support

Integrated md-editor-v3, providing Markdown editing and preview functionality, suitable for document writing and content management.

## Lighthouse

![Lighthouse performance score screenshot](https://io.onenov.cn/file/202503060753605.png)

## Contribution Guidelines

If you would like to contribute to this project, please follow these steps:

1. Fork this repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License

This project is released under the MIT License - see the [LICENSE](./LICENSE) file for details.
