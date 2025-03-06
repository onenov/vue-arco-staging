<template>
  <div class="app">
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script setup lang="ts">
// App.vue作为应用根组件，使用router-view渲染当前路由组件
</script>

<style>
/* 高斯模糊过渡动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  width: 100%;
}

.page-enter-from {
  opacity: 0;
  filter: blur(20px);
  /* transform: scale(1.05); */
}

.page-leave-to {
  opacity: 0;
  filter: blur(20px);
  /* transform: scale(0.95); */
}

/* Safari 兼容性 */
@supports (-webkit-backdrop-filter: none) {
  .page-enter-from,
  .page-leave-to {
    -webkit-filter: blur(20px);
  }
}


</style>
