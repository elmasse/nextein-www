
const fetch = require('isomorphic-fetch')
const h = require('hastscript')

const GITHUB_API = ({ owner, repo }) => `https://api.github.com/repos/${owner}/${repo}/stats/contributors`;

const toHast = ({ avatar_url, html_url, login }) => (
  h('.contributor-item', [
    h('a', { href: html_url }, [ login ]),
    h('div', [
      h('img', { src: avatar_url })
    ])
  ])
)

module.exports.source = async ({ owner, repo, category = 'contributors', addContent = false, includeOwner = false }) => {
  try {
    const res = await fetch(GITHUB_API({ owner, repo }))
    const stats = await res.json()
    const contributors = stats
      .map(s => s.author)
      .filter(a => a.type === 'User')
      .filter(a => includeOwner || a.login !== owner )
    const content = addContent ? h('.contributors', contributors.map(toHast)) : undefined
  
    return [{
      data: {
        page: false,
        category,
        contributors,
        _entry: 'contributors.md'
      },
      content
    }]

  } catch(error) {
    console.error(error)
    return []
  }
}