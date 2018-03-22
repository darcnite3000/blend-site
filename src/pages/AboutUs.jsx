import lloyds from '../Lloyds.png'
import advent from '../Advent.png'
import FooterBlurb from '../FooterBlurb'

export default {
  name: 'AboutUs',
  render() {
    return (
      <div class="pop-page" id="page-aboutus">
        <h1>blend a lloyds syndicate service company</h1>
        <p>
          Advent, our capacity provider, has over half a century of underwriting
          and claims experience.
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
            Access to large distribution channels enabling a truly global reach.
          </li>
        </ul>
        <p>
          Being a Lloyd’s syndicate gives Advent additional levels of security.
        </p>
        <ul>
          <li>
            Established in 1765, Lloyd’s is a trusted and world-renowned
            insurance market.
          </li>
          <li>
            All Lloyd’s syndicates are covered with the additional Lloyd’s chain
            of security.
          </li>
          <li>
            Being a member of the Lloyd’s market gives Advent wider geographical
            reach through Lloyd’s international licensing.
          </li>
        </ul>
        <div class="logos">
          <img src={lloyds} alt="Lloyds" />
          <img src={advent} alt="Advent - a fairfax company" />
        </div>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
