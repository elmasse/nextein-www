---
title: nextein/link
page: docs
order: 4
---

## Link

`next/link` will work out of the box. You can use `nextein/link` instead with the exact same parameters. This component wraps the `next/link` one to simplify creating a _Link_ for a given post object.

- `data`: `{Object}` Post frontmatter object. This is provided by `post.data`


```js
import withPosts from 'nextein/posts'
import Link from 'nextein/link'


export default withPosts( ({ posts }) => { 
    return (
        <section>
        {
            posts.map( (post, idx) => {
                return (
                    <div>
                        <h1>{post.data.title}</h1>
                        <Content key={idx} {...post} excerpt/>
                        <Link {...post}><a>Read More...</a></Link>
                    </div>
                    )
            })    
        }
        </section>
    )
} )


```