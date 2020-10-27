
const fetch = require('isomorphic-fetch')

const GITHUB_API = ({ owner, repo }) => `https://api.github.com/repos/${owner}/${repo}/stats/contributors`;

const raw = ({ contributors, category }) => (
`---
page: false
category: "${category}"
contributors: ${contributors.map(({ login, avatar_url, html_url }) => `
  - login: "${login}"
    avatar_url: "${avatar_url}"
    html_url: "${html_url}"
`).join('')}
---

`
)

module.exports.source = async ({ owner, repo, category = 'contributors', includeOwner = false }, { build }) => {
  try {
    const res = await fetch(GITHUB_API({ owner, repo }))
    const stats = await res.json()
    const contributors = stats
      .map(s => s.author)
      .filter(a => a.type === 'User')
      .filter(a => includeOwner || a.login !== owner )

    const fakeFile = `${owner}-${repo}-contributors.md`

    build({
      filePath: fakeFile,
      name: fakeFile,
      mimeType: 'text/markdown',
      createdOn: JSON.stringify(new Date()),
      async load() {
        return raw({ contributors, category })
      }
    })
  } catch(error) {
    console.error(error)
  }
}
