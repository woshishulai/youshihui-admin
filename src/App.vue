<script setup>
import { useLoading } from "@/store/store";
const Loading = useLoading();
</script>
<template>
  <div class="app">
    <a-spin :spinning="Loading.spinning" tip="加载中">
      <RouterView></RouterView>
    </a-spin>
  </div>
</template>

<style scoped lang="less"></style>
