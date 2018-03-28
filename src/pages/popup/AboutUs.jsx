import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
import marked from 'marked'
import axios from 'axios'

export default {
  name: 'AboutUs',
  data() {
    return { content: '' }
  },
  mounted() {
    axios.get('AboutUs.md').then(({ data }) => {
      this.content = marked(data)
    })
  },
  render() {
    return (
      <div class="pop-page" id="page-aboutus">
        <BlendLogo class="logo-pop" />
        <div class="md" domPropsInnerHTML={this.content} />
        <div class="logos">
          <img src="Lloyds.png" alt="Lloyds" />
          <img src="Advent.png" alt="Advent - a fairfax company" />
        </div>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
