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
  mounted() {
    this.$pageContent.then(({ HomePage: content }) => {
      this.content = content
    })
  },
  render() {
    const { title, subtitle, blurb } = this.content
    return (
      <Page label="home">
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
