const { withNextein } = require('nextein/config')
const { versions } = require('./src/site.json')

/**
 * Append the versioned urls and scans all defaultPathMap entries to add
 * @param {*} defaultPathMap
 * @param {*} options 
 */
function versionedEntries(defaultPathMap, { url, page = url, versions, dev }) {
  const { latest, ...all } = versions
  return Object.keys(all).reduce((prev, version) => {
    const isLatest = version === latest
    const versionedUrl = `${url}/${version}`

    return {
      ...prev,
      ...(isLatest ? {
        [url]: { page, query: { version } }
      } : undefined),
      [versionedUrl]: { page, query: { version } },
      ...Object.keys(defaultPathMap)
       // Search for posts entries in guides or docs that match this version
      .filter(k => k.startsWith(`${versionedUrl}/`))
      // return the export entry and attach version param into query
      .reduce((prev, key) => {
        const value = defaultPathMap[key]
        return {
          ...prev,
          [key]: {...value, query: {  ...value.query, version }}
        }
      }, {}) 
    }
  }, {})
}

module.exports = withNextein({
  nextein: {
    plugins: [
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
          categories: ['guides', 'docs'],
          maxDepth: 3
        }
      }
    ]
  },

  exportPathMap: (defaultPathMap, { dev }) => { 
    return ({
      ...defaultPathMap,
      ...versionedEntries(defaultPathMap, { url: '/guides', versions, dev }),
      ...versionedEntries(defaultPathMap, { url: '/docs', versions, dev })      
      // These are necessary since guides and docs are used to render entries.
      // Nextein removes any page specified in a `page` from the defaultPathMap
      // so we need to add them back to generate the index.html in each folder.
      // '/guides': { page: '/guides', query: {} },
      // '/docs': { page: '/docs', query: {} }
      })
  }
})
