<template>
  <header class="w-full z-99">
    <a-page-header class="page-header" :title="appConfig.APP_NAME" :show-back="false">
      <template #title>
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img class="w-8 h-auto mr-2" :src="appConfig.APP_ICON" alt="logo" draggable="false" />
            <span>{{ appConfig.APP_NAME }}</span>
          </router-link>
        </div>
      </template>
      <template #extra>
        <a-space>
          <theme-switch />
          <router-link to="/about">
            <a-button type="secondary" shape="circle" size="small">
              <template #icon>
                <icon-question-circle />
              </template>
            </a-button>
          </router-link>
        </a-space>
      </template>
    </a-page-header>
  </header>
</template>

<script setup lang="ts">
// 引入全局配置
const appConfig = window.APP_CONFIG as any;

defineOptions({
  name: 'Header'
})
</script>

<style scoped lang="less">
.page-header {
  transition: all 0.2s ease;
}
</style>
