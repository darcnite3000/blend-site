import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import particles from './particles.json'
import 'particles.js'
import './app.css'

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

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
        <div id="particles" />
        {this.pages.map((page, i) => (
          <div key={i} class="page" id={`page-${page}`}>
            <div>
              <h1>Page {page}</h1>
              <a href="#">To Top</a>
            </div>
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
    this.$nextTick(this.addParticles)
  },
  methods: {
    addParticles() {
      this.$particles('particles', particles)
    },
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
