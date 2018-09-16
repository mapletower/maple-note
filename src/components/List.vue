<template>
  <div class="list">
    <mu-flex class="list-wrapper" align-items="center">
      <mu-flex class="note-title">
        <mu-list>
          <mu-list-item button v-for="item in $root.noteList" :key="item.updateAt" @click="updateNoteId(item.id)" :style="getStyle(item.id)">
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-flex>
      <mu-flex class="note-content">
        <div v-if="!!$root.currentNoteContent.id">
          <!-- {{$root.currentNoteContent}} -->
          <input :value="$root.currentNoteContent.content" type="text" class="content-input" @change="contentChange"/>
        </div>
        <div v-else>
          <div>一个很酷的枫叶图片</div>
          {{$root.noteList.length}}篇笔记
        </div>
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
  },
  methods: {
    updateNoteId (id) {
      this.$root.currentNoteId = id
    },
    getStyle (id) {
      return {
        'background': this.$root.currentNoteId == id ? this.$root.color[1] : 'transparent'
      }
    },
    contentChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
 .list {
   .list-wrapper {
     .note-title {
       min-width: 200px;
       border-right: 1px solid #b0bec5;
     }
     .note-content {
       margin: 10px;
       .content-input {
         &:focus {
           border: none;
           outline-offset: 0;
           outline-color: #fff;
         }
         width: 100%;
         height: 100%;
       }
     }
   }
 }
</style>
