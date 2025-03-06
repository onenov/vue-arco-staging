<template>
    <div id="wave-box" class="wave-bg"></div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, ref, shallowRef, watch } from 'vue';
import { useThemeStore } from '@/store';

// 获取主题状态
const themeStore = useThemeStore();

// 波浪背景实例
const waveBg = shallowRef(null);

// 浅色模式颜色
const lightColors = ["#B69FD5", "#DBC2EE", "#F4DAF9", "#FFECE9", "#F9D7E2", "#FEC5D8"];

// 深色模式颜色
const darkColors = ["#212832", "#3F4659", "#131a25", "#3c4772", "#212832", "#3F4659"];

// 初始化波浪背景
const initWaveBg = async () => {
    try {
        // 动态导入ChaosWavesBg模块
        const Color4Bg = await import('@/assets/js/ChaosWavesBg.module.js');

        // 如果实例存在，销毁实例
        if (waveBg.value && typeof waveBg.value.destroy === 'function') {
            waveBg.value.destroy();
            waveBg.value = null;
        }
        
        // 根据当前主题选择颜色
        const colors = themeStore.isDark ? darkColors : lightColors;
        
        // 创建波浪背景实例
        waveBg.value = new Color4Bg.ChaosWavesBg({
            dom: "wave-box",
            colors,
            loop: true
        });
        
        console.log('初始化背景:', { 当前主题: themeStore.isDark ? '深色' : '浅色', colors });
    } catch (error) {
        console.error('加载波浪背景失败:', error);
    }
};

// 在组件挂载后初始化波浪背景
onMounted(() => {
    themeStore.initTheme();
    initWaveBg();
});

// 监听主题变化
watch(() => themeStore.isDark, (newIsDark) => {
    console.log('主题变化:', { newIsDark });
    // 在主题变化时重新初始化背景
    initWaveBg();
});

// 在组件卸载前销毁波浪背景实例
onUnmounted(() => {
    if (waveBg.value && typeof waveBg.value.destroy === 'function') {
        waveBg.value.destroy();
    }
    waveBg.value = null;
});
</script>

<style scoped lang="less">
.wave-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
}
</style>