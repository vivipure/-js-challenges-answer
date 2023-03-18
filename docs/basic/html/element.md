---
title: 标签
lang: zh-CN
author: funkun
---

# 标签

标签是 HTML 组成组成的基本单位，标记了整个页面的内容和布局。

标签中标签名和属性名不区分大小写，属性值是区分大小写的

## 块级标签

常见的 `div`,`p`标签是块级标签，即 `display: block`

1. 可以设置宽高和边距
2. 独占一行
3. 宽度默认为父元素的宽度，高度由内容而定

## 行内标签

行内标签 是指 `display: inline` 的标签

1. 不可设置宽高，不可设置上下边距，可设置左右边距和内边距
2. 具体尺寸由内容进行填充
3. 可以于其他 行内标签共处一行

行内块标签 ， `display: inline-block`的标签，例如 `img`, `input` 

1. 可以和其他行内标签共处一行
2. 可以设置宽高和边距

## 可替换元素
> https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element

可替换元素（replaced element）的展现效果不是由 `CSS` 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 `CSS` 的。

简单来说，它们的内容不受当前文档的样式的影响。`CSS` 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。

可替换标签有： 
1. img
2. iframe
3. video
4. embed
5. image 类型的 input



## 自闭标签

一般的标签都由开始标记和结束标记组合而成，如 `div`,称为闭合标签

```html
<div></div>
```
标签中存在单个标签的情况，叫做自闭标签或者空标签
```html
<meta >
<br />
<hr />
<img />
<input />
<link >
<embed />
<source />
```

## meta 标签

`<meta>` 标签一般用来标注页面的信息，例如 `viewport`, 网络请求等。

```html
<!-- 描述 -->
<meta  name="description" content="...">
<!-- 关键词 -->
<meta  name="keywords" content="...">
<!-- 编码 -->
<meta charset="UTF-8">
<!-- viewport -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 作者信息 -->
<meta name="author" content="aaa@mail.abc.com">
<!-- 优先使用最新版本 IE 和 Chrome -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!-- 设置缓存 -->
<meta http-equiv="pragma" content="no-cache">

```

## script 标签

`script` 加载 `JS` 脚本
```html
<script src="main.js"></script>
```
也可以在标签内部直接编写 `JS` 代码
```html
<script>
    ...
</script>
```
除了加载 `JS` 外，`script` 标签也可以用来存储数据，标识 `type` 后,浏览器不会渲染内部内容，可以通过 `DOM` 获取内部数据，常用来存储 `JSON` 数据
```html
<script type="application/json" id="someData">
    ...
</script>
```
### 加载

`script` 的加载会阻塞 `DOM` 的渲染，内部脚本执行时，无法获取到 当前标签后面的 `DOM`

### async 和 defer

通过在 `script` 上设置 `async` 或者 `defer`, 可以异步加载 `JS`

`async` 会在 `JS` 加载完成后立即执行, 执行时机不跟随 `script` 脚本顺序，先加载，先执行

`defer` 也是异步加载，但是会在文档加载完成（DOMContentLoaded）前再执行。而且 `defer` 会按照脚本的顺序进行执行



## link 标签

> https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link

`link` 标签常用来加载资源
```html
<!-- 加载CSS -->
<link  rel="stylesheet" href="./main.css" />
<!-- 加载网站图标 -->
<link rel="icon" href="favicon.ico">
<!-- 针对不同平台的图标 -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png">
<!-- 通过媒体查询加载css -->
<link href="print.css" rel="stylesheet" media="print">
<link href="mobile.css" rel="stylesheet" media="all">
```
`link` 加载时，会触发自身的 `onload` 事件，报错时触发 `onerror` 事件


`link` 也可以用来预加载一些其他资源,例如JS，字体类，通过 `as` 进行指定， `as` 可以影响加载的优先级

```HTML
<link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous">
```

### preload 

`preload` 指定了当前页面必需的资源，浏览器必定会加载.

预加载时，不会阻塞渲染，和 `document.onload` 事件

### prefetch

`prefetch` 常用于指定接下来页面所需要的资源，加载优先级很低，



