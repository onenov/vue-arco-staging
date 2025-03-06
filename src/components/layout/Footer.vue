<template>
  <footer class="container mx-auto w-full flex items-center justify-center">
    <div class="flex flex-wrap my-4">
      <a-space>
        <a-button type="secondary" size="mini">Copyright {{ configStore.config.FOOTER_COPYRIGHT }}
          {{ currentYear }}</a-button>
        <a-button type="secondary" size="mini" v-if="configStore.config.ICP_RECORD" @click="openIcpLink">{{
          configStore.config.ICP_RECORD }}</a-button>
        <a-button type="secondary" size="mini" v-if="configStore.config.FOOTER__DESCRIPTION">{{
          configStore.config.FOOTER__DESCRIPTION }}</a-button>
        <a-tag color="gray" @click="openGithub">
          <template #icon>
            <icon-github />
          </template>
          Github
        </a-tag>
        <a-button type="secondary" shape="circle" size="mini" @click="showDataRepairConfirm">
          <icon-tool />
        </a-button>

      </a-space>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useConfigStore } from '@/store';
import { Modal, Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';

const configStore = useConfigStore();
const router = useRouter();
configStore.loadConfig();

const currentYear = new Date().getFullYear();

// 点击ICP备案号跳转到备案网站
const openIcpLink = () => {
  window.open('https://beian.miit.gov.cn/', '_blank');
};

// 点击Github跳转到Github
const openGithub = () => {
  window.open('https://github.com/onenov/vue-arco-staging', '_blank');
};

// 显示数据修复确认
const showDataRepairConfirm = () => {
  Modal.warning({
    title: '数据修复',
    content: '您确认要删除所有本地数据并重新登录吗？这将删除所有缓存状态和重新返回首页。',
    okText: '确认',
    cancelText: '取消',
    onOk: executeDataRepair
  });
};

// 执行数据修复
// 删除cookie和localStorage并重新返回首页
const executeDataRepair = () => {
  try {
    // 删除所有Cookie
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // 删除localStorage
    localStorage.clear();

    // 删除sessionStorage
    sessionStorage.clear();

    // 显示删除成功消息
    Message.success({
      content: '数据已删除，将重新返回首页',
      duration: 2000,
    });

    // 延迟1秒后重新返回首页
    setTimeout(() => {
      router.push('/');
      // 重新加载页面
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }, 1000);
  } catch (error) {
    console.error('数据删除失败:', error);
    Message.error('数据删除失败，请重新加载页面');
  }
};
</script>

<style scoped lang="less"></style>
