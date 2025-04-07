<template>
  <div class="inline-block">
    <!-- 选择器触发按钮 -->
    <div class="cursor-pointer" @click="showSelector = true">
      <slot>
        <a-button type="primary">
          <template #icon>
            <component :is="selectedIcon || modelValue || 'i-full-selection'" />
          </template>
          <!-- {{ placeholder }} -->
        </a-button>
      </slot>
    </div>

    <!-- 图标选择器弹窗 -->
    <a-modal v-model:visible="showSelector" :width="600" title-align="start" unmount-on-close
      @cancel="showSelector = false">
      <template #title>
        <div class="flex items-center">
          <i-full-selection class="mr-2" />
          <span>选择图标</span>
        </div>
      </template>

      <!-- 搜索和分类筛选 -->
      <div class="flex mb-4 items-center">
        <a-input :style="{width:'100%'}" v-model="searchKeyword" placeholder="搜索图标名称或标签..."  allow-clear class="flex-1 mr-2">
          <template #prefix>
            <i-search />
          </template>
        </a-input>
        <a-select v-model="currentCategory" :style="{width:'140px'}" placeholder="全部分类">
          <a-option value="">全部图标</a-option>
          <a-option v-for="category in categories" :key="category.value" :value="category.value">
            {{ category.label }}
          </a-option>
        </a-select>
      </div>

      <!-- 图标列表 -->
      <div class="h-[350px] overflow-auto p-2 border border-solid border-[var(--color-border)] rounded mb-2 w-full justify-center">
        <a-spin :loading="loading" tip="加载中...">
          <div v-if="filteredIcons.length > 0" class="flex flex-wrap justify-start w-full gap-3">
            <div v-for="(icon, index) in filteredIcons" :key="index"
              class="flex flex-col items-center justify-center cursor-pointer p-2 w-20 h-20 border border-solid border-[var(--color-border)] rounded transition-all duration-200 hover:bg-[var(--color-fill-2)]"
              :class="{ 'bg-[var(--color-primary-light-1)] text-[var(--color-primary)]': selectedIcon === icon.name }"
              @click="selectIcon(icon.name)">
              <div class="flex items-center justify-center mb-2">
                <component class="text-2xl" :is="icon.name" />
              </div>
              <div class="text-xs text-center whitespace-nowrap overflow-hidden text-ellipsis w-full px-1"
                :title="icon.title + ' / ' + icon.titleEn">{{ icon.title }}</div>
            </div>
          </div>
          <a-empty v-else description="未找到匹配图标" />
        </a-spin>
      </div>

      <!-- 图标总数信息 -->
      <div class="text-xs text-[var(--color-text-3)] mb-4 text-right">
        当前显示 {{ filteredIcons.length }} 个图标 / 总共 {{ icons.length }} 个图标
      </div>

      <!-- 选择预览 -->
      <div v-if="selectedIcon" class="mt-2 p-3 bg-[var(--color-fill-1)] rounded">
        <div class="flex items-center justify-between">
          <div class="text-gray-500">已选图标:</div>
          <div class="flex items-center">
            <component :is="selectedIcon" class="mr-2" />
            <span class="font-mono text-[var(--color-text-2)]">{{ selectedIcon }}</span>
          </div>
        </div>
        <div v-if="selectedIconData" class="mt-2 text-xs text-gray-500">
          <a-descriptions :data="selectedIconDescriptions" layout="inline-horizontal" :column="1" size="mini" :label-style="{ width: '60px' }" :value-style="{ textAlign: 'left' }" />
          <div class="flex flex-wrap mt-1" v-if="selectedIconData.tags?.length">
            <span class="w-[60px] text-[var(--color-text-3)] flex-shrink-0">标签:</span>
            <div class="flex flex-wrap">
              <a-tag v-for="tag in selectedIconData.tags" :key="tag" size="small" class="mx-1 mb-1">{{ tag }}</a-tag>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <a-space>
          <a-button @click="showSelector = false">取消</a-button>
          <a-button type="primary" @click="confirmSelect">确定</a-button>
        </a-space>
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { parseIconsFromCSV, getCategoriesFromIcons, type IconItem } from '../utils/iconParser';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '选择图标'
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const showSelector = ref(false);
const searchKeyword = ref('');
const loading = ref(true);
const currentCategory = ref('');
const selectedIcon = ref(props.modelValue);
const icons = ref<IconItem[]>([]);
const categories = ref<{ value: string; label: string }[]>([]);

// 监听 modelValue 变化
watch(() => props.modelValue, (newVal) => {
  selectedIcon.value = newVal;
});

// 当前选择的图标数据
const selectedIconData = computed(() => {
  return icons.value.find(icon => icon.name === selectedIcon.value);
});

// 图标描述信息
const selectedIconDescriptions = computed(() => {
  if (!selectedIconData.value) return [];
  return [
    { label: '中文名', value: selectedIconData.value.title },
    { label: '英文名', value: selectedIconData.value.titleEn },
    { label: '分类', value: selectedIconData.value.category },
  ];
});

// 过滤图标
const filteredIcons = computed(() => {
  return icons.value.filter(icon => {
    // 关键词匹配图标名称、英文名称或标签
    const matchKeyword = searchKeyword.value === '' ||
      icon.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      icon.titleEn.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      icon.tags.some(tag => tag.toLowerCase().includes(searchKeyword.value.toLowerCase()));

    // 匹配分类
    const matchCategory = currentCategory.value === '' || icon.categoryEn === currentCategory.value;

    return matchKeyword && matchCategory;
  });
});

// 初始化图标列表
onMounted(async () => {
  try {
    // 从 CSV 文件加载图标数据
    const iconsData = await parseIconsFromCSV();
    icons.value = iconsData;

    // 提取分类信息
    categories.value = getCategoriesFromIcons(iconsData);

    loading.value = false;
  } catch (error) {
    console.error('加载图标失败:', error);
    loading.value = false;
  }
});

// 选择图标
const selectIcon = (iconName: string) => {
  selectedIcon.value = iconName;
};

// 确认选择
const confirmSelect = () => {
  emit('update:modelValue', selectedIcon.value);
  emit('change', selectedIcon.value);
  showSelector.value = false;
};
</script>
