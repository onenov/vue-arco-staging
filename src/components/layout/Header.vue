<template>
  <header class="w-full">
    <a-page-header class="page-header" :title="configStore.config.APP_TITLE"
      :subtitle="configStore.config.APP_SUB_TITLE" :show-back="false">
      <template #title>

        <router-link to="/" class="flex items-center">
          <img class="w-8 h-auto mr-2" :src="configStore.config.APP_LOGO" alt="logo" draggable="false" />
          <span>{{ configStore.config.APP_TITLE }}</span>
        </router-link>
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
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useConfigStore } from '@/store';
import ThemeSwitch from '@/components/ThemeSwitch.vue';

const configStore = useConfigStore();
configStore.loadConfig();
</script>

<style scoped lang="less">
.page-header {
  transition: all 0.2s ease;
}
</style>
