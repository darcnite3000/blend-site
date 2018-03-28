import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
export default {
  name: 'TandC',
  data() {
    return { content: '' }
  },
  mounted() {
    this.$tandc.then(content => {
      this.content = content
    })
  },
  render() {
    return (
      <div class="pop-page" id="page-tandc">
        <BlendLogo class="logo-pop" />
        <div class="md left" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
