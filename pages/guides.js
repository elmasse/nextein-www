
import React, { Component } from  'react'
import compose from 'lodash.flowright'
import Head from 'next/head'

import withPost, { Content } from 'nextein/post'
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'
import ScrollSync from '../components/scrollsync'
import Footer from '../components/footer'
import { Anchor, Code, Blockquote, Heading1, Heading2, Heading3, Heading4, Img, Paragraph, Pre } from '../components/elements'

class Guides extends Component {
  render() {
    const { post: current, posts } = this.props
    const post = current || posts[0]

    return (
      <React.Fragment>
        <Head>
          <title>Nextein | Guides | {post.data.title}</title>
        </Head>
        <div className="container">
          <header>
            <Navigation/>
          </header>
          <div className="rows">
            <article>
              <header>
                <div className="category">{post.data.category}</div>
                <Heading1>{post.data.title}</Heading1>
              </header>
              <Content
                className="content columns"
                {...post}
                renderers={{
                  a: Anchor,
                  code: Code,
                  blockquote: Blockquote,
                  h2: Heading2,
                  h3: Heading3,
                  h4: Heading4,
                  img: Img,
                  p: Paragraph,
                  pre: Pre
                }}
              />
              <Footer />
            </article>
            <aside>
              <ScrollSync post={post}>
                {({ activeTarget }) => (
                  <Sidebar current={post} activeTarget={activeTarget} posts={posts} width={`var(--sidebar-width)`}/>
                )}
              </ScrollSync>
            </aside>
          </div>
          <style jsx>{`
            --sidebar-width: calc(var(--spacing) * 38);

            article {
              flex: 1;
              width: 1px; /* width to get the Article to not expand */
              padding: 0 calc(var(--spacing) * 4);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: stretch;
            }

            article header {
              display: flex;
              flex-direction: column;
              flex-grow: 0;
              flex-shrink: 1;
              flex-basis: auto;
              justify-content: space-between;
              align-items: baseline;
              margin: calc(var(--spacing) * 10) 0;
            }

            article header .category {
              font-family: var(--font-family-heading);
              font-size: 2em;
              text-transform: uppercase;
              color: var(--grey600);
              margin-bottom: calc(var(--spacing) * -4);
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
