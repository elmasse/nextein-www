---
title: nextein/config
page: docs
order: 1
---

## withNextein

A wrapper configuration function to be declared into the **next.config.js** file.

```js

const { withNextein } = require('nextein/config')

module.exports = withNextein({
  // Your own next.js config here
})

```

> Note
>
> The **withNextein**  wrapper is **required** to get Nextein working. 

## Nextein Configuration

Nextein is mostly based in plugins and it comes with batteries included. In case you need to add or change something, configuration can be passed as:

```js
const { withNextein } = require('nextein/config')

module.exports = withNextein({
  nextein: {
    /* nextein configuration */
  },
  // Your own next.js config here
})

```

The `nextein` configuration can be either an **object**, or a **function that returns an object**:

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
- String: `name-of-plugin` results in: `{ name: 'name-of-plugin' }`,
- Array: `[name, options]` results in `{ name, options }`

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

### Default Plugins

The following plugins are configured by default:

```js
['nextein-plugin-source-fs', { path: 'posts' }],
  'nextein-plugin-markdown',
  'nextein-plugin-filter-unpublished'
```

#### `nextien-plugin-source-fs`

The filesystem source plugin is configured to read entries from `./posts` folder.

#### `nextein-pligin-markdown`

The markdown plugin is configured to read `.md` files (based in markdown mime-type) and build the post entries.
It runs a *cleanup stage* to remove `position` and `raw` from each entry.

#### `nextein-plugin-filter-unpublished`

This plugin allows to set a `publish: false` in front-matter configuration to unpublish the post.

### Overriding Defaults

In order to override any of the default plugins configuration you can just set the values to adapt your needs. For instance, in case you want to modify the posts directory, you could override the **nextein-plugin-source-fs** configuration as follows: 

```js
module.exports = withNextein({
  nextein: {
    plugins: [
      ['nextein-plugin-source-fs', { path: 'entries' }]
    ]
  },

  // more config here....
})

```

If no **id** is defined in the plugin configuration, it will override a previous definition.

