<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>

<template>
  <div class="wrap">
    <h3>优师汇后台管理</h3>
    <div class="show-login">
      <a-button @click="router.push('/login')" type="primary"
        >登陆接口测试</a-button
      >
      <a-button @click="router.push('/change-password')" type="primary"
        >修改密码接口测试</a-button
      >
      <a-button @click="router.push('/admin-login')" type="primary"
        >后台用户名接口测试</a-button
      >
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .flex-col;
  gap: 100px;
  background-color: skyblue;
  height: 100vh;
  width: 100%;
  h3 {
    font-size: 30px;
    color: #eee;
    font-weight: 600;
  }
  .show-login {
    display: flex;
    gap: 20px;
  }
}
</style>
