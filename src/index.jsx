import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import './app.css'

Vue.use(KsVueScrollmagic)

new Vue({
  el: '#app',
  data() {
    return {
      pages: ['header', 1, 2, 3, 4]
    }
  },
  render() {
    return (
      <div id="app">
        {this.pages.map((page, i) => (
          <div key={i} class="page" id={`page-${page}`}>
            <h1>Page {page}</h1>
          </div>
        ))}
        <div class="viewport">
          <a href="#" class="findOut">
            Find Out More
          </a>
          <div class="navbar">
            {this.pages.map((page, i) => (
              <a href={`#page-${page}`} id={`nav-page-${page}`} key={i}>
                {page}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
    this.$nextTick(this.linkNavToggle)
  },
  methods: {
    linkNavToggle() {
      this.pages.forEach(page => {
        const scene = new this.$scrollmagic.Scene({
          triggerElement: `#page-${page}`,
          duration: '100%'
        }).setClassToggle(`#nav-page-${page}`, 'active')
        this.$ksvuescr.$emit('addScene', 'linkNavToggle', scene)
      })
    }
  }
})
