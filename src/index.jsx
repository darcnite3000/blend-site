import Vue from 'vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import smoothscroll from 'smoothscroll-polyfill'
import ScrollTo from './ScrollTo'
import Particles from './Particles'
import axios from 'axios'
import marked from 'marked'
import Mousey from './Mousey'
import BlendLogo from './BlendLogo'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { pageList as pages } from './pages'
import { CollectionStatement, TandC } from './pages/popup'
import FooterBlurb from './FooterBlurb'
import NavBar from './NavBar'
import 'particles.js'
import './app.css'

smoothscroll.polyfill()

Vue.use(KsVueScrollmagic)
Vue.prototype.$particles = window.particlesJS
Vue.prototype.$aboutUs = axios
  .get('content/AboutUs.md')
  .then(({ data }) => marked(data))
Vue.prototype.$tandc = axios
  .get('content/TermsAndConditions.md')
  .then(({ data }) => marked(data))
Vue.prototype.$cStatement = axios
  .get('content/TermsAndConditions.md')
  .then(({ data }) => marked(data))
Vue.prototype.$pageContent = axios
  .get('content/pages.json')
  .then(({ data }) => data)
Vue.prototype.$productContent = axios
  .get('content/products.json')
  .then(({ data }) => data)
Vue.prototype.$theTeam = axios.get('content/team.json').then(({ data }) => data)
new Vue({
  el: '#app',
  data() {
    return {
      pages,
      previousScrollPosition: 0,
      scrollLock: false,
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
              pageId={page.id}
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
            <a
              onClick:prevent={this.showCollection}
              href="Blend-Insurance-Solutions-Privacy-Policy-1117.pdf"
              download="Blend-Insurance-Solutions-Privacy-Policy-1117.pdf"
            >
              Collection Statement
            </a>|<a
              href="Blend-Financial-Services-Guide-Blend.FSG_.1117-final.pdf"
              download="Blend-Financial-Services-Guide-Blend.FSG_.1117-final.pdf"
            >
              Financial Services Guide
            </a>|<a
              onClick:prevent={this.showTandC}
              href="Blend Terms and Conditions of Trade 1117.pdf"
              download="Blend Terms and Conditions of Trade 1117.pdf"
            >
              Terms and Conditions of Trade
            </a>
            <a
              href="https://au.linkedin.com/company/blend-insurance-solutions"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} fixed-width />
            </a>
          </div>
        </div>

        <transition name="pop-up" mode="in-out">
          {this.popUp && (
            <div class="pop-up">
              <div class="pop-up-inner">
                {this.popUpContent}
                <a
                  href="#"
                  class="button button-close"
                  onClick:prevent={this.closePopUp}
                >
                  <div>close</div>
                  <div class="cross">X</div>
                </a>
              </div>
            </div>
          )}
        </transition>
      </div>
    )
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
    document.dispatchEvent(new Event('render-event'))

    this.$nextTick(() => {
      setTimeout(() => {
        this.handleResize()
      }, 1)
      const hideTalkToUs = new this.$scrollmagic.Scene({
        triggerElement: '#page-contact'
      }).setClassToggle('.sitehelp', 'slide-in-enter-active')
      const pinNavBar = new this.$scrollmagic.Scene({
        duration: () => document.getElementById('page-contact').offsetTop
      }).setPin('.navbar', { spacerClass: 'navbar-spacer' })
      this.$ksvuescr.$emit('addScene', 'hideTalkToUs', hideTalkToUs)
      this.$ksvuescr.$emit('addScene', 'pinNavBar', pinNavBar)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.$ksvuescr.$emit('destroyScene', 'hideTalkToUs')
    this.$ksvuescr.$emit('destroyScene', 'pinOverlay')
  },
  methods: {
    handleResize() {
      this.showFixedLogo = window.innerWidth > 900
      document
        .getElementById('app')
        .setAttribute('style', `background: ${this.generateLinearGradient()};`)
    },
    generateLinearGradient() {
      return `linear-gradient(${
        this.pages.reduce(
          ({ gradient, lastStop }, page) => {
            if (gradient === '') gradient = `${page.bgStart}`
            const height =
              lastStop + document.getElementById(`page-${page.id}`).offsetHeight
            return {
              gradient: `${gradient}, ${page.bgEnd} ${height}px`,
              lastStop: height
            }
          },
          { lastStop: 0, gradient: '' }
        ).gradient
      })`
    },
    handleScroll() {
      if (this.scrollLock) {
        window.scroll(0, this.previousScrollPosition)
      }
      this.previousScrollPosition = window.scrollY
    },
    showTandC() {
      this.showPopUp(<TandC />)
    },
    showCollection() {
      this.showPopUp(<CollectionStatement />)
    },
    showPopUp(content = null) {
      this.scrollLock = true
      this.popUp = true
      this.popUpContent = content
    },
    closePopUp() {
      this.popUp = false
      this.scrollLock = false
    }
  }
})
