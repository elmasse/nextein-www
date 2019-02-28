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
