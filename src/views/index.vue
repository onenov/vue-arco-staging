<template>
    <DefaultLayout>
        <div class="w-full h-full">
            <div class="container mx-auto relative pt-12 text-black dark:text-white">

                <!-- Hero -->
                <div
                    class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-no-repeat before:bg-top before:size-full before:-z-1 before:transform before:-translate-x-1/2">
                    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                        <!-- Announcement Banner -->
                        <div class="flex justify-center" v-motion :initial="{ opacity: 0, y: -20 }"
                            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
                            <a class="inline-flex items-center gap-x-2 border border-gray-200 text-xs p-2 px-3 rounded-full transition hover:border-gray-300 focus:outline-hidden focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
                                href="https://vite.dev/" target="_blank">
                                Vite 是一个极快的前端构建工具，为下一代 Web 应用程序提供支持。
                                <span class="flex items-center gap-x-1">
                                    <span
                                        class="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500 dark:border-neutral-700">了解更多</span>
                                    <svg class="shrink-0 size-4 text-blue-600" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <!-- End Announcement Banner -->

                        <!-- Title -->
                        <div class="mt-5 text-center mx-auto" v-motion :initial="{ opacity: 0, y: 40 }"
                            :enter="{ opacity: 1, y: 0, transition: { delay: 300, duration: 700 } }">
                            <div
                                class="block font-bold text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200 text-blue-600 dark:text-sky-400">
                                Vue3 TypeScript Vite Project
                            </div>
                        </div>
                        <!-- End Title -->

                        <div class="mt-5 max-w-3xl text-center mx-auto mt-10" v-motion :initial="{ opacity: 0 }"
                            :enter="{ opacity: 1, transition: { delay: 500, duration: 800 } }">
                            <p class="text-lg">基于 Vue 3、TypeScript、Vite 和 Arco
                                Design 组件库的现代化前端项目模板。该项目集成了当前流行的前端技术栈，提供了一个开箱即用的开发环境，帮助您快速构建高质量的Web应用。</p>
                        </div>

                        <!-- Buttons -->
                        <div class="mt-8 gap-3 flex justify-center" v-motion :initial="{ opacity: 0, scale: 0.9 }"
                            :enter="{ opacity: 1, scale: 1, transition: { delay: 700, duration: 500 } }">
                            <a class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-hidden focus:from-violet-600 focus:to-blue-600 border border-transparent text-white text-base font-medium rounded-xl py-3 px-4"
                                href="https://github.com/onenov/vue-arco-staging" target="_blank">
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                                Github
                            </a>
                        </div>
                        <!-- End Buttons -->
                    </div>
                </div>
                <!-- End Hero -->

                <!-- Icon Blocks -->
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-motion
                    :initial="{ opacity: 0, y: 60 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
                        <!-- Icon Block -->
                        <a class="group flex flex-col justify-center hover:!bg-gray-50 focus:outline-hidden focus:!bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:!bg-neutral-800 dark:focus:!bg-neutral-800"
                            href="https://vuejs.org/" target="_blank" v-motion :initial="{ opacity: 0, x: -40 }"
                            :enter="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }">
                            <div class="flex justify-center items-center size-14 bg-green-100 rounded-xl">
                                <img src="https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg"
                                    class="shrink-0 size-6 text-white w-12 h-12 rounded-xl" />
                            </div>
                            <div class="mt-5">
                                <div class="group-hover: text-lg font-semibold  dark:group-hover:text-gray-400">
                                    Vue3</div>
                                <p class="mt-1 ">Vue3 是一个渐进式 JavaScript 框架，用于构建用户界面。
                                </p>
                                <span
                                    class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <a class="group flex flex-col justify-center hover:!bg-gray-50 focus:outline-hidden focus:!bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:!bg-neutral-800 dark:focus:!bg-neutral-800"
                            href="https://vitejs.dev/" target="_blank" v-motion :initial="{ opacity: 0, x: -40 }"
                            :enter="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }">
                            <div class="flex justify-center items-center size-14 bg-purple-100 rounded-xl">
                                <img src="https://logosandtypes.com/wp-content/uploads/2024/10/vitejs.svg"
                                    class="shrink-0 size-6 text-white w-12 h-12 rounded-xl" />
                            </div>
                            <div class="mt-5">
                                <div class="group-hover: text-lg font-semibold  dark:group-hover:text-gray-400">
                                    Vite</div>
                                <p class="mt-1 ">Vite 是一个基于 ES 模块的前端构建工具，快速开发和高效构建。
                                </p>
                                <span
                                    class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <a class="group flex flex-col justify-center hover:!bg-gray-50 focus:outline-hidden focus:!bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:!bg-neutral-800 dark:focus:!bg-neutral-800"
                            href="https://typescriptlang.org/" target="_blank" v-motion
                            :initial="{ opacity: 0, x: -40 }"
                            :enter="{ opacity: 1, x: 0, transition: { delay: 600, duration: 800 } }">
                            <div class="flex justify-center items-center size-14 bg-blue-100 rounded-xl">
                                <img src="https://io.onenov.cn/file/202503060542821.png"
                                    class="shrink-0 size-6 text-white w-12 h-12 rounded-xl" />
                            </div>
                            <div class="mt-5">
                                <div class="group-hover: text-lg font-semibold  dark:group-hover:text-gray-400">
                                    TypeScript</div>
                                <p class="mt-1 ">TypeScript提供类型安全，减少开发错误。</p>
                                <span
                                    class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                        <!-- End Icon Block -->

                        <!-- Icon Block -->
                        <a class="group flex flex-col justify-center hover:!bg-gray-50 focus:outline-hidden focus:!bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:!bg-neutral-800 dark:focus:!bg-neutral-800"
                            href="https://pinia.vuejs.org/zh/core-concepts/" target="_blank" v-motion
                            :initial="{ opacity: 0, x: -40 }"
                            :enter="{ opacity: 1, x: 0, transition: { delay: 700, duration: 800 } }">
                            <div class="flex justify-center items-center size-14 bg-yellow-100 rounded-xl">
                                <img src="https://io.onenov.cn/file/202503060543106.svg"
                                    class="shrink-0 size-6 text-white w-12 h-12" />
                            </div>
                            <div class="mt-5">
                                <div class="group-hover: text-lg font-semibold  dark:group-hover:text-gray-400">
                                    Pinia</div>
                                <p class="mt-1 ">Pinia是Vue官方推荐的状态管理库，轻量且功能强大。</p>
                                <span
                                    class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                        <!-- End Icon Block -->
                    </div>
                </div>
                <!-- End Icon Blocks -->

                <!-- Card Blog -->
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-motion
                    :initial="{ opacity: 0, y: 80 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                    <!-- Grid -->
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Card -->
                        <a class="group flex flex-col focus:outline-hidden" href="https://cn.vuejs.org/" target="_blank"
                            v-motion :initial="{ opacity: 0, scale: 0.9 }"
                            :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }">
                            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://io.onenov.cn/file/202503060523934.png" alt="Blog Image">
                                <span
                                    class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-green-600 text-white py-1.5 px-3 dark:bg-neutral-900">
                                    VUE 3
                                </span>
                            </div>

                            <div class="mt-7">
                                <div class="text-xl font-bold sm:text-3xl dark:text-neutral-200" v-motion
                                    :initial="{ opacity: 0, x: 40 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    Vue 3 组件化开发
                                </div>
                                <p class="mt-3 text-base dark:text-neutral-200" v-motion
                                    :initial="{ opacity: 0, x: 60 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    Vue 3采用组件化构建用户界面，每个组件拥有独立的模板、JavaScript逻辑和CSS样式，便于维护和复用。
                                </p>
                                <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500"
                                    v-motion :initial="{ opacity: 0, x: 80 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                        </a>
                        <!-- End Card -->

                        <!-- Card -->
                        <a class="group flex flex-col focus:outline-hidden"
                            href="https://pinia.vuejs.org/zh/introduction.html" target="_blank" v-motion
                            :initial="{ opacity: 0, scale: 0.9 }"
                            :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }">
                            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                                    src="https://io.onenov.cn/file/202503060524109.png" alt="Blog Image">
                            </div>

                            <div class="mt-7">
                                <div class="text-xl font-bold sm:text-3xl dark:text-neutral-200" v-motion
                                    :initial="{ opacity: 0, x: 40 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    响应式状态管理
                                </div>
                                <p class="mt-3 text-base dark:text-neutral-200" v-motion
                                    :initial="{ opacity: 0, x: 60 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    使用Vue 3的Composition API和Pinia状态管理库，轻松实现复杂应用的状态管理，使代码更易于组织和维护。
                                </p>
                                <p class="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500"
                                    v-motion :initial="{ opacity: 0, x: 80 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </p>
                            </div>
                        </a>
                        <!-- End Card -->

                        <!-- Card -->
                        <a class="group relative flex flex-col w-full min-h-60 bg-[url('https://io.onenov.cn/file/202504071719006.jpg')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-hidden focus:shadow-lg transition overflow-hidden"
                            href="https://tailwind.org.cn/" target="_blank" v-motion
                            :initial="{ opacity: 0, scale: 0.9 }"
                            :visible="{ opacity: 1, scale: 1, transition: { duration: 500 } }">
                            <!-- 添加渐变遮罩 -->
                            <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20 z-10">
                            </div>

                            <div class="flex-auto p-4 md:p-6 relative z-20">
                                <div class="text-xl text-white/90 group-hover:text-white font-bold" v-motion
                                    :initial="{ opacity: 0, x: 40 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    设计系统 <br><br>结合Arco
                                    Design组件库与TailwindCSS，快速构建美观、响应式的用户界面，支持深色模式和主题定制。
                                </div>
                            </div>
                            <div class="pt-0 p-4 md:p-6 relative z-20">
                                <div class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70"
                                    v-motion :initial="{ opacity: 0, x: 60 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    了解更多
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                        <!-- End Card -->
                    </div>
                    <!-- End Grid -->
                </div>
                <!-- End Card Blog -->

                <!-- Features -->
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-motion
                    :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 1000 } }">
                    <div class="relative p-6 md:p-16">
                        <!-- Grid -->
                        <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                            <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                                <div class="text-2xl font-bold sm:text-3xl dark:text-neutral-200" v-motion
                                    :initial="{ opacity: 0, x: 40 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    现代前端开发利器
                                </div>

                                <!-- Tab Navs -->
                                <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist"
                                    aria-orientation="vertical" v-motion :initial="{ opacity: 0, x: 60 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    <button type="button"
                                        class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                                        id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1"
                                        aria-controls="tabs-with-card-1" role="tab">
                                        <span class="flex gap-x-6">
                                            <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                                                <path d="M12 5.5a3.5 3.5 0 1 1 0 7H12V5.5z" />
                                                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                                                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                                                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                                            </svg>
                                            <span class="grow">
                                                <span
                                                    class="block text-lg font-semibold hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">强大的工具链</span>
                                                <span
                                                    class="text-base block mt-1 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                                                    集成丰富的开发工具和插件，如unplugin-auto-import、unplugin-vue-components、vite-plugin-pages等，简化开发流程。</span>
                                            </span>
                                        </span>
                                    </button>

                                    <button type="button"
                                        class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2"
                                        aria-controls="tabs-with-card-2" role="tab">
                                        <span class="flex gap-x-6">
                                            <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m12 14 4-4" />
                                                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                                            </svg>
                                            <span class="grow">
                                                <span
                                                    class="block text-lg font-semibold hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">UI框架与样式系统</span>
                                                <span
                                                    class="text-base block mt-1 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                                                    集成Arco Design、TailwindCSS、FlyonUI等框架，快速搭建美观的用户界面，支持深色模式和主题定制。</span>
                                            </span>
                                        </span>
                                    </button>

                                    <button type="button"
                                        class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3"
                                        aria-controls="tabs-with-card-3" role="tab">
                                        <span class="flex gap-x-6">
                                            <svg class="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path
                                                    d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                                                <path d="M5 3v4" />
                                                <path d="M19 17v4" />
                                                <path d="M3 5h4" />
                                                <path d="M17 19h4" />
                                            </svg>
                                            <span class="grow">
                                                <span
                                                    class="block text-lg font-semibold hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">组件化开发</span>
                                                <span
                                                    class="text-base block mt-1 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">
                                                    基于Vue 3的组件化开发模式，将UI和逻辑拆分为可复用的小组件，提高代码复用性和可维护性。</span>
                                            </span>
                                        </span>
                                    </button>
                                </nav>
                                <!-- End Tab Navs -->
                            </div>
                            <!-- End Col -->

                            <div class="lg:col-span-6">
                                <div class="relative" v-motion :initial="{ opacity: 0, scale: 0.95 }"
                                    :enter="{ opacity: 1, scale: 1, transition: { delay: 600, duration: 800 } }">
                                    <!-- Tab Content -->
                                    <div>
                                        <div id="tabs-with-card-1" role="tabpanel"
                                            aria-labelledby="tabs-with-card-item-1">
                                            <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 aspect-square h-full object-cover w-full"
                                                src="https://io.onenov.cn/file/202503060527317.png"
                                                alt="Features Image">
                                        </div>
                                    </div>
                                    <!-- End Tab Content -->

                                    <!-- SVG Element -->
                                    <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                                        <svg class="w-16 h-auto text-orange-500" width="121" height="135"
                                            viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                                                stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                                stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                                                stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <!-- End SVG Element -->
                                </div>
                            </div>
                            <!-- End Col -->
                        </div>
                        <!-- End Grid -->

                        <!-- Background Color -->
                        <div class="absolute inset-0 grid grid-cols-12 size-full">
                            <div
                                class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800">
                            </div>
                        </div>
                        <!-- End Background Color -->
                    </div>
                </div>
                <!-- End Features -->

                <!-- Testimonials with Stats -->
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-motion
                    :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                    <!-- Grid -->
                    <div class="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:justify-between">
                        <div class="lg:col-span-5 lg:col-start-1">
                            <!-- Title -->
                            <div class="mb-14" v-motion :initial="{ opacity: 0, x: -50 }"
                                :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                <h2 class="mb-2 text-3xl font-bold lg:text-4xl dark:text-neutral-200">
                                    全方位现代化开发体验
                                </h2>
                                <p class=" text-base">
                                    集成了现代前端开发的最佳实践和工具链，为开发者提供了一个高效、可靠的开发环境。通过组合Vue
                                    3、TypeScript、Vite等先进技术，可以快速构建高质量的Web应用。
                                </p>
                            </div>
                            <!-- End Title -->

                            <!-- Blockquote -->
                            <blockquote class="relative" v-motion :initial="{ opacity: 0, y: 30 }"
                                :enter="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }">
                                <svg class="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-neutral-800"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                        fill="currentColor" />
                                </svg>

                                <div class="relative z-10">
                                    <p class="text-sm italic ">
                                        快速、高效的开发体验，只需几秒钟即可启动项目。Vite 的热更新和构建能力令人印象深刻。
                                    </p>
                                </div>

                                <footer class="mt-6">
                                    <div class="flex items-center gap-x-4">
                                        <div class="shrink-0">
                                            <img class="size-8 rounded-full"
                                                src="https://io.onenov.cn/file/202503191021350.png" alt="Avatar">
                                        </div>
                                        <div class="grow">
                                            <div class="font-semibold dark:text-neutral-200">ORENCE
                                            </div>
                                            <div class="text-xs text-gray-500 dark:text-neutral-500">潮汐AI</div>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                            <!-- End Blockquote -->
                        </div>
                        <!-- End Col -->

                        <div class="mt-10 lg:mt-0 lg:col-span-6 lg:col-end-13">
                            <div class="space-y-6 sm:space-y-8">
                                <!-- List -->
                                <ul class="grid grid-cols-2 divide-y divide-y-2 divide-x divide-x-2 divide-gray-200 overflow-hidden dark:divide-neutral-700"
                                    v-motion :initial="{ opacity: 0, x: 80 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                                        <div
                                            class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2 dark:text-neutral-200">
                                            20+
                                        </div>
                                        <p class="text-sm sm:text-base ">
                                            集成库 - 覆盖前端开发各个领域
                                        </p>
                                    </li>

                                    <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                                        <div
                                            class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2 dark:text-neutral-200">
                                            <svg class="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m5 12 7-7 7 7" />
                                                <path d="M12 19V5" />
                                            </svg>
                                            80%
                                        </div>
                                        <p class="text-sm sm:text-base ">
                                            工具链实现自动化，减少代码重复
                                        </p>
                                    </li>

                                    <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                                        <div
                                            class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2 dark:text-neutral-200">
                                            <svg class="shrink-0 size-5 text-blue-600 dark:text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m5 12 7-7 7 7" />
                                                <path d="M12 19V5" />
                                            </svg>
                                            100%
                                        </div>
                                        <p class="text-sm sm:text-base ">
                                            TypeScript 支持，提升代码质量
                                        </p>
                                    </li>

                                    <li class="flex flex-col -m-0.5 p-4 sm:p-8">
                                        <div
                                            class="flex items-end gap-x-2 text-3xl sm:text-5xl font-bold mb-2 dark:text-neutral-200">
                                            10x
                                        </div>
                                        <p class="text-sm sm:text-base ">
                                            更高的开发效率，更快的构建速度
                                        </p>
                                    </li>
                                </ul>
                                <!-- End List -->
                            </div>
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Grid -->
                </div>
                <!-- End Testimonials with Stats -->

                <!-- Testimonials -->
                <div class="relative overflow-hidden" v-motion :initial="{ opacity: 0 }"
                    :visible="{ opacity: 1, transition: { duration: 800 } }">
                    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 pt-8 mx-auto">
                        <!-- Grid -->
                        <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                            <div class="hidden lg:block lg:col-span-2" v-motion :initial="{ opacity: 0, x: -50 }"
                                :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                <img class="rounded-xl" src="https://io.onenov.cn/file/202503060523250.png"
                                    alt="Avatar">
                            </div>
                            <!-- End Col -->

                            <div class="lg:col-span-4">
                                <!-- Blockquote -->
                                <blockquote v-motion :initial="{ opacity: 0, x: 50 }"
                                    :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                                    <h2 class="mb-2 text-3xl font-bold lg:text-4xl dark:text-neutral-200">
                                        全方位现代化开发体验
                                    </h2>
                                    <p class="mt-10 text-xl font-medium lg:leading-normal dark:text-neutral-200">
                                        采用组件化开发模式，支持响应式设计，并集成了丰富的UI组件和工具库，适合快速构建高质量的Web应用。
                                    </p>
                                </blockquote>
                                <!-- End Blockquote -->
                            </div>
                            <!-- End Col -->
                        </div>
                        <!-- End Grid -->
                    </div>
                </div>
                <!-- End Testimonials -->

                <!-- Card Section -->
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" v-motion
                    :initial="{ opacity: 0 }" :visible="{ opacity: 1, transition: { duration: 800 } }">
                    <!-- Grid -->
                    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                        <!-- Card -->
                        <a v-for="(feature, index) in features" :key="index"
                            class="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                            :href="feature.url" target="_blank" v-motion :initial="{ opacity: 0, y: 20 }"
                            :visible="{ opacity: 1, y: 0, transition: { delay: (index * 50), duration: 500 } }">
                            <div class="p-4 md:p-5">
                                <div class="flex justify-between items-center gap-x-3">
                                    <div class="grow">
                                        <div class="flex items-center gap-x-3">
                                            <img class="size-9.5 rounded-full" :src="feature.avatar" alt="Avatar">
                                            <div class="grow">
                                                <div
                                                    class="group-hover:text-blue-600 font-semibold text-base dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                                    {{ feature.title }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <svg class="shrink-0 size-5 dark:text-neutral-200"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!-- End Card -->
                    </div>
                    <!-- End Grid -->
                </div>
                <!-- End Card Section -->


                <div v-motion :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }">
                    <Footer />
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
const features = [
    {
        title: "Vue3",
        url: "https://vuejs.org/",
        avatar: "https://io.onenov.cn/file/202503180608612.png"
    },
    {
        title: "Vite",
        url: "https://vite.dev/",
        avatar: "https://io.onenov.cn/file/202503180606361.png"
    },
    {
        title: "Pinia",
        url: "https://pinia.vuejs.org/zh/introduction.html",
        avatar: "https://io.onenov.cn/file/202503060543106.svg"
    },
    {
        title: "VueHooks Plus",
        url: "https://inhiblabcore.github.io/docs/hooks/",
        avatar: "https://io.onenov.cn/file/202504071818740.svg"
    },
    {
        title: "TypeScript",
        url: "https://www.typescriptlang.org/",
        avatar: "https://io.onenov.cn/file/202503060542821.png"
    },
    {
        title: "ArcoDesign",
        url: "https://arco.design/vue/docs/start",
        avatar: "https://io.onenov.cn/file/202503180613078.png"
    },
    {
        title: "TailwindCSS",
        url: "https://tailwindcss.com/",
        avatar: "https://io.onenov.cn/file/202503180611232.png"
    },
    {
        title: "FlyonUI",
        url: "https://flyonui.com/",
        avatar: "https://flyonui.becdn.net/flyonui-icon/apple-touch-icon.png"
    },
    {
        title: "Echarts",
        url: "https://echarts.apache.org/zh/index.html",
        avatar: "https://echarts.apache.org/zh/images/favicon.png?_v_=20240226"
    },
    {
        title: "AiEditor",
        url: "https://aieditor.dev/zh/",
        avatar: "https://aieditor.dev/logo.png"
    },
    {
        title: "MD-Editor-V3",
        url: "https://imzbf.github.io/md-editor-v3/zh-CN",
        avatar: "https://io.onenov.cn/file/202503182030394.png"
    },
    {
        title: "Iconify",
        url: "https://iconify.design/",
        avatar: "https://icon-sets.iconify.design/favicon.svg"
    },
    {
        title: "IconPark",
        url: "https://iconpark.oceanengine.com/",
        avatar: "https://io.onenov.cn/file/202503180625954.png"
    },
    {
        title: "Uisual",
        url: "https://uisual.com/",
        avatar: "https://uisual.com/favicon.svg"
    },
    {
        title: "TailwindUI Plus",
        url: "https://tailwindui.starxg.com/plus/ui-blocks/marketing",
        avatar: "https://io.onenov.cn/file/202503180611232.png"
    },
    {
        title: "OPENAI",
        url: "https://platform.openai.com/docs",
        avatar: "https://io.onenov.cn/file/202504071820159.svg"
    }
];
</script>

<style scoped lang="less"></style>
