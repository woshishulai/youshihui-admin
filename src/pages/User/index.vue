<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>

<template>
  <div class="wrap">个人设置</div>
</template>

<style scoped lang="less">
/* 在这里添加你的 Less 样式 */
</style>
