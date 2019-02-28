const { withNextein } = require('nextein/config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const EnvironmentPlugin = require('webpack/lib/EnvironmentPlugin')

module.exports = withNextein({
  nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown', 
        options: {
          rehype: ['rehype-slug', 'rehype-autolink-headings']
        }
      },
      {
        name: './plugins/extract-toc',
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
        new ContextReplacementPlugin(
          /highlight\.js[/\/]lib[/\/]languages$/,
          /javascript|json|markdown|bash|yaml|xml/
        )
      ].filter(Boolean)
    )

    return config
  },

  exportPathMap: () => ({
    '/guides': { page: '/guides', query: {} }, // <-query is needed, otherwise shallow-eq returns error
    // '/docs': { page: '/docs', query: {} }
  })
})
