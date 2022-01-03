
import { getPostsFilterBy } from 'nextein/fetcher'
import { inCategory } from 'nextein/filters'

import site from '../site.json'
import getContributors from '../contributors'

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
      snippets: await getPostsFilterBy(inCategory('snippets')),
      contributors: await getContributors()
    }
  }
}


export default function Index ({ snippets, contributors }) {
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
