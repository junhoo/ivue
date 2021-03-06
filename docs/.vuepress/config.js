module.exports = {
  base: '/ivue/',
  title: 'Yiz-UI',
  description: '一个简易的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/collapse',
          '/components/input',
          '/components/popover',
          '/components/tabs'
        ]
      },

     ]
  }
}