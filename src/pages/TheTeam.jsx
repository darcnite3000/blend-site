import FooterBlurb from '../FooterBlurb'
import BlendLogo from '../BlendLogo'
import team from './team.json'
export default {
  name: 'TheTeam',
  data() {
    return {
      team
    }
  },
  render() {
    return (
      <div class="pop-page" id="page-team">
        <BlendLogo class="logo-pop relative" />
        <h1>meet the team</h1>
        <div class="team">
          {this.team.map(({ image, name, position, blurb, linkedIn }) => (
            <div key={name} class="member">
              {linkedIn ? (
                <a
                  href={linkedIn}
                  target="_blank"
                  title={`${name} on LinkedIn`}
                >
                  <img src={image} class="image" />
                </a>
              ) : (
                <img src={image} class="image" />
              )}
              {linkedIn ? (
                <a
                  href={linkedIn}
                  target="_blank"
                  title={`${name} on LinkedIn`}
                >
                  <div class="name">{name}</div>
                </a>
              ) : (
                <div class="name">{name}</div>
              )}
              <div class="position">{position}</div>
              <div class="blurb">
                {blurb.split('\n').map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          ))}
        </div>

        <div class="pop-foot">
          <FooterBlurb />
        </div>
      </div>
    )
  }
}
