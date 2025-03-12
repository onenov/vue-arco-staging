<template>
  <div class="welcome-container h-full pt-[62px]">
    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-3xl h-[94vh] flex flex-col items-center justify-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center" v-motion :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }">
          <div
            class="relative rounded-full px-3 py-1 text-sm/6 text-color-2 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Vite 是一个极快的前端构建工具，为下一代 Web 应用程序提供支持。 <a href="https://vite.dev/" target="_blank"
              class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more
              <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
        <div class="text-center">
          <div
            class="text-4xl font-black tracking-tight text-balance sm:text-5xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
            v-motion :initial="{ opacity: 0, scale: 0.8 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }">
            Vue3 + TypeScript + Vite Project
          </div>
          <p class="mt-14 text-lg font-medium text-pretty text-color" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }">
            基于 Vue 3、TypeScript、Vite 和
            Arco Design 组件库的现代化前端项目模板。该项目集成了当前流行的前端技术栈，提供了一个开箱即用的开发环境，帮助您快速构建高质量的Web应用。
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6" v-motion :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 800 } }">
            <a href="https://github.com/onenov/vue-arco-staging" target="_blank"
              class="rounded-md !bg-indigo-500 !hover:bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-xs"><icon-github /> GitHub</a>
            <a href="https://orence.ai" target="_blank" class="text-sm font-semibold text-color-2">潮汐AiQus
              <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <!-- 轮播博客组件 - 数据驱动的实现 -->
      <div class="mx-auto px-4 container pb-20 overflow-hidden">
        <!-- 标题和控制按钮 -->
        <div class="flex flex-wrap -mx-4 items-center mb-20">
          <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0" v-motion :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 1000 } }">
            <span class="font-heading text-4xl md:text-5xl tracking-tighter text-color">技术栈</span>
          </div>
          <div class="w-full md:w-1/2 px-4" v-motion :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 1200 } }">
            <div class="flex items-center justify-end space-x-4">


              <a-button-group>
                <a-button type="outline" shape="round" @click="prevSlide">
                  <icon-left />
                  Prev
                </a-button>
                <a-button type="outline" shape="round" @click="nextSlide">
                  Next
                  <icon-right />
                </a-button>
              </a-button-group>

            </div>

          </div>
        </div>

        <!-- 轮播容器 -->
        <div class="overflow-hidden rounded-3xl" v-motion :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1400 } }">
          <div class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentOffset}px)` }">

            <!-- 使用v-for循环渲染卡片 -->
            <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-full md:max-w-lg mr-10">
              <div v-motion :initial="{ opacity: 0, scale: 0.9 }"
                :enter="{ opacity: 1, scale: 1, transition: { delay: 1600 + (index * 100) } }">
                <div class="relative mb-6 rounded-3xl overflow-hidden">
                  <img class="block w-full h-72 object-cover no-drag" :src="card.image" :alt="card.title" />
                </div>
                <div class="max-w-xs sm:max-w-md">
                  <div class="mb-3">
                    <a-button type="secondary" shape="round"> {{ card.category }}</a-button>
                    <span class="inline-block text-sm text-color font-medium mx-2">
                      {{ card.readTime }}
                    </span>
                  </div>
                  <h4 class="text-3xl sm:text-4xl tracking-tight mb-6 text-color font-medium">{{ card.title }}</h4>
                  <p class="max-w-sm text-color-2 text-lg">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 pb-20">
        <div v-for="(feature, index) in features" :key="feature.id"
          :class="['mb-6 pb-10 pt-20 lg:pt-10 px-10 max-w-xl lg:max-w-none mx-auto bg-white rounded-3xl']" v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 1800 + (index * 200) } }">
          <div class="flex flex-wrap -mx-4 items-center">
            <div :class="[
              'w-full px-4 mb-12 lg:mb-0',
              feature.reversed ? 'lg:w-7/12 order-last lg:order-last' : 'lg:w-7/12'
            ]">
              <div class="max-w-2xl mx-auto">
                <h3 class="text-4xl tracking-tight mb-6 font-medium text-color">{{ feature.title }}</h3>
                <p class="max-w-md text-lg text-color mb-10">{{ feature.description }}</p>
                <a :href="feature.buttonLink" target="_blank">
                  <a-button type="primary" size="large" shape="round">{{ feature.buttonText }}</a-button>
                </a>
              </div>
            </div>
            <div :class="[
              'w-full',
              feature.reversed ? 'lg:w-5/12 order-first lg:order-first' : 'lg:w-5/12'
            ]">
              <img class="block w-full rounded-3xl" :src="feature.image" :alt="feature.title" />
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 pb-20">
        <div class="max-w-xl lg:max-w-none mx-auto">
          <div class="flex flex-wrap -mx-4 items-center">
            <div class="w-full lg:w-5/12 px-4 mb-20 lg:mb-0" v-motion :initial="{ opacity: 0, x: -50 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 2200 } }">
              <div class="max-w-lg">
                <h2 class="font-heading text-4xl sm:text-5xl tracking-tighter mb-10 font-medium text-color">
                  支持更多支持你喜爱的框架和工具</h2>
                <a class="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black text-color"
                  target="_blank" href="https://vitejs.cn/plugins/">
                  <span class="mr-4">了解更多</span>
                  <span class="group-hover:rotate-45 transform transition duration-100 text-color">
                    <svg width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.5 1.5L1.5 9.5" stroke="black" stroke-width="1.3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9.5 8.83571V1.5H2.16429" stroke="black" stroke-width="1.3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div class="w-full lg:w-7/12 px-4" v-motion :initial="{ opacity: 0, x: 50 }"
              :enter="{ opacity: 1, x: 0, transition: { delay: 2400 } }">
              <div class="max-w-xl lg:ml-auto">
                <div class="flex flex-wrap -mx-4 -mb-4">
                  <div v-for="(partner, idx) in partners" :key="partner.id" class="w-full xs:w-1/2 sm:w-1/3 px-4 mb-4">
                    <div class="flex h-28 p-2 items-center justify-center bg-white dark:bg-gray-700 rounded-3xl"
                      v-motion :initial="{ opacity: 0, scale: 0.8 }"
                      :enter="{ opacity: 1, scale: 1, transition: { delay: 2600 + (idx * 100) } }">
                      <img class="block mx-auto h-20 w-auto" :src="partner.logo" :alt="partner.name" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 pb-20">
        <div class="bg-white rounded-3xl overflow-hidden" v-motion :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 2800 } }">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-1/2 px-4 order-last lg:order-first">
              <img class="block aspect-[4/3] w-full object-cover rounded-3xl p-3"
                src="https://io.onenov.cn/file/202503060527317.png" alt="" />
            </div>
            <div class="w-full lg:w-1/2 px-4 self-center">
              <div class="py-12 px-8 mx-auto text-color">
                <h2 class="font-heading text-4xl sm:text-4xl text-color tracking-tight mb-6 font-medium"
                  v-motion :initial="{ opacity: 0, x: 50 }" :enter="{ opacity: 1, x: 0, transition: { delay: 3000 } }">
                  快速上手</h2>
                <p class="text-lg mb-10" v-motion :initial="{ opacity: 0, x: 50 }"
                  :enter="{ opacity: 1, x: 0, transition: { delay: 3200 } }">
                  本项目集成了Vue 3、TypeScript、Arco
                  Design与TailwindCSS，提供完整的开发环境和组件库。
                  只需克隆仓库，运行npm install安装依赖，然后使用npm run dev启动开发服务器即可开始构建您的应用。</p>
                <a class="group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-color hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
                  href="https://github.com/onenov/vue-arco-staging" target="_blank" v-motion
                  :initial="{ opacity: 0, y: 20 }" :enter="{ opacity: 1, y: 0, transition: { delay: 3400 } }">
                  <span class="mr-2">开始使用</span>
                  <span class="group-hover:rotate-45 transform transition duration-100">
                    <svg width="10" height="10" viewbox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1L1 9" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M9 8.33571V1H1.66429" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </a>

                <div class="max-w-xs ml-auto text-right mt-20" v-motion :initial="{ opacity: 0 }"
                  :enter="{ opacity: 1, transition: { delay: 3600 } }">

                  <span class="block mb-3 text-sm">{{ currentYear }}</span>
                  <p>ORENCE HONEYSUCKLE</p>
                  <div class="gtranslate_wrapper mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部页脚组件 -->
      <LayoutFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, ref } from 'vue';
import LayoutFooter from '@/components/layout/Footer.vue';

// 轮播组件数据
const cards = [
  {
    title: 'Vue3 + Vite',
    description: 'Vue 3是一个渐进式JavaScript框架，配合Vite构建工具，提供极速的开发体验和优化的构建过程。',
    image: 'https://io.onenov.cn/file/202503060523934.png',
    category: '前端框架',
    readTime: '核心技术'
  },
  {
    title: 'TypeScript + Pinia',
    description: 'TypeScript提供类型安全，减少开发错误。Pinia是Vue官方推荐的状态管理库，轻量且功能强大。',
    image: 'https://io.onenov.cn/file/202503060524109.png',
    category: '开发工具',
    readTime: '效率提升'
  },
  {
    title: 'Arco Design + TailwindCSS',
    description: '结合Arco Design组件库与TailwindCSS，快速构建美观、响应式的用户界面，支持深色模式和主题定制。',
    image: 'https://io.onenov.cn/file/202503060523250.png',
    category: 'UI框架',
    readTime: '设计系统'
  },
];
// 特性卡片数据
const features = [
  {
    id: 1,
    title: "Vue 3 组件化开发",
    description: "Vue 3采用组件化思想构建用户界面，每个组件拥有独立的HTML模板、JavaScript逻辑和CSS样式，便于维护和复用。",
    buttonText: "了解更多",
    buttonLink: "https://cn.vuejs.org/guide/introduction.html",
    image: "https://io.onenov.cn/file/202503060525565.png",
    reversed: false
  },
  {
    id: 2,
    title: "响应式状态管理",
    description: "使用Vue 3的Composition API和Pinia状态管理库，轻松实现复杂应用的状态管理，使代码更易于组织和维护。",
    buttonText: "技术文档",
    buttonLink: "https://pinia.vuejs.org/",
    image: "https://io.onenov.cn/file/202503060525796.png",
    reversed: true
  }
];

// 合作伙伴数据
const partners = [
  {
    id: 1,
    name: "VUE",
    logo: "https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg"
  },
  {
    id: 2,
    name: "Vite",
    logo: "https://logosandtypes.com/wp-content/uploads/2024/10/vitejs.svg"
  },
  {
    id: 3,
    name: "TypeScript",
    logo: "https://io.onenov.cn/file/202503060542821.png"
  },
  {
    id: 4,
    name: "Pinia",
    logo: "https://io.onenov.cn/file/202503060543106.svg"
  },
  {
    id: 5,
    name: "tailwindcss",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
  },
  {
    id: 6,
    name: "Visa",
    logo: "https://avatars.githubusercontent.com/u/64576149?s=200&v=4"
  }
];

// 当前可见的卡片索引
const currentIndex = ref(0);
// 计算当前位移
const currentOffset = ref(0);
// 每张卡片的宽度（包括间距）
const cardWidth = ref(370); // 可以使用onMounted钩子动态计算

// 获取卡片容器元素参考
const cardsContainer = ref(null);

// 在挂载后计算卡片宽度
onMounted(() => {
  // 如果需要精确计算，可以使用下面的代码:
  // cardWidth.value = document.querySelector('.flex-shrink-0').offsetWidth + 40; // 宽度+margin

  // 更新窗口大小时重新计算
  window.addEventListener('resize', updateCardWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateCardWidth);
});

// 更新卡片宽度
const updateCardWidth = () => {
  const cardElement = document.querySelector('.flex-shrink-0');
  if (cardElement) {
    cardWidth.value = cardElement.offsetWidth + 40; // 宽度+margin
  }
};

// 下一张
const nextSlide = () => {
  if (currentIndex.value < cards.length - 1) {
    currentIndex.value++;
    currentOffset.value = currentIndex.value * cardWidth.value;
    console.log('当前索引:', currentIndex.value, '位移:', currentOffset.value);
  } else {
    console.log('已经是最后一张了');
    // 这里可以添加视觉反馈，比如暂时禁用按钮
  }
};

// 上一张
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    currentOffset.value = currentIndex.value * cardWidth.value;
    console.log('当前索引:', currentIndex.value, '位移:', currentOffset.value);
  } else {
    console.log('已经是第一张了');
    // 这里可以添加视觉反馈，比如暂时禁用按钮
  }
};
const currentYear = new Date().getFullYear();

// 动态添加Google Translate脚本
const addGoogleTranslateScripts = () => {
  // 添加设置脚本
  const settingsScript = document.createElement('script')
  settingsScript.innerHTML = `
    window.gtranslateSettings = {
      "default_language": "zh-CN",
      "detect_browser_language": true,
      "languages": ["zh-CN","en","fr","de","ru","ja","pt","es","ar","th","pl","it","zh-TW","nl","fi"],
      "wrapper_selector": ".gtranslate_wrapper",
      "flag_size": 32,
      "flag_style":"3d"
    }
  `
  document.head.appendChild(settingsScript)

  // 添加主脚本
  const mainScript = document.createElement('script')
  mainScript.src = 'https://cdn.gtranslate.net/widgets/latest/flags.js'
  mainScript.defer = true
  document.head.appendChild(mainScript)
}

onMounted(() => {
  addGoogleTranslateScripts()
})

</script>

<style scoped lang="less">
.welcome-container {
  position: relative;
  width: 100%;
  overflow: auto;
  
  /* 隐藏滚动条但保留滚动功能 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

/* Webkit浏览器 (Chrome, Safari) */
.welcome-container::-webkit-scrollbar {
  display: none;
}

.version-info {
  position: relative;
  z-index: 1;
}
</style>
