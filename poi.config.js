const path = require('path')
module.exports = ({ mode }) => ({
  entry: './index.jsx',
  presets: [
    require('poi-preset-prerender-spa')(
      {},
      { renderAfterDocumentEvent: 'render-event' }
    )
  ]
})
