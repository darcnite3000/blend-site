import ScrollTo from './ScrollTo'

const ChevronDown = {
  render() {
    return (
      <svg
        width="11px"
        height="7px"
        viewBox="0 0 11 7"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="chevron"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-794.000000, -843.000000)"
            stroke="#FFFFFF"
          >
            <g id="J4451_Blend_Homepage_Screen1">
              <g id="Mousey" transform="translate(788.000000, 798.000000)">
                <polyline
                  id="Page-1"
                  points="16.8579441 45.715484 11.428972 51.1428398 6 45.715484"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}
const Mouse = {
  render() {
    return (
      <svg
        width="24px"
        height="36px"
        viewBox="0 0 24 36"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="mouse"
      >
        <g
          id="Home-1600w"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="J4451_Blend_HomepageDK"
            transform="translate(-788.000000, -798.000000)"
          >
            <g id="J4451_Blend_Homepage_Screen1">
              <g id="" transform="translate(788.000000, 798.000000)">
                <g id="mouse">
                  <rect
                    id="Rectangle-4"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    x="1"
                    y="1"
                    width="22"
                    height="34"
                    rx="11"
                  />
                  <circle id="Oval" fill="#FFFFFF" cx="12" cy="11" r="2" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

export default {
  render() {
    return (
      <ScrollTo to={window.innerHeight} class="mousey">
        <Mouse />
        <div class="chevrons">
          <ChevronDown />
          <ChevronDown />
        </div>
      </ScrollTo>
    )
  },
  mounted() {
    this.$nextTick(() => {
      const scene = new this.$scrollmagic.Scene({
        duration: '20%'
      }).setTween('.mousey', {
        autoAlpha: 0,
        y: '-=100px'
      })
      this.$ksvuescr.$emit('addScene', 'mouseyVisible', scene)
    })
  },
  beforeDestroy() {
    this.$ksvuescr.$emit('destroyScene', 'mouseyVisible')
  }
}
