---
page: false
type: bash
title: pages/index.js
order: 2
---

```js
import React from 'react'
import withPosts from 'nextein/posts'
import Content from 'nextein/content'

function Index ({ posts }) {
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

export default withPosts(Index)
```