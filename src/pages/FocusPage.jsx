import Page from './Page'
import ScrollTo from '../ScrollTo'
import chris from '../Blend_200x200_Chris.jpg'
import hamish from '../Blend_200x200_Hamish.jpg'
import issac from '../Blend_200x200_Isaac.jpg'
import phil from '../Blend_200x200_Phil.jpg'
export default {
  render() {
    return (
      <Page label="focus">
        <h1>
          it’s your world,<br />we just live in it
        </h1>
        <h2>your focus is our focus.</h2>
        <p>
          Sustainable businesses are built on strong relationships, and that’s
          why honesty, transparency and flexibility are so central to our
          approach. While we’re excited to guide your clients with our
          expertise, we’re not here to tell them what to do. We design solutions
          with people, for people, and our service stays nimble so your clients’
          expectations are continually met.
        </p>
        <div class="button-group">
          <ScrollTo href="#page-contact" class="button">
            get in touch
          </ScrollTo>
          <a href="#" class="button" on-click={this.showTeam}>
            meet the team
          </a>
        </div>
      </Page>
    )
  },
  props: {
    showPopUp: Function
  },
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
  methods: {
    showTeam(e) {
      e.preventDefault()
      this.showPopUp(
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
        </div>
      )
    }
  }
}
