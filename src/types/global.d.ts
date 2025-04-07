// 全局类型声明文件

// 声明APP_CONFIG的类型
interface AppConfig {
  APP_NAME: string;
  APP_ICON: string;
  APP_DESCRIPTION: string;
  APP_KEYWORDS: string;
  APP_VERSION: string;
  FOOTER_COPYRIGHT: string;
  AUTHOR_NAME: string;
  AUTHOR_CONTACT_IMAGE: string;
  ICP_RECORD: string;
  FOOTER_DESCRIPTION: string;
  FOOTER_DESCRIPTION_URL: string;
}

// 扩展Window接口，添加全局APP_CONFIG属性
declare interface Window {
  APP_CONFIG: AppConfig;
}

// 确保TypeScript将此文件视为模块
export {};
