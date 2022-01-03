---
title: Build & Deploy with Vercel
order: 5
---

In this post we will cover how to build and deploy your **nextein** site using Vercel.

## Add a Configuration File and Set a Builder

Add a file named `vercel.json` to your repository with the following content:

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

In order to make this work in Vercel we need to add an extra script to our `package.json` and name it `build`:

```js
  "scripts": {
    "dev": "nextein",
    "export": "nextein build && nextein export",
    "build": "npm run export"
  }
```

The `build` will be called by Vercel when executing the given builder. Our script will execute the `export` task wich just builds and exports the site.


## Deploy with Vercel

Once we setup and configured our `vercel.json` we can use the `vercel` CLI to manually trigger the build and deploy process:

```bash
$ vercel
```

## Automatize your Build & Deployment with Now for Github

You can run the build and deploy process entirely from Vercel. Enable the **Vercel for Github** and the process will be completely automated.

Check the docs for [Vercel for Github](https://vercel.com/docs/git-integrations/vercel-for-github)
