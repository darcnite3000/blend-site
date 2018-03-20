import Page from './Page'
import ScrollTo from '../ScrollTo'
import lloyds from '../Lloyds.png'
import advent from '../Advent.png'
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
          <a href="#" class="button" on-click={this.showAboutUs}>
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
    showAboutUs(e) {
      e.preventDefault()
      this.showPopUp(
        <div class="pop-page" id="page-aboutus">
          <h1>about us</h1>
          <p>
            Advent, our capacity provider, has over half a century of
            underwriting and claims experience.
          </p>
          <ul>
            <li>Experts in over 30 different classes of business</li>
            <li>
              Focused on new products and lines of business, enhancing existing
              products, as well as adopting new technological advancements.
            </li>
            <li>A ‘one-stop shop’ for speed of decision making.</li>
            <li>A progressive Lloyd’s syndicate owned by Fairfax Financial.</li>
            <li>
              Access to large distribution channels enabling a truly global
              reach.
            </li>
          </ul>
          <p>
            Being a Lloyd’s syndicate gives Advent additional levels of
            security.
          </p>
          <ul>
            <li>
              Established in 1765, Lloyd’s is a trusted and world-renowned
              insurance market.
            </li>
            <li>
              All Lloyd’s syndicates are covered with the additional Lloyd’s
              chain of security.
            </li>
            <li>
              Being a member of the Lloyd’s market gives Advent wider
              geographical reach through Lloyd’s international licensing.
            </li>
          </ul>
          <div class="logos">
            <img src={lloyds} alt="Lloyds" />
            <img src={advent} alt="Advent - a fairfax company" />
          </div>
        </div>
      )
    }
  }
}
