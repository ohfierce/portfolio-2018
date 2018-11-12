export default {
  name: 'newline',
  props: ['command'],
  data () {
    return {
      hasBeenSubmitted: false,
      newCommand: null,
      response: null,
      response_prefix: 'zsh: ',
      id: null,
      currentDirectory: '~/project'
    }
  },
  created () {
    this.generateId()
  },
  mounted () {
    document.getElementById(this.id).focus();
    // this.$refs.newline_input.$el.focus()
  },
  computed: {
    isGit() { return this.$store.state.isGit }
  },
  methods: {
    generateId() {
      this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    },
    submitCommand() {
      this.hasBeenSubmitted = true
      if(this.newCommand === '' || this.newCommand === null) {
        this.response = this.response_prefix + 'Unrecognized input'
      } else {
        this.computeCommand(this.newCommand)
      }
      this.$parent.$emit('createNewLine',true)
    },
    computeCommand(string) {

      let cmd = string.substring(0,string.indexOf(' '));
      let args = string.substr(string.indexOf(' ')+1);
      if(cmd === 'cd') {
        this.response = this.response_prefix + ' The directory ' + args + ' does not exist'
      } else if (cmd === 'su') {
        if (args === 'root' || args === 'guest') {
          this.$store.commit('updateUsername', args)
        } else {
          this.response = this.response_prefix + 'Sorry'
        }
      } else if (cmd === 'say') {
        this.response = this.response_prefix + args
      } else if (cmd === 'git') {
        this.handleGitCmd(args)
      } else if (cmd === 'whoami') {
        this.response = 'insert response here'
      } else {
        this.response = this.response_prefix + ' command not found: ' + string
      }
    },
    handleGitCmd(args) {
      if( args === 'init' ) {
        if ( ! this.isGit ) {
          this.$store.commit('toggleGit')
        }
        this.response = this.response_prefix + ' Initialized empty git repostiory in ' + this.currentDirectory
      } else if ( args === 'rm' ) {
        if ( this.isGit ) {
          this.$store.commit('toggleGit')
        }
      } else if ( args === 'status' ) {
        if ( this.isGit ) {

        } else {
          this.response = this.response_prefix + ' Not a git repository (or any of the parent directories): .git'
        }
      } else {
        // undefined comment
      }
    }
  }
}