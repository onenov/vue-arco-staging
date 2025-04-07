<template>
  <div class="global-layout">
    <router-view v-slot="{ Component, route }">
      <transition name="blur" mode="out-in">
        <div :key="route.path">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </div>
</template>

<style>
/* 改为全局样式或深度选择器 */
.blur-enter-active,
.blur-leave-active {
  transition: filter 0.3s ease, opacity 0.3s ease;
}
.blur-enter-from,
.blur-leave-to {
  filter: blur(10px);
  opacity: 0;
}
</style>
