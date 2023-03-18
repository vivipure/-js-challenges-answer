import { defineConfig } from "vitepress";
import { sidebarHTMLAndCSS } from "./HTMLAndCSSSidebar";

export default defineConfig({
  title: "前端八股文",
  description: "前端领域的各种问题",
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }]
  ],
  themeConfig: {
    footer: {
      message: "使用 Vitepress 强力构建",
      copyright: "Copyright © 2023-present Funkun",
    },
    nav: [
        { text: 'HTML/CSS', link: '/html/index',activeMatch: '/html' },
        { text: 'JS/TS', link: '/javscript/index',activeMatch: '/javscript' },
        { text: '框架', link: '/framework' },
        { text: '网络', link: '/network' },
    ],
    sidebar: {
        '/html/': sidebarHTMLAndCSS()
    }
  },
});
