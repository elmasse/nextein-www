---
title: nextein/config
page: docs
order: 1
---

## withNextein

A wrapper configuration function to be declared into the `next.config.js` file.

```js

const { withNextein } = require('nextein/config')

module.exports = withNextein({
  // Your own next.js config here
})

```

>Tip
>
>The `next.config.js` is required to get Nextein working. 

## Nextein Configuration

Nextein configuration can be passed in the Next.js configuration object wrapped into `nextein`.

```js
const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {
    /* nextein configuration */
  },
  // Your own next.js config here
})

```

The `nextein` configuration can be either an object, or a function that returns an object:

```js

module.exports = withNextein({
  // Using a function
  nextein: function(config) {
    // add or modify the default config here.
    return config
  },


  // Your own next.js config here

})
```

### Plugin Configuration

The plugin configuration allows to:

- Configure multiple instances of a plugin.
- Override a defined configuration.
- Resolve fullname plugin with configured name as:
  - simplified: `source-fs`. 
  - fullname: `nextein-plugin-source-fs`.

#### Plugin Configuration Resolution

Configuration resolves to an Object with the form:
 
```js
{ 
  name: {String},
  id?: {String},
  options: {Object}
}
```

Accepted forms:

- Object: `{ name, id?, options }`
- String: `name-of-plugin` -> { name: 'name-of-plugin' },
- Array: [name, options] -> { name, options }

A plugin configuration is identified by an internal `id`. This *id* will be set by default to the plugin name if no `id` property is provided.
This allows to generate multiple instances of the same plugin if an`id` is provided or it can override a pre-configured plugin if not id provided.

```js
{
  name: 'nextein-plugin-x',
  options: {
    position: true,
    raw: false    
  }
},

// override previous definition
['nextein-plugin-x', { position: true, raw: true }], 

// Multiple instances
{
  name: 'source-fs',
  id: 'posts',
  options: {
    path: 'posts',
    includes: '**/*.md'
  }
},
{
  name: 'source-fs',  // resolve to nextein-plugin-source-fs
  id: 'images',
  options: {
    path: 'images'
  }
}
```

#### Default Settings

The following plugins are configured by default:

- `nextien-plugin-source-fs` (source)
- `nextein-pligin-markdown` (build, cleanup)
- `nextein-plugin-filter-unpublished` (filter)



