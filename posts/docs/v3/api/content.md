---
title: nextein/content
page: docs
order: 21
---

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
import Content from 'nextein/content'
import withPost from 'nextein/post'

export default withPost( ({ post }) => { return (<Content {...post} />) } )

```

Using the `excerpt` property

```js
import withPosts, { inCategory } from 'nextein/posts'

export default withPosts( ({ posts }) => { 
  const homePosts = posts.filter(inCategory('home'))
  return (
    <section>
    {
      homePosts.map( (post, idx) => <Content key={`post-${idx}`} {...post} excerpt/> )
    }
    </section>
  )
})

```

Using `renderers` to change/style the `<p>` tag

```js
import Content from 'nextein/content'
import withPost from 'nextein/post'

export default withPost( ({ post }) => { 
  return (
    <Content {...post} 
      renderers={{
        p: Paragraph 
      }}
    />
  ) 
} )

const Paragraph = ({ children }) => (<p style={{padding:10, background: 'silver'}}> { children } </p> )

```