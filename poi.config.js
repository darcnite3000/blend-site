const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
  entry: './src/index.jsx',
  homepage: '',
  html: {
    title: 'blend | a thoughtful approach to insurance solutions',
    description:
      'Sustainable businesses are built on strong relationships, and that’s why honesty, transparency and flexibility are so central to our approach. While we’re excited to guide your clients with our expertise, we’re not here to tell them what to do. We design solutions with people, for people.'
  },
  webpack(config) {
    config.plugins.push(
      new FaviconsWebpackPlugin({
        logo: './favicon.png',
        background: '#fff',
        title: 'blend | a thoughtful approach to insurance solutions',
        prefix: 'icons/',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: false,
          yandex: false,
          windows: true
        }
      })
    )
    return config
  }
}
