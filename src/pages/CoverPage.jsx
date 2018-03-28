import Page from './Page'
import { productsList as products } from './products'

export default {
  name: 'CoverPage',
  props: {
    pageId: { type: String, default: 'cover' },
    showPopUp: Function
  },
  data() {
    return {
      products,
      content: {
        title: 'we’ve got you covered',
        blurb: `Whether your clients’ insurance cover needs are straightforward or a little curlier than usual, we’ve got the solution. As a blend broker, you can access standard Accident and Health cover, or tailor a bespoke policy that’s particular to your clients’ circumstances. Have a flick through our products below, and get in touch when you’re ready to take the next step with us.`
      }
    }
  },
  mounted() {
    this.$pageContent.then(pages => {
      this.content = pages[this.pageId]
    })
  },
  render() {
    const { title, subtitle, blurb } = this.content
    return (
      <Page label={this.pageId}>
        <h1>{title.split('\n').map(line => <div>{line}</div>)}</h1>
        {subtitle && (
          <h2>{subtitle.split('\n').map(line => <div>{line}</div>)}</h2>
        )}
        {blurb && blurb.split('\n').map(para => <p>{para}</p>)}
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
  methods: {
    findOutMore(content = 'find out more') {
      return () => {
        this.showPopUp(content)
      }
    }
  }
}
