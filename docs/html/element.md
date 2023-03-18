---
title: 标签
lang: zh-CN
---

# 标签

## 行内标签


## 块级标签

## 特殊标签


## 自闭标签

## meta 标签

`<meta>` 标签一般用来标注页面的信息，例如 viewport,网络请求等。


## script 标签

`script` 加载 JS 脚本
```html
<script src="main.js"></script>
```
也可以在标签内部直接编写 JS 代码
```html
<script>
    ...
</script>
```
除了加载JS外，script 标签也可以用来存储数据，标识 type 后,浏览器不会渲染内部内容，可以通过DOM获取内部数据，常用来存储 JSON数据
```html
<script type="application/json" id="someData">
    ...
</script>
```
### 加载问题

### async 和 defer




## link 标签

