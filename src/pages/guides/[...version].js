
import { getDataFilterBy, getPost } from 'nextein/fetcher'
import { inCategory } from 'nextein/filters'
import Content from 'nextein/content'

import site from '../../site.json'
import Meta from '../../components/meta'
import Navigation from '../../components/navigation'
import Sidebar from '../../components/sidebar'
import ScrollSync from '../../components/scrollsync'
import Footer from '../../components/footer'
import Pagination from '../../components/pagination'
import VersionSelector from '../../components/version-selector'
// Custom renderers
import Anchor from '../../components/anchor'
import Blocks from '../../components/blocks'

const { name, url, description, versions } = site
const byOrderSorter = (a, b) => a.data.order - b.data.order

export async function getStaticPaths() {
  const paths = []

  const data = await getDataFilterBy(inCategory(`guides/*`))

 Object.keys(versions).filter(k => k !== 'latest').map(version => {
    paths.push(
      { params: { version: [version] } },
      ...data.filter(inCategory(`guides/${version}/*`)).map(({ slug }) => {
        return {
          params: { version: [version, slug] },
        }
      })
    )
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { version: versionParam } = {} }) {
  const [version, slug] = versionParam
  const category = `guides/${version}`

  const posts = (await getDataFilterBy(inCategory(category, { includeSubCategories: true }))).map(data => ({ data }))
  posts.sort(byOrderSorter)

  const post = await getPost({ slug: slug || posts[0].data.slug, category })

  return {
    props: {
      posts, post, version
    }
  }
}

export default function Guides({ posts, post, version }) {
  const headTitle = `${name} | Guides | ${post.data.title}`
  const fullUrl = `${url}${post.data.url}` // TODO

  return (
    <>
      <Meta title={headTitle} url={fullUrl} description={description} />
      <div className='max-w-7xl mx-auto my-0 space-y-16'>
        <header>
          <Navigation />
        </header>
        <div className='flex'>
          <article className='lg:mr-12 flex-1 w-1'>{/* // width 1px to make the article to not expand */}
            <header className='flex flex-col justify-between align-baseline mt-20 mb-40 space-y-10 px-4'>
              <div className='flex items-center space-x-4'>
                <span className='text-gray-600 text-2xl font-heading font-medium uppercase '>Guides</span>
                <VersionSelector section='guides' versions={versions} selected={version} />
              </div>
              <h1 className='font-heading text-7xl font-bold tracking-tight'>{post.data.title}</h1>
            </header>
            <Content
              className='prose prose-lg lg:prose-xl mb-32 px-4'
              {...post}
              renderers={{
                a: Anchor,
                blockquote: Blocks
              }}
            />
            <Footer>
              <Pagination posts={posts} post={post} section='guides' />
            </Footer>
          </article>
          <aside className='hidden md:block -mt-32 pt-6 flex-none w-80 bg-gray-100'>
            <ScrollSync post={post}>
              {({ activeTarget }) => (
                <Sidebar current={post} activeTarget={activeTarget} posts={posts} section='guides' />
              )}
            </ScrollSync>
          </aside>
        </div>
      </div>
    </>
  )
}
