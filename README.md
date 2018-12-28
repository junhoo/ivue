## yiz-ui 简易的 Vue UI 组件

[![Build Status](https://travis-ci.org/junhoo/ivue.svg?branch=master)](https://travis-ci.org/junhoo/ivue)

## 介绍
这是一个基础版的 Vue UI 框架

## 使用

1. 安装 yiz-test
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
    'yi-button': Button,
    'yi-icon': Icon
  }
}
```