---
title: Upgrading to v4
order: 0
---

This is a reference for upgrading your nextein site from v3 to v4. The content provided here covers as much as you need to get updated with the latest changes.

## Why Should I Upgrade?

The main reason is to get the benefits of an improved version of nextein and also reducing the footprint of generated content to its bare minimum leveraging all the power to nextjs features.

## What's Changed?

A few things have changed in the latest version. The main changes are:

- Removed `nextein` binary. Use the `next` binary instead.
- Removed HOCs. No more wrapping classes to your pages. Use the `nextein/fetcher` to populate `getStaticProps` and `getStaticPaths` when needed.
- Removed `nextein/link`. Use the `next/link`. Since we have no generated urls, now we will use the Link component from next making the nextein footprint to a bare minimum.
- No need to declare any `exportPathMaps`. Since nextein now depends on the `getStaticProps` and `getStaticPaths` there is no need to declare anything into **exportPathMap** configuration. 

Let's review each of them, case by case. We will use the [nextein-starter with v3](https://github.com/elmasse/nextein-starter/tree/3af321f2a85179c81532aafa1596aea63784d7de) code in the examples.

### Removed nextein binary

This change requires to change all references to `nextein` binary and use `next` instead. This is often used only in the `package.json` file.

```diff
"scripts": {
-    "dev": "nextein",
-    "export": "nextein build && nextein export",
+    "dev": "next",
+    "export": "next build && next export",
  "build": "npm run export"
},
```

### Removed HOCs (withPosts, withPost, ...)

This is perhaps the most common change you should perform. The removal of all HOCs was a drastical decision but it helped to reduce to a bare minimum the footprint of generated data by **nextein**.

These changes will get your code aligned with features and principles from **next.js** and supporting things like SSG, dynamic routing and so on.

#### Remove withPosts and withPostsFilterBy

This change requires to use the `fetcher` and define a `getStaticProps` method in your page.

The *fetcher* methods (`getPosts` and `getPostsFilterBy`) replace the HOCs functionality to retrieve the posts entries.

```diff
-import React, { Component } from 'react'
-import withPosts from 'nextein/posts'
-import { Content } from 'nextein/post'

+import { getPosts } from 'nextein/fetcher'
+import Content from 'nextein/content'

-class Index extends Component {
+export async function getStaticProps () {
+  const posts = await getPosts()
+  return { 
+    props: { 
+      posts
+    }
+  }
+}

-  render() {
-    const { posts } = this.props
-    return (
+export default function Index ({ posts }) {
+  return (


-export default withPosts(Index)
```

Here we changed from a Component and converted the page into a functional component. We also added the `getStaticProps` which returns the `posts` array into the props for our Index page.

The exact same steps apply when you want to change a `withPostsFilterBy`. We will use `getPostsFilterBy` instead of **getPosts** in the **getStaticProps** method `

```diff
-import { withPostsFilterBy } from 'nextein/posts'
+import { getPostsFilterBy } from 'nextein/fetcher

import { inCategory } from 'nextein/filters'

-class Index extends Component {
+export async function getStaticProps () {
+  const posts = await getPostsFilterBy(inCategory('blog'))
+  return { 
+    props: { 
+      posts
+    }
+  }
+}

-  render() {
-    const { posts } = this.props
-    return (
+export default function Index ({ posts }) {
+  return (


-export default withPostsFilterBy(inCategory('blog'))(Index)

```

#### Removed HOCs withPost

This case is a bit more complex. We need to rename our old `blog.js` file to `[name].js` converting the page in a dynamic route. Note that this means that we no longer need `exportPathMaps` nor define a `page` in our posts elements.

Adding a dynamic route requires to fullfil the `getStaticPaths` methods to return all possible states for our paths. To do so, the **fetcher** provides a `getData` method that only retrieves all entries data so you can use it to generate the desired urls.

```diff
// renamed post.js -> [name].js
-import React from 'react'
-import withPost, { Content } from 'nextein/post'

+import { getData, getPost }  from 'nextein/fetcher'
+import Content from 'nextein/content'

-export default withPost(({ post }) => {
+export async function getStaticPaths () {
+  const data = await getData()
+  return {
+    paths: data.map(({ name }) => ({ params: { name } })),
+    fallback: false
+  }
+}

+export async function getStaticProps ({ params }) {
+  const post = await getPost(params)  
+  return { props: { post } }
+}

+export default function Post ({ post }) {

+}
```

Notice here that we use the **params** generated in **getStaticPaths** and pass them to `getPost`. In this case, the data for posts, contains a `name` that identifies the entry so we can univoquely return the post in the **getStaticProps** method. 

### Remove nextein/link

The Link component provided by nextein was intended to be a shortcut to use the generated url as a link params. Since now we rely on dynamic routing, generating url automatically is no longer possible.

We need to use the native `next/link` instead and provide the `href` and `as` parameters as needed.

For dynamic routing components we need to provide both params:

```diff
-import Link from 'nextein/link'
+import Link from 'next/link'

-<Link {...post}><a>{post.data.title}</a></Link>
+<Link href={'/[name]'}  as={`/${post.data.name}`}><a>{post.data.title}</a></Link>
```

### Final Words

These changes aim for a better understanding and usage of `nextein` and to better support **nextjs** features. The decision was made to get a better alignment with those in  mind. Also reducing drastically the footprint of adding **nextein** to your project.

Thanks for your patience and for choosing nextein!

If you have any issues please feel free to talk to us in our twitter account [@NexteinJS](https://twitter.com/nexteinjs) or file an issue in our [github repo](https://github.com/elmasse/nextein).