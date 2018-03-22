import { IconVoluntary } from '../Icons'
import FooterBlurb from '../FooterBlurb'
export default {
  name: 'ProductVoluntary',
  render() {
    return (
      <div class="pop-page" id="page-product-voluntary">
        <IconVoluntary invert />
        <h1>voluntary workers</h1>
        <p>
          Volunteers have an important role and are not eligible for Workers
          Compensation. Our product provides protection against financial loss
          if an injury occurs whilst conducting voluntary work.
        </p>
        <p>
          While an unpaid worker is not covered by workers compensation, they
          still face the risk of injury while performing their duties. This
          could prevent them from participating in their usual paid employment
          and leave them susceptible to substantial expenses. A comprehensive
          voluntary workers policy will ensure associations meet their duty of
          care obligations to this valuable resource.
        </p>
        <div class="list-head">key features</div>
        <ul>
          <li>Accidental death</li>
          <li>Weekly benefits for sickness and injury</li>
          <li>Sickness and injury resulting in surgery</li>
          <li>Injury resulting in fractured bones</li>
          <li>Injury resulting in loss or damage to teeth</li>
          <li>
            Personal wellbeing – 17 benefit categories including accidental HIV
            infection, rehabilitation and financial advice benefits.
          </li>
          <li>
            Corporate protection including corporate image, repatriation and
            staff recruitment benefits.
          </li>
        </ul>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
