<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { loginApi } from "@/request/api";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const formState = reactive({
  username: "admin",
  password: "123456",
});
const onFinish = async (values) => {
  let query = {
    username: formState.username,
    password: formState.password,
  };
  try {
    let res = await loginApi(query);
    console.log(res);
    router.push("/");
  } catch (error) {
    console.log(err);
  }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="wrap">
    <div class="login">
      <h5>优师汇管理后台</h5>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :rules="[{ required: true, message: '请输入您的用户名！' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: '请输入您的密码！' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 9, span: 12 }">
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped lang="less">
.wrap {
  .flex-row;
  background-color: skyblue;
  height: 100vh;
  height: 100vh;
  .login {
    width: 400px;
    background-color: #fff;
    padding: 30px;
    h5 {
      text-align: center;
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
}
</style>
