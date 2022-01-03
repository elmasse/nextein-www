---
title: nextein/filters
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


### Using Categories

Categories are resolved by the folder structure by default. This means that a post located at `posts/categoryA/subOne` will have a category `categoryA/subOne` unless you specify the category name in frontmatter. 

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

If you want to retrieve all posts under a certain category, let's say `categoryA` which will include all those under `subOne`, use the options `includeSubCategories: true`. Or use a '/*' wildcard in the category name.

```js
import { getPosts } from 'nextein/fetcher'
import { inCategory } from 'nextein/filters'
import Content from 'nextein/content'


export function getStaticProps () {
  return {
    props: {
      home: await getPostsFilterBy(inCategory('home', { includeSubCategories: true }))
      // this is the same as
      //await getPostsFilterBy(inCategory('home/*'))
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
