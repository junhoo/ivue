const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('yi-tabs', Tabs)
Vue.component('yi-tabs-head', TabsHead)
Vue.component('yi-tabs-body', TabsBody)
Vue.component('yi-tabs-item', TabsItem)
Vue.component('yi-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <yi-tabs selected="finance">
        <yi-tabs-head>
          <yi-tabs-item name="woman"> 美女 </yi-tabs-item>
          <yi-tabs-item name="finance"> 财经 </yi-tabs-item>
          <yi-tabs-item name="sports"> 体育 </yi-tabs-item>
        </yi-tabs-head>
        <yi-tabs-body>
          <yi-tabs-pane name="woman"> 美女相关资讯 </yi-tabs-pane>
          <yi-tabs-pane name="finance"> 财经相关资讯 </yi-tabs-pane>
          <yi-tabs-pane name="sports"> 体育相关资讯 </yi-tabs-pane>
        </yi-tabs-body>
      </yi-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
}) 