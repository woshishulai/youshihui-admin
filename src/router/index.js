import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
const navList = [
    {
        path: '/shuju',
        meta: {
            name: '数据报告'
        },
        component: () => import('@/pages/ShuJu/index.vue')
    },
    {
        path: '/dianpu',
        meta: {
            name: '店铺管理'
        },
        component: () => import('@/pages/DianPu/index.vue')
    },
    {
        path: '/fuwu',
        meta: {
            name: '服务管理'
        },
        component: () => import('@/pages/FuWu/index.vue')
    },
    {
        path: '/dingdan',
        meta: {
            name: '订单管理'
        },
        component: () => import('@/pages/DingDan/index.vue')
    },
    {
        path: '/baojia',
        meta: {
            name: '报价管理'
        },
        component: () => import('@/pages/BaoJia/index.vue')
    },
    {
        path: '/shoukuan',
        meta: {
            name: '收款管理'
        },
        component: () => import('@/pages/ShouKuan/index.vue')
    },
    {
        path: '/kehu',
        meta: {
            name: '客户管理'
        },
        component: () => import('@/pages/KeHu/index.vue')
    },
    {
        path: '/pinglun',
        meta: {
            name: '评论管理'
        },
        component: () => import('@/pages/PingLun/index.vue')
    },
    {
        path: '/jiezhuan',
        meta: {
            name: '结转管理'
        },
        component: () => import('@/pages/JieZhuan/index.vue')
    },
    {
        path: '/app',
        meta: {
            name: 'APP管理'
        },
        component: () => import('@/pages/Admin/index.vue')
    },
    {
        path: '/neirong',
        meta: {
            name: '内容管理'
        },
        component: () => import('@/pages/NeiRong/index.vue')
    },
    {
        path: '/account',
        meta: {
            name: '账号管理'
        },
        component: () => import('@/pages/ZhangHao/index.vue'),
        children: [
            {
                path: 'neibu',
                meta: {
                    name: '内部账号'
                },
                component: () => import('@/pages/ZhangHao/NeiBu.vue')
            },
            {
                path: 'shangjia',
                meta: {
                    name: '商家账号'
                },
                component: () => import('@/pages/ZhangHao/ShangJia.vue')
            }
        ]
    }
];
const routesss = [
    {
        path: '',
        redirect: '/shuju'
        // component: () => import('@/pages/Home/index.vue')
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/index.vue')
    },
    {
        path: '/change-password',
        component: () => import('@/pages/ChangePassword/index.vue')
    },
    {
        path: '/admin-login',
        component: () => import('@/pages/AdminLogin/index.vue')
    },
    {
        path: '/user',
        meta: {
            name: '个人设置'
        },
        component: () => import('@/pages/User/index.vue')
    }
];
const routes = [...routesss, ...navList];
const router = createRouter({
    // history: createWebHistory(),
    history: createWebHashHistory(),
    routes,
    // 路由滚动行为定制
    scrollBehavior() {
        return {
            top: 0
        };
    }
});
export default router;
export { navList };
