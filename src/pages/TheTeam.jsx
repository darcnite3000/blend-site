import chris from '../Blend_200x200_Chris.jpg'
import hamish from '../Blend_200x200_Hamish.jpg'
import issac from '../Blend_200x200_Isaac.jpg'
import phil from '../Blend_200x200_Phil.jpg'
import FooterBlurb from '../FooterBlurb'
export default {
  name: 'TheTeam',
  data() {
    return {
      team: [
        {
          image: chris,
          name: 'Chris Newing',
          position: 'Cheif Executive Officer',
          blurb: `With over 15 years’ experience in the industry with multinational insurers, Chris has a diverse and detailed skillset shaped by time spent in varied roles and geographies.
Chris loves detail and design. He leads Blend’s success and ensures the team is focused on delivering innovative solutions to market.`
        },
        {
          image: hamish,
          name: 'Hamish Elliot',
          position: 'Head of Partnerships & Platforms',
          blurb: `Hamish is passionate about building meaningful and magical partnerships through our first class technology platforms.
With a background in product design and service innovation, Hamish loves shaping user experiences, designing new product solutions and leading blend’s strategic digital direction.`
        },
        {
          image: issac,
          name: 'Isaac Garson',
          position: 'Development Manager',
          blurb: `If you like talking insurance, Isaac is the yin to your yang. With experience across multiple insurers and product lines, Isaac works passionately with brokers to ensure they’re supported and serviced to expectations.
Isaac loves human interaction, tailoring solutions for brokers and providing surprisingly satisfying service.`
        },
        {
          image: phil,
          name: 'Phil Chandler',
          position: 'Underwriter',
          blurb: `An Englishman with a desire to see real change and modernisation in insurance, Philip has gained experience underwriting Accident & Health risks in the London Company Market and at a prestigious Lloyd’s Syndicate.
An Underwriter who enjoys providing genuinely valuable products to his clients, Philip will work tirelessly to find the right solution for you.`
        }
      ]
    }
  },
  render() {
    return (
      <div class="pop-page" id="page-team">
        <h1>meet the team</h1>
        <div class="team">
          {this.team.map(({ image, name, position, blurb }) => (
            <div key={name} class="member">
              <img src={image} class="image" />
              <div class="name">{name}</div>
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
