<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
</script>

<template>
    <div class="wrap">
        <div class="con-main-wrap">
            <!-- <img :src="getImageUrl('logo.png')" alt="" /> -->
            <!-- <p>优师汇</p> -->
            <div style="display: flex; gap: 20px">
                <p style="cursor: pointer" @click="router.push('/login')">登录</p>
                <p style="cursor: pointer" @click="router.push('/change-password')">修改密码</p>
                <p style="cursor: pointer" @click="router.push('/admin-login')"
                    >聊天后台免密登录</p
                ></div
            >
            <a-dropdown>
                <div class="user-info">
                    <!-- <img :src="getImageUrl('logo.png')" alt="" /> -->
                    <p style="margin-right: 30px">优师汇</p>
                    <span>测试姓名</span>
                </div>
                <!-- <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <p class="header-nav" @click="router.push('/user')">
                                <i class="iconfont icon-shezhi"></i><span>个人设置</span>
                            </p>
                        </a-menu-item>
                        <a-menu-item>
                            <p class="header-nav">
                                <i class="iconfont icon-tubiaozhizuomoban-"></i
                                ><span>退出登录</span>
                            </p>
                        </a-menu-item>
                    </a-menu>
                </template> -->
            </a-dropdown>
        </div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    background-color: #000;
    .con-main-wrap {
        .flex-row;
        justify-content: space-between;
        height: 60px;
        color: #fff;
        img {
            height: 40px;
        }
        .user-info {
            .flex-row;
            height: 60px;
            cursor: pointer;
        }
    }
}
.header-nav {
    .flex-row;
    gap: 10px;
}
:deep(.ant-dropdown-menu-item) {
    border-radius: 0 !important;
    border-bottom: 1px solid #3333;
    &:last-child {
        border: none;
    }
}
</style>
