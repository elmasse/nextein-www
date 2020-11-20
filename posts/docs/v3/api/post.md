---
title: nextein/post
page: docs
order: 20
---

## withPost

```js
import withPost from 'nextein/post'

withPost(Component)
```

HOC for **/pages** components that renders a single post. It makes the post available thru the **post** property.

- **component**: `{Component|Function}` The component or render function that is provided with `post` in properties.  


```js

import withPost from 'nextein/post'

export default withPost( ({ post }) => { /* render your post here */ } )

```

## Content

```js
import { Content } from 'nextein/post'
```

This is a convinient export of [nextein/content](../content)
