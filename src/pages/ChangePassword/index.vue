<script setup>
import { ref, computed, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { changePasswordApi } from "@/request/api";
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const repasswords = (rule, value) => {
  return new Promise((resolve, reject) => {
    if (value === "") {
      reject("请再次输入密码");
    } else if (value !== formState.password) {
      reject("两次输入密码不一致!");
    } else {
      resolve();
    }
  });
};
const resetRules = {
  password: [
    { required: true, message: "请输入新密码", trigger: "blur" },
    { min: 6, max: 16, message: "密码长度应在6-16个字符之间", trigger: "blur" },
    {
      pattern: /^[^\u4e00-\u9fa5]+$/,
      message: "密码不能包含中文字符",
      trigger: "blur",
    },
  ],
  repassword: [
    { required: true, validator: repasswords, trigger: ["change", "blur"] },
  ],
};

const formState = reactive({
  oldPassword: "123456",
  password: "215215aa",
  repassword: "215215aa1",
});
const onFinish = async (values) => {
  let query = {
    id: 1,
    password: formState.oldPassword,
    newPassword1: formState.password,
    newPassword2: formState.repassword,
  };
  try {
    let res = await changePasswordApi(query);
    console.log(res);
    if (res.code == 1) {
      router.push("/");
    }
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
        :rules="resetRules"
        :model="formState"
        name="basic"
        :label-col="{ span: 7 }"
        :wrapper-col="{ span: 17 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="原密码"
          name="oldPassword"
          :rules="[{ required: true, message: '请输入您的原密码！' }]"
        >
          <a-input-password v-model:value="formState.oldPassword" />
        </a-form-item>

        <a-form-item label="新密码" name="password">
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item label="请再次确认" name="repassword">
          <a-input-password v-model:value="formState.repassword" />
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
