<template>
  <DefaultLayout>
    <div class="flex flex-col items-center justify-center py-12 h-full">
      <img class="absolute left-1/2 transform -translate-x-1/2 bottom-0"
        src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/elements/http-codes/radial3.svg"
        alt="" />
      <div class="relative z-10 container mx-auto px-4">

        <img class="mb-11 mx-auto"
          src="https://static.shuffle.dev/components/preview/50e32942-5c63-4bbb-9aef-39b50e576581/assets/public/gradia-assets/elements/http-codes/sad.svg"
          alt="" />
        <div class="md:max-w-xl mx-auto mb-12">
          <h2
            class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent text-center">
            Oh no! The
            page
            does not exist.</h2>
        </div>
        <div class="group relative md:max-w-max mx-auto flex items-center justify-center">
          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-green opacity-0 group-hover:opacity-50 rounded-lg transition ease-out duration-300 mx-auto">
          </div>
          <button
            class="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold group"
            @click="backToHome" type="button">
            <div
              class="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#000000"></path>
              </svg>
            </div>
            <p class="translate-x-2 text-lg">Go Back</p>
          </button>
        </div>
      </div>

    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function backToHome() {
  router.push('/');
}
</script>

<style scoped lang="less"></style>
