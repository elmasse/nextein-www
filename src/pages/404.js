import Link from 'nextein/link'

import Nextein from '../components/icons/nextein'
import Footer from '../components/footer'

export default function NotFound () {
  return (
    <div className='max-w-5xl h-screen mx-auto text-gray-500'>
      <hgroup className='my-40 flex items-center justify-center space-x-8'>
        <Link href='/'><a><Nextein className='w-32 fill-current' alt='home' /></a></Link>
        <h1 className='text-9xl'>404</h1>
        <h2 className='text-6xl'>Not Found.</h2>
      </hgroup>
      <section className='prose prose-lg my-20'>
        <p>
          We have been moving things around. Sorry about that, this page is not here anymore.
          Maybe you are looking for:
        </p>
        
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/guides'><a>Guides</a></Link></li>
          <li><Link href='/docs'><a>Docs</a></Link></li>
          <li><Link href='/404'><a>This Page :)</a></Link></li>
        </ul>
      </section>
      <Footer />
    </div>
  )
}
