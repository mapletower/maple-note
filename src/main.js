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
      currentNoteId: '',
      currentDustbinId: '',
      dataList: [
        {
          id: 1,
          createAt: '2018年09月14日17:21:32',
          updateAt: '2018年09月14日17:233:44',
          title: '注意事项1',
          content: '今1111',
          del: 0
        },
        {
          id: 2,
          createAt: '2018年09月14日17:21:32',
          updateAt: '2018年09月14日17:23331:44',
          title: '注意事项2',
          content: '今2222',
          del: 1
        },
        {
          id: 3,
          createAt: '2018年09月14日17:21:32',
          updateAt: '2018年09月14日17:21111:44',
          title: '注意事项3',
          content: '今3333',
          del: 1
        },
      ],
      color: ['#607d8b', '#b0bec5']
    }
  },
  computed: {
    routeName () {
      return this.routeNameMap[this.route]
    },
    noteList () {
      return this.dataList.filter(item => !!item.del)
    },
    dustbinList () {
      return this.dataList.filter(item => !item.del)
    },
    currentNoteContent () {
      return this.noteList.find(item => item.id === this.currentNoteId) || {}
    },
    currentDustinContent () {
      return this.dustbinList.find(item => item.id === this.currentDustbinId) || {}
    },
  }
}).$mount('#app')
