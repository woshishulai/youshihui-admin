<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const loading = ref(false);
const formState = ref({
    id: '',
    name: ''
});
const onFinish = (values) => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const dataSource = ref([
    {
        key: '1',
        ID: '1',
        shopname: '店铺名称',
        workname: '公司名称',
        createTime: '创建时间',
        endName: '截至时间'
    }
]);
for (let i = 0; i < 100; i++) {
    dataSource.value.push({
        key: i,
        ID: i,
        shopname: '店铺名称',
        workname: '公司名称',
        createTime: '创建时间',
        endName: '截至时间'
    });
}
const columns = [
    {
        title: 'ID',
        width: 100,
        dataIndex: 'ID',
        key: 'ID'
    },
    {
        width: 100,
        title: '店铺名',
        dataIndex: 'shopname',
        key: 'shopname'
    },
    {
        title: '公司名',
        width: 100,
        dataIndex: 'workname',
        key: 'workname'
    },
    {
        title: '创建时间',
        width: 100,
        dataIndex: 'createTime',
        key: 'createTime'
    },
    {
        width: 100,
        title: '截至时间',
        dataIndex: 'endName',
        key: 'endName'
    },
    {
        width: 100,
        title: '公司名',
        dataIndex: 'workname',
        key: 'workname'
    },
    {
        width: 100,
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
    },
    {
        width: 100,
        title: '截至时间',
        dataIndex: 'endName',
        key: 'endName'
    },
    {
        width: 100,
        title: '公司名',
        dataIndex: 'workname',
        key: 'workname'
    },
    {
        width: 100,
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
    },
    {
        width: 100,
        title: '截至时间',
        dataIndex: 'endName',
        key: 'endName'
    },
    {
        width: 100,
        title: '公司名',
        dataIndex: 'workname',
        key: 'workname'
    },
    {
        width: 100,
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime'
    },
    {
        width: 100,
        title: '截至时间',
        dataIndex: 'endName',
        key: 'endName'
    },
    {
        width: 100,
        title: '公司名',
        dataIndex: 'workname',
        key: 'workname'
    }
];
</script>

<template>
    <div class="wrap">
        <div class="header-page">
            <p><span>店铺管理</span>/ <span>店铺列表</span></p>
            <div class="title">店铺列表</div>
        </div>
        <div class="cen-wrap">
            <div class="top">
                <a-form
                    :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 18 }"
                    :model="formState"
                    name="basic"
                    layout="inline"
                    autocomplete="off"
                    @finish="onFinish"
                    @finishFailed="onFinishFailed"
                >
                    <a-form-item label="ID" name="id">
                        <a-input v-model:value="formState.id" placeholder="请输入" />
                    </a-form-item>

                    <a-form-item label="店铺名" name="name">
                        <a-input v-model:value="formState.name" placeholder="请输入" />
                    </a-form-item>
                    <a-form-item label="公司名" name="name">
                        <a-input v-model:value="formState.name" placeholder="请输入" />
                    </a-form-item>
                    <a-form-item label="创建时间" name="name">
                        <a-range-picker />
                    </a-form-item>
                    <a-form-item label="状态">
                        <a-select>
                            <a-select-option value="demo">Demo</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 6, span: 18 }">
                        <div class="btns">
                            <a-button html-type="submit">重置</a-button>
                            <a-button :loading="loading" type="primary" html-type="submit"
                                >查询</a-button
                            >
                            <p class="show">{{ '展开' }} <i class="iconfont icon-down"></i></p>
                        </div>
                    </a-form-item>
                </a-form>
            </div>
            <div class="table-list">
                <a-table
                    :data-source="data"
                    :scroll="{ x: 900 }"
                    :dataSource="dataSource"
                    :columns="columns"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    .cen-wrap {
        background: #f2f2f2;
        padding: 26px 20px;
        .top {
            // width: 900px;
            padding: 20px 10px;
            background: #fff;
            .ant-form {
                .flex-row;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 100%;
                .ant-form-item {
                    width: 290px;
                    margin: 10px 0;
                }
                .btns {
                    .flex-row;
                    justify-content: space-between;
                    gap: 6px;
                    .show {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        width: 66px;
                        line-height: 32px;
                        text-align: center;
                        cursor: pointer;
                        color: #1677ff;
                        i {
                            font-size: 6px;
                            font-weight: 600;
                            color: #1677ff;
                            width: 8px;
                        }
                    }
                }
            }
        }
        .table-list {
            margin-top: 26px;
            padding: 30px 20px;
            background: #fff;
        }
    }
}
</style>
