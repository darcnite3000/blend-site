import Page from './Page'
import axios from 'axios'

export default {
  name: 'ContactPage',
  props: {
    pageId: String,
    showPopUp: Function,
    closePopUp: Function
  },
  data() {
    return {
      sent: false,
      error: '',
      purpose: '',
      name: '',
      email: '',
      message: '',
      content: {
        title: 'we could be the perfect blend',
        blurb: `Let’s work together. Whether you need to chat about your clients’ insurance needs, a new product or partnership idea, or something else altogether, we’d love to hear from you. We’re responsive, responsible and reliable, so sing out, and we’ll sing right back.`,
        thankYou:
          'Thank you for your enquiry.\nA member of our team will be in touch with you shortly.',
        purposes: [
          'new broker enquiries',
          'existing broker submissions',
          'claims enquiries',
          'other enquiries'
        ]
      }
    }
  },
  mounted() {
    this.$pageContent.then(pages => {
      this.content = pages[this.pageId]
    })
  },
  render() {
    const { title, subtitle, blurb, purposes, thankYou } = this.content
    const message = this.error || thankYou

    const contact = this.sent ? (
      <div class="contact-form sent">
        {message.split('\n').map(line => <div>{line}</div>)}
      </div>
    ) : (
      <form
        class="contact-form"
        action="#"
        onSubmit:prevent={this.submitContact}
      >
        <div class="details">
          <div class="form-group">
            <label>purpose of enquiry</label>
            <select v-model={this.purpose} required>
              {purposes.map(purpose => <option>{purpose}</option>)}
            </select>
          </div>
          <div class="form-group">
            <label>your name</label>
            <input
              type="text"
              placeholder="leonardo splinterson"
              v-model={this.name}
              required
            />
          </div>
          <div class="form-group">
            <label>your email address</label>
            <input
              type="email"
              placeholder="leonardo@tmntinsurance.com.au"
              v-model={this.email}
              required
            />
          </div>
        </div>
        <div class="message">
          <div class="form-group">
            <label>your message</label>
            <textarea
              placeholder="write your message here"
              v-model={this.message}
              required
            />
          </div>
        </div>
        <div class="button-group">
          <input type="submit" value="submit" class="button" />
        </div>
      </form>
    )

    return (
      <Page label={this.pageId}>
        <h1>{title.split('\n').map(line => <div>{line}</div>)}</h1>
        {subtitle && (
          <h2>{subtitle.split('\n').map(line => <div>{line}</div>)}</h2>
        )}
        {blurb && blurb.split('\n').map(para => <p>{para}</p>)}
        <transition name="fade" mode="out-in">
          {contact}
        </transition>
      </Page>
    )
  },
  methods: {
    submitContact() {
      let delay = 6000
      if (this.purpose && this.name && this.message && this.email) {
        const data = {
          purpose: this.purpose,
          name: this.name,
          email: this.email,
          message: this.message
        }
        console.log(data)
        axios
          .post('sendmail.php', data)
          .then(() => {
            this.purpose = ''
            this.name = ''
            this.email = ''
            this.message = ''
          })
          .catch(() => {
            this.error =
              'Sorry something went wrong.\nPlease try again after a short delay.'
            delay = 4000
          })
      } else {
        this.error = 'You must fill in all the fields.'
        delay = 4000
      }

      this.sent = true
      setTimeout(() => {
        this.sent = false
        this.error = ''
      }, delay)
    }
  }
}
