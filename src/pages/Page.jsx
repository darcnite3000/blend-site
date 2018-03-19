export default {
  props: {
    label: { type: [String, Number], default: 0 }
  },
  data() {
    const pageId = `page-${this.label}`
    const navClass = `nav-${pageId}`
    return {
      showName: `pageShow${this.label}`,
      visibleName: `pageVisible${this.label}`,
      pageId,
      navClass
    }
  },
  render() {
    return (
      <div class="page" id={this.pageId}>
        {this.$slots.default || <h1>Page {this.label}</h1>}
      </div>
    )
  },
  mounted() {
    this.$nextTick(() => {
      const tweenIn = this.$gsap.TweenMax.staggerFrom(
        `#${this.pageId} > *`,
        1,
        { y: '+=150', autoAlpha: 0 },
        0.2
      )
      const onShow = new this.$scrollmagic.Scene({
        triggerElement: `#${this.pageId}`
      }).setTween(tweenIn)
      this.$ksvuescr.$emit('addScene', this.showName, onShow)
      if (document.getElementsByClassName(this.navClass).length) {
        const isVisible = new this.$scrollmagic.Scene({
          triggerElement: `#${this.pageId}`,
          duration: '100%'
        }).setClassToggle(`.${this.navClass}`, 'active')
        this.$ksvuescr.$emit('addScene', this.visibleName, isVisible)
      }
    })
  },
  beforeDestroy() {
    this.$ksvuescr.$emit('destroyScene', this.visibleName)
    this.$ksvuescr.$emit('destroyScene', this.showName)
  }
}
