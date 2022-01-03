---
title: nextein/posts
order: 10
---

## withPosts

```js
import withPosts from 'nextein/posts'

withPosts(Component)
```

HOC for **/pages** components that renders a list of posts. It makes the post list available thru the **posts** property.

- **component**: `{Component|Function}` The component or render function that is provided with `posts` in properties.  


Using a render function:

```js
import withPosts from 'nextein/posts'

export default withPosts(({ posts }) => {
  /* render your posts here */ 
})

```

Using a Component:

```js
import React, { Component } from 'react'
import withPosts from 'nextein/posts'

class MyComponent extends Component {

  render() {
    const { posts } = this.props
    /* render your posts here */ 

  }
}

export default withPosts(MyComponent)

```

## withPostsFilterBy

```js
import { withPostsFilterBy } from 'nextein/posts'

withPostsFilterBy(filter)(Component)
```

Returns an HOC that gets all posts filtered out by the given filter function.

- **filter**: `{Function}` The function to filter results.  

This can be used in conjunction with `inCategory` to get only the desired posts in a certain category.

 ```js
import { withPostsFilterBy, inCategory } from 'nextein/posts'

const withCategoryAPosts = withPostsFilterBy(inCategory('categoryA'))

export default withCategoryAPosts(({ posts }) => { 
  /* render your posts here */ 
})

```

## sortByDate

```js
import { sortByDate } from 'nextein/posts'

sortByDate(postA, postB)
```

Sort function to be applied to posts to sort by date (newest on top). This requires the post contains a `date` in `frontmatter` or in the file name (ala jekyll)

```js
import withPosts, { sortByDate } from 'nextein/posts'

export default withPosts( ({ posts }) => { 
  posts.sort(sortByDate)
  /* render your posts here */ 
})

```

## inCategory

```js
import { inCategory } from 'nextein/posts'
```

This is a convinient export of **inCategory** from [nextein/filters](../filters/#incategory)
