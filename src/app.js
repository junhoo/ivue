import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'
import CascaderItem from './cascader-item'

Vue.component('yi-button', Button)
Vue.component('yi-icon', Icon)
Vue.component('yi-button-group', ButtonGroup)
Vue.component('yi-input', Input)
Vue.component('yi-tabs', Tabs)
Vue.component('yi-tabs-head', TabsHead)
Vue.component('yi-tabs-body', TabsBody)
Vue.component('yi-tabs-item', TabsItem)
Vue.component('yi-tabs-pane', TabsPane)
Vue.component('yi-popover', Popover)
Vue.component('yi-collapse', Collapse)
Vue.component('yi-collapse-item', CollapseItem)
Vue.component('yi-cascader', Cascader)
Vue.component('yi-cascader-item', CascaderItem)
new Vue({
  el: '#app',
  data: {
    source: [{
      name: '广东',
      children: [
        {
          name: '广州',
          children: [
            {name: '天河'},
            {name: '珠江'},
            {name: '番禺'},
          ]
        },
        {
          name: '深圳',
          children: [
            {name: '罗湖'},
            {name: '福田'},
            {name: '南山'},
          ]
        },
      ]
    }, {
      name: '福建',
      children: [
        {
          name: '福州',
          children: [
            {name: '鼓楼'},
            {name: '台江'},
            {name: '仓山'},
          ]
        },
      ]
    }, {
      name: '安徽',
      children: [{
        name: '合肥',
        children: [{
          name: '瑶海'
        }, {
          name: '庐阳'
        }]
      }]
    }]
  },
  created(){
  },
  methods: {
  }
})
