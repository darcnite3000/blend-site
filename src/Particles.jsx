import particles from './particles.json'
export default {
  name: 'Particles',
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
