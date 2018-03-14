import Vue from 'vue'
new Vue({
  el: '#app',
  render() {
    return (
      <div id="app">
        <h1> Hello World </h1>
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
})
