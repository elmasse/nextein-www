const { withNextein } = require('nextein/config')

const { versions } = require('./src/site.json')

module.exports = withNextein({
  webpack5: true,
  async redirects () {
    return [
      {
        source: '/guides',
        destination: `/guides/${versions.latest}`,
        permanent: false,
      },
      {
        source: '/docs',
        destination: `/docs/${versions.latest}`,
        permanent: false,
      },  
    ]
  },
  nextein: {
    plugins: [
      ['nextein-plugin-source-fs', { path: 'posts', data: { page: false } }],
      {
        name: 'nextein-plugin-markdown', 
        options: {
          rehype: [
            'rehype-slug',
            'rehype-autolink-headings', 
            '@mapbox/rehype-prism',
            'rehype-minify-whitespace'
          ]
        }
      },
      {
        name: 'nextein-plugin-toc',
        options: {
          categories: ['guides', 'docs'],
          maxDepth: 3
        }
      }
    ]
  }
})
