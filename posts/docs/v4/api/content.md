---
title: nextein/content
order: 21
---

## Content

```js
import Content from 'nextein/content'

<Content />
```

Component to render a `post` object. This component receive the `content` from the post as a property.
Each render plugin will determine the type of content to be rendered. By default, the **markdown** plugin will use a HAST (Hypertext Abstract Syntax Tree) representation.  

Use the `excerpt` property to only render the first paragraph (this is useful when rendering a list of posts).

- `content`: `{Any}` Content to be render, it will be processed by a render plugin. This is provided by `post.content`
- `excerpt`: `{Boolean}` true to only render the first paragraph. Optional. Default: `false`
- `renderers`: `{Object}` A set of custom renderers for Markdown elements with the form of `[tagName]: renderer`.
- `prefix`: `{String}` Prefix to use for the generated React elements. Optional. Default: `'entry-'`


```js
import { getPosts } from 'nextein/fetcher'
import Content from 'nextein/content'

export function getStaticProps () {
  return {
    props: {
      posts: await getPosts()
    }
  }
}

export default function Post({ post }) {
  return (
    <Content {...post} />
  )
}

```

Using the `excerpt` property

```js
import { getPosts } from 'nextein/fetcher'
import { inCategory } from 'nextein/filters'
import Content from 'nextein/content'


export function getStaticProps () {
  return {
    props: {
      home: await getPostsFilterBy(inCategory('home'))
    }
  }
}
export default function Index ({ home })  { 
  return (
    <section>
    {
      home.map( (post, idx) => <Content key={post.__id} {...post} excerpt/> )
    }
    </section>
  )
})

```

Using `renderers` to change/style the `<p>` tag

```js
import { getPosts } from 'nextein/fetcher'
import Content from 'nextein/content'

export function getStaticProps () {
  return {
    props: {
      posts: await getPosts()
    }
  }
}

export default function Post({ post }) {
  return (
    <Content {...post} />
  )
}

// Paragraph Definition
function Paragraph ({ children }) {
  return (
    <p style={{padding:10, background: 'silver'}}> { children } </p>
  )
}

```