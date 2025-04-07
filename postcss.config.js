export default {
  plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
  },
  // 忽略警告配置
  hideNothingWarning: true,
  // 禁用关于@import位置的警告
  lint: {
    disablePlugins: ['postcss-import-order'],
    // 或使用下面的方式忽略特定规则
    // quiet: true
  }
};