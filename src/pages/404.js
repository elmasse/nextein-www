import Link from 'nextein/link'

import Nextein from '../components/icons/nextein'
import Footer from '../components/footer'

export default function NotFound () {
  return (
    <div className='bg-gradient-radial from-gray-700 to-gray-900'>
      <div className='max-w-5xl mx-auto text-gray-600 min-h-screen flex flex-col'>
        <hgroup className='my-40 flex flex-col md:flex-row items-center justify-center space-x-2 px-8'>
          <Link href='/'><a><Nextein contour className='w-56 fill-current filter drop-shadow-2xl z-10' alt='home' /></a></Link>
          <h1 className='text-6xl font-bold'>Page&nbsp;</h1>
          <h2 className='text-6xl tracking-tight font-bold text-gray-300'>Not Found.</h2>
        </hgroup>
        <section className='text-gray-300 my-20 flex-1 space-y-10 max-w-screen-md px-8'>
          <p className='text-2xl'>
            We have been moving things around.<br/>
            Sorry about that, this page is not here anymore. <br/>
          </p>
          <p className='text-2xl'>            
            Maybe you are looking for:
          </p>        
          <ul className='text-xl space-y-2 uppercase'>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/guides'><a>Guides</a></Link></li>
            <li><Link href='/docs'><a>Docs</a></Link></li>
            <li><Link href='/404'><a>This Page :)</a></Link></li>
          </ul>
        </section>
        <Footer />
      </div>
    </div>
  )
}
