<script setup>
import { useLoading } from '@/store/store';
import { ref, h, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '@/components/Header/index.vue';
import { navList } from './router';
const Loading = useLoading();
const route = useRoute();
const router = useRouter();
const menuItems = ref([]);
let desiredPath = '';
const selectRouter = router.currentRoute._rawValue.fullPath;
const segments = selectRouter.split('/');
const selectedKeys = ref([selectRouter]);
if (segments.length >= 2) {
    desiredPath = `/${segments[0]}/${segments[1]}`;
}
const openKeys = ref([desiredPath]);
console.log(router.currentRoute._rawValue.fullPath);
watch(router.currentRoute, (to, from) => {
    selectedKeys.value = [router.currentRoute._rawValue.fullPath];
});
navList.forEach((item) => {
    let query = {
        key: item.path,
        label: item.meta.name,
        title: item.meta.name
    };

    if (item.children) {
        query.children = item.children.map((child) => ({
            key: item.path + '/' + child.path,
            label: child.meta.name,
            title: child.meta.name
        }));
    }
    menuItems.value.push(query);
});

console.log(menuItems.value);
const handleClick = (e) => {
    router.push(e.key);
};
</script>
<template>
    <div class="app">
        <a-spin :spinning="Loading.spinning" tip="加载中">
            <div class="wrap">
                <Header></Header>
                <div class="con-main-wrap">
                    <div class="left-menu" style="height: calc(100vh - 62px)">
                        <a-menu
                            style="width: 230px"
                            mode="inline"
                            v-model:openKeys="openKeys"
                            v-model:selectedKeys="selectedKeys"
                            :items="menuItems"
                            @click="handleClick"
                        ></a-menu>
                        <div class="footer-info">
                            <p
                                @click="router.push('/user')"
                                :class="route.path == '/user' ? 'active' : ''"
                                >个人设置</p
                            >
                            <p> <i class="">占位</i></p>
                        </div>
                    </div>
                    <div class="right-wrap">
                        <RouterView></RouterView>
                    </div>
                </div>
            </div>
        </a-spin>
    </div>
</template>

<style scoped lang="less">
.app {
    .wrap {
        .con-main-wrap {
            .flex-row;
            justify-content: space-between;
            .left-menu {
                padding-top: 6px;
                .nav-list {
                    display: flex;
                    flex-direction: column;
                    // justify-content: space-between;
                    p {
                        height: 60px;
                        line-height: 60px;
                    }
                }
                .footer-info {
                    position: absolute;
                    bottom: 0;
                    z-index: 3;
                    width: 230px;
                    p {
                        position: relative;
                        cursor: pointer;
                        height: 50px;
                        line-height: 50px;
                        padding-left: 24px;
                        &.active {
                            color: red;
                            background: #e6f4ff;
                            color: #1677ff;
                            &::after {
                                position: absolute;
                                right: 0;
                                top: 0;
                                display: block;
                                content: '';
                                width: 3px;
                                height: 100%;
                                background: #1677ff;
                            }
                        }
                    }
                }
            }
            .right-wrap {
                flex: 1;
            }
        }
    }
}
</style>
