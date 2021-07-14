
import Link from 'nextein/link'

import Github from './icons/github'
import Nextein from './icons/nextein'
import Npm from './icons/npm'
import Twitter from './icons/twitter'

export default function Navigation () {
  return (
    <nav className='mb-4 py-4 px-6'>
      <ul className='flex flex-row items-center space-x-6 text-sm font-heading font-semibold uppercase text-gray-500'>
        <li><Link href='/'><a><Nextein className='w-8 fill-current' alt='home' /></a></Link></li>
        <li><Link href='/guides'><a>Guides</a></Link></li>
        <li><Link href='/docs'><a>Docs</a></Link></li>
        <li><Link href='https://github.com/elmasse/nextein'>
          <a target='_blank' rel='noopener noreferrer'>
            <Github className='h-6 fill-current' alt='Github' />
          </a>
        </Link></li>
        <li><Link href='https://www.npmjs.com/package/nextein'>
          <a target='_blank' rel='noopener noreferrer'>
            <Npm className='h-6 fill-current' alt='npm' />
          </a>
        </Link></li>
        <li><Link href='https://twitter.com/nexteinjs'>
          <a target='_blank' rel='noopener noreferrer'>
            <Twitter className='h-6 fill-current' alt='Twitter' />
          </a>
        </Link></li>
      </ul>
    </nav>
  )
}
