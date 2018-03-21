import ScrollTo from './ScrollTo'

export default {
  name: 'NavBar',
  props: {
    pages: Array
  },
  computed: {
    spacing() {
      return 100 / (this.pages.length + 1)
    }
  },
  mounted() {
    const scrollProgress = new this.$scrollmagic.Scene({
      duration: () => document.getElementById('page-contact').offsetTop
    }).setTween('.navbar .navbar-line', { height: '98%' })
    this.$ksvuescr.$emit('addScene', 'scrollProgress', scrollProgress)
  },
  beforeDestroy() {
    this.$ksvuescr.$emit('destroyScene', 'scrollProgress')
  },
  render() {
    return (
      <svg
        class="navbar"
        stroke="#ffffff"
        fill="#ffffff"
        stroke-linecap="round"
      >
        <defs>
          <mask id="dots">
            <rect id="bg" x="0" y="0" width="100%" height="100%" fill="white" />
            <g stroke="black" fill="black">
              {this.pages.map((_, i) => (
                <circle cx="9.5" cy={`${(i + 1) * this.spacing}%`} r="5" />
              ))}
            </g>
          </mask>
        </defs>
        <g mask="url(#dots)">
          <rect
            class="navbar-bg-line"
            x="9"
            y="1%"
            width="1"
            height="98%"
            rx="3"
            ry="3"
          />
          <rect
            class="navbar-line"
            x="7.5"
            y="1%"
            width="4"
            height="0%"
            rx="3"
            ry="3"
          />
        </g>
        <g class="navbar-dots">
          {this.pages.map(({ id }, i) => (
            <ScrollTo href={`#page-${id}`} class={`nav-page-${id}`} key={id}>
              <rect
                x="0"
                y={`${(i + 1) * this.spacing - 2}%`}
                width="100%"
                height="4%"
                fill="transparent"
                stroke="none"
              />
              <circle
                fill="none"
                cx="9.5"
                cy={`${(i + 1) * this.spacing}%`}
                r="5"
                class="navbar-dot"
              />
              <text
                class="navbar-text"
                x="20"
                y={`${(i + 1) * this.spacing}%`}
                transform="translate(0 6)"
              >
                {i + 1}
              </text>
            </ScrollTo>
          ))}
        </g>
      </svg>
    )
  }
}
