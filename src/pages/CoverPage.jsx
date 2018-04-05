import Page from './Page'
import { productsList as products } from './products'
import ButtonBack from '../ButtonBack'

export default {
  name: 'CoverPage',
  props: {
    pageId: { type: String, default: 'cover' },
    showPopUp: Function,
    closePopUp: Function
  },
  data() {
    return {
      products,
      content: {
        title: 'we’ve got you covered',
        blurb:
          'We have developed an extensive suite of benefits that allow us to tailor a bundled solution, aligned to the characteristics and needs of differing customer groups.\nWhether your clients’ insurance cover needs are straightforward or a little more bespoke than usual, we’ve got the solution. As a blend broker, you can access standard Accident and Health cover, or tailor a bespoke policy that’s particular to your clients’ circumstances.\nIn support of large accounts and our speciality A&H broker partners we have the following existing products.'
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
            <a
              href="#"
              onClick:prevent={this.findOutMore(
                <section.content productId={section.id} />
              )}
              key={section.id}
              class="section"
            >
              <section.icon />
              <div class="title">
                {section.title
                  .split('\n')
                  .map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <a
                href="#"
                class="button"
                onClick:prevent={this.findOutMore(
                  <section.content productId={section.id} />
                )}
              >
                <ButtonBack width={158} height={33} rx="1em" />
                find out more
              </a>
            </a>
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
