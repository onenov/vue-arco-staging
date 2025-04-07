import '@vue/runtime-core'
import type { App } from 'vue'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $message: any;
    $notification: any;
    $modal: any;
  }
}

declare module '@arco-design/web-vue' {
  const ArcoVue: {
    install: (app: App) => void;
  }
  export default ArcoVue;
}

declare module '@arco-design/web-vue/es/icon' {
  const ArcoVueIcon: {
    install: (app: App) => void;
  }
  export default ArcoVueIcon;
}
