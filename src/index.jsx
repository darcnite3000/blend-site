import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import Mousey from './Mousey'
import BlendLogo from './BlendLogo'
import Page from './Page'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

new Vue({
  el: '#app',
  data() {
    return {
      pages: ['insurance', 2, 3, 4, 5, 6]
    }
  },
  render() {
    return (
      <div id="app">
        <Particles />
        <Page label="header">
          <BlendLogo class="logo-main" />
          <h1>
            powerfully simple. simply powerful.<br />
            we’re making it easier to feel connected to your insurance.
          </h1>
        </Page>
        <Page label="insurance">
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
        <BlendLogo class="logo-nav" linked animated />
        <transition name="slide-in" appear>
          <ScrollTo class="sitehelp">talk to us</ScrollTo>
        </transition>
        <div class="navbar">
          {this.pages.map((page, i) => (
            <ScrollTo
              href={`#page-${page}`}
              class={`nav-page-${page}`}
              key={page}
            >
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
  },
  methods: {}
})
