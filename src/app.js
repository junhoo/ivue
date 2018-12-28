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

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: ['2', '1']
  },
  created(){
  },
  methods: {
    yyy (data) {
      console.log('yyy')
    },
    inputChange (e) {
      console.log(e)
    }
  }
})
