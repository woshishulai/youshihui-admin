<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getImageUrl } from '@/utils';
const router = useRouter();
const route = useRoute();
const props = defineProps({});
onMounted(() => {});
const value1 = ref();
const list = ref([
    {
        title: '现有订单',
        value: '15',
        icon: ''
    },
    {
        title: '待审核收款',
        value: '2',
        icon: ''
    },
    {
        title: '待处理申诉',
        value: '2',
        icon: ''
    },
    {
        title: '带发放退款',
        value: '1',
        icon: ''
    },
    {
        title: '待处理转结',
        value: '1',
        icon: ''
    }
]);
</script>

<template>
    <div class="wrap">
        <div class="card">
            <div class="title">待办事项</div>
            <div class="card-list">
                <div class="card-item" v-for="(item, index) in list" :key="index">
                    <p class="info">{{ item.title }}</p>
                    <p class="num">
                        <span>{{ item.value }}</span>
                        <i></i>
                    </p>
                </div>
            </div>
        </div>
        <div class="card biao">
            <div class="title">
                <p>报价/订单统计表</p>
                <div class="select">
                    <div class="time active">过去7天</div>
                    <div class="time">过去30天</div>
                    <div class="time">过去3个月</div>
                    <a-range-picker v-model:value="value1" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.wrap {
    padding: 24px 20px;
    background: #f2f2f2;
    .biao {
        margin-top: 16px;
        .title {
            .flex-row;
            justify-content: space-between;
            .select {
                .flex-row;
                gap: 10px;

                .time {
                    padding: 7px 10px;
                    background: #f2f2f2;
                    color: #333;
                    font-size: 14px;
                    cursor: pointer;
                    &.active {
                        background: #1677ff;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
