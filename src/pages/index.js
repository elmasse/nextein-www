
import { getPostsFilterBy } from 'nextein/fetcher'
import { inCategory } from 'nextein/filters'

import site from '../site.json'
import Meta from '../components/meta'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Contributors from '../components/contributors'
import Sponsors from '../components/sponsors'
import Footer from '../components/footer'

export async function getStaticProps () {
  return {
    props: {
      contributors: await getPostsFilterBy(inCategory('contributors')),
      snippets: await getPostsFilterBy(inCategory('snippets'))
    }
  }
}


export default function Index ({ snippets, contributors }) {
  const { name, url, description } = site
console.log(contributors)
  return (
    <div className='bg-gradient-radial from-gray-700 to-gray-900'>
      <Meta title={name} url={url} description={description}/>
      <div className='max-w-7xl mx-auto my-0 space-y-16'>
        <header>
          <Navigation />
          <Hero />
        </header>
        <Intro snippets={snippets} />
        <Contributors contributors={contributors[0].data.contributors} />
        <Sponsors />
        <Footer />
      </div>
    </div>
  )  
}
