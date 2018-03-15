import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import particles from './particles.json'
import smoothscroll from 'smoothscroll-polyfill'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

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
              <a href="#" on-click={this.smoothScrollTo}>
                To Top
              </a>
            </div>
          </div>
        ))}
        <div class="viewport">
          <a href="#" class="findOut" on-click={this.smoothScrollTo}>
            Find Out More
          </a>
          <div class="navbar">
            {this.pages.map((page, i) => (
              <a
                href={`#page-${page}`}
                id={`nav-page-${page}`}
                key={i}
                on-click={this.smoothScrollTo}
              >
                {page.toString().toUpperCase()[0]}
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
    smoothScrollTo(e) {
      event.preventDefault()
      let hash = e.target.hash
      const to = document.getElementById(hash.substr(1))
      if (to) {
        to.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scroll({ top: 0, behavior: 'smooth' })
        hash = '#'
      }
      if (window.location.hash !== hash) {
        history.pushState(null, null, hash)
      }
    },
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
