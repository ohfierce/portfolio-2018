import newline from './newline/newline.vue'

export default {
  name: 'terminal',
  components: { newline },
  data () {
    return {
      sent_commands: ['']
    }
  },
  computed: {
    username() { return this.$store.state.username },
    isGit() { return this.$store.state.isGit }

  },
  created() {
    this.$on('createNewLine', val => {
      if (val) {
        this.sent_commands.push('')
      }
    })
  }
 
}