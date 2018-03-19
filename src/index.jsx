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
      pages: ['home', 'about', 'cover', 'focus', 'tech', 'contact']
    }
  },
  render() {
    return (
      <div id="app">
        <div class="content">
          <Particles />
          <Page label="home">
            <BlendLogo class="logo-main" />
            <h1>
              powerfully simple. simply powerful.<br />
              we’re making it easier to feel connected to your insurance.
            </h1>
          </Page>
          <Page label="about">
            <h1>
              who’d have thought insurance<br />could be beautiful?
            </h1>
            <h2>when it’s as simple as blend, it can be.</h2>
            <p>
              We’re cutting out the complications with a suite of Accident and
              Health insurance products that answer the needs of Australian
              workers, and a bespoke tailoring option for those circumstances
              that call for a little more attention.
            </p>
            <p>
              This is just the beginning for blend, and that means there’s more
              exciting stuff in the works for you and your customers, too. Read
              on to discover our available products, and get in touch to keep up
              to date with all the latest blend developments.
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
          <Page label="cover">
            <h1>we’ve got you covered</h1>
            <p>
              Whether your clients’ insurance cover needs are straightforward or
              a little curlier than usual, we’ve got the solution. As a blend
              broker, you can access standard Accident and Health cover, or
              tailor a bespoke policy that’s particular to your clients’
              circumstances. Have a flick through our products below, and get in
              touch when you’re ready to take the next step with us.
            </p>
            <div class="sections">
              <div class="section">
                <div class="icon" />
                <div class="title">
                  group personal<br />accident
                </div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
              <div class="section">
                <div class="icon" />
                <div class="title">
                  individual<br />accident
                </div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
              <div class="section">
                <div class="icon" />
                <div class="title">
                  voluntary<br />workers
                </div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
              <div class="section">
                <div class="icon" />
                <div class="title">journey</div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
              <div class="section">
                <div class="icon" />
                <div class="title">
                  business<br />travel
                </div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
              <div class="section">
                <div class="icon" />
                <div class="title">bespoke</div>
                <a href="#" class="button">
                  find out more
                </a>
              </div>
            </div>
          </Page>
          <Page label="focus">
            <h1>
              it’s your world,<br />we just live in it
            </h1>
            <h2>your focus is our focus.</h2>
            <p>
              Sustainable businesses are built on strong relationships, and
              that’s why honesty, transparency and flexibility are so central to
              our approach. While we’re excited to guide your clients with our
              expertise, we’re not here to tell them what to do. We design
              solutions with people, for people, and our service stays nimble so
              your clients’ expectations are continually met.
            </p>
            <div class="button-group">
              <a href="#" class="button">
                get in touch
              </a>
              <a href="#" class="button">
                meet the team
              </a>
            </div>
          </Page>
          <Page label="tech">
            <h1>tech to enable</h1>
            <h2>
              an agile and highly scalable broker and partner<br />user
              experience is on its way.
            </h2>
            <p>
              We’re focused on creating best-in-class technology solutions,
              enabling you to interact with us on your terms. We know that you
              have preferred ways of working and distribution partners have
              their preferred approach to integration, so instead of disrupting
              that, we want to complement it so that every interaction you have
              with us is simple.
            </p>
          </Page>
          <Page label="contact">
            <h1>we could be the perfect blend</h1>
            <p>
              Let’s work together. Whether you need to chat about your clients’
              insurance needs, a new product or partnership idea, or something
              else altogether, we’d love to hear from you. We’re responsive,
              responsible and reliable, so sing out, and we’ll sing right back.
            </p>
            <form action="#">
              <div class="details">
                <div class="form-group">
                  <label>purpose of enquiry</label>
                  <select>
                    <option>existing broker submissions</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>your name</label>
                  <input type="text" placeholder="leonardo splinterson" />
                </div>
                <div class="form-group">
                  <label>your email address</label>
                  <input
                    type="email"
                    placeholder="leonardo@tmntinsurance.com.au"
                  />
                </div>
              </div>
              <div class="message">
                <div class="form-group">
                  <label>your message</label>
                  <textarea placeholder="write your message here" />
                </div>
              </div>
              <input type="submit" value="submit" />
            </form>
          </Page>

          <Mousey />
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
            Collection Statement | Financial Services Guide | Terms and
            Conditions of Trade
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
