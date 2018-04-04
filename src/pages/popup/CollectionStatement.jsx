import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
export default {
  name: 'CollectionStatement',
  data() {
    return { content: '' }
  },
  mounted() {
    this.$cStatement.then(content => {
      this.content = content
    })
  },
  render() {
    return (
      <div class="pop-page" id="page-tandc">
        <BlendLogo class="logo-pop" />
        <div class="md" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
