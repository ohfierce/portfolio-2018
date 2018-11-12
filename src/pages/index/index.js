import intro from '@/components/intro/intro.vue'

import terminal from '@/components/terminal/terminal.vue'

import stack from '@/components/stack/stack.vue'

import grafental from '@/components/grafental/grafental.vue'


export default {
  name: 'index',
  components: { 
    intro,
    terminal,
    stack, 
    grafental
  },
  data () {
    return {
      options: {
        menu: '#menu',
        anchors: ['intro', 'stack', 'terminal'],

        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
      }
    }
  }

}