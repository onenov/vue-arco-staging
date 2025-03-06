<template>
  <a-button type="secondary" shape="circle" @click="cycleTheme" size="small">
    <template #icon>
      <!-- 跟随系统图标 -->
      <icon-face-smile-fill v-if="themeStore.followSystem" />
      <!-- 深色模式图标 -->
      <icon-moon-fill v-else-if="themeStore.isDark" />
      <!-- 浅色模式图标 -->
      <icon-sun-fill v-else />
    </template>
  </a-button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useThemeStore } from '@/store';
import { Message } from '@arco-design/web-vue';

// 使用主题存储
const themeStore = useThemeStore();

// 系统主题变化事件处理函数
const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  if (themeStore.followSystem) {
    // 在跟随系统模式下，当系统主题变化时显示通知
    const newMode = e.matches ? '深色' : '浅色';
    Message.info(`系统主题已切换为${newMode}模式`);
  }
};

// 切换主题模式
const cycleTheme = () => {
  // 当前是跟随系统
  if (themeStore.followSystem) {
    // 切换到深色模式
    themeStore.setFollowSystem(false);
    themeStore.setTheme(true);
    Message.success('已切换为深色模式');
  }
  // 当前是深色模式
  else if (themeStore.isDark) {
    // 切换到浅色模式
    themeStore.setFollowSystem(false);
    themeStore.setTheme(false);
    Message.success('已切换为浅色模式');
  }
  // 当前是浅色模式
  else {
    // 切换到跟随系统
    themeStore.setFollowSystem(true);
    Message.success('已切换为跟随系统模式');
  }
};

// 组件挂载时初始化主题
onMounted(() => {
  themeStore.initTheme();

  // 添加系统主题变化监听器
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", handleSystemThemeChange);
});

// 组件卸载时移除监听器，防止内存泄漏
onUnmounted(() => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .removeEventListener("change", handleSystemThemeChange);
});
</script>

<style scoped lang="less"></style>
