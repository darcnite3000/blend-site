import { IconBusiness } from './Icons'
import FooterBlurb from '../../FooterBlurb'
import BlendLogo from '../../BlendLogo'
export default {
  name: 'ProductBusiness',
  props: {
    productId: { type: String, default: 'business' }
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
        <IconBusiness invert />
        <div class="md" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
