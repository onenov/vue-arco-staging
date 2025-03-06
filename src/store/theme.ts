import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    isDark: false,
    initialized: false,
    followSystem: false, // 新增：是否跟随系统主题设置
  }),

  actions: {
    // 初始化主题
    initTheme() {
      if (this.initialized) return;

      // 首先从 localStorage 中读取用户偏好设置
      const storedTheme = localStorage.getItem("arco-theme");
      const followSystemSetting = localStorage.getItem("arco-theme-follow-system");
      
      // 系统预设主题检测
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // 设置是否跟随系统
      this.followSystem = followSystemSetting === "true" || followSystemSetting === null;
      
      // 确定当前主题
      if (this.followSystem) {
        // 跟随系统设置
        this.isDark = prefersDark;
      } else {
        // 使用用户存储的设置
        this.isDark = storedTheme === "dark";
      }

      // 应用主题
      this.applyTheme();

      // 设置初始化完成
      this.initialized = true;

      // 监听系统主题变化
      this.listenForThemeChanges();
    },

    // 切换主题
    toggleTheme() {
      this.isDark = !this.isDark;
      this.followSystem = false; // 手动切换时关闭跟随系统
      this.applyTheme();
    },

    // 设置主题
    setTheme(dark: boolean) {
      this.isDark = dark;
      this.followSystem = false; // 手动设置时关闭跟随系统
      this.applyTheme();
    },

    // 设置是否跟随系统主题
    setFollowSystem(follow: boolean) {
      this.followSystem = follow;
      if (follow) {
        // 如果开启跟随系统，立即应用系统主题
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.isDark = prefersDark;
      }
      this.applyTheme();
    },

    // 应用主题到 DOM
    applyTheme() {
      if (this.isDark) {
        document.body.setAttribute("arco-theme", "dark");
      } else {
        document.body.removeAttribute("arco-theme");
      }
      
      // 保存主题设置和跟随系统设置
      localStorage.setItem("arco-theme", this.isDark ? "dark" : "light");
      localStorage.setItem("arco-theme-follow-system", this.followSystem.toString());
    },

    // 监听系统主题变化
    listenForThemeChanges() {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          // 只有开启跟随系统时才自动调整主题
          if (this.followSystem) {
            this.isDark = e.matches;
            this.applyTheme();
          }
        });
    },
  },
});
