import particles from './particles.json'
export default {
  render() {
    return <div id="particles" />
  },
  methods: {
    addParticles() {
      this.$particles('particles', particles)
    }
  },
  mounted() {
    this.$nextTick(this.addParticles)
  }
}
