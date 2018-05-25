---
title: nextein/posts
page: docs
order: 2
---

## withPosts(_component_)

HOC for `/pages` components that renders a list of posts. It makes the post list available thru the `posts` property.

- `component`: `{Component|Function}` The component or render function that is provided with `posts` in properties.  


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


## inCategory(_category, options_)

Filter function to be applied to posts to retrieve posts in a given category.


- `category`: `{String}` The category to filter results.  

- `options`: `{Object}`  
    - `includeSubCategories`: `{Boolean}` Set to `true` to include posts in sub categories.  
    Default: `false`.  


Categories are resolved by the folder structure by default. This means that a post located at `posts/categoryA/subOne` will have a category `categoryA/subOne` unless you specify the category name in frontmatter. 

```js
import withPosts, { inCategory } from 'nextein/posts'

export default withPosts( ({ posts }) => { 
  const homePosts = posts.filter(inCategory('home'))
  /* render your homePosts here */ 
})

```

If you want to retrieve all posts under a certain category, let's say `categoryA` which will include all those under `subOne`, use the options `includeSubCategories: true`. 

```js
import withPosts, { inCategory } from 'nextein/posts'

export default withPosts( ({ posts }) => { 
  const categoryAPosts = posts
    .filter(inCategory('categoryA', { includeSubCategories: true }))
  /* render your categoryAPostsmePosts here */ 
})

```

## withPostsFilterBy(_filter_)

Returns an HOC that gets all posts filtered out by the given filter function.

- `filter`: `{Function}` The function to filter results.  

This can be used in conjunction with `inCategory` to get only the desired posts in a certain category.

 ```js
import { withPostsFilterBy, inCategory } from 'nextein/posts'

const withCategoryAPosts = withPostsFilterBy(inCategory('categoryA'))

export default withCategoryAPosts(({ posts }) => { 
  /* render your posts here */ 
})

```

## sortByDate

Sort function to be applied to posts to sort by date (newest on top). This requires the post contains a `date` in `frontmatter` or in the file name (ala jekyll)

```js
import withPosts, { sortByDate } from 'nextein/posts'

export default withPosts( ({ posts }) => { 
  posts.sort(sortByDate)
  /* render your posts here */ 
})

```