<template>
  <DefaultLayout>
    <div class="flex flex-col items-center justify-center h-full">
      <div class="my-auto mx-auto px-4">
        <div class="flex flex-wrap -m-4 mb-16">
          <div class="w-full lg:w-1/3 p-4">
            <img class="rounded-2xl object-cover w-full" style="height:335px;"
              src="https://io.onenov.cn/file/202503060527317.png" alt="">
          </div>
          <div class="w-full lg:w-2/3 p-4">
            <img class="rounded-2xl object-cover w-full" style="height:422px;"
              src="https://io.onenov.cn/file/202503060523250.png" alt="">
          </div>
        </div>
        <div class="flex flex-wrap -m-4 text-color">
          <div class="w-full lg:w-1/3 p-4">
            <p class="tracking-tight mb-4">Vue3 + TypeScript + Vite</p>
            <span class="tracking-tight font-heading text-4xl md:text-5xl font-medium">构建工具</span>
          </div>
          <div class="w-full lg:w-2/3 p-4">
            <div class="flex flex-wrap -m-4">
              <div class="w-full lg:w-1/2 p-4">
                <div class="pt-6 border-t border-black">
                  <p class="text-xl font-medium">让Web开发再次变得简单</p>
                  <p class="text-lg mt-6">Vite 是一个极快的前端构建工具，为下一代 Web 应用程序提供支持。</p>
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-4">
                <div class="pt-6 border-t border-black">
                  <p class="text-xl font-medium">为您最喜欢的框架和工具提供支持</p>
                  <p class="text-lg mt-6">集成了当前流行的前端技术栈，提供了一个开箱即用的开发环境，帮助您快速构建高质量的Web应用。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style scoped lang="less"></style>
