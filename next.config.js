const { withNextein } = require('nextein/config')
const withCSS = require('@zeit/next-css')

const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = withNextein(withCSS({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown', 
        options: {
          rehype: ['rehype-slug', 'rehype-autolink-headings', '@mapbox/rehype-prism']
        }
      },
      {
        name: './plugins/nextein-plugin-toc',
        options: {
          categories: ['guides', 'docs']
        }
      }
    ]
  },

  webpack: (config) => {
    config.plugins.push(
      ...[
        process.env.ANALYZE && 
        new BundleAnalyzerPlugin({
          analyzerMode: 'static'
        }),
        new EnvironmentPlugin({
          UA: 'UA-104061611-1'
        }),
      ].filter(Boolean)
    )

    return config
  },

  exportPathMap: () => ({
    '/guides': { page: '/guides', query: {} }, // <-query is needed, otherwise shallow-eq returns error
    '/docs': { page: '/docs', query: {} }
  })
}))
