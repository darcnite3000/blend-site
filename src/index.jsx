import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import Mousey from './Mousey'
import BlendLogo from './BlendLogo'
import { LinkedIn } from './Icons'
import { pageList as pages } from './pages'
import TandC from './pages/TandC'
import FooterBlurb from './FooterBlurb'
import NavBar from './NavBar'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS

new Vue({
  el: '#app',
  data() {
    return {
      pages,
      popUp: false,
      popUpContent: null
    }
  },
  render() {
    return (
      <div id="app">
        <div class="content">
          <Particles />
          {this.pages.map(page => (
            <page.component
              key={page.id}
              showPopUp={this.showPopUp}
              closePopUp={this.closePopUp}
            />
          ))}

          <Mousey />
        </div>
        <BlendLogo class="logo-nav" linked animated />
        <transition name="slide-in" appear>
          <ScrollTo href="#page-contact" class="sitehelp">
            talk to us
          </ScrollTo>
        </transition>
        <NavBar class="navbar" pages={this.pages} />
        <div class="foot" id="page-header">
          <FooterBlurb />
          <div class="bottom-links">
            <a href="https://blendinsurancesolutions.com.au/collection-statement/">
              Collection Statement
            </a>|<a
              href="Blend-Financial-Services-Guide-Blend.FSG_.1117-final"
              download
            >
              Financial Services Guide
            </a>|<a
              onClick:prevent={this.showTandC}
              href="Blend Terms and Conditions of Trade 1117.pdf"
              download
            >
              Terms and Conditions of Trade
            </a>
            <a href="#">
              <LinkedIn />
            </a>
          </div>
        </div>

        <transition name="pop-up" mode="in-out">
          {this.popUp && (
            <div class="pop-up">
              <BlendLogo class="logo-pop" />
              {this.popUpContent}
              <div class="pop-foot">
                <FooterBlurb />
              </div>
              <a
                href="#"
                class="button button-close"
                onClick:prevent={this.closePopUp}
              >
                <div>close</div>
                <div class="cross">X</div>
              </a>
            </div>
          )}
        </transition>
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
    this.$nextTick(() => {
      const hideTalkToUs = new this.$scrollmagic.Scene({
        triggerElement: '#page-contact'
      }).setClassToggle('.sitehelp', 'slide-in-enter-active')
      const pinNavBar = new this.$scrollmagic.Scene({
        duration: () => document.getElementById('page-contact').offsetTop
      }).setPin('.navbar')
      this.$ksvuescr.$emit('addScene', 'hideTalkToUs', hideTalkToUs)
      this.$ksvuescr.$emit('addScene', 'pinNavBar', pinNavBar)
    })
  },
  beforeDestroy() {
    this.$ksvuescr.$emit('destroyScene', 'hideTalkToUs')
    this.$ksvuescr.$emit('destroyScene', 'pinOverlay')
  },
  methods: {
    showTandC() {
      this.showPopUp(<TandC />)
    },
    showPopUp(content = null) {
      this.popUp = true
      this.popUpContent = content
    },
    closePopUp() {
      this.popUp = false
    }
  }
})
