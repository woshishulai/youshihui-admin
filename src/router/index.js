import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routes = [
  {
    path: "",
    component: () => import("@/pages/Home/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/Login/index.vue"),
  },
  {
    path: "/change-password",
    component: () => import("@/pages/ChangePassword/index.vue"),
  },
  {
    path: "/admin-login",
    component: () => import("@/pages/AdminLogin/index.vue"),
  },
];
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});
export default router;
