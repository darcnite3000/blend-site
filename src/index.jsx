import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import Mousey from './Mousey'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

new Vue({
  el: '#app',
  data() {
    return {
      pages: [1, 2, 3, 4, 5, 6]
    }
  },
  render() {
    return (
      <div id="app">
        <Particles />
        <div class="page" id="page-header">
          <h1>
            powerfully simple. simply powerful.<br />
            we’re making it easier to feel connected to your insurance.
          </h1>
        </div>
        {this.pages.map((page, i) => (
          <div key={i} class="page" id={`page-${page}`}>
            <h1>Page {page}</h1>
            <ScrollTo>To Top</ScrollTo>
          </div>
        ))}
        <div class="foot" id="page-header">
          <h1>Page Footer</h1>
        </div>
        <ScrollTo class="sitehelp">talk to us</ScrollTo>
        <div class="navbar">
          {this.pages.map((page, i) => (
            <ScrollTo href={`#page-${page}`} id={`nav-page-${page}`} key={i}>
              {page.toString().toUpperCase()[0]}
            </ScrollTo>
          ))}
        </div>
        <Mousey />
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
    this.$nextTick(this.setupScenes)
  },
  methods: {
    setupScenes() {
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
