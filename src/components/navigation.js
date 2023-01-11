
import Link from 'next/link'

import Github from './icons/github'
import Nextein from './icons/nextein'
import Npm from './icons/npm'
import Twitter from './icons/twitter'

export default function Navigation () {
  return (
    <nav className='mb-4 py-4 px-6'>
      <ul className='flex flex-row items-center space-x-6 text-sm font-heading font-semibold uppercase text-gray-500'>
        <li><Link href='/'><Nextein className='w-8 fill-current' alt='home' /></Link></li>
        <li><Link href='/guides'>Guides</Link></li>
        <li><Link href='/docs'>Docs</Link></li>
        <li><Link
          href='https://github.com/elmasse/nextein'
          target='_blank'
          rel='noopener noreferrer'>

          <Github className='h-6 fill-current' alt='Github' />

        </Link></li>
        <li><Link
          href='https://www.npmjs.com/package/nextein'
          target='_blank'
          rel='noopener noreferrer'>

          <Npm className='h-6 fill-current' alt='npm' />

        </Link></li>
        <li><Link
          href='https://twitter.com/nexteinjs'
          target='_blank'
          rel='noopener noreferrer'>

          <Twitter className='h-6 fill-current' alt='Twitter' />

        </Link></li>
      </ul>
    </nav>
  );
}
