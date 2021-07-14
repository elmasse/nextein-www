
import { withPostsFilterBy, inCategory } from 'nextein/posts'

import site from '../site.json'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Contributors from '../components/contributors'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'


function Index ({ posts }) {
  const [contributors] = posts.filter(inCategory('contributors'))
  const snippets = posts.filter(inCategory('snippets'))
  const { name, url, description } = site

  return (
    <div className='bg-gradient-radial from-gray-700 to-gray-900'>
      <Meta title={name} url={url} description={description}/>
      <div className='max-w-7xl mx-auto my-0 space-y-16'>
        <header>
          <Navigation />
          <Hero />
        </header>
        <Intro snippets={snippets} />
        <Contributors contributors={contributors} />
        <Sponsors />
        <Footer />
      </div>
    </div>
  )  
}

export default withPostsFilterBy(
  (post) => inCategory('contributors')(post) || inCategory('snippets')(post)
)(Index)
