import Page from './Page'
import ScrollTo from '../ScrollTo'
import TheTeam from './TheTeam'
export default {
  render() {
    return (
      <Page label="focus">
        <h1>
          it’s your world,<br />we just live in it
        </h1>
        <h2>your focus is our focus.</h2>
        <p>
          Sustainable businesses are built on strong relationships, and that’s
          why honesty, transparency and flexibility are so central to our
          approach. While we’re excited to guide your clients with our
          expertise, we’re not here to tell them what to do. We design solutions
          with people, for people, and our service stays nimble so your clients’
          expectations are continually met.
        </p>
        <div class="button-group">
          <ScrollTo href="#page-contact" class="button">
            get in touch
          </ScrollTo>
          <a href="#" class="button" onClick:prevent={this.showTeam}>
            meet the team
          </a>
        </div>
      </Page>
    )
  },
  props: {
    showPopUp: Function
  },
  methods: {
    showTeam() {
      this.showPopUp(<TheTeam />)
    }
  }
}
