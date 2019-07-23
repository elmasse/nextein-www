---
title: Build & Deploy with Now
order: 5.1
page: guides
published: true
---

In an [previous guide](/guides/05-deploying-travis-now) we have seen how to do a deploy using TravisCI and now v1. In this post we will cover how to build and deploy your **nextein** site using _now v2_.


## Add a Configuration File and Set a Builder

Add a file named `now.json` to your repository with the following content:

```js
{
  "version": 2,
  "builds": [
    { 
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "out" }
    }
  ]
}
```

This configuration will use the `@now/static-build` builder and set the `dist` directory to the `out` folder.

In order to make this work in now v2 we need to add an extra script to our `package.json` and name it `now-build`:

```js
  "scripts": {
    "dev": "nextein",
    "export": "nextein build && nextein export",
    "now-build": "npm run export"
  }
```

The `now-build` will be called by now when executing the given builder. Our script will execute the `export` task wich just builds and exports the site.


## Deploy with now

Once we setup and configured our `now.json` we can use the `now` CLI to manually trigger the build and deploy process:

```bash
$ now
```

## Automatize your Build & Deployment with Now for Github

You can run the build and deploy process entirely from `now`. In the previous post about deployment we have used TravisCI for this task. With the `now` v2 platform this is not needed anymore if you deploy to `now`. 
Enable the **Now for Github** and the process will be completely automated.

Check the docs for [Now for Github](https://zeit.co/docs/v2/integrations/now-for-github)

> Notice that for `Github Pages` you'll require the TravisCI configuration.

