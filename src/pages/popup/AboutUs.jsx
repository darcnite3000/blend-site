import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'

export default {
  name: 'AboutUs',
  data() {
    return { content: '' }
  },
  mounted() {
    this.$aboutUs.then(content => {
      this.content = content
    })
  },
  render() {
    return (
      <div class="pop-page" id="page-aboutus">
        <BlendLogo class="logo-pop" />
        <div class="md" domPropsInnerHTML={this.content} />
        <div class="logos">
          <img src="images/Lloyds.png" alt="Lloyds" />
          <img src="images/Advent.png" alt="Advent - a fairfax company" />
        </div>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
