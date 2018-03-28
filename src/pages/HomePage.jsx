import BlendLogo from '../BlendLogo'
import Page from './Page'
export default {
  name: 'HomePage',
  data() {
    return {
      content: {
        title:
          'powerfully simple. simply powerful.\nwe’re making it easier to feel connected to your insurance.'
      }
    }
  },
  props: {
    pageId: { type: String, default: 'home' },
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
        <BlendLogo class="logo-main" />
        <h1>{title.split('\n').map(line => <div>{line}</div>)}</h1>
        {subtitle && (
          <h2>{subtitle.split('\n').map(line => <div>{line}</div>)}</h2>
        )}
        {blurb && blurb.split('\n').map(para => <p>{para}</p>)}
      </Page>
    )
  }
}
