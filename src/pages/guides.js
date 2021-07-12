
import React, { Component } from  'react'

import { withPostsFilterBy } from 'nextein/posts'
import Content from 'nextein/content'

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
      <>
        <Meta title={headTitle} url={fullUrl} description={description}/>
        <div className='max-w-7xl mx-auto my-0 space-y-16'>
          <header>
            <Navigation/>
          </header>
          <div className='flex'>
            <article className='mr-12 flex-1 w-1'>{/* // width 1px to make the article to not expand */}
              <header className='flex flex-col justify-between align-baseline my-32 space-y-10'>
                <div className='flex items-center space-x-4'>
                  <span className='text-gray-600 text-2xl font-heading font-medium uppercase '>Guides</span>
                  <VersionSelector section='guides' versions={versions} selected={version} />
                </div>
                <h1 className='font-heading text-7xl font-bold tracking-tight'>{post.data.title}</h1>
              </header>
              <Content
                className='prose prose-xl max-w-full mb-32'
                {...post}
                renderers={{
                  a: Anchor,
                  blockquote: Blocks
                }}
              />
              <Footer>
                <Pagination posts={posts} post={post} section='guides'/>                
                 <div className='flex md:hidden'>
                  <Sidebar current={post} posts={posts} toc={false} />
                 </div>
              </Footer>
            </article>
            <aside className='hidden md:block -mt-32 pt-6 flex-none w-80 bg-gray-100'>
              <ScrollSync post={post}>
                {({ activeTarget }) => (
                  <Sidebar current={post} activeTarget={activeTarget} posts={posts} />
                )}
              </ScrollSync>
            </aside>
          </div>
          {/* <style jsx>{`

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

          `}</style> */}
        </div>
      </>
    )
  }
}

export default withPostsFilterBy(inVersionedCategory('guides'))(Guides)
