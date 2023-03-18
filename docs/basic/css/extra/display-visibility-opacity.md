---
title: CSS中的隐藏
lang: zh-CN
---

# CSS中的隐藏

1. display: none
2. visibility: hidden
3. opacity: 0

在平时开发时，隐藏元素有几种方式。在不同场景可以根据相关特性选择隐藏的方式。


|                          | display | visibility | opacity |
| ------------------------ | ------- | ---------- | ------- |
| 占据页面空间             | ❌      | ✅         | ✅      |
| 是否影响子元素设置该属性 | ✅      | ❌         | ✅      |
| 触发事件             | ❌      | ❌         | ✅      |
| 影响遮挡元素事件     | ❌      | ❌         | ✅      |
| transition               | ❌      | ✅         | ✅      |
| 回流 reflow          | ✅      | ❌         | ❌      |
| 重绘 repaint             | ✅      | ✅         | （不一定）[链接](https://segmentfault.com/q/1010000008983727)    | 