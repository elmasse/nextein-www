const { withNextein } = require('nextein/config')
const withCSS = require('@zeit/next-css')

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
        name: './plugins/nextein-plugin-contributors',
        options: {
          owner: 'elmasse',
          repo: 'nextein',
          includeOwner: true
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

  exportPathMap: () => ({
    '/guides': { page: '/guides', query: {} }, // <-query is needed, otherwise shallow-eq returns error
    '/docs': { page: '/docs', query: {} }
  })
}))
