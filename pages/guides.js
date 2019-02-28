
import React, { Component } from  'react'
import compose from 'lodash.flowright'
import Head from 'next/head'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'
import { Blockquote, Heading1, Heading2, Heading3, Heading4, Paragraph, Pre } from '../components/elements'

class Guides extends Component {
  render() {
    const { post: current, posts } = this.props
    const post = current || posts[0]

    return (
      <React.Fragment>
        <Head>
          <title>Nextein | Guides | {post.data.title}</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css" />
        </Head>
        <div className="container">
          <header>
            <Navigation/>
          </header>
          <div className="rows">
            <article>
              <header>
                <Heading1>{post.data.title}</Heading1>
              </header>
              <Content
                className="content columns"
                {...post}
                renderers={{
                  blockquote: Blockquote,
                  h2: Heading2,
                  h3: Heading3,
                  h4: Heading4,
                  p: Paragraph,
                  pre: Pre
                }}
              />
              <footer></footer>
            </article>
            <aside><Sidebar current={post} posts={posts} fixed width={`var(--sidebar-width)`}/></aside>
          </div>
          <footer ></footer>
          <style jsx>{`
            --sidebar-width: calc(var(--spacing) * 38);

            .container > * {
              margin: 0 auto;
              max-width: 64em;
            }

            article {
              flex: 1;
              width: 1px; /* width to get the Article to not expand */
              padding-right: calc(var(--spacing) * 3);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: stretch;
            }

            article header {
              display: flex;
              flex-direction: row;
              flex-grow: 0;
              flex-shrink: 1;
              flex-basis: auto;
              justify-content: space-between;
              align-items: baseline;
              margin: calc(var(--spacing) * 12) 0;
            }

            article header h1 {
              font-size: 5em;
            }

            aside {
              margin-top: calc(var(--spacing) * -11);
              padding-top: calc(var(--spacing) * 3);
              width: var(--sidebar-width);
              border-left: 1px solid #eee;
              overflow-y: auto;
            }
          `}</style>
        </div>
      </React.Fragment>
    )
  }
}


export default compose(
  withPost,
  withPostsFilterBy(inCategory('guides', { includeSubCategories: true }))
)(Guides)
