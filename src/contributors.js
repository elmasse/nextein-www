
import fetch from 'isomorphic-fetch'

const GITHUB_API = ({ owner, repo }) => `https://api.github.com/repos/${owner}/${repo}/stats/contributors`;

export default async function getContributors ({ owner = 'elmasse', repo = 'nextein', includeOwner = false } = {}) {
  try {
    const res = await fetch(GITHUB_API({ owner, repo }))
    const stats = await res.json()
    const contributors = stats
      .map(s => s.author)
      .filter(a => a.type === 'User')
      .filter(a => includeOwner || a.login !== owner )

    return contributors
  } catch(error) {
    console.error(error)
  }
}
