---
title: nextein/filters
page: docs
order: 11
---

## inCategory

```js
import { inCategory } from 'nextein/posts'

inCategory(category, options)
```

Filter function to be applied to posts to retrieve posts in a given category.


- `category`: `{String}` The category to filter results.  
- `options`: `{Object}`  
    - `includeSubCategories`: `{Boolean}` Set to **true** to include posts in sub categories. Default: `false`.  


> Tip
>
> **inCategory** is also available in from `'nextein/posts'` for convenience.


### Using Categories

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
