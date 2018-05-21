const { default: config } = require('nextein/config')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin')

module.exports = config({
  webpack: (config) => {
    config.plugins.push(
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'server',
      //   analyzerPort: 8888,
      //   openAnalyzer: true
      // }),
      new EnvironmentPlugin({
        UA: 'UA-104061611-1'
      }),
      new ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'json', 'markdown','bash', 'yaml', 'xml'].join('|')})$`)
      )
    )

    return config
  },

  exportPathMap: () => ({
    '/guides': { page: '/guides', query: {} }, // <-query is needed, otherwise shallow-eq returns error
    '/docs': { page: '/docs', query: {} }
  })
})
