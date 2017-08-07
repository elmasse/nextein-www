---
title: Adding Analytics
order: 4
page: guide
---

One of the most common scenarios for websites or blogs is to add _Analytics_ to monitor traffic. In this guide we will use `react-ga` to configure a _Google Analytics_ account.

There are several ways to do this with `Next` and `Nextein`. We could follow the  [Next.js with react-ga example ](https://github.com/zeit/next.js/tree/v3-beta/examples/with-react-ga) which basically defines a common `Layout` component that will send a `pageView` when `componentDidMount` lifecycle gets executed.

But, in this guide we will cover an alternative implementation using a High Order Component.

## Setting up react-ga

As mentioned before, we will use `react-ga` to send the page views and events to our Analytics account. First we need to install `react-ga`:

```bash
npm i -S react-ga
```

Now we are able to create our `analytics` component. Let's create a file named `components/analytics.js` with the following content:

```jsx
import React, { Component } from 'react'
import { initialize, set, pageview } from 'react-ga'

export default (Wrapped) => {
  return class extends Component {
    
    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}

      return wrapped;
    }

    componentDidMount() {
      if (!window._ga_initialized) {
        initialize('UA-xxxxxxxxx-1`')  // ADD YOUR TRACKING ID
        window._ga_initialized = true;
      }

      const location = window.location.pathname + window.location.search
      
      set({page: location})
      pageview(location)

    }

    render() {      
      return <Wrapped {...this.props} />
    }
  }
}

```

You should have created a [_Google Analytics Account_](https://analytics.google.com/analytics/web) for your site. Copy the Tracking ID (usually with the form of `UA-xxxxxxxxx-1`) and replace it in the code.

The `analytics` component exports an HOC. It's important to notice a few things in here. First of all, we need to make sure our Wrapped component's _getInitialProps_ gets called. Since this HOC will wrap a _Page component_ it is necessary to _hoist_ the static method.  

This component will call the pageView method when our page is mounted. As it was done in the _Next.js_ example, we will send the `pageView` in the `componentDidMount`.

## Using the Analytic HOC

So we are ready to wrap any Page component with our analytics HOC. Let's revisit the `pages/index.js` from previous examples:

```jsx
import React from 'react'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
// #1
import withAnalytics from '../components/analytics'

// #2
const Index = withPosts(({ posts }) => {
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

// #3
export default withAnalytics(Index)

```

We have changed our example a little bit. First, we need to import our `analytics` component (\#1). Then, we assign our Page to an `Index` variable (\#2) just for the sake of clarity. And finally, we export the `Index` page wrapped with our analytics HOC (\#3).

That's pretty much all you need to get your analytics setup.
