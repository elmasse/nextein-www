---
title: Getting Started
order: 1
page: guides
---

This post will guide you on how to get started with **Nextein**. 

## What are we building?

We are going to create a static site that contains:

- An index page to get our posts listed.
- A page to display each post.

## Prerequisites

You'll need to install **Node.js** if you don't have it installed already. (To get the latest Node.js version please visit the [official Node.js website](https://nodejs.org/en/download/))

This guide assumes you are familiar with Javascript/ES6, and Next.js. It is always good to keep the [Next.js site](https://nextjs.org) at hand for learning and documentation.

## Create an npm Project

The first step is to use **npm** to create a project in order to install all dependencies.

```bash
mkdir my-blog  && cd my-blog  && npm init -y
```
## Install Dependencies

For our first project we will need, at least, to install **Nextein**, **Next.js** and **React**. You can add more dependencies as you need them later.

```bash
npm install --save next react react-dom nextein
```
## Create Your First Page and Post

**Nextein** requires creating a `next.config.js` file. This configuration file uses a wrapper for Next.js configuration.

```js
const { withNextein } = require('nextein/config')

module.exports = withNextein({
  // place your next config in here!
})
```

Let's begin creating a `pages` folder with an `index.js` with this code:

```js
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map((post, index) => (        
        <article key={`post-${index}`}>
          <h1>{post.data.title}</h1>
          <Content {...post} />
        </article>
      ))
    }
    </main>
  )
})

```

This is our first `Page` component. The HOC (High Order Component) `withPosts` will be passing a list of `posts` to be rendered. These posts will be read from the `/posts` folder. Let's start by creating a simple post file `my-post.md` with the following content:

```md
---
title: My First Post
---

This is the content of the first post. Hello there! 
```

Now that we have our `pages/index.js` component, the `posts/my-post.md` content and the root config `next.config.js`, we are ready to start our dev server right away. To do so, we need to edit the `package.json` file and add the following to the `scripts` section:

```json
{
  "scripts": {
    "dev": "nextein"
  }
}

```
Finally we can start our dev server by running the following command:

```bash
npm run dev
```

This will start a server available on [localhost:3000](http://localhost:3000).

## Creating a Single Post Page

In the previous example the `pages/index.js` component rendered all files under the `posts` folder. Now, we are going to create a `Page` component to render only the post content.

Let's modify first the `index.js` to include a link for the post.

```js
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts(({ posts }) => {
  return (
    <main>
    {
      posts.map((post, index) => (        
        <article key={`post-${index}`}>
          <h1><a href={post.data.url}>{post.data.title}</a></h1>
          <Content {...post} />
        </article>
      ))
    }
    </main>
  )
})

```

The post url is generated automatically based on the file name and, if specified, the category with the form of `/{category}/{file-name}`.

As mentioned before, we need a component to render our post. The default configuration is having a file  `pages/post.js`. Let's create it with the following content:

```js
import React from  'react'
import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
  return (
    <main>
      <article>
        <h1>{post.data.title}</h1>
        <Content {...post} />
      </article>
    </main>
  )
})

```

The `withPost` HOC will pass the post's information to be rendered.

## Exporting the Static Content

Once we are ready with the development of our site, we can export the site to generate the static content. 

Modify the `package.json` to include the export script:
  
```json
{
  "scripts": {
    "dev": "nextein",
    "export": "nextein build && nextein export"
  }
}

```

Now we can run the export command using:

```bash
npm run export
```

This will generate an `out` folder wich will contain our static site. You can serve it using `serve`:


```bash
npx serve out
```

##### Note 

It might be worth to clean the cache folders that Next.js uses before runnning the `export` command in our local environment to make sure we are including only the production ready files.

```bash
rm -rf .next/
```




That's all you need to get started with **Nextein**. You can also check our [nextein starter](https://github.com/elmasse/nextein-starter) repository to get you up and running in seconds!

