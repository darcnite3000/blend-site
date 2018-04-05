import { IconGroupPersonal } from './Icons'
import FooterBlurb from '../../FooterBlurb'
import BlendLogo from '../../BlendLogo'
export default {
  name: 'ProductGroupPersonal',
  props: {
    productId: { type: String, default: 'group' }
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
        <IconGroupPersonal invert />
        <div class="md" domPropsInnerHTML={this.content} />

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
