---
title: nextein/fetcher
order: 50
experimental: true
---

Dynamic Routes and **static generator functions** (`getStaticProps` and `getStaticPaths`) can be used with this new experimental feature.

### fetcher

```js
import fetcher from 'nextein/fetcher'

const { getData, getPosts } = fetcher(filter)
```

Function that retrieves getters for metadata and posts based in a given filter.

- **filter**: `{Function}` A filter function for posts. Optional.

Returns an `Object` containing:

- **getData**: `{Function}` A getter function returning an Array of posts metadata.
- **getPost**: `{Function}` A getter function that returns an Array of posts.


> Warning
>
> This is an experimental API.


> Note
>
> For now, all posts rendered in a dynamic route require to have `page: false`. 

> Example 
> 
> Using a **`[name].js`** dynamic route
>
>  ```js
>  import fetcher from 'nextein/fetcher'
>
>  const { getData, getPost } = fetcher(/* filter */)
>
>  export async function getStaticPaths () {
>    const data = await getData()
>    return {
>      paths: data.map(({ name }) => ({ params: { name } })),
>      fallback: false
>    }
>  }
>
>  export async function getStaticProps ({ params }) {
>    const post = await getPost(params)
>    return { props: { post } }
>  }
>
>  export default function Post ({ post }) {
>    //...
>  }
>
>  ```

> Example
>
> Using a **`[[...name]].js`** dynamic route:
>
>```js
>import fetcher from 'nextein/fetcher'
>import { inCategory } from 'nextein/filters'
>
>const { getData, getPosts, getPost } = fetcher(inCategory('guides'))
>
>export async function getStaticPaths () {
>  const data = await getData()
>  return {
>    paths: [{ params: { name: [] } },
>      ...data.map(({ name }) => ({ params: { name: [name] } }))
>    ],
>    fallback: false
>  }
>}
>
>export async function getStaticProps ({ params }) {
>  const posts = await getPosts()
>  const post = await getPost(params) // This can be null if not matching `...name`
>  return { props: { posts, post } }
>}
>
>export default function Guides ({ posts, post }) {
>  //...
>}
>
>```

#### Caveats

- Post are required to be marked with `page: false`.
- No fast refresh for post changes.
- The `nextein` Link won't work since page is set to false.