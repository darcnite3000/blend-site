import BlendLogo from '../../BlendLogo'
import FooterBlurb from '../../FooterBlurb'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faMobile, faEnvelope } from '@fortawesome/fontawesome-free-solid'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'
export default {
  name: 'TheTeam',
  data() {
    return {
      team: []
    }
  },
  mounted() {
    this.$theTeam.then(team => (this.team = team))
  },
  render() {
    return (
      <div class="pop-page" id="page-team">
        <BlendLogo class="logo-pop relative" />
        <h1>meet the team</h1>
        <div class="team">
          {this.team.map(
            ({ image, name, position, blurb, linkedIn, email, mobile }) => (
              <div key={name} class="member">
                <img src={image} class="image" />
                <div class="name">{name}</div>
                <div class="position">{position}</div>
                <div class="contact">
                  {linkedIn && (
                    <a href={linkedIn} target="_blank" title="LinkedIn">
                      <FontAwesomeIcon fixed-width icon={faLinkedin} />
                      LinkedIn
                    </a>
                  )}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      title={`Email: ${email}`}
                    >
                      <FontAwesomeIcon fixed-width icon={faEnvelope} />
                      {email}
                    </a>
                  )}
                  {mobile && (
                    <a
                      href={`tel:${mobile}`}
                      target="_blank"
                      title={`Mobile: ${mobile}`}
                    >
                      <FontAwesomeIcon fixed-width icon={faMobile} />
                      {mobile}
                    </a>
                  )}
                </div>
                <div class="blurb">
                  {blurb.split('\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            )
          )}
        </div>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}