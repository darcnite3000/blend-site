import Page from './Page'

import {
  IconGroupPersonal,
  IconPersonal,
  IconVoluntary,
  IconJourney,
  IconBespoke,
  IconBusiness
} from './Icons'
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
          <div class="section">
            <IconGroupPersonal />
            <div class="title">
              group personal<br />accident
            </div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
          <div class="section">
            <IconPersonal />
            <div class="title">
              individual<br />accident
            </div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
          <div class="section">
            <IconVoluntary />
            <div class="title">
              voluntary<br />workers
            </div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
          <div class="section">
            <IconJourney />
            <div class="title">journey</div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
          <div class="section">
            <IconBusiness />
            <div class="title">
              business<br />travel
            </div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
          <div class="section">
            <IconBespoke />
            <div class="title">bespoke</div>
            <a href="#" class="button">
              find out more
            </a>
          </div>
        </div>
      </Page>
    )
  }
}
