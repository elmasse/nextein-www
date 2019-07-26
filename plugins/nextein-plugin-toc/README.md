# nextein-plugin-toc

Generates a Table Of Content based on the markdown file structure (Headings1..6). The resulting list is availble in the `post.data.toc`




## Pre-Requisites

In order to get a TOC with `href` values you can use `rehype-autolink-headings` plugin in the `nextein-plugin-markdown` configuration.

```js

module.exports = withNextein({
nextein: {
    plugins: [
      {
        name: 'nextein-plugin-markdown', 
        options: {
          rehype: ['rehype-autolink-headings']
        }
      },
      {
        name: './plugins/nextein-plugin-toc',
        options: {
          categories: ['guides', 'docs']
        }
      }
    ]
  }  
})

```
