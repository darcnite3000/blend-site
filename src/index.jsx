import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import Mousey from './Mousey'
import BlendLogo from './BlendLogo'
import { LinkedIn } from './Icons'
import { pageList as pages } from './Pages'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

new Vue({
  el: '#app',
  data() {
    return {
      pages
    }
  },
  render() {
    return (
      <div id="app">
        <div class="content">
          <Particles />
          {this.pages.map(page => <page.component key={page.id} />)}

          <Mousey />
        </div>
        <BlendLogo class="logo-nav" linked animated />
        <transition name="slide-in" appear>
          <ScrollTo href="#page-contact" class="sitehelp">
            talk to us
          </ScrollTo>
        </transition>
        <div class="navbar">
          {this.pages.map(({ id }, i) => (
            <ScrollTo href={`#page-${id}`} class={`nav-page-${id}`} key={id}>
              {i + 1}
            </ScrollTo>
          ))}
        </div>
        <div class="foot" id="page-header">
          <p>
            Blend Insurance Solutions Pty Ltd (ABN 47 617 346 353, AFSL 500768)
            (&apos;blend&apos;) acts under a binding authority as agent for the
            insurer, certain underwriters at Lloyd&apos;s.<br />
            <br />Any general advice that may be contained in this email does
            not take into account your client&apos;s objectives, financial
            situation or needs. Before making a decision to purchase the product
            we recommend your client consider<br />whether it is appropriate for
            their circumstances and read the Product Disclosure Statement
            (&apos;PDS&apos;). A copy of the PDS can be obtained by contacting
            blend.
          </p>
          <div class="bottom-links">
            <a href="#">Collection Statement</a>|<a href="#">
              Financial Services Guide
            </a>|<a href="#">Terms and Conditions of Trade</a>
            <a href="#">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
  methods: {}
})
