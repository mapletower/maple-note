import hljs from 'highlight.js'
import marked from 'marked'

hljs.initHighlightingOnLoad()

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  highlight: code =>  hljs.highlightAuto(code).value
})

export default {
  name: 'markdown',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {
    init () {
      // const { autoSave, interval, theme, initialValue, mode } = this
      // this.value = initialValue
      // this.preview = mode
      // this.previewMarkdown = marked(initialValue, {
      //   sanitize: true
      // });
      // if (autoSave) {
      //   this.timerId = setInterval(() => {
      //     this.handleSave()
      //   }, interval)
      // }
    }
  },
  computed: {
    value () {
      return marked(this.content)
    }
  }
}