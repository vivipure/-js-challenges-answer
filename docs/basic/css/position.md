---
title: position
lang: zh-CN
---

# position

> https://developer.mozilla.org/en-US/docs/Web/CSS/position

## static
默认值，`top`,`left`,`right`,`bottom` 和 `z-index` 属性不生效


## relative
`top` 等偏移是相对自身的偏移，在页面中实际占用空间与 `static` 一致

`z-index` 不为 `auto` 时，会创建一个新的层叠上下文

## absolute

会脱离正常的文档流，并相对其定位上下文进行定位（ `position` 不为 `static` 的祖先元素）


`z-index` 不为 `auto` 时，会创建一个新的层叠上下文

## fixed

会脱离正常的文档流, 并相对相对于 `viewport` 进行定位。当祖先元素存在 `transform` 时，会以该祖先元素作为定位上下文

始终会创建一个新的层叠上下文

## sticky

在正常的文档流中进行定位， 根据偏移的值，相对于离其最近的滚动祖先和定位块（最近的块级祖先）进行偏移

始终会创建一个新的层叠上下文， 依赖的滚动祖先并不要求实际滚动，只要有滚动机制即可（ `overflow` 为 `hidden`, `scroll`, `auto`,`overlay`)


