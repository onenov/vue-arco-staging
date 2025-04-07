<template>
  <footer class="container mx-auto w-full py-4 px-4">
    <div class="flex flex-wrap justify-center items-center gap-2">
      <a-button type="dashed" size="mini">Copyright {{ appConfig.FOOTER_COPYRIGHT }}
        {{ currentYear }}</a-button>
      <a-button type="dashed" size="mini" v-if="appConfig.ICP_RECORD" @click="openIcpLink">{{
        appConfig.ICP_RECORD }}</a-button>
      <a-button type="dashed" size="mini" v-if="appConfig.FOOTER_DESCRIPTION"
        @click="openFooterDescription">{{
          appConfig.FOOTER_DESCRIPTION }}</a-button>

      <a-button type="dashed" shape="circle" size="mini" @click="showDataRepairConfirm">
        <icon-tool />
      </a-button>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Modal, Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';

// 使用类型断言引入全局配置
const appConfig = window.APP_CONFIG as any;

const router = useRouter();

const currentYear = new Date().getFullYear();

// 点击ICP备案号跳转到备案网站
const openIcpLink = () => {
  window.open('https://beian.miit.gov.cn/', '_blank');
};

// 点击页脚描述跳转到页脚描述页面
const openFooterDescription = () => {
  window.open(appConfig.FOOTER_DESCRIPTION_URL, '_blank');
};

// 显示数据修复确认
const showDataRepairConfirm = () => {
  Modal.warning({
    title: '数据清除',
    content: '您确认要删除所有本地数据并重置状态吗？',
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

defineOptions({
  name: 'Footer'
})
</script>

<style scoped lang="less"></style>
