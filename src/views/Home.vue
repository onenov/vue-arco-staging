<template>
  <DefaultLayout>
      <!-- 使用Welcome组件 -->
      <Welcome />

  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Welcome from '@/components/Welcome.vue';

import { onMounted, ref } from 'vue';

onMounted(() => {
  // 页面加载后的处理逻辑
  console.log('首页已加载');
});
</script>

<style scoped lang="less">

</style>
