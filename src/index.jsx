import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import particles from './particles.json'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

new Vue({
  el: '#app',
  components: { ScrollTo },
  data() {
    return {
      pages: [1, 2, 3, 4, 5, 6]
    }
  },
  render() {
    return (
      <div id="app">
        <div id="particles" />
        <div class="page" id="page-header">
          <div>
            <h1>Page Header</h1>
          </div>
        </div>
        {this.pages.map((page, i) => (
          <div key={i} class="page" id={`page-${page}`}>
            <div>
              <h1>Page {page}</h1>
              <scroll-to>To Top</scroll-to>
            </div>
          </div>
        ))}
        <div class="foot" id="page-header">
          <div>
            <h1>Page Footer</h1>
          </div>
        </div>
        <scroll-to class="sitehelp">talk to us</scroll-to>
        <div class="navbar">
          {this.pages.map((page, i) => (
            <scroll-to href={`#page-${page}`} id={`nav-page-${page}`} key={i}>
              {page.toString().toUpperCase()[0]}
            </scroll-to>
          ))}
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
