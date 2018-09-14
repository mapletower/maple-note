<template>
  <div id="app">
    <mu-appbar style="width: 100%;" :color="color">
      <mu-button icon slot="left" @click="open = true">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      MAPLE
    </mu-appbar>
    <List v-show="route == 'list'"/>
    <Dustbin v-show="route == 'dustbin'"/>
    <mu-drawer :open.sync="open" :docked="docked" :right="false" :width="150">
      <mu-list>
        <mu-list-item button @click="route = 'list', open = false" :style="{'background': route == 'list' ? color1 : 'transparent'}">
          <mu-list-item-title>笔记</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="route = 'dustbin', open = false" :style="{'background': route == 'dustbin' ? color1 : 'transparent'}">
          <mu-list-item-title>垃圾箱</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
import List from './components/List.vue'
import Dustbin from './components/Dustbin.vue'

export default {
  name: 'app',
  components: {
    List,
    Dustbin
  },
  data () {
    return {
      route: 'list',
      open: false,
      docked: false,
      color: '#607d8b',
      color1: '#b0bec5',
      dataList: [
        {
          createAt: '2018年09月14日17:21:32',
          updateAt: '2018年09月14日17:21:44',
          title: '今日注意事项',
          content: '今天要写一点很快乐的事情'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
