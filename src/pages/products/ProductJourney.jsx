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
      content: { title: '' }
    }
  },
  mounted() {
    this.$productContent.then(product => {
      this.content = product[this.productId]
    })
  },
  render() {
    const { title, blurb, keyFeatures } = this.content
    return (
      <div class="pop-page" id={this.pageId}>
        <BlendLogo class="logo-pop" />
        <IconJourney invert />
        <h1>{title.split('\n').map(line => <div>{line}</div>)}</h1>
        {blurb && blurb.split('\n').map(para => <p>{para}</p>)}
        {keyFeatures && <div class="list-head">key features</div>}
        {keyFeatures && <ul>{keyFeatures.map(key => <li>{key}</li>)}</ul>}

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
