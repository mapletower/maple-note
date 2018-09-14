<template>
  <div class="list">
    <mu-flex class="list-wrapper" align-items="center">
      <mu-flex class="note-title">
        <mu-list>
          <mu-list-item button v-for="item in $root.dataList" :key="item.updateAt" @click="currentContent = item.content, currentTitle = item.title">
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-flex>
      <mu-flex class="note-content" fill>
        {{currentContent}}
      </mu-flex>
    </mu-flex>
  </div>
</template>
<script>

export default {
  data () {
    return {
      name: 'list',
      currentTitle: '',
      currentContent: ''
    }
  },
  mounted () {
    // console.log(this.$root.dataList)
  }
}
</script>

<style lang="less" scoped>
 .list {
   margin: 10px;
   .list-wrapper {
     .note-title {
       width: 200px;
       border-right: 1px solid #b0bec5;
       margin-right: 10px;
     }
     .note-content {
       margin: 10px;
     }
   }
 }
</style>
