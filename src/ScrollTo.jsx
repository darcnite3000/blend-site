export default {
  name: 'ScrollTo',
  props: {
    title: { type: String, default: 'Page' },
    to: { type: Number, default: 0 },
    href: String,
    behavior: { type: String, default: 'smooth' },
    linkId: {
      type: String,
      default() {
        return this.href ? this.href.substr(1) : ''
      }
    }
  },
  computed: {
    linkEl() {
      return this.linkId && document.getElementById(this.linkId)
    }
  },
  methods: {
    smoothScrollTo() {
      if (!this.linkEl || this.to) {
        window.scroll({ top: this.to, behavior: this.behavior })
      } else {
        this.linkEl.scrollIntoView({ behavior: this.behavior })
      }
      if (history) {
        if (window.location.hash !== this.href) {
          history.pushState(null, this.$props.title, this.href)
        }
      }
    }
  },
  render() {
    return (
      <a
        {...this.$props}
        href={this.href || '#'}
        onClick:prevent={this.smoothScrollTo}
      >
        {this.$slots.default}
      </a>
    )
  }
}
