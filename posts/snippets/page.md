---
type: bash
title: pages/index.js
order: 2
---

```js
import Content from 'nextein/content'

export async function getStaticProps () {
  const { getPosts } = await import('nextein/fetcher')
  return { props: { posts: await getPosts() }}
}

export function Index ({ posts }) {
  return (
    <div>
      <h1>Hello!</h1>
      {posts.map(post => (
        <div>
          <h2>{post.data.title}</h2>
          <Content {...post} excerpt />
        </div>
      ))}
    </div>
  )
}

```