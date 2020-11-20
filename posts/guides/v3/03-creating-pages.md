---
title: Creating Pages
order: 3
page: guides
published: false
---

In the previous guides we have seen how to create your `index` page listing all your posts, how to filter them, and how to render a single post. Now we are going to explore how to create a different section page. 

We will generate a new page (or section) for posts in a certain category. By default, if you nest your posts in subfolders, the generated category matches the directory structure. This means that if you have posts in `posts/blog` then the `blog` category is assigned automatically.

If we want to create our blog as a separated section, we can generate our `/blog` by creating a new page component `pages/blog.js`. 

This page component will render only those posts within the `blog` category:

```js
import React from 'react'
import { withPostsFilterBy, inCategory } from 'nextein/posts'
import { Content } from 'nextein/post' 

const fromBlog = withPostsFilterBy(inCategory('blog', { includeSubCategories: true }))

export default fromBlog(({ posts }) => (
    <main>
    {
      posts.map(post => <Content key={post.data.__id} {...post} excerpt />)
    }
    </main>
  )
)

```
