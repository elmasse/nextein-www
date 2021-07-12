
import Link from 'nextein/link'

import Github from './icons/github'
import Nextein from './icons/nextein'
import Npm from './icons/npm'
import Twitter from './icons/twitter'

export default function Navigation () {
  return (
    <nav className='flex flex-row items-center font-heading mb-4 space-x-6 py-4 text-sm font-semibold uppercase text-gray-500'>
      <Link href='/'><a>
        <Nextein className='w-8 fill-current' alt='home' />
      </a></Link>
      <Link href='/guides'><a>Guides</a></Link>
      <Link href='/docs'><a>Docs</a></Link>
      <Link href='https://github.com/elmasse/nextein'>
        <a target='_blank' rel='noopener noreferrer'>
          <Github className='h-6 fill-current' alt='Github' />
        </a>
      </Link>
      <Link href='https://www.npmjs.com/package/nextein'>
        <a target='_blank' rel='noopener noreferrer'>
          <Npm className='h-6 fill-current' alt='npm' />
        </a>
      </Link>
      <Link href='https://twitter.com/nexteinjs'>
        <a target='_blank' rel='noopener noreferrer'>
          <Twitter className='h-6 fill-current' alt='Twitter' />
        </a>
      </Link>
      {/* <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          align-items: center;    
          min-height: 4em;
          margin-bottom: calc(var(--spacing) * 2);
          font-family: var(--font-family-heading);
        }

        nav > a {
          padding: 0 calc(var(--spacing) * 2);
          font-size: .885em;
        }

        nav > a, nav > a:visited {
          color: var(--grey500);
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
        }

        nav > a:hover {
          color: var(--grey600);
        }

        nav > a :global(svg) {
          fill: var(--grey500);
        }

        nav > a :global(svg:hover) {
          fill: var(--grey600);
        }
        
      `}</style>               */}
    </nav>
  )
}
