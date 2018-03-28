import Page from './Page'
export default {
  name: 'DynamicPage',
  data() {
    return {
      content: {}
    }
  },
  props: {
    pageId: { type: String, required: true },
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
