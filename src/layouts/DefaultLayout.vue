<template>
  <!-- 默认布局容器，使用flexbox实现全屏垂直布局 -->
  <div class="default-layout h-screen flex flex-col">
    <!-- 顶部导航栏容器，固定在顶部 -->
    <div class="fixed top-0 left-0 right-0 z-50 header-blur">
      <LayoutHeader />
    </div>
    <Wavebg />
    <!-- 主要内容区域，使用flex-grow自动填充剩余空间 -->
    <main class="flex-grow overflow-auto">
      <!-- 插槽：用于接收父组件传入的内容 -->
      <slot></slot>

    </main>
  </div>
</template>

<script setup lang="ts">
// 导入布局相关组件
import LayoutHeader from '@/components/layout/Header.vue';
import Wavebg from '@/components/Wavebg.vue';
</script>

<style scoped lang="less">
</style>