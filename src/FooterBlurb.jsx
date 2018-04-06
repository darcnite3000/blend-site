export default {
  name: 'FooterBlurb',
  data() {
    return { content: '' }
  },
  mounted() {
    this.$footerBlurb.then(content => {
      this.content = content
    })
  },
  render() {
    return <div class="md" domPropsInnerHTML={this.content} />
  }
}
