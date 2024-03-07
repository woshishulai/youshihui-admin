<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getMenuList } from '@/request/api';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
const fetchData = ref(null);
const menuItems = ref([]);
onMounted(async () => {
    try {
        let res = await getMenuList();
        fetchData.value = res.data;
        fetchData.value.forEach((item) => {
            let query = {
                key: item.id,
                label: item.menu_name,
                title: item.menu_name
            };

            if (item.levelList) {
                query.children = item.levelList.map((child) => ({
                    key: child.id,
                    label: child.menu_name,
                    title: child.menu_name
                }));
            }
            menuItems.value.push(query);
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
});
const handleClick = () => {
    console.log(111);
};
</script>

<template>
    <div class="wrap">
        <div class="con-main-wrap">
            <a-menu
                style="width: 230px"
                mode="inline"
                :items="menuItems"
                @click="handleClick"
            ></a-menu>
            <div class="right-wrap">
                <div class="add-menu">
                    <a-button type="primary">添加菜单测试</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.con-main-wrap {
    .flex-row;
    justify-content: space-between;
    padding-top: 20px;
    .right {
    }
}
</style>
