---
title: nextein/config
page: docs
order: 1
---

## withNextein

A wrapper configuration function to be applied into the `next.config.js`. It provides a way to add your own `next.js` config along with `nextein` internal next.js config.


```js

const { withNextein } = require('nextein/config')

module.exports = withNextein({
  // Your own next.js config here
})

```

> `next.config.js` is required to get Nextein working. This is the minimal configuration required.

## Nextein Configuration

Nextein configuration can be passed in the Next.js configuration object wrapped into `nextein`.

```js
const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {

  },
  // Your own next.js config here
})

```

The `nextein` configuration can be an object or a function that retrieves an object with the following schema.

- `plugins`: Array of nextein plugins. Each plugin can be defined as an object or array


> Example: Using an object
>
>```js
>module.exports = withNextein({
>  nextein: {
>
>  },
>  // Your own next.js config here
>})
>```
>
> Example: Using a function
>
>```js
>module.exports = withNextein({
>  nextein: function(config) {
>    // add or modify the default config here.
>    return config
>  },
>  // Your own next.js config here
>})
>```

### Plugins

Each plugin can be defined as an Object or as an Array:

```js
{
  nextein: {
    plugin: [
      ['plugin-name', { value: true }],
      {
        name: 'my-plugin',
        options: {
          value: true
        }
      }
    ]
  }
}

```

### Override the Default Plugin

Nextein default plugin **'nextein-markdown-plugin'** can be overriden using the nextein function form for configuration:

```js
  nextein: config => {
    config.plugins = [
      {
        name: 'nextein-plugin-markdown', 
        options: {
          entriesDir: ['entries'],          
          rehype: ['rehype-slug', 'rehype-autolink-headings']
        }
      }
    ]
    return config
  },

```

In the example above we changed the default dir for posts (`post`) to `entries`. We can also add plugins for `rehype` and `remark`.
