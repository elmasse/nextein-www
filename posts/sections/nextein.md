---
category: section
title: Nextein
page: false
className: nextein
order: 1
---

```jsx

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( props => {
  const { posts } = props
  return (
    <main>
      { posts.map( post => <Content {...post} /> ) }
    </main>
  )
})
```

**Nextein** is a static website & blog generator.   
Combine the simplicity of *Markdown* & the power of *Next.js*
