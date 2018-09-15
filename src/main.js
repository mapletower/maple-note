import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
const MuseUI = require('muse-ui')

import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

Vue.use(MuseUI)

new Vue({
  render: h => h(App),
  data () {
    return {
      route: 'list',
      routeNameMap: {
        list: '笔记',
        dustbin: '垃圾箱'
      },
      dataList: [
        {
          createAt: '2018年09月14日17:21:32',
          updateAt: '2018年09月14日17:21:44',
          title: '今日注意事项',
          content: '今天要写一点很快乐的事情'
        }
      ],
      color: ['#607d8b', '#b0bec5']
    }
  },
  computed: {
    routeName () {
      return this.routeNameMap[this.route]
    }
  }
}).$mount('#app')
