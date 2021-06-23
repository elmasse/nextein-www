
import React, { Component, Fragment } from  'react'

import { withPostsFilterBy } from 'nextein/posts'
import Content from 'nextein/content'

import { Heading1 } from 'elems'
import renderers from 'elems/renderers'

import  site from '../site.json'
import { inVersionedCategory } from '../versioned'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Sidebar from '../components/sidebar'
import ScrollSync from '../components/scrollsync'
import Footer from '../components/footer'
import Pagination from '../components/pagination'
import VersionSelector from '../components/version-selector'
// Custom renderers
import Anchor from '../components/anchor'
import Blocks from '../components/blocks'

const { name, url, description, versions } = site
const byOrderSorter = (a, b) => a.data.order - b.data.order

class Guides extends Component {
  static getInitialProps({ query: { version } }) {
    return { version }
  }

  render() {
    const { post: current, posts, version } = this.props
    posts.sort(byOrderSorter)

    const post = current || posts[0]
    const headTitle = `${name} | Guides | ${post.data.title}`
    const fullUrl = `${url}${post.data.url}`
    return (
      <Fragment>
        <Meta title={headTitle} url={fullUrl} description={description}/>
        <div className="container">
          <header>
            <Navigation/>
          </header>
          <div className="main rows">
            <article>
              <header>
                <div className="category">
                  Guides<VersionSelector section="guides" versions={versions} selected={version} />
                </div>
                <Heading1>{post.data.title}</Heading1>
              </header>
              <Content
                className="content columns"
                {...post}
                renderers={{
                  ...renderers,
                  a: Anchor,
                  blockquote: Blocks
                }}
              />
              <Footer>
                 <Pagination posts={posts} post={post} section="guides"/>
                 <div className="bottom-post-nav">
                  <Sidebar current={post} posts={posts} toc={false} />
                 </div>
              </Footer>
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
            --code-background-color: var(--grey100);

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
              display: flex;
              font-family: var(--font-family-heading);
              font-size: 2em;
              text-transform: uppercase;
              color: var(--grey600);
              margin-bottom: calc(var(--spacing) * -4);
            }

            article header .category > :global(div) {
              display: inline-block;
              padding-left: calc(var(--spacing) * 2);
              font-size: .9rem;
            }

            aside {
              margin-top: calc(var(--spacing) * -11);
              padding-top: calc(var(--spacing) * 3);
              width: var(--sidebar-width);
              border-left: 1px solid #eee;
              overflow-y: auto;
            }

            .bottom-post-nav {
              display: none;
            }

            @media screen and (max-width: 1024px) {
              aside {
                display: none;
              }

              .bottom-post-nav {
                display: flex;
              }
            }

          `}</style>
        </div>
      </Fragment>
    )
  }
}

export default withPostsFilterBy(inVersionedCategory('guides'))(Guides)
