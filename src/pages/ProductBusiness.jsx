import { IconBusiness } from '../Icons'
import FooterBlurb from '../FooterBlurb'
import BlendLogo from '../BlendLogo'
export default {
  name: 'ProductBusiness',
  render() {
    return (
      <div class="pop-page" id="page-product-business">
        <BlendLogo class="logo-pop" />
        <IconBusiness invert />
        <h1>business travel</h1>
        <p>
          Our Business Travel Insurance product covers expenses for medical
          treatment, emergency medical evacuation and assistance, flight
          cancellations and lost luggage for employees whilst travelling for
          business.
        </p>
        <p>
          Managing the risks associated with employees travelling to perilous or
          remote locations can be particularly challenging. In the event of a
          serious medical condition, natural disaster or political unrest, a
          swift response and evacuation are imperative. blend Business Travel
          Insurance provides cover for employees travelling for business
          purposes and is designed to cover almost any mishap.
        </p>
        <p>
          When purchasing Blend corporate travel insurance, a company’s
          employees are immediately covered by our emergency assistance
          services.
        </p>
        <div class="list-head">key features</div>
        <ul>
          <li>
            Personal Accident & Sickness - Includes weekly benefits due to
            sickness or injury, accidental death and other lump sum capital
            benefits
          </li>
          <li>
            Kidnap, Ransom, Extortion Hijack & Detention - Includes kidnap,
            ransom and extortion and a daily hijack and detention benefit
          </li>
          <li>Overseas Medical Expenses & Medical Evacuation Expenses</li>
          <li>
            Baggage, Portable Electronic Equipment & Money - Includes travel
            documents and deprivation of baggage cover
          </li>
          <li>
            Travel Disruption - Includes missed connection, loss of deposit,
            cancellation and curtailment and alternative employee benefits
          </li>
          <li>
            Corporate Protection - Benefits include corporate image protection,
            repatriation & funeral expenses and staff recruitment benefits
          </li>
          <li>
            Rental Vehicle Excess Waiver - Covers the excess payable in the
            event of loss or damage to a rental vehicle
          </li>
          <li>Personal Liability</li>
          <li>
            Extra Territorial Workers Compensation - Cover for differences in
            workers compensation entitlements when employees are travelling
            inter-state within Australia
          </li>
          <li>
            Personal Wellbeing - A range of additional benefits including
            accidental HIV infection, rehabilitation and financial advice
            benefits
          </li>
          <li>
            Emergency Assistance - Unlimited access to our emergency assistance
            team
          </li>
          <li>
            Provide access to medical practitioners for emergency assistance and
            advice
          </li>
          <li>
            Arrange emergency medical evacuations as a direct result of an
            injury or sickness
          </li>
          <li>
            Arrange for an accompanying person to travel with and/or remain with
            an insured person suffering from an injury or sickness
          </li>
          <li>
            Provide payment guarantees and insurance verification to hospitals
          </li>
          <li>
            Repatriation to the insured person’s country of residence or a more
            suitable medical facility following an injury or sickness
          </li>
          <li>On-going medical monitoring</li>
        </ul>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
