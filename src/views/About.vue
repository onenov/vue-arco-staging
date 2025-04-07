<template>
    <DefaultLayout>
        <section class="flex flex-col h-full overflow-auto md:justify-center justify-start">
            <!-- Container -->
            <div class="mx-auto w-full max-w-7xl px-5 py-12 md:px-6 md:py-12 mt-20 ">
                <!-- Component -->
                <div class="flex flex-col gap-4 md:flex-row md:gap-6">
                    <!-- Content -->
                    <div class="flex flex-col gap-8 md:w-3/5">
                        <h2 class="mb-8 text-3xl font-bold md:text-4xl">{{ pageData.about.title }}</h2>
                        <p class="text-base" v-html="pageData.about.description">
                        </p>
                        <a :href="pageData.about.buttonLink"
                            class="w-36 rounded-md bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700 transition duration-300">
                            {{ pageData.about.buttonText }}
                        </a>
                        <!-- Testimonials -->
                        <div class="grid gap-8 md:grid-cols-2 md:gap-4 text-black">
                            <div v-for="(testimonial, index) in pageData.about.testimonials" :key="index"
                                class="flex flex-col gap-4 rounded-md border border-solid bg-gray-100 p-6 md:p-4 items-start justify-center">
                                <p class="text-base">
                                    "{{ testimonial.text }}"
                                </p>
                                <div
                                    :class="['flex items-center gap-2 sm:gap-x-4', index === 0 ? 'md:flex-row flex-col' : '']">
                                    <div class="flex items-center gap-x-2">
                                        <img :src="testimonial.avatar" alt=""
                                            class="h-8 w-8 rounded-full object-cover" />
                                        <p class="text-sm font-semibold sm:text-base">
                                            {{ testimonial.useAuthorName ? authorName :
                                                (testimonial.useConfigDescription ? configDescription
                                            : '') }}
                                        </p>
                                    </div>
                                    <!-- Divider -->
                                    <div :class="['h-5 w-px bg-gray-300', index === 0 ? 'hidden md:inline-flex' : '']">
                                    </div>
                                    <div class="flex items-center gap-x-2">
                                        <div class="flex items-center gap-x-2" v-if="index === 0">
                                            <a-trigger position="top" auto-fit-position :unmount-on-close="false">
                                                <a-button type="primary" size="small">{{ testimonial.buttonText
                                                    }}</a-button>
                                                <template #content>
                                                    <img :src="authorImage"
                                                        class="h-80 w-auto rounded-xl p-2 bg-slate-50 shadow-lg mb-4"
                                                        alt="">
                                                </template>
                                            </a-trigger>
                                        </div>
                                        <a v-else :href="testimonial.buttonLink" target="_blank">
                                            <a-button type="primary" size="small">{{ testimonial.buttonText
                                                }}</a-button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Image -->
                    <div class="w-full rounded-md bg-gray-100 max-[991px]:h-[475px] md:w-2/5">
                        <AnimationSpace class="h-full w-full rounded-md" />
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 my-4">
                <Footer />
            </div>
        </section>
    </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import AnimationSpace from '@/components/animation/Space.vue';

// 引用全局配置
const appConfig = (window as any).APP_CONFIG || {};
const configDescription = appConfig.FOOTER__DESCRIPTION;
const configUrl = appConfig.FOOTER__DESCRIPTION_URL || 'https://orence.net';
const authorImage = appConfig.AUTHOR_CONTACT_IMAGE;
const authorName = appConfig.AUTHOR_NAME || 'ORENCE团队';

// 页面数据接口定义
interface Testimonial {
    text: string;
    avatar: string;
    buttonText: string;
    buttonLink?: string;
    useAuthorName?: boolean;
    useConfigDescription?: boolean;
}

interface AboutData {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    testimonials: Testimonial[];
}

interface PageData {
    about: AboutData;
}

// 初始化页面数据
const pageData = ref<PageData>({
    about: {
        title: '',
        description: '',
        buttonText: '',
        buttonLink: '',
        testimonials: []
    }
});

// 获取页面数据
const fetchPageData = async () => {
    try {
        const response = await fetch('/data.json');
        const data = await response.json();
        pageData.value = data;

        // 处理动态链接
        pageData.value.about.testimonials.forEach(testimonial => {
            if (testimonial.buttonLink === 'CONFIG_FOOTER_URL') {
                testimonial.buttonLink = configUrl;
            }
        });
    } catch (error) {
        console.error('获取页面数据失败:', error);
    }
};

// 设置页面标题
const setPageTitle = (title: string) => {
    document.title = title || appConfig.APP_NAME;
};

onMounted(() => {
    // 获取页面数据
    fetchPageData();
    
    // 设置页面标题
    setPageTitle('关于 - ' + (appConfig.APP_NAME));
});

// 页面卸载时恢复原标题
onUnmounted(() => {
    document.title = appConfig.APP_NAME ;
});
</script>

<style scoped lang="less">
.feature-card {
    border-radius: 0.375rem;
    border: 1px solid;
    background-color: white;
    padding: 1.5rem;
    transition-property: all;
    transition-duration: 300ms;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

    &:hover {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
    }
}

.feature-icon {
    margin-bottom: 1rem;
    display: inline-block;
    padding: 0.75rem;
    border-radius: 0.5rem;

    &.blue {
        background-color: rgba(99, 102, 241, 0.1);
    }

    &.pink {
        background-color: rgba(236, 72, 153, 0.1);
    }

    &.purple {
        background-color: rgba(168, 85, 247, 0.1);
    }

    &.yellow {
        background-color: rgba(245, 158, 11, 0.1);
    }
}
</style>