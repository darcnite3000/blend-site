import Vue from 'vue'
import './app.css'
new Vue({
  el: '#app',
  data() {
    return {
      pages: ['header', 1, 2, 3, 4]
    }
  },
  render() {
    return (
      <div id="app">
        {this.pages.map((page, i) => (
          <div key={i} class="page" id={`page-${page}`}>
            <h1>Page {page}</h1>
          </div>
        ))}
        <div class="viewport">
          <a href="#" class="findOut">
            Find Out More
          </a>
          <div class="navbar">
            {this.pages.map((page, i) => (
              <a href={`#page-${page}`} key={i}>
                {page}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
})
