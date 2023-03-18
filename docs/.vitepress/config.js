import { defineConfig } from "vitepress";

export default defineConfig({
  // site-level options
  title: "前端八股文",
  description: "前端领域的各种问题",
  themeConfig: {
    footer: {
      message: "使用 Vitepress 强力构建",
      copyright: "Copyright © 2023-present Funkun",
    },
    nav: [
        { text: '基础', link: '/guide' },
        { text: '框架', link: '/config' },
        { text: '网络', link: '/config' },
        { text: '安全', link: '/config' },
    ]
  },
});
