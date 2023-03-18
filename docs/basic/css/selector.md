---
title: 选择器
lang: zh-CN
---

# 选择器

> [CSS selectors - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

CSS 选择器规定了 CSS 规则会被应用到哪些元素上。

## 种类

1. id
2. class
3. 元素
4. 属性
5. 通配符
6. 群组 ( a,b)
7. 后代 (a  b)
8. 子选择器（a > b)
9. 相邻兄弟 （ a + b)
10. 相邻衍生兄弟 （ a ~ b)
11. 伪类

```jsx
- :first-child：匹配元素下的第一个元素
- :last-child：匹配元素下的最后一个元素
- :nth-child()：匹配元素下的第n个元素，(2n+1)代表基数，(2n)代表偶数
- first-of-type：匹配元素下的每一个标签类型的第一个
- :last-of-type：匹配元素下的每一个标签类型的最后一个
- :nth-of-type(n)：匹配元素下的每一个标签类型的第n个
- :link：未访问链接
- :visited：已访问链接
- :hover：鼠标放置上的链接
- :active：被激活时的状态
- :focus： 选中被激活的表单元素
- :checked：选中被勾选的表单元素
- :disabled：选中被禁用的表单元素
- :root：选中根节点
- :target：定位当前活动页面内定位点的目标元素
- :not(xx)：选中不为xx的元素
```

12. 伪元素选择器

```jsx
- ::before, ::after 额外元素
- ::first-line 首行
- ::first-letter 首字母
- ::selection：匹配突出显示的文字
```

## 权重

1. id 
2. class,伪类，属性 
3. 元素，伪元素 
4. 后代，相邻 
5. 通配符