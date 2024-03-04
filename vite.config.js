import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": new URL("src", import.meta.url).pathname,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/mixin.less";',
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#034078",
          "@link-color": "#034078",
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://yshapi.sc798.com/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/admin": {
        target: "https://dm.sc798.com/service",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/admin/, ""),
      },
    },
  },
});
