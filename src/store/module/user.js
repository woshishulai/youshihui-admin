import { ref } from 'vue';
import { defineStore } from 'pinia';
const getStoreUserInfo = () => {
    const storeUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    return storeUserInfo === null || storeUserInfo === undefined ? {} : storeUserInfo;
};
export const useUserInfo = defineStore(
    'userInfos',
    () => {
        //个人信息
        const userInfo = ref(getStoreUserInfo());
        const changeUserInfo = async (params) => {
            userInfo.value = Object.assign({}, userInfo.value, params);
            console.log('更新的用户个人信息', userInfo.value);
        };
        const removeUserInfo = async () => {
            userInfo.value = {};
        };
        return {
            userInfo,
            changeUserInfo,
            removeUserInfo
        };
    },
    {
        persist: {
            enabled: true // true 表示开启持久化保存
        }
    }
);
