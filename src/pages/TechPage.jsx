import Page from './Page'
export default {
  name: 'TechPage',
  data() {
    return {
      content: {
        title: 'tech to enable',
        subtitle:
          'an agile and highly scalable broker and partner\nuser experience is on its way',
        blurb:
          'We’re focused on creating best-in-class technology solutions, enabling you to interact with us on your terms. We know that you have preferred ways of working and distribution partners have their preferred approach to integration, so instead of disrupting that, we want to complement it so that every interaction you have with us is simple.'
      }
    }
  },
  props: {
    pageId: { type: String, default: 'tech' },
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
      </Page>
    )
  }
}
