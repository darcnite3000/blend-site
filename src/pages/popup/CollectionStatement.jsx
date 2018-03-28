import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
export default {
  name: 'CollectionStatement',
  render() {
    return (
      <div class="pop-page" id="page-tandc">
        <BlendLogo class="logo-pop" />
        <h1>collection statement</h1>
        <p>
          Blend Insurance Solutions Pty Ltd (ACN 617 346 353, AFSL 500768)
          (Blend) respects your privacy and operates at all times in accordance
          with its Privacy Policy. Any personal information provided by you will
          be treated in accordance with the Privacy Act 1988 (Cth).
        </p>
        <p>
          Blend collects the personal information on this website to respond to
          your enquiry and/or provide newsletters or marketing materials to keep
          you informed about our business and by completing the enquiry/contact
          form you consent to Blend using your personal information for this
          purpose. You will be provided with an option to opt out of marketing
          material sent to you. We may disclose the information we collect to
          third parties, including service providers engaged by us to carry out
          certain business activities on our behalf. In some circumstances, in
          order to provide our services to you, we may need to transfer personal
          information to third parties with whom we have sub-contracted to
          provide a specific service for us, which may be located outside of
          Australia (such as in the UK or USA). Please note that no personal
          information is disclosed by us to any overseas entity for marketing
          purposes.
        </p>
        <p>
          In accordance with Blend’s Privacy Policy you may obtain access to
          personal information that Blend holds on you. Blend’s Privacy Policy
          contains information about how to access and correct the personal
          information Blend holds on you and also how to complain about a breach
          of privacy.
        </p>
        <p>
          If you would like additional information about privacy or would like
          to obtain a copy of the Privacy Policy, please contact Blend’s Privacy
          Officer during business hours on:
        </p>
        <p>
          The Privacy Officer<br />Phone:{' '}
          <a href="tel:+61 2 9307 6656">+61 2 9307 6656</a>
          <br />Email:
          <a href="mailto:privacy@blendinsurance.com.au">
            privacy@blendinsurance.com.au
          </a>
          <br />You can also download a copy of Blend’s Privacy Policy{' '}
          <a
            href="Blend-Insurance-Solutions-Privacy-Policy-1117.pdf"
            download="Blend-Insurance-Solutions-Privacy-Policy-1117.pdf"
          >
            here
          </a>.
        </p>
        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
