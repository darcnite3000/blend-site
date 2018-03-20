import Page from './Page'

import {
  IconGroupPersonal,
  IconPersonal,
  IconVoluntary,
  IconJourney,
  IconBespoke,
  IconBusiness
} from '../Icons'
export default {
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
                on-click={this.findOutMore(section.content)}
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
      products: [
        {
          icon: IconGroupPersonal,
          title: 'group personal\naccident',
          content: (
            <div class="pop-page">
              <IconGroupPersonal invert />
              <h1>group personal accident</h1>
            </div>
          )
        },
        {
          icon: IconPersonal,
          title: 'individual\naccident',
          content: (
            <div class="pop-page">
              <IconPersonal invert />
              <h1>individual accident</h1>
            </div>
          )
        },
        {
          icon: IconVoluntary,
          title: 'voluntary\nworkers',
          content: (
            <div class="pop-page">
              <IconVoluntary invert />
              <h1>voluntary workers</h1>
            </div>
          )
        },
        {
          icon: IconJourney,
          title: 'journey',
          content: (
            <div class="pop-page">
              <IconJourney invert />
              <h1>journey</h1>
            </div>
          )
        },
        {
          icon: IconBusiness,
          title: 'business\ntravel',
          content: (
            <div class="pop-page">
              <IconBusiness invert />
              <h1>business travel</h1>
            </div>
          )
        },
        {
          icon: IconBespoke,
          title: 'bespoke',
          content: (
            <div class="pop-page">
              <IconBespoke invert />
              <h1>bespoke</h1>
            </div>
          )
        }
      ]
    }
  },
  props: {
    showPopUp: Function
  },
  methods: {
    findOutMore(content = 'find out more') {
      return e => {
        e.preventDefault()
        this.showPopUp(content)
      }
    }
  }
}
