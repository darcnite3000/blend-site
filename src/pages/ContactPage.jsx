import Page from './Page'
export default {
  name: 'ContactPage',
  data() {
    return {
      purpose: '',
      name: '',
      email: '',
      message: ''
    }
  },
  render() {
    return (
      <Page label="contact">
        <h1>we could be the perfect blend</h1>
        <p>
          Let’s work together. Whether you need to chat about your clients’
          insurance needs, a new product or partnership idea, or something else
          altogether, we’d love to hear from you. We’re responsive, responsible
          and reliable, so sing out, and we’ll sing right back.
        </p>
        <form class="contact-form" action="#">
          <div class="details">
            <div class="form-group">
              <label>purpose of enquiry</label>
              <select v-model={this.purpose}>
                <option>new broker enquiries</option>
                <option>existing broker submissions</option>
                <option>claims enquiries</option>
                <option>other enquiries</option>
              </select>
            </div>
            <div class="form-group">
              <label>your name</label>
              <input
                type="text"
                placeholder="leonardo splinterson"
                v-model={this.name}
              />
            </div>
            <div class="form-group">
              <label>your email address</label>
              <input
                type="email"
                placeholder="leonardo@tmntinsurance.com.au"
                v-model={this.email}
              />
            </div>
          </div>
          <div class="message">
            <div class="form-group">
              <label>your message</label>
              <textarea
                placeholder="write your message here"
                v-model={this.message}
              />
            </div>
          </div>
          <div class="button-group">
            <input type="submit" value="submit" class="button" />
          </div>
        </form>
      </Page>
    )
  }
}
