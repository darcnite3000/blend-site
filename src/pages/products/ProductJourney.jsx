import { IconJourney } from './Icons'
import FooterBlurb from '../../FooterBlurb'
import BlendLogo from '../../BlendLogo'
export default {
  name: 'ProductJourney',
  props: {
    productId: { type: String, default: 'journey' }
  },
  computed: {
    pageId() {
      return `page-product-${this.productId}`
    }
  },
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.$productContent[this.productId].then(content => {
      this.content = content
    })
  },
  render() {
    return (
      <div class="pop-page" id={this.pageId}>
        <BlendLogo class="logo-pop" />
        <IconJourney invert />
        <div class="md" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
