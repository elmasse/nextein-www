const { withNextein } = require('nextein/config')

module.exports = withNextein({
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

  exportPathMap: (defaultPathMap) => ({
    ...defaultPathMap,
    '/guides': { page: '/guides', query: {} }, // <-query is needed, otherwise shallow-eq returns error
    '/docs': { page: '/docs', query: {} }
  })
})
