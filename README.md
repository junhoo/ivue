## yiz-ui 简易的 Vue UI 组件

[![Build Status](https://travis-ci.org/junhoo/ivue.svg?branch=master)](https://travis-ci.org/junhoo/ivue)

## 介绍
这是一个基础版的 Vue UI 框架

## 使用

1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box
   ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。
   你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。
 2. 安装 yiz-test
  ```
  npm i --save yiz-test
  ```
3. 引入 yiz-test
  ```
  import {Button, ButtonGroup, Icon} from 'yiz-test'
  import 'yiz-test/dist/index.css'
  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```