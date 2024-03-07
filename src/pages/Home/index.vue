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
    } catch (error) {
        console.log(error);
    }
});
const columns = [
    {
        title: '菜单名称',
        width: 100,
        fixed: 'left',
        dataIndex: 'menu_name',
        key: 'menu_name'
    },
    {
        title: '类型',
        width: 100,
        dataIndex: 'menu_type',
        key: 'menu_type'
    },
    {
        title: '排序',
        width: 100,
        dataIndex: 'sort',
        key: 'sort'
    },
    {
        title: '状态',
        width: 100,
        dataIndex: 'status',
        key: 'status    '
    },
    {
        title: 'WebUrl',
        width: 140,
        dataIndex: 'web_url',
        key: 'web_url'
    },
    {
        title: '图标地址',
        width: 140,
        dataIndex: 'ico_url',
        key: 'ico_url'
    },
    {
        title: '小图标样式  ',
        width: 100,
        dataIndex: 'ico_class',
        key: 'ico_class'
    },
    {
        title: '备注',
        width: 100,
        dataIndex: 'remark',
        key: 'remark'
    },
    {
        title: '操作',
        width: 200,
        fixed: 'right',
        dataIndex: 'change',
        key: 'change'
    }
];
const handleClick = () => {
    console.log(111);
};
</script>

<template>
    <div class="wrap">
        <div class="con-main-wrap">
            <a-button type="primary">添加菜单测试</a-button>
            <a-table :scroll="{ x: 1240, y: 1000 }" :dataSource="fetchData" :columns="columns">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'menu_name'">
                        <input v-model="record.menu_name" type="text" />
                    </template>
                    <template v-if="column.key === 'menu_type'">
                        <input v-model="record.menu_type" type="text" />
                    </template>
                    <template v-if="column.key === 'sort'">
                        <input v-model="record.sort" type="text" />
                    </template>
                    <template v-if="column.key === 'status'">
                        <input v-model="record.status" type="text" />
                    </template>
                    <template v-if="column.key === 'web_url'">
                        <input v-model="record.web_url" type="text" />
                    </template>
                    <template v-if="column.key === 'ico_url'">
                        <input v-model="record.ico_url" type="text" />
                    </template>
                    <template v-if="column.key === 'ico_class'">
                        <input v-model="record.ico_class" type="text" />
                    </template>
                    <template v-if="column.key === 'remark'">
                        <input v-model="record.remark" type="text" />
                    </template>
                    <template v-if="column.key === 'change'">
                        <a-button style="margin-right: 10px" type="primary">添加下级</a-button>
                        <a-button type="primary">编辑</a-button>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>

<style scoped lang="less">
.con-main-wrap {
    padding: 30px 0 0;
    .ant-table-wrapper {
        margin-top: 30px;
    }
    :deep(.ant-table-body) {
        min-height: 300px;
        input {
            width: 100%;
            padding: 10px 0;
            border: none;
            outline: none;
            border: 1px solid transparent;
            background: transparent;
            border-bottom: 1px solid #eee;
        }
    }
}
</style>
