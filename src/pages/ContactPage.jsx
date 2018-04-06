import Page from './Page'
import axios from 'axios'
import PurposeSelect from './PurposeSelect'
import ButtonBack from '../ButtonBack'
import CollectionStatement from './popup/CollectionStatement'
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
      marketing: false,
      content: {
        title: 'we could be the perfect blend',
        subtitle: ' ',
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
      this.purpose = this.content.purposes[0]
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
            <PurposeSelect
              selected={this.purpose}
              purposes={purposes}
              updateSelect={this.updatePurpose}
            />
          </div>
          <div class="form-group">
            <label>your name</label>
            <input type="text" v-model={this.name} required />
          </div>
          <div class="form-group">
            <label>your email address</label>
            <input type="email" v-model={this.email} required />
          </div>
        </div>
        <div class="message">
          <div class="form-group">
            <label>your message</label>
            <textarea v-model={this.message} required />
          </div>
          <div class="form-checkbox">
            <input v-model={this.marketing} type="checkbox" id="marketing" />
            <label for="marketing">
              Opt in to receive marketing/newsletters{' '}
              <a
                onClick:prevent={this.showPrivacy}
                href="Blend-Financial-Services-Guide-Blend.FSG_.1117-final.pdf"
                download="Blend-Financial-Services-Guide-Blend.FSG_.1117-final.pdf"
              >
                (Privacy Policy)
              </a>
            </label>
          </div>
        </div>
        <div class="button-group">
          <button class="button">
            <ButtonBack />
            submit
          </button>
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
    updatePurpose(purpose) {
      this.purpose = purpose
    },
    showPrivacy() {
      this.showPopUp(<CollectionStatement />)
    },
    submitContact() {
      let delay = 6000
      if (this.purpose && this.name && this.message && this.email) {
        const data = {
          purpose: this.purpose,
          name: this.name,
          email: this.email,
          message: this.message,
          marketing: this.marketing
        }
        console.log(data)
        axios
          .post('sendmail.php', data)
          .then(() => {
            this.purpose = ''
            this.name = ''
            this.email = ''
            this.message = ''
            this.marketing = false
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
