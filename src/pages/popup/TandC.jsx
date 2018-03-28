import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
import marked from 'marked'
import axios from 'axios'
export default {
  name: 'TandC',
  data() {
    return { content: '' }
  },
  mounted() {
    axios.get('TermsAndConditions.md').then(({ data }) => {
      this.content = marked(data)
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
