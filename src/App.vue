<script setup>
import Header from '@/components/Header/index.vue';
import { useLoading } from './store/store';
const Loading = useLoading();
</script>
<template>
    <a-config-provider
        :theme="{
            token: {
                borderRadius: 0
            }
        }"
    >
        <a-spin :spinning="Loading.spinning" tip="加载中">
            <Header></Header>
            <RouterView></RouterView>
        </a-spin>
    </a-config-provider>
</template>

<style scoped lang="less"></style>
