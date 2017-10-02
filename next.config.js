const { default: config } = require('nextein/config')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')

module.exports = config({
  webpack: (config) => {
    config.plugins.push(
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'server',
      //   analyzerPort: 8888,
      //   openAnalyzer: true
      // }),
      new ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'json', 'markdown','bash', 'yaml', 'xml'].join('|')})$`)
      )
    )

    return config
  },

  exportPathMap: () => ({
    '/guides': { page: '/guides' },
    '/docs': { page: '/docs' }
  })
})
