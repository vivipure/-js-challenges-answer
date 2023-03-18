---
title: 标签
lang: zh-CN
---

# SEO

SEO(搜索引擎优化)，通过网站内容和结构的优化，提高网站在搜索引擎的排名

## 如何做SEO

### 代码层面

1. HTML 标签语义化
2. 图片标签设置 alt
3. 优先使用静态页面方便爬虫爬取，SPA 应用可以使用SSG,SSR 等技术进行预渲染

### 网站描述

使用meta 标签  keywords 和 description 描述页面的具体信息
```html
<meta  name="description" content="...">

<meta  data-hid="keywords" name="keywords" content="...">
```
关键词和描述 需要尽可能准确，精简

### 其他

1. 网站目录设置 sitemap.xml ，标识网站存在的所有链接路径
2. 设置 Robot.txt, 设置爬虫爬取的规则


## 工具

1. lighthouse 

Chrome Devtools 中可以使用 lighthouse 测量网站的 SEO 得分，可以根据给出的提示，优化相关代码

2. 百度站长工具

https://ziyuan.baidu.com/ 可以到百度站长页面主动去提交收录

