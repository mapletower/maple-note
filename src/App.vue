<template>
  <div id="app">
    <mu-appbar style="width: 100%;" :color="$root.color[0]">
      <mu-button icon slot="left" @click="open = true">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      {{$root.routeName}}
    </mu-appbar>
    <List v-show="$root.route == 'list'"/>
    <Dustbin v-show="$root.route == 'dustbin'"/>
    <mu-drawer :open.sync="open" :docked="docked" :right="false" :width="150">
      <mu-list :style="{'padding-right': '5px'}">
        <mu-list-item button @click="$root.route = 'list', open = false" :style="getStyle('list')">
          <mu-list-item-title>笔记</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="$root.route = 'dustbin', open = false" :style="getStyle('dustbin')">
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
      open: false,
      docked: false
    }
  },
  methods: {
    getStyle (route) {
      return {
        'background': this.$root.route == route ? this.$root.color[1] : 'transparent'
      }
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
