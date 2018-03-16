import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import Mousey from './Mousey'
import BlendLogo from './BlendLogo'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

const Page = {
  props: {
    label: { type: [String, Number], default: 0 }
  },
  render() {
    return (
      <div class="page" id={`page-${this.label}`}>
        {this.$slots.default || <h1>Page {this.label}</h1>}
      </div>
    )
  }
}

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
        <BlendLogo />
        <Page label="header">
          <div style={{ width: '164px', height: '182px' }} />
          <h1>
            powerfully simple. simply powerful.<br />
            we’re making it easier to feel connected to your insurance.
          </h1>
        </Page>
        <Page label="1">
          <h1>who’d have thought insurance could be beautiful?</h1>
          <h2>when it’s as simple as blend, it can be.</h2>
          <p>
            We’re cutting out the complications with a suite of Accident and
            Health insurance products that answer the needs of Australian
            workers, and a bespoke tailoring option for those circumstances that
            call for a little more attention.
          </p>
          <p>
            This is just the beginning for blend, and that means there’s more
            exciting stuff in the works for you and your customers, too. Read on
            to discover our available products, and get in touch to keep up to
            date with all the latest blend developments.
          </p>
          <div class="button-group">
            <a href="#" class="button">
              see our products
            </a>
            <a href="#" class="button">
              about us
            </a>
          </div>
        </Page>
        <Page label="2" />
        <Page label="3" />
        <Page label="4" />
        <Page label="5" />
        <Page label="6" />
        <div class="foot" id="page-header">
          <h1>Page Footer</h1>
        </div>
        <ScrollTo class="sitehelp">talk to us</ScrollTo>
        <div class="navbar">
          {this.pages.map((page, i) => (
            <ScrollTo href={`#page-${page}`} id={`nav-page-${page}`} key={page}>
              {i + 1}
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
