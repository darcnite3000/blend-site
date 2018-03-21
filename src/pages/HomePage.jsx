import BlendLogo from '../BlendLogo'
import Page from './Page'
export default {
  name: 'HomePage',
  render() {
    return (
      <Page label="home">
        <BlendLogo class="logo-main" />
        <h1>
          powerfully simple. simply powerful.<br />
          we’re making it easier to feel connected to your insurance.
        </h1>
      </Page>
    )
  }
}
