export function sidebarHTMLAndCSS() {
  return [
    {
      text: "HTML",
      collapsed: false,
      items: [
        { text: "什么是HTML?", link: "/html/index" },
        { text: "标签", link: "/html/element" },
        { text: "SEO", link: "/html/seo" },
        { text: "Deploy", link: "/html/deploy" },
      ],
    },
    {
      text: "CSS",
      collapsed: false,
      items: [
        { text: "什么是CSS？", link: "/html/markdown" },
        { text: "定位", link: "/html/asset-handling" },
        { text: "盒模型", link: "/html/frontmatter" },
        { text: "flex 布局", link: "/html/using-vue" },
        { text: "grid 布局", link: "/html/i18n" },
        { text: "z-index", link: "/html/i18n" },
      ],
    },
    {
      text: "Experimental",
      collapsed: false,
      items: [
        {
          text: "MPA Mode",
          link: "/html/mpa-mode",
        },
      ],
    },
    {
      text: "Config & API Reference",
      link: "/reference/site-config",
    },
  ];
}
