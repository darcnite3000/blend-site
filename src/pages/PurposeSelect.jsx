import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import { faCaretDown } from '@fortawesome/fontawesome-free-solid'
export default {
  name: 'PurposeSelect',
  props: {
    selected: String,
    purposes: { type: Array, default: () => [] },
    updateSelect: Function
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    selectPurpose(purpose) {
      this.updateSelect(purpose)
      this.toggleOpen()
    }
  },
  render() {
    return (
      <div class="purpose-select">
        <a href="#" class="current" onClick:prevent={this.toggleOpen}>
          {this.selected}
        </a>
        <div v-show={this.open} class="selections">
          {this.purposes.map(purpose => (
            <a
              href="#"
              onClick:prevent={() => this.selectPurpose(purpose)}
              class={{ active: this.selected == purpose }}
            >
              {purpose}
            </a>
          ))}
        </div>

        <FontAwesomeIcon
          icon={faCaretDown}
          flip={this.open ? 'vertical' : 'horizontal'}
          onClick:prevent={this.toggleOpen}
          class={{ inversed: this.open && this.selected == this.purposes[0] }}
        />
      </div>
    )
  }
}
