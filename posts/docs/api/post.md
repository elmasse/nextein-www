---
title: nextein/post
page: docs
order: 3
---

## withPost(_component_)

HOC for `/pages` components that renders a single post. It makes the post available thru the `post` property.

- `component`: `{Component|Function}` The component or render function that is provided with `post` in properties.  


```js

import withPost from 'nextein/post'

export default withPost( ({ post }) => { /* render your post here */ } )

```

## Content

Component to render a `post` object. This component receive the `content` from the post as a property.
Use the `excerpt` property to only render the first paragraph (this is useful when rendering a list of posts).

- `content`: `{HAST}` Markdown content to be render in Hypertext Abstract Syntax Tree. This is provided by `post.content`
- `excerpt`: `{Boolean}` true to only render the first paragraph. Optional. Default: `false`
- `renderers`: `{Object}` A set of custom renderers for Markdown elements with the form of `[tagName]: renderer`.
- `prefix`: `{String}` Prefix to use for the generated React elements. Optional. Default: `'entry-'`


```js
import withPost, { Content } from 'nextein/post'

export default withPost( ({ post }) => { return (<Content {...post} />) } )

```

Using the `excerpt` property

```js
import withPosts, {inCategory} from 'nextein/posts'

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