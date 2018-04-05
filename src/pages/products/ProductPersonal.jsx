import { IconPersonal } from './Icons'
import FooterBlurb from '../../FooterBlurb'
import BlendLogo from '../../BlendLogo'
export default {
  name: 'ProductPersonal',
  props: {
    productId: { type: String, default: 'personal' }
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
        <IconPersonal invert />
        <div class="md" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
