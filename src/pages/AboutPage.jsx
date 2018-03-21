import Page from './Page'
import ScrollTo from '../ScrollTo'
import AboutUs from './AboutUs'
export default {
  render() {
    return (
      <Page label="about">
        <h1>
          who’d have thought insurance<br />could be beautiful?
        </h1>
        <h2>when it’s as simple as blend, it can be.</h2>
        <p>
          We’re cutting out the complications with a suite of Accident and
          Health insurance products that answer the needs of Australian workers,
          and a bespoke tailoring option for those circumstances that call for a
          little more attention.
        </p>
        <p>
          This is just the beginning for blend, and that means there’s more
          exciting stuff in the works for you and your customers, too. Read on
          to discover our available products, and get in touch to keep up to
          date with all the latest blend developments.
        </p>
        <div class="button-group">
          <ScrollTo href="#page-cover" class="button">
            see our products
          </ScrollTo>
          <a href="#" class="button" onClick:prevent={this.showAboutUs}>
            about us
          </a>
        </div>
      </Page>
    )
  },
  props: {
    showPopUp: Function
  },
  methods: {
    showAboutUs() {
      this.showPopUp(<AboutUs />)
    }
  }
}
