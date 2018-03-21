import Page from './Page'
import { productsList as products } from './products'

export default {
  name: 'CoverPage',
  render() {
    return (
      <Page label="cover">
        <h1>we’ve got you covered</h1>
        <p>
          Whether your clients’ insurance cover needs are straightforward or a
          little curlier than usual, we’ve got the solution. As a blend broker,
          you can access standard Accident and Health cover, or tailor a bespoke
          policy that’s particular to your clients’ circumstances. Have a flick
          through our products below, and get in touch when you’re ready to take
          the next step with us.
        </p>
        <div class="sections">
          {this.products.map(section => (
            <div key={section.title} class="section">
              <section.icon />
              <div class="title">
                {section.title
                  .split('\n')
                  .map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <a
                href="#"
                class="button"
                onClick:prevent={this.findOutMore(<section.content />)}
              >
                find out more
              </a>
            </div>
          ))}
        </div>
      </Page>
    )
  },
  data() {
    return {
      products
    }
  },
  props: {
    showPopUp: Function
  },
  methods: {
    findOutMore(content = 'find out more') {
      return () => {
        this.showPopUp(content)
      }
    }
  }
}
