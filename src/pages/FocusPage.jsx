import Page from './Page'
import ScrollTo from '../ScrollTo'
import ButtonBack from '../ButtonBack'
import { TheTeam } from './popup'
export default {
  name: 'FocusPage',
  data() {
    return {
      content: {
        title: 'it’s your world,\nwe just live in it',
        subtitle: 'your focus is our focus',
        blurb:
          'Sustainable businesses are built on strong relationships, and that’s why honesty, transparency and flexibility are so central to our approach. While we’re excited to guide your clients with our expertise, we’re not here to tell them what to do. We design solutions with people, for people, and our service stays nimble so your clients’ expectations are continually met.'
      }
    }
  },
  props: {
    pageId: { type: String, default: 'focus' },
    showPopUp: Function,
    closePopUp: Function
  },
  mounted() {
    this.$pageContent.then(pages => {
      this.content = pages[this.pageId]
    })
  },
  render() {
    const { title, subtitle, blurb } = this.content
    return (
      <Page label={this.pageId}>
        <h1>{title.split('\n').map(line => <div>{line}</div>)}</h1>
        {subtitle && (
          <h2>{subtitle.split('\n').map(line => <div>{line}</div>)}</h2>
        )}
        {blurb && blurb.split('\n').map(para => <p>{para}</p>)}
        <div class="button-group">
          <a href="#" class="button" onClick:prevent={this.showTeam}>
            <ButtonBack />
            meet the team
          </a>
          <ScrollTo href="#page-contact" class="button">
            <ButtonBack />
            get in touch
          </ScrollTo>
        </div>
      </Page>
    )
  },
  methods: {
    showTeam() {
      this.showPopUp(<TheTeam />)
    }
  }
}
