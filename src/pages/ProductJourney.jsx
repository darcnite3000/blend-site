import { IconJourney } from '../Icons'
import FooterBlurb from '../FooterBlurb'
export default {
  name: 'ProductJourney',
  render() {
    return (
      <div class="pop-page" id="page-product-journey">
        <IconJourney invert />
        <h1>journey</h1>
        <p>
          Where an employee is excluded from journey cover under their state’s
          Workers Compensation system, Journey cover provides a lump sum benefit
          in the event of death or permanent disability, or weekly benefits in
          the event of accidental injury sustained while travelling to and from
          work.
        </p>
        <p>
          Our Journey policy protects employees in transit to and from their
          place of work if Workers’ Compensation doesn’t provide cover. Choose
          between capital benefits cover or weekly benefits for injury or
          illness.
        </p>
        <div class="list-head">key features</div>
        <ul>
          <li>Weekly loss of income benefits following an injury</li>
          <li>Rehabilitation benefit</li>
          <li>
            Relocation, home and motor modification expenses following permanent
            disability
          </li>
          <li>Domestic and home help expenses</li>
          <li>Credit card debt payment</li>
          <li>Compensation for broken bones</li>
          <li>
            Lump sum payment for death or permanent disability resulting from
            injury or disappearance
          </li>
          <li>Cover for funeral expense</li>
        </ul>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
