export default {
  props: {
    x: { type: Number, default: 1 },
    y: { type: Number, default: 1 },
    height: { type: [Number, String], default: 48 },
    width: { type: [Number, String], default: 208 },
    rx: { type: [Number, String], default: '1.5em' }
  },
  render() {
    return (
      <svg>
        <rect
          height={this.height}
          width={this.width}
          x={this.x}
          y={this.y}
          rx={this.rx}
          fill="none"
        />
      </svg>
    )
  }
}
