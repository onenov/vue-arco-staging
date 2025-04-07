<template>
    <div class="wave-bg"></div>
</template>

<script setup lang="ts">
defineOptions({
    name: 'Wavebg'
})
</script>

<style scoped lang="less">
.wave-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://io.onenov.cn/file/202503281646819.png') no-repeat center center / cover;
    z-index: -1;
    transition: background 1s ease
}

body[arco-theme='dark'] {
    .wave-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: url('https://io.onenov.cn/file/202503281653852.png') no-repeat center center / cover;
    }
}
</style>