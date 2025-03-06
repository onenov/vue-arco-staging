import { defineStore } from 'pinia';

// 创建一个接口来定义应用配置的类型
interface AppConfig {
  APP_NAME: string;
  APP_LOGO: string;
  APP_ICON: string;
  APP_TITLE: string;
  APP_SUB_TITLE: string;
  APP_DESCRIPTION: string;
  APP_KEYWORDS: string;
  FOOTER_COPYRIGHT: string;
  ICP_RECORD: string;
  FOOTER__DESCRIPTION: string;
  APP_VERSION: string;
}

// 定义一个默认配置，用于初始化或回退
const defaultConfig: AppConfig = {
  APP_NAME: '',
  APP_LOGO: '',
  APP_ICON: '',
  APP_TITLE: '',
  APP_SUB_TITLE: '',
  APP_DESCRIPTION: '',
  APP_KEYWORDS: '',
  FOOTER_COPYRIGHT: '',
  ICP_RECORD: '',
  FOOTER__DESCRIPTION: '',
  APP_VERSION: ''
};

// 声明一个全局的 window 接口，使得 TypeScript 知道 window.APP_CONFIG 存在
declare global {
  interface Window {
    APP_CONFIG?: AppConfig;
  }
}

// 创建并导出配置 store
export const useConfigStore = defineStore('config', {
  // 初始状态
  state: () => ({
    config: window.APP_CONFIG || defaultConfig,
    isLoaded: !!window.APP_CONFIG
  }),
  
  // getters
  getters: {
    // 获取完整配置
    getConfig: (state) => state.config,
    
    // 获取特定配置项的便捷方法
    appName: (state) => state.config.APP_NAME,
    appLogo: (state) => state.config.APP_LOGO,
    appIcon: (state) => state.config.APP_ICON,
    appTitle: (state) => state.config.APP_TITLE,
    appSubTitle: (state) => state.config.APP_SUB_TITLE,
    appDescription: (state) => state.config.APP_DESCRIPTION,
    appKeywords: (state) => state.config.APP_KEYWORDS,
    footerCopyright: (state) => state.config.FOOTER_COPYRIGHT,
    icpRecord: (state) => state.config.ICP_RECORD,
    publicSecurityFilingNumber: (state) => state.config.FOOTER__DESCRIPTION,
    appVersion: (state) => state.config.APP_VERSION
  },
  
  // actions
  actions: {
    // 从 window.APP_CONFIG 加载配置
    loadConfig() {
      if (window.APP_CONFIG) {
        this.config = { ...defaultConfig, ...window.APP_CONFIG };
        this.isLoaded = true;
      }
    },
    
    // 动态更新某个配置项
    updateConfig(key: keyof AppConfig, value: string) {
      if (this.config) {
        this.config[key] = value;
      }
    },
    
    // 使用新配置对象替换整个配置
    setConfig(newConfig: Partial<AppConfig>) {
      this.config = { ...this.config, ...newConfig };
    },
    
    // 重置为默认配置
    resetConfig() {
      this.config = { ...defaultConfig };
    }
  }
});
