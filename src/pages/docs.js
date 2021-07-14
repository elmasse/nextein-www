

import React, { Component } from  'react'

import { withPostsFilterBy } from 'nextein/posts'
import Content from 'nextein/content'

import site from '../site.json'
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

class Docs extends Component {
  static getInitialProps({ query: { version } }) {
    return {
      version
    }
  }
  render() {
    const { post: current, posts, version } = this.props
    posts.sort(byOrderSorter)

    const post = current || posts[0]
    // Little hack to make title to break on / but without showing spaces.
    const title = post.data.title.split('/').reduce((prev, curr, idx) => {
      if (idx > 0) {
        prev.push(<span key={idx} className="title-separator"> / </span>)
      }
      prev.push(curr);
      return prev;
    }, [])

    const headTitle = `${name} | Docs | ${post.data.title}`
    const fullUrl = `${url}${post.data.url}`

    return (
      <>
        <Meta title={headTitle} url={fullUrl} description={description}/>
        <div className='max-w-7xl mx-auto my-0 space-y-16'>
          <header>
            <Navigation/>
          </header>
          <div className='flex'>
            <article className='lg:mr-12 flex-1 w-1'>{/* // width 1px to make the article to not expand */}
              <header className='flex flex-col justify-between align-baseline mt-20 mb-40 space-y-10 px-4'>
                <div className='flex items-center space-x-4'>
                  <span className='text-gray-600 text-2xl font-heading font-medium uppercase '>Docs</span>
                  <VersionSelector section='docs' versions={versions} selected={version} />
                </div>
                <h1 className='font-heading text-7xl font-bold tracking-tight'>{title}</h1>
              </header>
              <Content
                className='prose prose-lg  lg:prose-xl mb-32 px-4'
                {...post}
                renderers={{
                  a: Anchor,
                  blockquote: Blocks
                }}
              />
              <Footer>
                <Pagination posts={posts} post={post} section='guides'/>                
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
        </div>
      </>
    )
  }
}

export default withPostsFilterBy(inVersionedCategory('docs'))(Docs)
