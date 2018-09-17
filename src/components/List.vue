<template>
  <div class="list">
    <mu-flex class="list-wrapper" :style="{height: $root.currentInnerHeight - 84 + 'px'}" align-items="start">
      <mu-flex class="note-title">
        <mu-list>
          <mu-list-item button v-for="item in $root.noteList" :key="item.updateAt" @click="updateNoteId(item.id)" :style="getStyle(item.id)">
            <mu-list-item-title>{{item.title}}</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-flex>
      <mu-flex class="note-content">
        <div v-if="!!$root.currentNoteContent.id">
          <input :value="$root.currentNoteContent.content" type="text" class="content-input" @change="contentChange"/>
        </div>
        <div v-else class="bg-box">
          <p class="note-mark">{{$root.noteList.length}}篇笔记</p> 
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
        width: 100%;
        height: 100%;
        .content-input {
          &:focus {
            border: none;
            outline-offset: 0;
            outline-color: #fff;
          }
        }
        .bg-box {
          width: 100%;
          height: 100%;
          background: no-repeat center url('../assets/maple.svg');
          opacity: .4;
          position: relative;
          .note-mark {
            position: absolute;
            bottom: 50px;
            width: 100%;
            text-align: center;
          }
        }
     }
   }
 }
</style>
