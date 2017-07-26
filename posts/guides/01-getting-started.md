---
title: Getting Started
order: 1
page: guide
---

This post will guide you on how to get started with **Nextein**. You'll need to install **Node.js** if you don't have it installed already. To get the latest Node.js version please visit the official Node.js website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Create an npm project

The first step is to use **npm** to create a project in order to install all dependencies:

```bash
mkdir my-blog  && cd my-blog  && npm init -y

```
## Install the dependencies

For a very simple project we will need at least to install **Nextein**, **Next.js** and **React**. You can keep adding more as you need them later.

```bash
npm install --save next@beta react react-dom nextein@beta

```
## Create your first page and post

For **Next.js** projects we need to follow a certain structure. Before jumping into the components, we need to create a `next.config.js` file. Here you will be able to place any **Next.js** configuration.

```js
const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  // place your next config in here!
})
```

**Nextein** relies on **Next.js** and the folder structure is exactly the same. Let's start creating a `/pages` folder with an `index.js` with the following content:

```jsx
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map((post, index) => {
        <h1>{post.data.title}</h1>
        <Content {...post} />
      })
    }
    </main>
  )
})

```

This is our first `Page` component. In order to work, we are passing a list of `posts` to be rendered. These posts will be read from the `/posts` folder. Let's start by creating a simple post file `my-post.md` with the following content:

```md
---
title: My First Post
---

This is the content of the first post. Hello there! 
```

Now taht we have our `/pages/index.js` component, the `/posts/my-post.md` content and the root config `next.config.js`, we are ready to start our dev server rigth away. To do so, we need to edit the `package.json` file and add the following to the `scripts` section:

```json
{
  "scripts": {
    "dev": "nextein"
  }
}

```
Ok, finally we can start our dev server running the following command:

```bash
npm run dev
```

This will start a server available on [http://localhost:3000](http://localhost:3000).

