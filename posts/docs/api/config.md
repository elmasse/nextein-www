---
title: nextein/config
page: docs
order: 1
---

## config

A wrapper configuration function to be applied into the `next.config.js`. It provides a way to add your own `next.js` config along with `nextein` internal next.js config.

> next.config.js

```js

const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
    // Your own next.js config here
})

```
