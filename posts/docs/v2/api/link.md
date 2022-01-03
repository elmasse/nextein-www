---
title: nextein/link
order: 30
---

## Link

```js
import Link from 'nextein/link'

<Link />
```

This component wraps the `next/link` to simplify creating a _Link_ for a given post object. It also adds a mechanism to make your post urls to work seamlessly and loading the post as a `next` Page.
You can use `nextein/link` in place of `next/link` with the exact same parameters. 

- `data`: `{Object}` Post frontmatter object. This is provided by `post.data`


```js
import withPosts from 'nextein/posts'
import Link from 'nextein/link'

export default withPosts( ({ posts }) => { 
  return (
    <section>
    {
      posts.map( (post, idx) => {
        return (
          <div>
            <h1>{post.data.title}</h1>
            <Content key={idx} {...post} excerpt/>
            <Link {...post}><a>Read More...</a></Link>
          </div>
        )
      })    
    }
    </section>
  )
})

```

> `next/link` will work out of the box.

### Using a Post url

You can pass the `post.data.url` or any other page url into the `href` property. This is specially usefull when you want to cross reference a post or in a Navigation Component. 

```js
// Navigation.js
import React from 'react'
import Link from 'nextein/link'

export default (props) => (
  <nav>
    <Link href="/"><a>Home</a></Link> |
    <Link href="/posts"><a>Posts</a></Link>
  </nav>
)

```

Or using a `post.data.url`

```js
import withPosts from 'nextein/posts'
import Link from 'nextein/link'

export default withPosts( ({ posts }) => { 
  return (
    <section>
    {
      posts.map( (post, idx) => {
        return (
          <div>
            <h1><Link href={post.data.url}><a>{post.data.title}</a></Link></h1>
            <Content key={idx} {...post} excerpt/>
          </div>
        )
      })    
    }
    </section>
  )
})

```

