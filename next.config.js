const { withNextein } = require('nextein/config')

module.exports = withNextein({
  webpack5: true,
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
