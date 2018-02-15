---
title: Custom Components
order: 6
page: guides
postcast: false
---

In this guide we are going to learn about using custom components in markdown posts. 

You can change elements in your markdown posts by using custom renderers in the `Content` component. These renderers are React components that will replace the original element.

## Styling HTML elements

The very first idea for allowing custom renderers is to allow developers to change elements. We can create a custom component to replace for instance `p` or `h2` elements.

If you choose to use a CSS-in-JS library such as Styled Components or emotion, you can define styled components.


```md
---
title: Styled HTML
page: page
--- 

This is a paragraph. Hello there!

---

## This is a title

And yet another paragraph.

```

The `page.js` file to render the post will look something like this:

```js
import React from 'react'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
  const { data: { title } } = post
  return (
    <div>
      <h1>{title}</h1>
      <Content {...post} />
    </div>
  )
})
```

This will render a very simple html without any styles.

![Simple HTML](/static/images/guides/06-unstyled.png)

Let's change our `page.js` to display the paragraphs with some styles. We are going to use a simple stylesheet (as it is defined in the nextein-starter kit).

We need to add our `stylesheet.css` to the `page.js` component using next.js `Head` or by creating a `pages/_document.js`. 

```js
  <Head>
      <link type="text/css" rel="stylesheet" href="/static/stylesheet.css" />
  </Head>
```

We will need to create a `Paragraph` component that will replace the `p` tags. Usually you'd place those in the components folder (but it's up to you)

```js
import React from 'react'

export default ({children, ...props}) => (
  <p className="awesome-paragraph" {...props}>
    {children}
  </p>
)

```

We have defined a `p` tag that adds a `className` with a css class. Let's add the definition into our `stylesheet.css` file:

```css
.awesome-paragraph {
  margin: 8px;
  padding: 16px;
  background-color: #e4e4e4;
  border: 1px solid #f63;
}

```

And then we can define our custom renderer for `p` tags in the `Content` component.

```js
import React from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'

import Paragraph from '../components/Paragraph'

export default withPost(({ post }) => {
  const { data: { title } } = post
  return (
    <div>
      <h1>{title}</h1>
      <Content {...post}
        renderers={{
          p: Paragraph
        }}
      />
    </div>
  )
})

```

The final result will render paragraphs with our style

![Custom Renders for Paragraphs](/static/images/guides/06-styled-p.png)


## Custom elements

In a similar way we can use the renderers to define custom components. We can create a new tag in our markdown to display an image with a caption. If we use the `img` element (`![alt text](image url)`) we will end up with an `img` wrapped into a `p` element. In our case we are going to use a custom html element `x-image`. 

```md
---
title: Styled HTML
page: page
---

This is a paragraph. Hello there!   

<x-image src="https://images.unsplash.com/photo-1493680772813-f6ffe1e96087" caption="Courtesy of unsplash.com">
</x-image>

---

## This is a title

And yet another paragraph.
```

And this will be our Custom Image Component (`components/Images.js`).

```js
import React from 'react'

export default ({ src, caption}) => (
  <div>
    <img className="image-img" src={src} />
    <span className="image-caption">{caption}</span>
  </div>
)
```

Again, we need to update the `stylesheet.css` and add these:

```css
.image-img {
  display: block;
  margin: auto;
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 4px rgba(0,0,0, .16);  
}

.image-caption {
  display: inline-block;
  width: 100%;
  font-size: .65em;
  font-style: italic;
  text-align: center;
}
```

Finally, we add our `Image` to render `x-image` elements in the `Content` component.

```js
import withPost, { Content } from 'nextein/post'

import Image from '../components/Image'
import Paragraph from '../components/Paragraph'

export default withPost(({ post }) => {
  const { data } = post
  return (
    <div>
      <h1>{data.title}</h1>
      <Content {...post}
        renderers={{
          p: Paragraph,
          'x-image': Image
        }}
      />
    </div>
  )
})

```

![Using custom elements](/static/images/guides/06-custom-element.png)


_A thing to notice_: We need to use the custom element with open and close tags (`<x-image></x-image>`) in the markdown file. 

