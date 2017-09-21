const config = require('nextein/config').default

module.exports = config({
  exportPathMap: () => ({
    '/guides': { page: '/guides' },
    '/docs': { page: '/docs' }
  })
})
