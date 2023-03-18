export function sidebarHTMLAndCSS() {
  return [
    {
      text: "HTML",
      collapsed: false,
      items: [
        { text: "什么是HTML?", link: "/basic/html/index" },
        { text: "标签", link: "/basic/html/element" },
        { text: "SEO", link: "/basic/html/seo" },
      ],
    },
    {
      text: "CSS",
      collapsed: false,
      items: [
        { text: "什么是CSS？", link: "/basic/css/index" },
        { text: "position", link: "/basic/css/position" },
        { text: "选择器", link: "/basic/css/selector" },
        { text: "盒模型", link: "/basic/css/borderbox" },
        { text: "flex 布局", link: "/basic/css/flex" },
        { text: "grid 布局", link: "/basic/css/grid" },
        { text: "z-index", link: "/basic/css/zindex" },
        { text: "BFC", link: "/basic/css/bfc" },
        { text: "float", link: "/basic/css/bfc" },
        {
          text: "其他",
          collapsed: false,
          items: [{ text: "CSS中的隐藏", link: "/basic/css/extra/display-visibility-opacity" }],
        },
      ],
    },
  ];
}
